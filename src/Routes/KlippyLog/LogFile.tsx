import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import cx from "ts-classnames";

import useWorker from "../../Context/WebWorker";
import { KlippyLog, KlippyWorkerMessages } from "../../types";

interface Props {
  onChange: (klippLog: KlippyLog) => void;
}
export default function LogFile({ onChange }: Props) {
  const logFile = useRef<HTMLInputElement>(null);
  const worker = useWorker();
  const navigate = useNavigate();

  const handleFileInput = useCallback(() => {
    if (!worker || !logFile.current?.files?.length) return;

    worker.postMessage({
      type: "parseFiles",
      data: logFile.current.files,
    });
  }, [worker, logFile]);

  useEffect(() => {
    if (!worker) return;

    function handleParseFiles({ data }: MessageEvent<KlippyWorkerMessages>) {
      if (data.type !== "parseFiles") return;

      onChange(data.klippyLog);
      navigate("/analysis");
    }

    worker.addEventListener("message", handleParseFiles);
    return () => worker.removeEventListener("message", handleParseFiles);
  }, [worker, navigate, onChange]);

  return (
    <label className={cx("w-96")}>
      <div
        className={cx(
          "p-4",
          "bg-gray-50",
          "rounded-lg",
          "border",
          "border-gray-200",
          "shadow-md",
          "sm:p-6",
          "lg:p-8",
          "dark:bg-gray-800",
          "dark:border-gray-700",
          "text-center",
          "hover:bg-gray-100",
          "hover:border-gray-400",
          "hover:dark:bg-gray-900",
          "hover:border-gray-500",
          "pointer-events-auto"
        )}
      >
        Upload a log file!
        <input className="hidden" type="file" ref={logFile} onInput={handleFileInput} multiple={true} />
      </div>
    </label>
  );
}
