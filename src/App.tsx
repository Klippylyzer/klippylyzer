import "./main.css";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast, Toaster } from "react-hot-toast";
import { BsClockHistory, BsFileLock, BsFileText, BsGear, BsThermometerHalf, BsX } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { NavLink, Route, Routes } from "react-router-dom";

import Drawer from "./Components/Drawer";
import useMoonraker from "./Context/Moonraker";
import KlippyLogRoutes from "./Routes/KlippyLog/Routes";
import MoonrakerRoutes from "./Routes/Moonraker/Routes";
import Settings from "./Routes/Settings";
import { KlippyLog } from "./types";
import { humanSize, parseKlippyLog } from "./utils";
import cx from "./utils/cx";

export default function App() {
  const [klippyLog, setKlippyLog] = useState<KlippyLog>();
  const moonraker = useMoonraker();

  useEffect(() => {
    if (!moonraker.printer) return;

    const url = new URL("/server/files/klippy.log", moonraker.printer.url);

    fetch(url.toString())
      .then((res) => res.text())
      .then((logString) => {
        toast(`Got ${humanSize(logString.length)} log file `, { icon: <BsFileText size="1.5rem" /> });

        setKlippyLog(parseKlippyLog(logString));
      });
  }, [moonraker.printer]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Klippylyzer</title>
      </Helmet>

      <Routes>
        <Route
          element={
            <Drawer klippyLog={klippyLog} clearLog={() => setKlippyLog(undefined)}>
              <>
                <li>
                  <NavLink to="/moonraker/backups">
                    <BsFileLock className={cx("mr-2")} /> Backups
                  </NavLink>
                </li>

                {moonraker.rpc && (
                  <>
                    <li>
                      <NavLink to="/moonraker/history">
                        <BsClockHistory className={cx("mr-2")} /> History
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/moonraker/bed_mesh">
                        <TbGridDots className={cx("mr-2")} /> Mesh
                      </NavLink>
                    </li>
                  </>
                )}

                {klippyLog && (
                  <>
                    <li>
                      <NavLink to="/analysis/config">
                        <BsGear className={cx("mr-2")} />
                        Config
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/analysis/temps">
                        <BsThermometerHalf className={cx("mr-2")} />
                        Temp Graph
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/analysis/log">
                        <BsFileText className={cx("mr-2")} />
                        Log
                      </NavLink>
                    </li>
                  </>
                )}
                <li>
                  <NavLink to="/settings">
                    <BsGear className={cx("mr-2")} />
                    Settings
                  </NavLink>
                </li>
              </>
            </Drawer>
          }
        >
          {MoonrakerRoutes(moonraker)}
          {KlippyLogRoutes({ klippyLog, setKlippyLog })}
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<section>404 not found</section>} />
        </Route>
      </Routes>

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
    </>
  );
}
