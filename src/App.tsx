import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast, Toaster } from "react-hot-toast";
import { BsClockHistory, BsFileText, BsFillCpuFill, BsGear, BsThermometerHalf, BsX } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import cx from "ts-classnames";

import Button from "./Components/Buttons";
import Header from "./Components/Header";
import { useMoonraker } from "./Context/Moonraker";
import BedMesh from "./Routes/BedMesh";
import ConfigFile from "./Routes/ConfigFile";
import History from "./Routes/History";
import LogFile from "./Routes/LogFile";
import Log from "./Routes/LogViewer";
import Stats from "./Routes/Stats";
import TempGraph from "./Routes/TempGraph";
import { KlippyLog } from "./types";
import { parseKlippyLog } from "./utils";
// import { useRpcHandler } from "./utils/jsonrpc";

export default function App() {
  const [klippyLog, setKlippyLog] = useState<KlippyLog>();
  const { rpc: client } = useMoonraker();

  useEffect(() => {
    if (!client) return;

    const url = new URL("/server/files/klippy.log", client.ws.url);
    url.protocol = url.protocol === "wss:" ? "https:" : "http:";

    fetch(url.toString())
      .then((res) => res.text())
      .then((logString) => setKlippyLog(parseKlippyLog(logString)));
  }, [client]);

  return (
    <div className={cx("flex", "flex-col", "h-screen", "p-4")}>
      <Helmet
        htmlAttributes={{
          class: cx("bg-gray-50", "text-gray-800", "dark:bg-gray-900", "dark:text-gray-200"),
        }}
      >
        <meta charSet="utf-8" />
        <title>Klippylizer</title>
      </Helmet>

      <Header>
        <ul
          className={cx(
            "flex",
            "flex-col",
            "mt-4",
            "md:flex-row",
            "md:space-x-1",
            "md:mt-0",
            "md:text-base",
            "md:font-medium"
          )}
        >
          {client && (
            <>
              <li>
                <NavLink
                  to="/moonraker/history"
                  className={({ isActive }) =>
                    cx(...Button.Styles.Light, "flex", "flex-row", "items-center", {
                      "bg-blue-800": isActive,
                      "dark:bg-blue-800": isActive,
                    })
                  }
                >
                  <BsClockHistory className={cx("mr-2")} /> History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/moonraker/bed_mesh"
                  className={({ isActive }) =>
                    cx(...Button.Styles.Light, "flex", "flex-row", "items-center", {
                      "bg-blue-800": isActive,
                      "dark:bg-blue-800": isActive,
                    })
                  }
                >
                  <TbGridDots className={cx("mr-2")} /> Mesh
                </NavLink>
              </li>
            </>
          )}

          {klippyLog && (
            <>
              <li>
                <NavLink
                  to="/analysis/config"
                  className={({ isActive }) =>
                    cx(...Button.Styles.Light, "flex", "flex-row", "items-center", {
                      "bg-blue-800": isActive,
                      "dark:bg-blue-800": isActive,
                    })
                  }
                >
                  <BsGear className={cx("mr-2")} />
                  Config
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/analysis/temps"
                  className={({ isActive }) =>
                    cx(...Button.Styles.Light, "flex", "flex-row", "items-center", {
                      "bg-blue-800": isActive,
                      "dark:bg-blue-800": isActive,
                    })
                  }
                >
                  <BsThermometerHalf className={cx("mr-2")} />
                  Temp Graph
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/analysis/log"
                  className={({ isActive }) =>
                    cx(...Button.Styles.Light, "flex", "flex-row", "items-center", {
                      "bg-blue-800": isActive,
                      "dark:bg-blue-800": isActive,
                    })
                  }
                >
                  <BsFileText className={cx("mr-2")} />
                  Log
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/analysis/stats"
                  className={({ isActive }) =>
                    cx(...Button.Styles.Light, "flex", "flex-row", "items-center", {
                      "bg-blue-800": isActive,
                      "dark:bg-blue-800": isActive,
                    })
                  }
                >
                  <BsFillCpuFill className={cx("mr-2")} />
                  Stats
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </Header>

      <section className={cx("flex-grow")}>
        <Routes>
          <Route
            path="/"
            element={
              <section className={cx("flex", "flex-row", "justify-center", "gap-2")}>
                <LogFile onChange={(klippyLog) => setKlippyLog(klippyLog)} />
              </section>
            }
          />

          {client ? (
            <Route path="/moonraker">
              <Route path="bed_mesh" element={<BedMesh />} />
              <Route path="history" element={<History />} />
            </Route>
          ) : (
            <Route path="/moonraker/*" element={<Navigate to="/" replace={true} />} />
          )}
          {klippyLog ? (
            <Route path="/analysis">
              <Route path="temps" element={<TempGraph stats={klippyLog.stats} />} />
              <Route path="config" element={<ConfigFile klippyLog={klippyLog} />} />
              <Route path="log" element={<Log klippyLog={klippyLog} />} />
              <Route path="stats" element={<Stats klippyLog={klippyLog} />} />
            </Route>
          ) : (
            <Route path="/analysis/*" element={<Navigate to="/" replace={true} />}></Route>
          )}

          <Route path="*" element={<section>404 not found</section>} />
        </Routes>
      </section>

      <Toaster
        position="bottom-right"
        reverseOrder={true}
        gutter={8}
        containerClassName={cx()}
        containerStyle={{}}
        toastOptions={{}}
      >
        {(t) => (
          <div
            className={cx(
              "flex",
              "items-center",
              "w-full",
              "max-w-xs",
              "p-4",
              "text-gray-600",
              "bg-gray-50",
              "rounded-lg",
              "shadow",
              "dark:text-gray-400",
              "dark:bg-gray-800"
            )}
            role="alert"
          >
            <div
              className={cx(
                "inline-flex",
                "items-center",
                "justify-center",
                "shrink-0",
                "w-8",
                "h-8",
                "text-blue-500",
                "bg-blue-100",
                "rounded-lg",
                "dark:bg-blue-800",
                "dark:text-blue-200"
              )}
            >
              {t.icon}
            </div>
            <div className={cx("ml-3", "text-sm", "font-normal")}>
              {typeof t.message === "function" ? t.message(t) : t.message}
            </div>
            <button
              type="button"
              className={cx(
                "btn",
                "ml-auto",
                "-mx-1.5",
                "-my-1.5",

                "text-gray-400",
                "hover:text-gray-900",
                "rounded-lg",
                "focus:ring-2",
                "focus:ring-gray-300",
                "p-1.5",
                "hover:bg-gray-100",
                "inline-flex",
                "h-8",
                "w-8",
                "dark:text-gray-500",
                "dark:bg-gray-800",
                // "dark:hover:text-gray-100",
                "dark:hover:bg-gray-700"
              )}
              aria-label="Close"
              onClick={() => toast.dismiss(t.id)}
            >
              <span className="sr-only">Close</span>
              <BsX />
            </button>
          </div>
        )}
      </Toaster>
    </div>
  );
}
