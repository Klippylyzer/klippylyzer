import { LineChart, LinesChart } from "echarts/charts";
import {
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  DatasetComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  // GridSimpleComponent,
  GridComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  LegendComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TitleComponent,
  // PolarComponent,
  // RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import {
  CanvasRenderer,
  // SVGRenderer,
} from "echarts/renderers";
import ECharts from "echarts-for-react/lib/core";
import { useEffect, useRef,useState } from "react";

import { Stats } from "../types";
import { statsToTemps } from "../utils";

echarts.use([
  LineChart,
  LinesChart,
  GridComponent,
  DatasetComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  CanvasRenderer,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  ToolboxComponent,
]);
type Props = { stats: Stats[]; left?: number; right?: number };

export default function TempGraph({ stats }: Props) {
  const chart = useRef<ECharts>(null);
  const [chartData, setChartData] = useState<null | {
    [key: string]: number[];
  }>(null);

  useEffect(() => {
    (async function () {
      const temps = statsToTemps(stats);
      const keys = Object.keys(temps[0]);

      const chartData = Object.fromEntries(
        keys.map((k) => [k, new Array(temps.length)])
      );

      for (const key of keys) {
        for (let i = 0; i < temps.length; i++) {
          chartData[key][i] = temps[i][key];
        }
      }

      setChartData(chartData);
    })();
  }, [stats]);

  if (chartData) {
    return (
      <ECharts
        ref={chart}
        echarts={echarts}
        option={{
          darkMode: true,
          textStyle: { color: "rgb(229, 231, 235)" },
          title: {
            text: "Temperatures",
            textStyle: { color: "rgb(229, 231, 235)" },
          },
          toolbox: {
            feature: {
              dataZoom: { yAxisIndex: "none" },
              saveAsImage: {},
            },
          },
          tooltip: { trigger: "axis" },
          dataZoom: [{ type: "slider" }, { type: "inside" }],
          legend: {
            textStyle: { color: "rgb(229, 231, 235)" },
            data: Object.keys(chartData).filter((k) => k !== "time"),
          },
          xAxis: { type: "category", data: chartData.time },
          yAxis: { type: "value" },
          series: Object.entries(chartData)
            .filter(([k]) => k !== "time")
            .map(([k, v]) => ({ name: k, type: "line", data: v })),
        }}
      />
    );
  }

  return <div>Loading...</div>;
}
