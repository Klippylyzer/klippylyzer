import { useEffect, useMemo, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { NavLink, useParams } from "react-router-dom";
import { PrismLight } from "react-syntax-highlighter";
import PrismLanguageIni from "react-syntax-highlighter/dist/esm/languages/prism/ini";
import PrismThemeTomorrow from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";
import cx from "ts-classnames";

import useDb, { Backup, BackupFile } from "../../Context/Database";

PrismLight.registerLanguage("ini", PrismLanguageIni);

export default function BackupFile() {
  const { backupId, "*": filePath } = useParams<{ backupId: string; "*": string }>();

  const db = useDb();
  const [backup, setBackup] = useState<undefined | Backup>(undefined);
  const [backupFile, setBackupFile] = useState<undefined | BackupFile>(undefined);

  useEffect(() => {
    if (!(backupId && filePath)) return;

    db.get("backup", parseInt(backupId)).then((backup) => {
      if (!backup) return;

      setBackup(backup as Backup);

      const fileId = backup.files.find(({ name }) => name === filePath)?.id;
      if (!fileId) return;
      db.get("backupFile", fileId).then((file) => {
        setBackupFile(file as BackupFile);
      });
    });
  }, [db, backupId, filePath]);

  const textContent = useMemo<string>(() => {
    if (!backupFile) return "Loading...";

    const dec = new TextDecoder("utf-8");

    return dec.decode(backupFile.contents);
  }, [backupFile]);

  return (
    <div>
      <h3 className={cx("text-lg", "breadcrumbs")}>
        <ul>
          <li>
            <NavLink to="/moonraker/backups" className={cx("text-gray-600", "dark:text-gray-400")}>
              Backups
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={`/moonraker/backups/${backupId}`} className={cx("text-gray-600", "dark:text-gray-400")}>
              {backup?.name}
            </NavLink>
          </li>
          <li>
            {filePath}{" "}
            {backupFile && (
              <a
                download={backupFile.path.slice(backupFile.path.lastIndexOf("/") + 1)}
                href={URL.createObjectURL(new Blob([backupFile.contents]))}
                className={cx("pl-2")}
              >
                <BsDownload size="1.5rem" className={cx("inline-block")} />
              </a>
            )}
          </li>
        </ul>

        <small className={cx("float-right", "text-gray-600", "dark:text-gray-400")}>
          last modified {backupFile ? new Date(backupFile.modified * 1000).toLocaleString() : "..."}
        </small>
      </h3>

      <PrismLight language="log" style={PrismThemeTomorrow}>
        {textContent}
      </PrismLight>
    </div>
  );
}
