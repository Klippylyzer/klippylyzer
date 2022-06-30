import { enableMapSet } from "immer";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

enableMapSet();

import App from "./App";
import { AlertProvider } from "./Context/Alert";
import { DatabaseProvider } from "./Context/Database";
import { KlippyLogProvider } from "./Context/KlippyLog";
import { MoonrakerProvider } from "./Context/Moonraker";
import { WebWorkerProvider } from "./Context/WebWorker";

const reactRoot = createRoot(document.getElementById("app") as HTMLDivElement);
reactRoot.render(
  <WebWorkerProvider>
    <DatabaseProvider>
      <MoonrakerProvider>
        <KlippyLogProvider>
          <AlertProvider>
            <HelmetProvider>
              <BrowserRouter basename={"/klippylyzer/"}>
                <App />
              </BrowserRouter>
            </HelmetProvider>
          </AlertProvider>
        </KlippyLogProvider>
      </MoonrakerProvider>
    </DatabaseProvider>
  </WebWorkerProvider>
);
