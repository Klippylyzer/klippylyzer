import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import cx from "ts-classnames";

import useWorker from "../../Context/WebWorker";
import { KlippyLog, KlippyWorkerMessages } from "../../types";

interface Props {
  onChange: (klippyLog: KlippyLog) => void;
}
export default function LogFile({ onChange }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const worker = useWorker();
  const navigate = useNavigate();

  const [isDropping, setIsDropping] = useState(false);

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

  const handleFiles = useCallback(
    (files: FileList) => {
      if (!worker || !files.length) return;

      worker.postMessage({
        type: "parseFiles",
        data: files,
      });
    },
    [worker]
  );

  const onDragOver = useCallback(
    (evt: DragEvent) => {
      if (evt.dataTransfer?.types[0] !== "Files") return;

      console.log(evt.type, evt);
      setIsDropping(true);
      evt.preventDefault();
    },
    [setIsDropping]
  );
  const onDrop = useCallback(
    (evt: DragEvent) => {
      if (evt.dataTransfer?.types[0] !== "Files") return;

      console.log(evt.type, evt);
      handleFiles(evt.dataTransfer.files);
      setIsDropping(true);

      evt.preventDefault();
    },
    [handleFiles, setIsDropping]
  );
  const onDragLeave = useCallback(
    (evt: DragEvent) => {
      console.log(evt.type, evt);
      setIsDropping(false);
      evt.preventDefault();
    },
    [setIsDropping]
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const elem = sectionRef.current;

    elem.addEventListener("dragover", onDragOver);
    elem.addEventListener("dragleave", onDragLeave);
    elem.addEventListener("drop", onDrop);

    return () => {
      elem.removeEventListener("dragover", onDragOver);
      elem.removeEventListener("dragleave", onDragLeave);
      elem.removeEventListener("drop", onDrop);
    };
  }, [onDragOver, onDragLeave, onDrop]);

  return (
    <section
      ref={sectionRef}
      className={cx("flex", "flex-col", "gap-2", "h-full", {
        "shadow-inner": isDropping,
        "bg-gray-200": isDropping,
        "dark:bg-gray-800": isDropping,
      })}
    >
      <label className={cx("self-center", "text-xl", "btn", "btn-primary", "h-24", "w-72", "mt-20")}>
        <span className={cx("text-xl")}>Upload a log file!</span>

        <input
          className="hidden"
          type="file"
          onInput={(evt) => {
            const files = (evt.target as HTMLInputElement).files;
            if (files) handleFiles(files);
          }}
          multiple={true}
        />
      </label>
    </section>
  );
}
