import { lazy } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

import { KlippyLog } from "../../types";
import LoadingPage from "../LoadingPage";
import LogFile from "./LogFile";

const Analysis = lazy(() => import("./Analysis"));
const Log = lazy(() => import("./LogViewer"));
const TempGraph = lazy(() => import("./TempGraph"));
const ConfigFile = lazy(() => import("./ConfigFile"));

interface Props {
  klippyLog?: KlippyLog;
  setKlippyLog: (klippyLog: KlippyLog | undefined) => void;
}
export default function KlippyLogRoutes({ klippyLog, setKlippyLog }: Props) {
  if (klippyLog) {
    return (
      <Route path="" element={<Outlet />}>
        <Route path="" element={<Analysis klippyLog={klippyLog} />} />

        <Route path="analysis" element={<Outlet />}>
          <Route path="temps" element={<LoadingPage children={<TempGraph klippyLog={klippyLog} />} />} />
          <Route path="config" element={<LoadingPage children={<ConfigFile klippyLog={klippyLog} />} />} />
          <Route path="log" element={<LoadingPage children={<Log klippyLog={klippyLog} />} />} />
        </Route>
      </Route>
    );
  }

  return (
    <Route path="" element={<LogFile onChange={(klippyLog) => setKlippyLog(klippyLog)} />}>
      <Route path="analysis" element={<Navigate to="/" replace={true} />}>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Route>
  );
}
