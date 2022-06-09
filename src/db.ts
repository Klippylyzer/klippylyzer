import { DBSchema, IDBPDatabase, openDB } from "idb";
import React from "react";

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
}

export async function getDb() {
  return await openDB<Schema>("logs", 1, {
    upgrade(db) {
      db.createObjectStore("config", {});

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
    },
  });
}

export const DbContext = React.createContext<null | IDBPDatabase<Schema>>(null);
export function useDb(): null | IDBPDatabase<Schema> {
  const [db, setDb] = React.useState<null | IDBPDatabase<Schema>>(null);

  React.useEffect(() => {
    (async function () {
      setDb(await getDb());
    })();
  });

  return db;
}

export default getDb;
