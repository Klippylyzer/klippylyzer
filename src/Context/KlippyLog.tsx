import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

import { KlippyLog } from "../types";

type KlippyLogState = [undefined | KlippyLog, Dispatch<SetStateAction<undefined | KlippyLog>>];

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const KlippyLogContext = createContext<KlippyLogState>(undefined!);

export function KlippyLogProvider({ children }: React.PropsWithChildren<unknown>) {
  const [klippyLog, setKlippyLog] = useState<undefined | KlippyLog>(undefined);

  return <KlippyLogContext.Provider value={[klippyLog, setKlippyLog]}>{children}</KlippyLogContext.Provider>;
}

export function useKlippyLog(): KlippyLogState {
  return useContext(KlippyLogContext);
}

export default useKlippyLog;
