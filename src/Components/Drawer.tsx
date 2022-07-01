import { useDrag } from "@use-gesture/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { BsGithub,BsMenuButton } from "react-icons/bs";
import { TbPlugConnected } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

import useDb, { Printer } from "../Context/Database";
import useMoonraker from "../Context/Moonraker";
import { KlippyLog } from "../types";
import cx from "../utils/cx";
import Header from "./Header";

interface Props {
  klippyLog?: KlippyLog;
  clearLog: () => void;
}
export default function Drawer({ klippyLog, clearLog, children }: React.PropsWithChildren<Props>) {
  const db = useDb();
  const moonraker = useMoonraker();

  const drawerToggle = useRef<HTMLInputElement>(null);

  const [printers, setPrinters] = useState<Array<Printer>>([]);

  const connectToPrinter = useCallback(
    (printer: Printer) => {
      moonraker.connect(printer, (status) => {
        switch (status) {
          case "connected":
            toast(`Connected to ${printer.name}`, { icon: <TbPlugConnected size="1.5rem" /> });
            break;

          case "error":
            toast(`Error connecting to ${printer.name}`, { icon: <TbPlugConnected size="1.5rem" /> });
            break;

          case "disconnected":
            toast(`Lost connection to ${printer.name}`, { icon: <TbPlugConnected size="1.5rem" /> });
            break;
        }
      });
    },
    [moonraker]
  );

  const disconnect = useCallback(() => {
    moonraker?.disconnect();
    clearLog();
  }, [moonraker, clearLog]);

  useEffect(() => {
    if (!db) return;
    db.getAllFromIndex("printers", "by-name").then((printers) => setPrinters(printers as Array<Printer>));
  }, [db]);

  const swipeGesture = useDrag(({ direction: [dx] }) => {
    if (!drawerToggle.current) return;

    if (dx === 1) {
      drawerToggle.current.checked = true;
    } else if (dx === -1) {
      drawerToggle.current.checked = false;
    }
  });

  return (
    <div className={cx("drawer", "drawer-mobile")} {...swipeGesture()}>
      <input type="checkbox" id="drawer-toggle" className={cx("drawer-toggle")} ref={drawerToggle} />

      <div className={cx("drawer-content", "lg:mx-2")}>
        <Header className={cx("lg:hidden")}>
          <label htmlFor="drawer-toggle" className={cx("btn", "btn-ghost",'btn-xl', "drawer-overlay", "lg:hidden")}>
            <BsMenuButton />
          </label>
        </Header>
        <Outlet />
      </div>

      <div className={cx("drawer-side")}>
        <label htmlFor="drawer-toggle" className={cx("drawer-overlay")}></label>

        <ul className={cx("menu", "p-4", "overflow-y-auto", "w-80", "bg-base-300", "text-base-content")}>
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
            </>
          )}
          <li>
            <a href="https://github.com/klippylyzer/klippylyzer" target="_blank">
              <BsGithub />
              Klippylyzer on Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
