export type Temps = { [key: string]: number };
export type Stats = {
  time: number;
  values: Record<string, Record<string, number>>;
};

export type KlippyLog = {
  raw: string;
  config: string;
  stats: Stats[];
};

export * from "./basic";
export * from "./moonraker";
export * from "./rpc";
export * from "./worker";
