import React from "react";

export const WorkerContext = React.createContext<Worker | null>(null);
export default function WebWorker({
  children,
}: React.PropsWithChildren<unknown>) {
  const worker = new Worker(new URL("../worker/index.ts", import.meta.url), {
    name: "klippyWorker",
    type: "module",
  });

  return (
    <WorkerContext.Provider value={worker}>{children}</WorkerContext.Provider>
  );
}
