import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

import { MoonrakerContext } from "../../Context/Moonraker";
import BackupRoutes from "../Backups/Routes";
import LoadingPage from "../LoadingPage";

const BedMesh = lazy(() => import("./BedMesh"));
const History = lazy(() => import("./History"));

export default function Routes(moonraker: MoonrakerContext) {
  return (
    <Route path="moonraker">
      {BackupRoutes()}

      {moonraker.rpc ? (
        <>
          <Route path="bed_mesh" element={<LoadingPage children={<BedMesh />} />} />
          <Route path="history" element={<LoadingPage children={<History />} />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      )}
    </Route>
  );
}
