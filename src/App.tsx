import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  BsFileText,
  BsFillCpuFill,
  BsGear,
  BsThermometerHalf,
} from "react-icons/bs";
import cx from "ts-classnames";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MultiRange from "./Components/MultiRange";
import TempGraph from "./Components/TempGraph";
import { KlippyLog } from "./types";
import { debounce } from "./utils/debounce";

enum Tab {
  Config,
  TempGraph,
  Log,
  Stats,
}

type Props = {
  worker: Worker;
};

export default function App({ worker }: Props) {
  const logFile = useRef<HTMLInputElement>(null);
  const [klippyLog, setKlippyLog] = useState<KlippyLog>();
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.TempGraph);
  const [timelineIndex, setTimelineIndex] = useState<[number, number]>([
    0, 1000,
  ]);

  useEffect(() => {
    function handleParseFiles({ data }: MessageEvent) {
      if (data.type !== "parseFiles") return;

      setKlippyLog(data.data as KlippyLog);
      setTimelineIndex([0, data.data.stats.length]);
    }

    worker.addEventListener("message", handleParseFiles);
    return () => worker.removeEventListener("message", handleParseFiles);
  });

  const handleFileInput = useCallback(() => {
    if (!logFile.current?.files?.length) return;

    worker.postMessage({
      type: "parseFiles",
      data: logFile.current.files,
    });
  }, [logFile, setKlippyLog]);

  const downloadConfig = useCallback(() => {
    if (!klippyLog) return;

    const blob = new Blob([klippyLog.config], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "printer.cfg";
    a.click();
  }, [klippyLog]);

  return (
    <div className="flex flex-col h-screen p-4">
      <Helmet
        bodyAttributes={{
          class: "bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200",
        }}
      >
        <meta charSet="utf-8" />
        <title>Klippylizer</title>
      </Helmet>

      <Header>
        {klippyLog && (
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            <li>
              <button
                onClick={() => setCurrentTab(Tab.Config)}
                className="flex flex-row items-center"
              >
                <BsGear className="mr-2" />
                Config
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentTab(Tab.TempGraph)}
                className="flex flex-row items-center"
              >
                <BsThermometerHalf className="mr-2" />
                Temp Graph
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentTab(Tab.Log)}
                className="flex flex-row items-center"
              >
                <BsFileText className="mr-2" />
                Log
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentTab(Tab.Stats)}
                className="flex flex-row items-center"
              >
                <BsFillCpuFill className="mr-2" />
                Stats
              </button>
            </li>
          </ul>
        )}
      </Header>

      {!klippyLog && (
        <div className="flex-grow mx-auto">
          <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <input
              type="file"
              ref={logFile}
              onInput={handleFileInput}
              multiple={true}
            />
          </div>
        </div>
      )}

      {klippyLog && (
        <section className="flex-grow">
          <section className={cx({ hidden: currentTab !== Tab.Config })}>
            <h3 className={cx("flex", "flex-row", "justify-between")}>
              <div>Full Printer Config</div>
              <button
                className={cx(
                  "py-2.5",
                  "px-5 ",
                  "mr-2",
                  "mb-2 ",
                  "text-sm",
                  "font-medium",
                  "text-gray-900",
                  "focus:outline-none ",
                  "bg-white ",
                  "rounded-lg",
                  "border ",
                  "border-gray-200",
                  "hover:bg-gray-100",
                  "hover:text-blue-700 ",
                  "focus:z-10 ",
                  "focus:ring-4",
                  "focus:ring-gray-200",
                  "dark:focus:ring-gray-700",
                  "dark:bg-gray-800 ",
                  "dark:text-gray-400",
                  "dark:border-gray-600",
                  "dark:hover:text-white",
                  "dark:hover:bg-gray-700"
                )}
                onClick={downloadConfig}
              >
                [download]
              </button>
            </h3>
            <code>
              <pre>{klippyLog.config}</pre>
            </code>
          </section>

          <section className={cx({ hidden: currentTab !== Tab.TempGraph })}>
            <h4>Temps over time</h4>
            <TempGraph
              stats={klippyLog.stats}
              left={timelineIndex[0]}
              right={timelineIndex[1]}
            />
          </section>

          <section className={cx({ hidden: currentTab !== Tab.Log })}>
            <h4>Raw Log</h4>
            <pre>{klippyLog.raw}</pre>
          </section>

          <section className={cx({ hidden: currentTab !== Tab.Stats })}>
            <h4>Stats</h4>
            <pre>{JSON.stringify(klippyLog.stats, null, 2)}</pre>
          </section>
        </section>
      )}

      <Footer className="flex-end">
        {klippyLog && (
          <MultiRange
            min={0}
            max={klippyLog?.stats?.length - 1}
            left={timelineIndex[0]}
            right={timelineIndex[1]}
            onChange={debounce(
              ([left, right]) => setTimelineIndex([left, right]),
              250
            )}
          />
        )}
      </Footer>
    </div>
  );
}
