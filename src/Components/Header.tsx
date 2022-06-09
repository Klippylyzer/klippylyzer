import { produce } from "immer";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsPlus } from "react-icons/bs";
import { ImSpinner3 } from "react-icons/im";
import { TbPlugConnected } from "react-icons/tb";
import { Link } from "react-router-dom";
import cx from "ts-classnames";

import { useMoonraker } from "../Context/Moonraker";
import { Printer, useDb } from "../db";
import AddPrinterModal from "./AddPrinterModal";

export default function Header({ children }: React.PropsWithChildren<unknown>) {
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
  }, [moonraker]);

  useEffect(() => {
    if (!db) return;
    db.getAllFromIndex("printers", "by-name").then((printers) => setPrinters(printers as Array<Printer>));
  }, [db]);

  return (
    <nav className={cx("navbar", "bg-gray-50", "border-gray-200", "dark:bg-gray-800", "rounded-box", "mb-4")}>
      <div className={cx("flex-1", "px-2", "lg:flex-none")}>
        <Link to="/" className={cx("flex", "items-center")}>
          <img src={new URL("../img/icon.svg", import.meta.url).toString()} />
          <span className={cx("ml-3", "text-xl")}>Klippylyzer</span>
        </Link>
      </div>

      <div className={cx("flex", "justify-end", "flex-1", "px-2")}>
        {children}

        <div className={cx("dropdown", "dropdown-end")}>
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

          <label tabIndex={0} className={cx("btn", "btn-ghost", "rounded-btn")}>
            {moonraker?.printer ? moonraker.printer.name : "Connect to Printer"}
            {connectionStatus === "connected" ? (
              <TbPlugConnected className={cx("fill-success")} />
            ) : connectionStatus === "connecting" ? (
              <ImSpinner3 className={cx("animate-spin")} />
            ) : null}
          </label>
          <ul
            tabIndex={0}
            className={cx("menu", "dropdown-content", "p-2", "shadow", "bg-base-100", "rounded-box", "w-52", "mt-4")}
          >
            {printers.map((printer) => (
              <li key={printer.id}>
                <a
                  className={cx("flex", "flex-row", "justify-between")}
                  onClick={() => {
                    if (moonraker?.printer?.id === printer.id) {
                      disconnect();
                    } else {
                      connectToPrinter(printer);
                    }
                  }}
                >
                  {printer.name}

                  {moonraker?.printer?.id === printer.id ? <TbPlugConnected className={cx("fill-success")} /> : null}
                </a>
              </li>
            ))}

            <li>
              <a className={cx("flex", "flex-row", "justify-between")} onClick={() => setShowAddPrinter(true)}>
                <span>Add Printer</span>

                <BsPlus />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
