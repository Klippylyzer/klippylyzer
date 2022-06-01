import "d3";
import "billboard.js/dist/billboard.css";

import bb, { line, zoom } from "billboard.js";
import { useEffect, useMemo, useRef, useState } from "react";

import { Stats } from "../types";

type Props = { stats: Stats[]; left?: number; right?: number };

export default function TempGraph({ stats, left, right }: Props) {
  const chartElement = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<bb.Chart>();

  const chartData = useMemo<null | {
    x: "time";
    rows: [string[], ...number[][]];
  }>(() => {
    if (!stats) return null;

    const keys: string[] = [
      "time",
      ...Object.entries(stats[1].values)
        .filter(([, values]) => values.temp !== undefined)
        .map(([key]) => key),
    ];

    const rows: number[][] = stats.slice(1).map((stat) => [
      stat.time,
      ...Object.entries(stat.values)
        .filter(([key]) => keys.includes(key))
        .map(([, values]) => parseFloat(values.temp)),
    ]);

    return { x: "time", rows: [keys, ...rows] };
  }, [stats]);

  useEffect(() => {
    console.log("building chart", chartElement);
    if (!chartElement.current) return;

    const chart = bb.generate({
      bindto: chartElement.current,
      size: { height: Math.min(600, window.innerHeight - 100) },
      zoom: { enabled: zoom(), type: "drag" },
      data: {
        type: line(),
        rows: [],
        x: "time",
      },
      axis: {
        x: {
          // type: "timeseries",
        },
      },
    });

    setChart(chart);
    return () => chart.destroy();
  }, [chartElement]);

  useEffect(() => {
    if (!(chart && chartData != null)) return;
    console.log("loading chart data");

    chart.load(chartData);
  }, [chart, chartData]);

  useEffect(() => {
    if (!(chart && chartData && left && right)) return;

    console.log(
      chart,
      chartData.rows[left][0],
      chartData.rows[right][0],
      chart.zoom([chartData.rows[left][0], chartData.rows[right][0]])
    );
  }, [chart, chartData, left, right]);

  return <div ref={chartElement} />;
}
