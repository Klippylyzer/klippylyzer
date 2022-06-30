import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import useDb, { Backup as BackupType, BackupFile as BackupFileType } from "../../Context/Database";
import { humanSize } from "../../utils";
import cx from "../../utils/cx";

export default function Backup() {
  const { backupId } = useParams<{ backupId: string }>();
  const db = useDb();

  const [backup, setBackup] = useState<undefined | BackupType>();
  const [backupFiles, setBackupFiles] = useState<Array<BackupFileType>>([]);

  useEffect(
    function () {
      if (!backupId) return undefined;

      db.get("backup", parseInt(backupId)).then((backup) => setBackup(backup as BackupType));
    },
    [backupId, db]
  );

  useEffect(
    function () {
      if (!backup) return;

      const backupFileIds = backup.files.map((file) => file.id) as number[];

      db.getAllFromIndex(
        "backupFile",
        "by-id",
        IDBKeyRange.bound(Math.min(...backupFileIds), Math.max(...backupFileIds))
      ).then((files) =>
        setBackupFiles(
          files.filter(
            (backupFile) => backup.files.map(({ id }) => id).indexOf(backupFile.id as number) !== -1
          ) as Array<BackupFileType>
        )
      );
    },
    [backup, db]
  );

  if (backup) {
    return (
      <div>
        <h3 className={cx("text-lg", "breadcrumbs")}>
          <ul>
            <li>
              <NavLink to="/moonraker/backups" className={cx("text-gray-600", "dark:text-gray-400")}>
                Backups
              </NavLink>
            </li>
            <li>{backup.name}</li>
          </ul>
        </h3>

        <table>
          <thead>
            <tr>
              <th>Filename</th>
              <th>Size</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {backupFiles.map((backupFile) => (
              <tr key={backupFile.id}>
                <td>
                  <NavLink to={`file/${backupFile.path}`}>{backupFile.path}</NavLink>
                </td>
                <td>{humanSize(backupFile.size)}</td>
                <td>{new Date(backupFile.modified).toLocaleString()}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        <Outlet />
      </div>
    );
  } else {
    return null;
  }
}
