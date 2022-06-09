import {
  KlippyLog,
  KlippyWorkerMessages,
  KlippyWorkerRequests,
} from "../types";
import { parseKlippyLog } from "../utils";

async function parseFiles(files: FileList): Promise<KlippyLog> {
  const fileContents = (
    await Promise.all(
      Array.from(files).map(
        (file) =>
          new Promise<string>(function (resolve, reject) {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsText(file);
          })
      )
    )
  ).join("\n");

  return parseKlippyLog(fileContents);
}

async function handleMessage(
  message: KlippyWorkerRequests
): Promise<null | KlippyWorkerMessages> {
  switch (message.type) {
    case "parseFiles":
      return {
        type: "parseFiles",
        klippyLog: await parseFiles(message.data),
      };
  }
}

globalThis.postMessage({ type: "ready" });
globalThis.addEventListener(
  "message",
  (e: MessageEvent<KlippyWorkerRequests>) =>
    handleMessage(e.data).then((r) => r && globalThis.postMessage(r))
);
