declare module "react-syntax-highlighter/dist/esm/languages/prism/log" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const language: any;
  export default language;
}

declare module "echarts-gl/charts";
declare module "echarts-gl/components";

declare module "echarts-stat" {
  let transform: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    regression: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    histogram: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clustering: any;
  };
}
