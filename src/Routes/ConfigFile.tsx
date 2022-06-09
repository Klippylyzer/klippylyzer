import React, { useCallback, useMemo } from "react";
import { BsArrowUp, BsDownload, BsLink } from "react-icons/bs";
import cx from "ts-classnames";

import Button from "../Components/Buttons";
import { KlippyLog } from "../types";
import KlipperConfigParser, {
  ConfigFile,
  Section,
} from "../utils/KlipperConfigParser";

type Props = {
  klippyLog: KlippyLog;
};
export default function ConfigFile({ klippyLog }: Props) {
  const config = useMemo(() => {
    const parser = new KlipperConfigParser();
    try {
      return parser.parse(klippyLog.config);
    } catch (e) {
      console.error(e);
      return null;
    }
  }, [klippyLog]);

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
    <div>
      <h2 className={cx("flex", "flex-row", "justify-between")}>
        <span>Klipper Config</span>
        <Button
          btn="Light"
          onClick={downloadConfig}
          className={cx("flex", "flex-row")}
        >
          <BsDownload /> download
        </Button>
      </h2>

      {config && (
        <div className={cx("sticky", "top-4", "float-right")}>
          <ul>
            <li
              className={cx(
                "text-lg",
                "flex",
                "justify-between",
                "items-center"
              )}
            >
              TOC
              <a href="#" onClick={() => window.scrollTo({ top: 0 })}>
                <BsArrowUp />
              </a>
            </li>
            {Object.entries(config).map(([key]) => (
              <li key={key}>
                <a
                  href={"#" + ["config", key].join("--")}
                  className={cx("text-gray-800", "dark:text-gray-200")}
                >
                  {key}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <code>{config && <RecursiveObject object={config} />}</code>
    </div>
  );
}

function RecursiveObject({
  object,
  path = [],
}: {
  object: ConfigFile | Section;
  path?: string[];
}) {
  return (
    <>
      {Object.entries(object).map(([key, value]) => (
        <div className={cx("pl-4")} key={key}>
          <div
            id={["config", path.join("-"), key].filter(Boolean).join("--")}
            className={cx("font-bold")}
          >
            <a
              className={cx(
                "group",
                "focus:text-blue-300",
                "dark:focus:text-blue-300"
              )}
              href={
                "#" + ["config", path.join("-"), key].filter(Boolean).join("--")
              }
            >
              <BsLink
                className={cx(
                  "inline-block",
                  "mr-1",
                  "invisible",
                  "group-hover:visible"
                )}
              />
              {key}
            </a>

            {typeof value === "number" || typeof value === "boolean" ? (
              ` = ${value}`
            ) : typeof value === "string" ? (
              <>
                {" "}
                = <pre className={"inline-block"}>{value}</pre>
              </>
            ) : null}
          </div>
          <div className={cx()}>
            {typeof value === "number" ||
            typeof value === "boolean" ||
            typeof value === "string" ? null : value instanceof Array ? (
              <ul>
                {value.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            ) : value instanceof Object ? (
              <RecursiveObject path={[...path, key]} object={value} />
            ) : (
              "ERROR"
            )}
          </div>
        </div>
      ))}
    </>
  );
}
