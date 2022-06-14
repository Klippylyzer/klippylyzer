import "./main.scss";

// import "flowbite";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { DatabaseProvider } from "./Context/Database";
import { KlippyLogProvider } from "./Context/KlippyLog";
import { MoonrakerProvider } from "./Context/Moonraker";
import { WebWorkerProvider } from "./Context/WebWorker";

const rootUrl = new URL(document.location.href);

const reactRoot = createRoot(document.getElementById("app") as HTMLDivElement);
reactRoot.render(
  <WebWorkerProvider>
    <DatabaseProvider>
      <MoonrakerProvider>
        <KlippyLogProvider>
          <HelmetProvider>
            <BrowserRouter basename={rootUrl.host.endsWith(".github.io") ? "/klippylyzer" : undefined}>
              <App />
            </BrowserRouter>
          </HelmetProvider>
        </KlippyLogProvider>
      </MoonrakerProvider>
    </DatabaseProvider>
  </WebWorkerProvider>
);
