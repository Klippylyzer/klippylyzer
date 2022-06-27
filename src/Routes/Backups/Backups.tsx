import produce from "immer";
import { useCallback, useEffect, useState } from "react";
import { BsDownload, BsSave } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import cx from "ts-classnames";

import Modal from "../../Components/Modal";
import useDb, { Backup as BackupType } from "../../Context/Database";
import useMoonraker from "../../Context/Moonraker";
import { createBackup, zipBackup } from "./utils";

interface BackupState {
  running: boolean;
  progress: number;
  maxProgress: number;
  log: Array<{ time: Date; message: string }>;
}

export default function Backups() {
  const db = useDb();
  const moonraker = useMoonraker();
  const navigate = useNavigate();

  const [backups, setBackups] = useState<BackupType[]>([]);
  const [activeBackup, setActiveBackup] = useState<BackupState>({
    running: false,
    log: [],
    progress: 0,
    maxProgress: 0,
  });

  useEffect(() => {
    db.getAll("backup").then((values) => setBackups(values as BackupType[]));
  }, [db, setBackups]);

  const downloadBackup = useCallback(
    async (backup: BackupType) => {
      const zipFileBlob = await zipBackup(db, backup);
      const zipFileBlobUrl = URL.createObjectURL(await zipFileBlob);
      const zipFileBlobLink = document.createElement("a");
      zipFileBlobLink.href = zipFileBlobUrl;
      zipFileBlobLink.download = `${backup.name}.zip`;
      zipFileBlobLink.click();
    },
    [db]
  );

  const makeBackup = useCallback(async () => {
    if (!(moonraker.rpc && moonraker.printer)) return;

    setActiveBackup({ running: true, log: [], progress: 0, maxProgress: 0 });
    const backup = await createBackup(db, moonraker, ({ log, progress, maxProgress }) => {
      setActiveBackup(
        produce((draft) => {
          if (log) draft.log.push({ time: new Date(), message: log });
          if (progress) draft.progress = progress;
          if (maxProgress) draft.maxProgress = maxProgress;
        })
      );
    });

    setBackups(
      produce((draft) => {
        draft.unshift(backup);
      })
    );

    setTimeout(() => {
      setActiveBackup(
        produce((draft) => {
          draft.running = false;
        })
      );

      navigate(backup.id);
    }, 2000);
  }, [moonraker, db, navigate]);

  return (
    <div>
      <h3 className={cx("text-lg", "breadcrumbs")}>
        {moonraker.rpc && (
          <div className={cx("inline-block", "float-right")}>
            <a className={cx("btn", "flex", "flex-row")} onClick={() => makeBackup()}>
              Create Backup <BsSave size="1.5rem" className={cx("pl-2")} />
            </a>
          </div>
        )}

        <ul>
          <li>Backups</li>
        </ul>
      </h3>

      <Modal show={activeBackup.running}>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Config Backup in Progress</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <pre>
              {activeBackup.log
                .slice(-10)
                .map(({ time, message }) => `${time.toLocaleString()} :: ${message}`)
                .join("\n")}
            </pre>
          </Modal.Body>

          <Modal.Footer>
            <progress className={cx("w-full")} max={activeBackup.maxProgress} value={activeBackup.progress}></progress>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <table className={cx("table", "table-zebra", "w-full")}>
        <tbody>
          {backups.map((backup) => (
            <tr key={backup.id}>
              <td>
                <NavLink to={`${backup.id}`}>{backup.name}</NavLink>
              </td>
              <td>{backup.date.toLocaleDateString()}</td>
              <td className={cx("w-fit")}>
                <a className={cx("btn", "btn-sm", "float-right")} onClick={() => downloadBackup(backup)}>
                  Download <BsDownload size="1.25rem" className={cx("ml-5")} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
