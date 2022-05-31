import { useRef, useState, useCallback, useEffect } from "preact/hooks";
import { Stats, KlippyLog } from "./types";
import TempGraph from "./TempGraph";
import { parseKlippyLog } from "./utils";

enum Tab {
  Config,
  TempGraph,
  Log,
  Stats,
}

const worker = new Worker(new URL("./worker.ts", import.meta.url), {
  name: "klippyWorker",
  type: "module",
});

export default function App(props: any) {
  const logFile = useRef<HTMLInputElement>();
  const [klippyLog, setKlippyLog] = useState<KlippyLog>();
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.TempGraph);

  useEffect(() => {
    function handleParseFiles({ data }: MessageEvent) {
      console.log("got message", data);
      if (data.type !== "parseFiles") return;

      console.log("Parsed in web qworker");
      setKlippyLog(data.data as KlippyLog);
    }

    worker.addEventListener("message", handleParseFiles);
    return () => worker.removeEventListener("message", handleParseFiles);
  });

  const handleFileInput = useCallback(
    (evt: InputEvent) => {
      if (logFile.current.files.length === 0) return;

      worker.postMessage({
        type: "parseFiles",
        data: logFile.current.files,
      });
    },
    [logFile, setKlippyLog]
  );

  const downloadConfig = useCallback(() => {
    const blob = new Blob([klippyLog.config], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "printer.cfg";
    a.click();
  }, [klippyLog]);

  return (
    <div>
      <h3>Klippy Analyzer</h3>

      <div>
        <input
          type="file"
          ref={logFile}
          onInput={handleFileInput}
          multiple={true}
        />

        {klippyLog && (
          <>
            <button onClick={() => setCurrentTab(Tab.Config)}>Config</button>
            <button onClick={() => setCurrentTab(Tab.TempGraph)}>
              Temp Graph
            </button>
            <button onClick={() => setCurrentTab(Tab.Log)}>Log</button>
            <button onClick={() => setCurrentTab(Tab.Stats)}>Stats</button>
          </>
        )}
      </div>

      {klippyLog && (
        <article>
          <section style={{ display: currentTab === Tab.Config ? "" : "none" }}>
            <h4>
              Full Printer Config{" "}
              <button onClick={downloadConfig}>[download]</button>
            </h4>
            <pre>{klippyLog.config}</pre>
          </section>
          <section
            style={{ display: currentTab === Tab.TempGraph ? "" : "none" }}
          >
            <h4>Temps over time</h4>
            <TempGraph stats={klippyLog.stats} />
          </section>
          <section style={{ display: currentTab === Tab.Log ? "" : "none" }}>
            <h4>Raw Log</h4>
            <pre>{klippyLog.raw}</pre>
          </section>
          <section style={{ display: currentTab === Tab.Stats ? "" : "none" }}>
            <h4>Stats</h4>
            <pre>{JSON.stringify(klippyLog.stats, null, 2)}</pre>
          </section>
        </article>
      )}
    </div>
  );
}
