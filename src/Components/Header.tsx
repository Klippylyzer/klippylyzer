import * as React from "react";
import cx from "ts-classnames";

export default function Header({ children }: React.PropsWithChildren<unknown>) {
  return (
    <nav
      className={cx(
        "mb-4",
        "p-5",
        "px-2",
        "py-2.5",
        "rounded",
        "sm:px-4",
        "bg-white",
        "border-gray-200",
        "dark:bg-gray-800"
      )}
    >
      <div
        className={cx(
          "container",
          "flex",
          "flex-wrap",
          "justify-between",
          "items-center",
          "max-w-none"
        )}
      >
        <a href="#" className={cx("flex", "items-center")}>
          <img src={new URL("../img/icon.svg", import.meta.url).toString()} />
          <span className={cx("ml-3", "text-xl")}>Klippylyzer</span>
        </a>

        {children}
      </div>
    </nav>
  );
}
