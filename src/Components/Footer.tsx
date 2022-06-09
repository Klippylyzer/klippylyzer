import * as React from "react";
import cx from "ts-classnames";

export default function Footer({
  className,
  children,
}: React.PropsWithChildren<{ className: string }>) {
  return (
    <footer
      className={cx(
        className as ClassNames,
        "p-4",
        "rounded-lg",
        "shadow",
        "md:flex",
        "md:items-center",
        "md:justify-between",
        "md:p-6",
        "bg-base-100",
        "dark:bg-gray-800"
      )}
    >
      {/* <ul
        className={cx(
          "flex",
          "flex-wrap",
          "items-center",
          "mt-3",
          "text-sm",
          "text-gray-500",
          "dark:text-gray-400",
          "sm:mt-0"
        )}
      >
      </ul> */}
      {children}
    </footer>
  );
}
