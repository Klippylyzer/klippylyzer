import { produce } from "immer";
import { useEffect, useState } from "react";
import { BsCheckCircle, BsClock, BsXCircle } from "react-icons/bs";
import { TbAlertTriangle } from "react-icons/tb";
import cx from "ts-classnames";

import { useMoonraker } from "../Context/Moonraker";
import { JobStatus, MoonrakerHistoryTotals, MoonrakerJob } from "../types";
import { useRpcHandler } from "../utils/jsonrpc";

function ApproxLength({ length }: { length: number }) {
  return (
    <span>
      {length > 100000
        ? `${(length / 100000).toFixed(1)} km`
        : length > 100
        ? `${(length / 1000).toFixed(1)} m`
        : length > 10
        ? `${(length / 10).toFixed(1)}cm`
        : `${length.toFixed(1)}mm`}
    </span>
  );
}
function ApproxDuration({ duration }: { duration: number }) {
  return (
    <span>
      {duration > 3600 * 48
        ? `${(duration / (3600 * 24)).toFixed(1)} days`
        : duration > 3600
        ? `${(duration / 3600).toFixed(1)} h`
        : duration > 60
        ? `${(duration / 60).toFixed(1)} min`
        : `${duration.toFixed(1)}s`}
    </span>
  );
}

export default function History() {
  const { rpc: client } = useMoonraker();
  const [history, setHistory] = useState<Array<MoonrakerJob>>([]);
  const [totals, setTotals] = useState<null | MoonrakerHistoryTotals>(null);

  useEffect(() => {
    if (!client) return;

    client.call("server.history.totals").then(({ job_totals }) => {
      setTotals(job_totals);
    });
    client.call("server.history.list").then(({ count, jobs }) => {
      setHistory(jobs);
      console.log(count, jobs.length);
    });
  }, [client, setHistory, setTotals]);

  useRpcHandler(client, "notify_history_changed", ([{ action, job }]) => {
    console.log(action, job);

    setHistory(
      produce((draft) => {
        draft.unshift(job);
      })
    );
  });

  return (
    <section>
      <h2 className={cx("text-xl")}>History</h2>

      <article className={cx("flex", "flex-row")}>
        {totals && (
          <>
            <div className={cx("card", "bg-base-100", "dark:bg-base-300", "shadow-xl", "mr-1")}>
              <div className={cx("card-body")}>
                <h2 className={cx("card-title")}>Longest Job</h2>
                <ApproxDuration duration={totals.longest_job} />
              </div>
            </div>

            <div className={cx("card", "bg-base-100", "dark:bg-base-300", "shadow-xl", "mr-1")}>
              <div className={cx("card-body")}>
                <h2 className={cx("card-title")}>Longest Print</h2>
                <ApproxDuration duration={totals.longest_print} />
              </div>
            </div>

            <div className={cx("card", "bg-base-100", "dark:bg-base-300", "shadow-xl", "mr-1")}>
              <div className={cx("card-body")}>
                <h2 className={cx("card-title")}>Filament Used</h2>
                <ApproxLength length={totals.total_filament_used} />
              </div>
            </div>

            <div className={cx("card", "bg-base-100", "dark:bg-base-300", "shadow-xl", "mr-1")}>
              <div className={cx("card-body")}>
                <h2 className={cx("card-title")}>Total Jobs</h2>
                {totals.total_jobs}
              </div>
            </div>

            <div className={cx("card", "bg-base-100", "dark:bg-base-300", "shadow-xl", "mr-1")}>
              <div className={cx("card-body")}>
                <h2 className={cx("card-title")}>Print Time</h2>
                <ApproxDuration duration={totals.total_print_time} />
              </div>
            </div>

            <div className={cx("card", "bg-base-100", "dark:bg-base-300", "shadow-xl", "mr-1")}>
              <div className={cx("card-body")}>
                <h2 className={cx("card-title")}>Total Time</h2>
                <ApproxDuration duration={totals.total_time} />
              </div>
            </div>
          </>
        )}
      </article>
      <table className={cx("table", "table-compact", "text-sm")}>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Start</th>
            <th>Status</th>
            <th>Total Time</th>
            <th>Print Time</th>
            <th>Filament Used</th>
          </tr>
        </thead>
        <tbody className={cx("text-sm")}>
          {history.map((job) => (
            <tr key={job.job_id}>
              <td className={cx("line-clamp-1")}>{job.filename}</td>
              <td>{new Date(job.start_time * 1000).toLocaleString()}</td>
              <td title={job.status}>
                {(() => {
                  switch (job.status) {
                    case JobStatus.Printing:
                    case JobStatus.InProgress:
                      return <BsClock size="1.5rem" className={cx("fill-primary", "-m-0.5")} />;
                    case JobStatus.Completed:
                      return <BsCheckCircle size="1.5rem" className={cx("fill-success", "-m-0.5")} />;
                    case JobStatus.Cancelled:
                      return <BsXCircle size="1.5rem" className={cx("fill-info", "-m-0.5")} />;
                    case JobStatus.Error:
                    case JobStatus.Server_Exit:
                    case JobStatus.Klippy_Shutdown:
                    case JobStatus.Klippy_Disconnect:
                      return <TbAlertTriangle size="1.5rem" className={cx("fill-error", "-m-0.5")} />;
                  }
                })()}
              </td>
              <td>
                <ApproxDuration duration={job.total_duration} />
              </td>
              <td>
                <ApproxDuration duration={job.print_duration} />
              </td>
              <td>
                <ApproxLength length={job.filament_used} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
