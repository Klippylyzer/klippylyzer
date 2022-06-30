import React, { createContext, useContext, useEffect, useState } from "react";

import Modal from "../Components/Modal";
import cx from "../utils/cx";
import { useAnimationFrame } from "../utils/hooks";

interface Alert {
  message: string | (() => JSX.Element);
  title?: string | (() => JSX.Element);
  type?: "success" | "info" | "warning" | "error";
  timeout?: number;
  icon?: () => JSX.Element;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AlertContext = createContext<{ show: (alert?: Alert) => void }>(null!);

export function AlertProvider({ children }: React.PropsWithChildren<unknown>) {
  const [alertState, setAlertState] = useState<undefined | Alert>();
  const [timer, setTimer] = useState<null | number>(null);

  useAnimationFrame((delta) => {
    setTimer((prev) => (prev !== null ? prev + delta : null));
  });

  useEffect(() => {
    if (!alertState?.timeout) return;

    setTimer(0);
  }, [alertState, setTimer]);

  useEffect(() => {
    if (timer !== null && alertState?.timeout && timer >= alertState.timeout) {
      setAlertState(undefined);
      setTimer(null);
    }
  }, [timer, alertState, setAlertState]);

  return (
    <AlertContext.Provider value={{ show: setAlertState }}>
      <>
        {alertState && (
          <Modal
            onClose={() => {
              setTimer(null);
              setAlertState(undefined);
            }}
            show
          >
            <Modal.Content>
              <Modal.Header>
                {alertState.icon && alertState.icon()}
                <Modal.Title>
                  {typeof alertState.title === "string"
                    ? alertState.title
                    : typeof alertState.title === "function"
                    ? alertState.title()
                    : "Alert"}
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                {typeof alertState.message === "string" ? alertState.message : alertState.message()}
              </Modal.Body>

              {alertState.timeout && timer !== null && (
                <Modal.Footer className={cx("!p-0")}>
                  <progress
                    className={cx("progress", "progress-primary", "rounded-t-none")}
                    value={alertState.timeout - timer}
                    max={alertState.timeout}
                  />
                </Modal.Footer>
              )}
            </Modal.Content>
          </Modal>
        )}
        {children}
      </>
    </AlertContext.Provider>
  );
}

export function useAlert() {
  return useContext(AlertContext);
}
