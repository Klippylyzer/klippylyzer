import * as zip from "@zip.js/zip.js";

import { Backup, KlippylyzerDatabase } from "../../Context/Database";
import { MoonrakerContext } from "../../Context/Moonraker";

export async function zipBackup(db: KlippylyzerDatabase, backup: Backup): Promise<Blob> {
  const backupFileIds = backup.files.map((file) => file.id);
  const blobWriter = new zip.BlobWriter();
  const zipWriter = new zip.ZipWriter(blobWriter);

  const backupFiles = await db.getAll(
    "backupFile",
    IDBKeyRange.bound(Math.min(...backupFileIds), Math.max(...backupFileIds))
  );
  for (const backupFile of backupFiles) {
    if (backupFileIds.includes(backupFile.id || -1)) {
      await zipWriter.add(backupFile.path, new zip.Uint8ArrayReader(new Uint8Array(backupFile.contents)));
    }
  }

  await zipWriter.close();

  return blobWriter.getData();
}

export async function createBackup(
  db: KlippylyzerDatabase,
  moonraker: MoonrakerContext,
  sendUpdate: (update: { progress?: number; maxProgress?: number; log?: string }) => void
): Promise<Backup> {
  if (!(moonraker.rpc && moonraker.printer))
    throw new Error("Cannot create a backup unless you are connected to a printer");

  const now = new Date();

  const backupFiles: Backup["files"] = [];
  const fileList = await moonraker.rpc.call("server.files.list", { root: "config" });
  let progress = 0;

  sendUpdate({
    progress: 0,
    maxProgress: fileList.length,
    log: `Found ${fileList.length} files to backup`,
  });

  for (const file of fileList) {
    let backupFileId = await db.getKeyFromIndex("backupFile", "by-modified-name", [file.modified, file.path]);

    if (backupFileId === undefined) {
      const resp = await fetch(new URL("/server/files/config/" + file.path, moonraker.printer.url).toString());
      const contents = await resp.arrayBuffer();

      backupFileId = await db.add("backupFile", {
        path: file.path,
        modified: file.modified,
        size: contents.byteLength,
        contents,
      });

      sendUpdate({
        log: `${file.path} downloaded (${contents.byteLength.toLocaleString()}B)`,
      });
    } else {
      sendUpdate({ log: `${file.path} already exists` });
    }

    backupFiles.push({ id: backupFileId, name: file.path });

    progress++;
    sendUpdate({ progress });
  }

  const backup = { date: now, name: `Backup at ${now.toLocaleString()}`, files: backupFiles };
  const id = await db.add("backup", backup);

  sendUpdate({ log: "Backup complete" });

  return {
    id,
    ...backup,
  };
}
