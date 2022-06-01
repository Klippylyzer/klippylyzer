import "./main.scss";
import "flowbite";

import { createRoot } from "react-dom/client";

import App from "./App";

const worker = new Worker(new URL("./worker/index.ts", import.meta.url), {
  name: "klippyWorker",
  type: "module",
});

const reactRoot = createRoot(document.getElementById("app") as HTMLDivElement);
reactRoot.render(<App worker={worker} />);
