import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  BsFileText,
  BsFillCpuFill,
  BsGear,
  BsThermometerHalf,
} from "react-icons/bs";
import cx from "ts-classnames";

import Button from "./Components/Buttons";
import ConfigFile from "./Components/ConfigFile";
import Header from "./Components/Header";
import TempGraph from "./Components/TempGraph";
import { KlippyLog } from "./types";

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
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-1 md:mt-0 md:text-md md:font-medium">
            <li>
              <Button
                btn="Light"
                onClick={() => setCurrentTab(Tab.Config)}
                className={cx("flex", "flex-row", "items-center", {
                  "bg-blue-800 dark:bg-blue-800": currentTab === Tab.Config,
                })}
              >
                <BsGear className="mr-2" />
                Config
              </Button>
            </li>
            <li>
              <Button
                btn="Light"
                onClick={() => setCurrentTab(Tab.TempGraph)}
                className={cx("flex", "flex-row", "items-center", {
                  "bg-blue-800 dark:bg-blue-800": currentTab === Tab.TempGraph,
                })}
              >
                <BsThermometerHalf className="mr-2" />
                Temp Graph
              </Button>
            </li>
            <li>
              <Button
                btn="Light"
                onClick={() => setCurrentTab(Tab.Log)}
                className={cx("flex", "flex-row", "items-center", {
                  "bg-blue-800 dark:bg-blue-800": currentTab === Tab.Log,
                })}
              >
                <BsFileText className="mr-2" />
                Log
              </Button>
            </li>
            <li>
              <Button
                btn="Light"
                onClick={() => setCurrentTab(Tab.Stats)}
                className={cx("flex", "flex-row", "items-center", {
                  "bg-blue-800 dark:bg-blue-800": currentTab === Tab.Stats,
                })}
              >
                <BsFillCpuFill className="mr-2" />
                Stats
              </Button>
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
            <h2 className={cx("flex", "flex-row", "justify-between")}>
              <span>Klipper Config</span>
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
            </h2>
            <ConfigFile klippyLog={klippyLog} />
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

      {/* <Footer className="flex-end">
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
      </Footer> */}
    </div>
  );
}
