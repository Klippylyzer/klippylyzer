import React, { FormEvent, useCallback, useRef, useState } from "react";
import { BsCheckCircle, BsSlashCircle } from "react-icons/bs";
import cx from "ts-classnames";

import useDb, { Printer } from "../Context/Database";
import { Spinner } from ".";
import Button from "./Buttons";
import Modal from "./Modal";

type ConnectionStatus = null | { status: "PENDING" } | { status: "SUCCESS" } | { status: "ERROR"; error: string };

export default function AddPrinterModal({
  showModal,
  hideModal,
  onSave,
}: {
  showModal: boolean;
  hideModal: () => void;
  onSave: (printer: Printer) => void;
}) {
  const currentUrl = new URL(document.location.href);
  const defaultMoonrakerUrl = currentUrl.protocol + "//mainsailos.local";

  const db = useDb();

  const formRef = useRef<HTMLFormElement>(null);

  const [moonrakerUrl, setMoonrakerUrl] = useState(defaultMoonrakerUrl);
  const [apiKey, setApiKey] = useState<string>("");
  const [connectionStatus, setConnectionSuccessful] = useState<ConnectionStatus>(null);

  const testConnection = useCallback(async () => {
    setConnectionSuccessful({ status: "PENDING" });
    try {
      const resp = await fetch(new URL("/printer/info", moonrakerUrl).toString(), {
        headers: apiKey.trim().length > 0 ? { "X-API-KEY": apiKey } : undefined,
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
  }, [moonrakerUrl, apiKey, setConnectionSuccessful]);

  const addPrinter = useCallback(
    async (printer: Omit<Printer, "id">) => {
      if (!db) return;

      const txn = db.transaction("printers", "readwrite");
      const store = txn.objectStore("printers");

      const id = await store.add(printer);

      onSave({ id, ...printer });
      hideModal();
    },
    [db, hideModal, onSave]
  );

  return (
    <Modal
      size="md"
      show={showModal}
      onClose={() => {
        hideModal();
        setMoonrakerUrl(defaultMoonrakerUrl);
        setApiKey("");
        formRef.current?.reset();
      }}
    >
      <form
        ref={formRef}
        onSubmit={(evt: FormEvent) => {
          evt.preventDefault();

          const formData = new FormData(evt.target as HTMLFormElement);
          const printer = Object.fromEntries(formData.entries()) as Omit<Printer, "id">;

          addPrinter(printer)
            .then(() => {
              hideModal();
              (evt.target as HTMLFormElement).reset();
            })
            .catch((e) => {
              console.error(e, formData, evt.target, printer);
              alert(e.toString());
            });
        }}
      >
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Add a Printer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label htmlFor="name" className={cx("block")}>
                Printer Name
              </label>
              <input
                type="text"
                name="name"
                className={cx(
                  "block",
                  "w-full",
                  "bg-base-100",
                  "border",
                  "rounded-sm",
                  "border-gray-200",

                  "text-gray-900",
                  "dark:bg-gray-800",
                  "dark:text-gray-200",
                  "dark:border-gray-100"
                )}
                required
                defaultValue="My Printer"
                placeholder="My Printer"
              />
            </div>

            <div>
              <label htmlFor="url" className={cx("block")}>
                Printer URL
              </label>
              <input
                type="url"
                name="url"
                className={cx(
                  "block",
                  "w-full",
                  "bg-base-100",
                  "border",
                  "rounded-sm",
                  "border-gray-200",
                  "text-gray-900",
                  "dark:bg-gray-800",
                  "dark:text-gray-200",
                  "dark:border-gray-100"
                )}
                required
                value={moonrakerUrl}
                onChange={(evt) => setMoonrakerUrl(evt.target.value)}
              />
              <span className={cx("block", "text-gray-600", "dark:text-gray-400")}>
                You must add{" "}
                <code
                  className={cx(
                    "border",
                    "border-gray-200",
                    "bg-gray-100",
                    "dark:bg-gray-900",
                    "border-gray-800",
                    "p-0.5",
                    "-m-0.5"
                  )}
                >
                  {currentUrl.hostname}
                </code>{" "}
                as a CORS domain in your{" "}
                <code
                  className={cx(
                    "border",
                    "border-gray-200",
                    "bg-gray-100",
                    "dark:bg-gray-900",
                    "border-gray-800",
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

            <div>
              <label htmlFor="apikey" className={cx("block")}>
                Printer API Key
              </label>
              <input
                type="text"
                name="apikey"
                className={cx(
                  "block",
                  "w-full",
                  "bg-base-100",
                  "border",
                  "rounded-sm",
                  "border-gray-200",

                  "text-gray-900",
                  "dark:bg-gray-800",
                  "dark:text-gray-200",
                  "dark:border-gray-100"
                )}
                placeholder="API Key"
                value={apiKey}
                onChange={(evt) => setApiKey(evt.target.value)}
              />
              <span className={cx("text-gray-600", "dark:text-gray-400")}>
                You can get this by checking http://myprinter.local/
              </span>
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

              <Button
                type="submit"
                disabled={!(connectionStatus?.status === "SUCCESS" && formRef.current?.checkValidity())}
              >
                Add Printer
              </Button>
            </div>

            {connectionStatus?.status === "ERROR" && (
              <div className={cx("w-full", "text-red-500", "text-sm")}>{connectionStatus.error}</div>
            )}
          </Modal.Footer>
        </Modal.Content>
      </form>
    </Modal>
  );
}
