import { lazy } from "react";
import { Outlet, Route } from "react-router-dom";

import LoadingPage from "../LoadingPage";

const Backups = lazy(() => import("./Backups"));
const Backup = lazy(() => import("./Backup"));
const BackupFile = lazy(() => import("./BackupFile"));

export default function BackupRoutes() {
  return (
    <Route path="backups" element={<Outlet />}>
      <Route path="" element={<LoadingPage children={<Backups />} />} />
      <Route path=":backupId" element={<Outlet />}>
        <Route path="" element={<LoadingPage children={<Backup />} />} />
        <Route path="file/*" element={<LoadingPage children={<BackupFile />} />} />
      </Route>
    </Route>
  );
}
