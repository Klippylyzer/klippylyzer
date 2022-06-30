import React from "react";

import cx from "../../utils/cx";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function ModalFooter({ className, children, ...props }: Props) {
  return (
    <div
      className={cx(
        "flex",
        "items-center",
        "p-6",
        "space-x-2",
        "rounded-b",
        "border-t",
        "border-gray-200",
        "dark:border-gray-600",
        className as ClassNames
      )}
      {...props}
    >
      {children}
    </div>
  );
}
