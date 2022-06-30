import React from "react";

import cx from "../../utils/cx";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function ModalContent({ className, children, ...props }: Props) {
  return (
    <div
      className={cx("relative", "bg-base-100", "rounded-lg", "shadow", "dark:bg-gray-700", className as ClassNames)}
      {...props}
    >
      {children}
    </div>
  );
}
