import { PropsWithChildren } from "react";

import { DbContext, useDb } from "../db";

export default function Database({ children }: PropsWithChildren<unknown>) {
  const db = useDb();

  return <DbContext.Provider value={db}>{children}</DbContext.Provider>;
}
