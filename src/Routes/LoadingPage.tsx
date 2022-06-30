import { PropsWithChildren, Suspense } from "react";

import { Spinner } from "../Components";
import cx from "../utils/cx";

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
