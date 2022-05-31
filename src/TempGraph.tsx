import { useEffect, useMemo, useRef } from "preact/hooks";
import { Stats } from "./types";
import "d3";
import bb, { line, zoom } from "billboard.js";
import "billboard.js/dist/billboard.css";

type Props = { stats: Stats[] };

export default function TempGraph({ stats }: Props) {
  const chartElement = useRef<HTMLDivElement>();

  const jsonData = useMemo(() => {
    if (stats) {
      return stats.slice(1).map((stat) => ({
        time: stat.time,
        ...Object.fromEntries(
          Object.entries(stat.values)
            .filter(([_, values]) => values.temp !== undefined)
            .map(([key, values]) => [key, parseFloat(values.temp)])
        ),
      }));
    }
  }, [stats]);

  useEffect(() => {
    if (!(chartElement && jsonData)) return;

    const chart = bb.generate({
      bindto: chartElement.current,
      size: { height: Math.min(600, window.innerHeight - 100) },
      zoom: { enabled: zoom(), type: "drag" },
      data: {
        type: line(),
        json: jsonData,
        keys: {
          x: "time",
          value: Object.keys(jsonData[0]).filter((k) => k !== "time"),
        },
      },
    });

    return () => chart.destroy();
  }, [chartElement, jsonData]);

  return <div ref={chartElement} />;
}
