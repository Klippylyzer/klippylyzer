export type Stats = {
  time: number;
  values: Record<string, Record<string, string>>;
};

export type KlippyLog = {
  raw: string;
  config: string;
  stats: Stats[];
};
