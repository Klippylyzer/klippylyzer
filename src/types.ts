export type Stats = {
  time: number;
  values: Record<string, Record<string, number>>;
};

export type KlippyLog = {
  raw: string;
  config: string;
  stats: Stats[];
};

export type Temps = { [key: string]: number };

export type KlippyWorkerRequests = { type: "parseFiles"; data: FileList };
export type KlippyWorkerMessages =
  | { type: "ready" }
  | { type: "parseFiles"; data: KlippyLog };
