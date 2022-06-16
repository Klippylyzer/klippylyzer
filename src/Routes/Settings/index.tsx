import produce from "immer";
import { useCallback, useEffect, useState } from "react";
import { BsLock, BsPencil, BsPlus, BsQuestion, BsTrash } from "react-icons/bs";
import cx from "ts-classnames";

import AddPrinterModal from "../../Components/AddPrinterModal";
import { useAlert } from "../../Context/Alert";
import useDb, { Config, Printer } from "../../Context/Database";

export default function Settings() {
  const db = useDb();
  const alert = useAlert();

  const [printers, setPrinters] = useState<Array<Printer>>([]);
  const [config, setConfig] = useState<Config>({});

  const [addingPrinter, setAddingPrinter] = useState(false);
  const [editingPrinter, setEditingPrinter] = useState<undefined | Printer>(undefined);
  const [confirmingDeletePrinter, setConfirmingDeletePrinter] = useState<null | number>(null);

  useEffect(() => {
    db.getAll("printers").then((printers) => setPrinters(printers as Printer[]));
  }, [db, setPrinters]);

  useEffect(() => {
    db.getAll("config").then(([config = {}]) => setConfig(config as Config));
  }, [db, setConfig]);

  const deletePrinter = useCallback(
    (printerId: number) => {
      db.delete("printers", printerId);
      setPrinters(produce((draft) => draft?.filter((printer) => printer.id !== printerId)));
    },
    [db, setPrinters]
  );

  const updateConfig = useCallback(
    async (configChanges: Partial<Config>) => {
      await db.put("config", { ...config, ...configChanges }, 0);
      setConfig({ ...config, ...configChanges });
    },
    [db, config, setConfig]
  );

  return (
    <section>
      {(addingPrinter || editingPrinter) && (
        <AddPrinterModal
          printer={editingPrinter}
          onSave={(printer: Printer) => setPrinters((draft) => [...draft.filter((p) => p.id !== printer.id), printer])}
          hideModal={() => {
            setAddingPrinter(false);
            setEditingPrinter(undefined);
          }}
          showModal={!!(addingPrinter || editingPrinter)}
        />
      )}

      <h3 className={cx("text-xl")}>Settings</h3>

      <table className={cx("table", "table-zebra", "w-full")}>
        <colgroup>
          <col className={cx("w-full")} />
        </colgroup>
        {config && (
          <tbody>
            <tr>
              <td>Automatically connect to the last printer</td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className={cx("checkbox")}
                  checked={!!config.autoConnectLastPrinter}
                  onChange={(evt) => updateConfig({ autoConnectLastPrinter: evt.target.checked })}
                />
              </td>
            </tr>
            {/*
            <tr>
              <td>Automatically create a backup on printer connection</td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className={cx("checkbox")}
                  checked={!!config.autoBackupOnConnect}
                  onChange={(evt) => updateConfig({ autoBackupOnConnect: evt.target.checked })}
                />
              </td>
            </tr>
            */}
            {/*
            <tr>
              <td>Automatically delete old backups</td>
              <td>
                <BsQuestionCircleFill
                  size="1.5em"
                  onClick={() => {
                    alert.show({
                      title: "Help",
                      timeout: 5000,
                      icon: () => (
                        <BsQuestionCircleFill size="1.5em" className={cx("fill-blue-700", "dark:fill-blue-300")} />
                      ),
                      message: "this is a test",
                    });
                  }}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className={cx("checkbox")}
                  checked={!!config.autoClearOldBackups}
                  onChange={(evt) => updateConfig({ autoClearOldBackups: evt.target.checked })}
                />
              </td>
            </tr>
            */}
          </tbody>
        )}
      </table>

      <hr className={cx("my-2", "border-gray-500")} />

      <h3 className={cx("text-xl")}>Printers</h3>

      <table className={cx("table", "table-zebra", "w-full")}>
        <tbody>
          {printers?.map((printer) => (
            <tr key={printer.id}>
              <td className={cx("w-1/2")}>{printer.name}</td>
              <td>
                {printer.url}{" "}
                {printer.apikey && (
                  <BsLock
                    onClick={() =>
                      alert.show({
                        title: "Api Key",
                        message: "This printer has an API Key configured for secure access",
                      })
                    }
                  />
                )}
              </td>
              <td className={cx("w-fit")}>
                <span className={cx("btn-group")}>
                  <button
                    className={cx("btn", "btn-sm", "gap-1", "btn-secondary")}
                    onClick={() => setEditingPrinter(printer)}
                  >
                    Edit
                    <BsPencil />
                  </button>
                  <button
                    className={cx("btn", "btn-sm", "gap-1", {
                      "btn-warning": confirmingDeletePrinter !== printer.id,
                      "btn-error": confirmingDeletePrinter === printer.id,
                    })}
                    onBlur={() => {
                      if (confirmingDeletePrinter) setConfirmingDeletePrinter(null);
                    }}
                    onClick={() => {
                      if (confirmingDeletePrinter === printer.id) {
                        deletePrinter(printer.id);
                        setConfirmingDeletePrinter(null);
                      } else {
                        setConfirmingDeletePrinter(printer.id);
                      }
                    }}
                  >
                    Delete
                    {confirmingDeletePrinter === printer.id ? <BsQuestion /> : <BsTrash />}
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className={cx("text-right")}>
              <button className={cx("btn", "btn-sm", "btn-success", "gap-1")} onClick={() => setAddingPrinter(true)}>
                Add Printer <BsPlus />
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
