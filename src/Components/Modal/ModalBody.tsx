import React from "react";
import cx from "ts-classnames";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function ModalBody({ className, children, ...props }: Props) {
  return (
    <div className={cx("p-6", "space-y-6", className as ClassNames)} {...props}>
      {children}
    </div>
  );
}
