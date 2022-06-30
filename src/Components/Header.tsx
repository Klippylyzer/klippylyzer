import { produce } from "immer";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsPlus } from "react-icons/bs";
import { TbPlugConnected } from "react-icons/tb";

import useDb, { Printer } from "../Context/Database";
import useMoonraker from "../Context/Moonraker";
import cx, { ClassNameVariants } from "../utils/cx";
import { Spinner } from ".";
import AddPrinterModal from "./AddPrinterModal";

type Props = {
  className?: ClassNameVariants;
};

export default function Header({ children, className }: React.PropsWithChildren<Props>) {
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
    <nav
      className={cx("navbar", "bg-gray-50", "border-gray-200", "dark:bg-gray-800", "rounded-box", "mb-4", className)}
    >
      <div className={cx("flex", "justify-between", "flex-1", "px-2")}>
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
              <Spinner className={cx("animate-spin")} />
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
