import { KlippyLog } from "./types";
import { parseKlippyLog } from "./utils";

type KlippyWorkerRequest =
  | { type: "log"; data: any }
  | { type: "echo"; data: any }
  | { type: "parseFiles"; data: FileList };

type KlippyWorkerResponses =
  | { type: "echo"; data: any }
  | { type: "parseFiles"; data: KlippyLog };

async function parseFiles(files: FileList): Promise<KlippyLog> {
  const fileContents = await Promise.all(
    Array.from(files).map(
      (file) =>
        new Promise<string>(function (resolve, reject) {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsText(file);
        })
    )
  );

  return parseKlippyLog(fileContents.join("\n"));
}

async function handleMessage(
  message: KlippyWorkerRequest
): Promise<null | KlippyWorkerResponses> {
  switch (message.type) {
    case "log":
      console.log(globalThis, "log", message.data);
      return;

    case "parseFiles":
      return {
        type: "parseFiles",
        data: await parseFiles(message.data),
      };

    case "echo":
      return { type: "echo", data: message.data };
  }
}

globalThis.postMessage({ type: "ready" });
globalThis.addEventListener("message", (e: MessageEvent<KlippyWorkerRequest>) =>
  handleMessage(e.data).then((r) => r && globalThis.postMessage(r))
);
