import { LineChart, LinesChart } from "echarts/charts";
import {
  DatasetComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import ECharts from "echarts-for-react/lib/core";
import produce from "immer";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fragment } from "react";
import colors from "tailwindcss/colors";
import cx from "ts-classnames";

import { KlippyLog, Temps } from "../../types";
import { statsToTemps } from "../../utils";

echarts.use([
  LineChart,
  LinesChart,
  GridComponent,
  DatasetComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  CanvasRenderer,
  MarkAreaComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  ToolboxComponent,
]);
type Props = { klippyLog: KlippyLog };

async function* locateProblematicAreas(
  allTemps: Temps[]
): AsyncGenerator<[string, [{ name: string; xAxis: number }, { xAxis: number }]]> {
  let lastTemps: Temps = allTemps[1];

  for (let tempIdx = 2; tempIdx < allTemps.length; tempIdx++) {
    const temps = allTemps[tempIdx];
    const elapsed = temps.time - lastTemps.time;

    for (const [heater, temperature] of Object.entries(temps.temps)) {
      if (temperature === 0 || lastTemps.temps[heater] === 0) continue;

      const delta = temperature - lastTemps.temps[heater];

      if (Math.abs(delta / elapsed) > 10) {
        yield [
          heater,
          [
            {
              name: `${heater} changed ${delta.toFixed(1)}C`,
              xAxis: tempIdx - 1,
            },
            { xAxis: tempIdx },
          ],
        ];
      }
    }

    lastTemps = temps;
  }
}

type ChartData = {
  time: number[];
  legend: string[];
  series: Array<{ name: string; type: "line"; data: [number, number][] }>;
};

export default function TempGraph({ klippyLog: { stats, epoch } }: Props) {
  const chart = useRef<ECharts>(null);
  const [chartData, setChartData] = useState<null | ChartData>(null);
  const [markAreas, setMarkAreas] = useState<{
    [seriesName: string]: Array<[{ name: string; xAxis: number }, { xAxis: number }]>;
  }>({});

  const temps = useMemo(() => statsToTemps(stats), [stats]);

  useEffect(() => {
    (async function () {
      console.time("calc chartData");
      const keys = Object.keys(temps[0].temps);

      const chartData: ChartData = {
        time: new Array(temps.length),
        legend: keys,
        series: keys.map((key) => ({ name: key, type: "line", data: new Array(temps.length) })),
      };

      for (let i = 0; i < temps.length; i++) {
        keys.forEach((key, idx) => {
          chartData.series[idx].data[i] = [temps[i].time, temps[i].temps[key]];
        });
      }

      console.timeEnd("calc chartData");
      setChartData(chartData);
    })();
  }, [epoch, temps]);

  useEffect(() => {
    setMarkAreas({});

    (async function () {
      for await (const [heater, markedArea] of locateProblematicAreas(temps)) {
        setMarkAreas(
          produce((draft) => {
            if (!draft[heater]) draft[heater] = [];
            draft[heater].push(markedArea);
          })
        );
      }
    })();
  }, [temps, setMarkAreas]);

  return (
    <section>
      <h3 className={cx("text-xl")}>Temperatures over time</h3>

      {chartData ? (
        <ECharts
          echarts={echarts}
          ref={chart}
          style={{ height: markAreas ? "600px" : "500px" }}
          option={{
            darkMode: true,
            textStyle: { color: "rgb(229, 231, 235)" },

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
              data: chartData.legend,
            },
            grid: {
              top: markAreas ? 180 : 80,
              bottom: 100,
            },
            xAxis: {
              type: "category",
              axisLabel: {
                formatter(v: string) {
                  return new Date((parseFloat(v) + epoch) * 1000).toLocaleTimeString();
                },
              },
              // data: chartData.time
            },
            yAxis: { type: "value" },
            series: chartData.series.map((series) => ({
              ...series,
              ...(series.name in markAreas
                ? {
                    markArea: {
                      itemStyle: { color: colors.red[500] },
                      label: { offset: [-20, 15], rotate: -60 },
                      data: markAreas[series.name],
                    },
                  }
                : {}),
            })),
          }}
        />
      ) : (
        <div>Loading...</div>
      )}

      {markAreas && chartData ? (
        <div className={cx("mt-2")}>
          <h3 className={cx("text-xl", "text-red-400")}>Problems were identified</h3>

          <article>
            <p>
              Large jumps in temperature are often indicative of a broken wire, or a thermometer that is not working
              properly.
            </p>
            {"extruder" in markAreas && <p></p>}
          </article>

          <table className={cx("table", "table-zebra", "table-compact", "w-full")}>
            {Object.entries(markAreas).map(([heater, markedAreas]) => (
              <Fragment key={heater}>
                <thead>
                  <tr>
                    <th className={cx("text-lg")} colSpan={2}>
                      {heater}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td colSpan={2}>
                      {heater === "extruder"
                        ? `
                        Your extruder is showing spikes in temperature. There is probably a loose crimp, or a broken
                        wire in your cable chains.
                        `
                        : heater === "bed"
                        ? `
                        Your bed is showing spikes in temperature. If you have a moving bed, you probably have a loose
                        crimp or a broken wire. If your bed is static, you have more serious problems.
                        `
                        : `
                        Your thermometer ${heater} is showing spikes in temperature. If this thermometer moves, such 
                        as a chamber thermistor on a toolhead PCB, you most likely have a bad crimp or broken wire in 
                        your cable chain.

                        If this is a static thermistor, you should check all wiring, crimps, and then verify other 
                        thermistors are working properly. Thermistors can rarely break, although it is also possible
                        your control board has a problem. Bad wiring causing voltage to leak to ground is also a
                        possibility.
                        `}
                    </td>
                  </tr>
                  {markedAreas.map(([start]) => (
                    <tr key={start.xAxis}>
                      <td>{new Date((epoch + start.xAxis) * 1000).toLocaleTimeString()}</td>
                      <td>{start.name}</td>
                    </tr>
                  ))}
                </tbody>
              </Fragment>
            ))}
          </table>
        </div>
      ) : null}
    </section>
  );
}
