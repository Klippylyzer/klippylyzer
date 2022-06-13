import { produce } from "immer";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsPlus } from "react-icons/bs";
import { TbPlugConnected } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import cx from "ts-classnames";

import useDb, { Printer } from "../Context/Database";
import useMoonraker from "../Context/Moonraker";
import { KlippyLog } from "../types";
import AddPrinterModal from "./AddPrinterModal";

interface Props {
  klippyLog?: KlippyLog;
  clearLog: () => void;
}
export default function Drawer({ klippyLog, clearLog, children }: React.PropsWithChildren<Props>) {
  const db = useDb();
  const moonraker = useMoonraker();

  const [printers, setPrinters] = useState<Array<Printer>>([]);
  const [showAddPrinter, setShowAddPrinter] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<"disconnected" | "connecting" | "connected" | "error">(
    "disconnected"
  );

  const connectToPrinter = useCallback(
    (printer: Printer) => {
      moonraker.connect(printer, (status) => {
        setConnectionStatus(status);

        if (status === "connected") {
          toast(`Connected to ${printer.name}`, { icon: <TbPlugConnected size="1.5rem" /> });
        }
      });
    },
    [moonraker, setConnectionStatus]
  );
  const disconnect = useCallback(() => {
    moonraker?.disconnect();
    clearLog();
  }, [moonraker, clearLog]);

  useEffect(() => {
    if (!db) return;
    db.getAllFromIndex("printers", "by-name").then((printers) => setPrinters(printers as Array<Printer>));
  }, [db]);

  return (
    <div className={cx("drawer", "drawer-mobile")}>
      <input type="checkbox" id="drawer-toggle" className={cx("drawer-toggle")} />

      <div className={cx("drawer-content", "ml-2")}>
        <AddPrinterModal
          onSave={(printer: Printer) =>
            setPrinters(
              produce((draft) => {
                draft.push(printer);
              })
            )
          }
          hideModal={() => setShowAddPrinter(false)}
          showModal={showAddPrinter}
        />

        <Outlet />
      </div>

      <div className={cx("drawer-side")}>
        <ul className={cx("menu", "p-4", "overflow-y-auto", "w-80", "bg-base-100", "text-base-content")}>
          <li>
            <NavLink to="/" className={cx("flex", "items-center")}>
              <img src={new URL("../img/icon.svg", import.meta.url).toString()} />
              <span className={cx("ml-3", "text-xl")}>Klippylyzer</span>
            </NavLink>
          </li>

          {children}
          <li className={cx("flex-grow")}>
            <span></span>
          </li>

          {moonraker.printer ? (
            <li>
              <a className={cx("flex", "flex-row", "justify-between")} onClick={() => disconnect()}>
                {moonraker.printer.name}
                <TbPlugConnected className={cx("fill-success")} />
              </a>
            </li>
          ) : klippyLog ? (
            <li>
              <a onClick={() => disconnect()}>Clear Log</a>
            </li>
          ) : (
            <>
              {printers.map((printer) => (
                <li key={printer.id}>
                  <a className={cx("flex", "flex-row", "justify-between")} onClick={() => connectToPrinter(printer)}>
                    {printer.name}
                  </a>
                </li>
              ))}
              <li>
                <a className={cx("flex", "flex-row", "justify-between")} onClick={() => setShowAddPrinter(true)}>
                  <span>Add Printer</span>

                  <BsPlus />
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
