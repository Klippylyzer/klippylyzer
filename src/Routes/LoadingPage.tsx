import { PropsWithChildren, Suspense } from "react";
import cx from "ts-classnames";

import { Spinner } from "../Components";

interface Props {
  message?: string;
}
export default function LoadingPage({ message, children }: PropsWithChildren<Props>) {
  return (
    <Suspense
      fallback={
        <div className={cx("flex", "justify-center", "items-center", "w-full", "h-full")}>
          <Spinner size="4rem" className={cx("animate-spin")} />
          {message && <div>{message}</div>}
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
