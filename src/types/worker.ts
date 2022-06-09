import { KlippyLog } from ".";

export type KlippyWorkerRequests = { type: "parseFiles"; data: FileList };
export type KlippyWorkerMessages = { type: "ready" } | { type: "parseFiles"; klippyLog: KlippyLog };
