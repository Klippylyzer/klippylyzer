import produce from "immer";
import React, { useCallback, useState } from "react";
import { BsCheckCircle, BsSlashCircle } from "react-icons/bs";

import useDb, { Printer } from "../Context/Database";
import cx from "../utils/cx";
import { Spinner } from ".";
import Button from "./Buttons";
import Modal from "./Modal";

type ConnectionStatus = null | { status: "PENDING" } | { status: "SUCCESS" } | { status: "ERROR"; error: string };

export default function AddEditPrinterModal({
  printer,
  showModal,
  hideModal,
  onSave,
}: {
  printer?: Printer;
  showModal: boolean;
  hideModal: () => void;
  onSave: (printer: Printer) => void;
}) {
  const currentUrl = new URL(document.location.href);
  const defaultMoonrakerUrl = currentUrl.protocol + "//mainsailos.local";

  const db = useDb();

  const [printerState, setPrinterState] = useState<Omit<Printer, "id">>({
    name: printer?.name ?? "My Printer",
    url: printer?.url ?? defaultMoonrakerUrl,
    apikey: printer?.apikey ?? null,
  });
  const [connectionStatus, setConnectionSuccessful] = useState<ConnectionStatus>(null);

  const testConnection = useCallback(async () => {
    setConnectionSuccessful({ status: "PENDING" });
    const { url, apikey } = printerState;
    try {
      const resp = await fetch(new URL("/printer/info", url).toString(), {
        headers: apikey && apikey.trim().length > 0 ? { "X-API-KEY": apikey } : undefined,
      });

      if (resp.status != 200) {
        throw new Error(resp.statusText);
      }

      setConnectionSuccessful({ status: "SUCCESS" });
    } catch (e) {
      if (e instanceof Error) {
        setConnectionSuccessful({ status: "ERROR", error: e.toString() });
      } else {
        setConnectionSuccessful({ status: "ERROR", error: `Unknown error: ${e}` });
      }
    }
  }, [printerState, setConnectionSuccessful]);

  const addPrinter = useCallback(async () => {
    if (!db) return;

    const txn = db.transaction("printers", "readwrite");
    const store = txn.objectStore("printers");

    const id = await (printer ? store.put({ id: printer.id, ...printerState }) : store.add(printerState));

    onSave({ id, ...printerState });
    setPrinterState({ name: "My Printer", apikey: "", url: defaultMoonrakerUrl });
    hideModal();
  }, [db, printer, printerState, setPrinterState, defaultMoonrakerUrl, hideModal, onSave]);

  return (
    <Modal
      size="md"
      show={showModal}
      onClose={() => {
        hideModal();
        setPrinterState({ name: "My Printer", apikey: "", url: defaultMoonrakerUrl });
      }}
    >
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>{printer ? `Edit ${printer.name}` : `Add a Printer`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={cx("form-control")}>
            <label htmlFor="name" className={cx("label")}>
              <span className={cx("label-text")}>Printer Name</span>
            </label>
            <input
              type="text"
              name="name"
              className={cx("input", "input-bordered")}
              required
              placeholder="My Printer"
              value={printerState.name}
              onChange={(evt) =>
                setPrinterState(
                  produce((draft) => {
                    draft.name = evt.target.value;
                  })
                )
              }
            />
          </div>

          <div className={cx("form-control")}>
            <label htmlFor="url" className={cx("label")}>
              <span className={cx("label-text")}>Printer URL</span>
            </label>

            <input
              type="url"
              name="url"
              className={cx("input", "input-bordered")}
              required
              value={printerState.url}
              onChange={(evt) =>
                setPrinterState(
                  produce((draft) => {
                    draft.url = evt.target.value;
                  })
                )
              }
            />
            <label htmlFor="url" className="label"></label>
            <span className={cx("label-text-alt" /*, "text-gray-600", "dark:text-gray-400"*/)}>
              You must add{" "}
              <code
                className={cx(
                  "bg-gray-100",
                  "dark:bg-gray-900",

                  "p-0.5",
                  "-m-0.5"
                )}
              >
                {currentUrl.hostname}
              </code>{" "}
              as a CORS domain in your{" "}
              <code
                className={cx(
                  "bg-gray-100",
                  "dark:bg-gray-900",

                  "p-0.5",
                  "-m-0.5"
                )}
              >
                moonraker.conf
              </code>
              .
            </span>
            {/* {currentUrl.protocol != new URL(printerUrl).protocol && (
                <span
                  className={cx("block", "text-gray-600", "dark:text-gray-400")}
                >
                  If your printer only serves over http, you must{" "}
                  <a href={currentUrl.toString().replace(/^https:/, new )}>access Klippylyzer over http</a>{" "}
                  as well
                </span>
              )} */}
          </div>

          <div className={cx("form-control")}>
            <label htmlFor="apikey" className={cx("label")}>
              <span className="label-text">Printer API Key</span>
            </label>
            <input
              type="text"
              name="apikey"
              className={cx("input", "input-bordered")}
              placeholder="API Key"
              value={printerState.apikey || ""}
              onChange={(evt) =>
                setPrinterState(
                  produce((draft) => {
                    draft.apikey = evt.target.value.length > 0 ? evt.target.value : null;
                  })
                )
              }
            />
            <label htmlFor="apikey">
              <span className={cx("label-text-alt")}>
                You can get this from{" "}
                <a href={`${printerState.url}/access/api_key`} target="_blank">
                  {printerState.url}/access/api_key
                </a>
              </span>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer className={cx("flex", "flex-col")}>
          <div className={cx("w-full", "flex", "flex-row", "justify-between")}>
            <span className={cx("flex", "flex-row", "items-center")}>
              <Button btn="Purple" type="button" onClick={testConnection}>
                Test Connection
              </Button>
              {connectionStatus?.status === "PENDING" ? (
                <Spinner size="2rem" className={cx("ml-1", "fill-gray-500", "animate-spin")} />
              ) : connectionStatus?.status === "SUCCESS" ? (
                <BsCheckCircle size="2rem" className={cx("pl-1", "fill-success")} />
              ) : connectionStatus?.status === "ERROR" ? (
                <BsSlashCircle size="2rem" className={cx("pl-1", "fill-red-500")} />
              ) : null}
            </span>

            <Button disabled={!(connectionStatus?.status === "SUCCESS")} onClick={() => addPrinter()}>
              {printer ? "Save Printer" : "Add Printer"}
            </Button>
          </div>

          {connectionStatus?.status === "ERROR" && (
            <div className={cx("w-full", "text-red-500", "text-sm")}>{connectionStatus.error}</div>
          )}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
