import { DBSchema, IDBPDatabase, openDB } from "idb";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

export interface Printer {
  id: number;
  name: string;
  url: string;
  apikey: string | null;
}

export interface Log {
  id: number;
  printerId?: number;
  fileName: string;
  uploadDate: Date;
  logFile: string;
}

export interface Config {
  lastPrinter?: number;

  autoConnectLastPrinter?: boolean;
  autoBackupOnConnect?: boolean;
  autoClearOldBackups?: boolean;
}

export interface BackupFile {
  id: number;
  modified: number;
  path: string;

  size: number;
  contents: ArrayBuffer;
}

export interface Backup {
  id: number;
  date: Date;
  name: string;
  files: Array<{ id: BackupFile["id"]; name: BackupFile["path"] }>;
}

export interface Schema extends DBSchema {
  printers: {
    value: { id?: Printer["id"] } & Omit<Printer, "id">;
    key: number;
    indexes: { "by-name": string };
  };

  logs: {
    value: { id?: Log["id"] } & Omit<Log, "id">;
    key: number;
    indexes: { "by-date": Date };
  };

  config: {
    value: Config;
    key: number;
  };

  backupFile: {
    value: { id?: BackupFile["id"] } & Omit<BackupFile, "id">;
    key: number;
    indexes: { "by-id": number; "by-name": string; "by-modified-name": [number, string] };
  };

  backup: {
    value: { id?: Backup["id"] } & Omit<Backup, "id">;
    key: number;
    indexes: { "by-name": string; "by-date": Date };
  };
}

export type KlippylyzerDatabase = IDBPDatabase<Schema>;

export async function getDb() {
  return await openDB<Schema>("logs", 2, {
    upgrade(db, oldVersion) {
      switch (oldVersion) {
        case 0: {
          const configStore = db.createObjectStore("config", {});
          configStore.put({}, 0);

          const logStore = db.createObjectStore("logs", {
            keyPath: "id",
            autoIncrement: true,
          });
          logStore.createIndex("by-date", "uploadDate");

          const printerStore = db.createObjectStore("printers", {
            keyPath: "id",
            autoIncrement: true,
          });
          printerStore.createIndex("by-name", "name", { unique: true });
        }
        // fallthrough

        case 1: {
          const backupFileStore = db.createObjectStore("backupFile", { keyPath: "id", autoIncrement: true });
          backupFileStore.createIndex("by-id", "id", { unique: true });
          backupFileStore.createIndex("by-name", "name", { multiEntry: true });
          backupFileStore.createIndex("by-modified-name", ["modified", "name"], { unique: true });

          const backupStore = db.createObjectStore("backup", { keyPath: "id", autoIncrement: true });
          backupStore.createIndex("by-date", "date", { unique: true });
          backupStore.createIndex("by-name", "name", { unique: true });
        }
      }
    },
  });
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const DbContext = createContext<IDBPDatabase<Schema>>(null!);

export function DatabaseProvider({ children }: PropsWithChildren<unknown>) {
  const [db, setDb] = useState<null | IDBPDatabase<Schema>>(null);

  useEffect(() => {
    (async function () {
      setDb(await getDb());
    })();
  }, []);

  if (db) {
    return <DbContext.Provider value={db}>{children}</DbContext.Provider>;
  }

  return null;
}

export default function useDb(): IDBPDatabase<Schema> {
  return useContext(DbContext);
}
