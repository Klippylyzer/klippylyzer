import { Property } from "csstype";
import { LineChart, LinesChart } from "echarts/charts";
import {
  DatasetComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import {
  CanvasRenderer,
  // SVGRenderer,
} from "echarts/renderers";
import ECharts from "echarts-for-react/lib/core";
import { SurfaceChart } from "echarts-gl/charts";
import { Grid3DComponent } from "echarts-gl/components";
import { useEffect, useMemo, useRef, useState } from "react";
import colors from "tailwindcss/colors";
import cx from "ts-classnames";

import useMoonraker from "../../Context/Moonraker";
import { BedMeshStatus } from "../../types";
import { useRpcHandler } from "../../utils/jsonrpc";

// TOOD: Reduce
echarts.use([
  SurfaceChart,
  Grid3DComponent,
  CanvasRenderer,
  DatasetComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  LinesChart,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
]);

function bedMeshToSeries(mesh: number[][], meshSize: { min_x: number; min_y: number; max_x: number; max_y: number }) {
  const series = [];

  for (let iy = 0; iy < mesh.length; iy++) {
    const row = mesh[iy];
    for (let ix = 0; ix < row.length; ix++) {
      const value = row[ix];

      series.push([
        (meshSize.max_x - meshSize.min_x) * (ix / row.length) + meshSize.min_x,
        (meshSize.max_y - meshSize.min_y) * (iy / mesh.length) + meshSize.min_y,
        value,
      ]);
    }
  }

  return series;
}

export default function BedMesh() {
  const { rpc } = useMoonraker();
  const [bedMesh, setBedMesh] = useState<null | Partial<BedMeshStatus>>(null);
  const [bedSize, setBedSize] = useState<null | { min_x: number; min_y: number; max_x: number; max_y: number }>(null);
  const [meshType, setMeshType] = useState<"probed" | "interpolated" | "both">("interpolated");
  const [scale, setScale] = useState(1);
  const chart = useRef<ECharts>(null);

  useEffect(() => {
    if (!rpc) return;

    rpc
      .call("printer.objects.subscribe", { objects: { bed_mesh: null, toolhead: null } })
      .then(({ status: { bed_mesh, toolhead } }) => {
        if (bed_mesh) {
          setBedMesh(bed_mesh);
        }
        if (toolhead) {
          setBedSize({
            min_x: toolhead.axis_minimum[0],
            max_x: toolhead.axis_maximum[0],
            min_y: toolhead.axis_minimum[1],
            max_y: toolhead.axis_maximum[1],
          });
        }
      });
  }, [rpc]);

  useRpcHandler(rpc, "notify_status_update", (params) => {
    const [{ bed_mesh }] = params;
    if (!bed_mesh) return;

    console.log("got mesh update", bed_mesh);
    setBedMesh(bedMesh ? { ...bedMesh, ...bed_mesh } : bed_mesh);
  });

  useEffect(() => {
    if (!(bedMesh?.profiles && bedSize && chart.current)) return;

    const meshSize = bedMesh?.profiles[bedMesh?.profile_name || ""]?.mesh_params;
    const series = [];

    if (bedMesh?.probed_matrix && (meshType === "probed" || meshType === "both")) {
      series.push({
        type: "surface",
        data: bedMeshToSeries(bedMesh.probed_matrix, meshSize),
        dataShape: [bedMesh.probed_matrix.length, bedMesh.probed_matrix[0].length],
      });
    }

    if (bedMesh?.mesh_matrix && (meshType === "interpolated" || meshType === "both")) {
      series.push({
        type: "surface",
        data: bedMeshToSeries(bedMesh.mesh_matrix, bedSize),
        dataShape: [bedMesh.mesh_matrix.length, bedMesh.mesh_matrix[0].length],
      });
    }

    chart.current.getEchartsInstance().setOption({ series });
  }, [bedMesh, bedSize, meshType, chart]);

  const { center, min, max, scaleMin, scaleMax } = useMemo(() => {
    // Find min and max deviation of the mesh
    if (!bedMesh?.mesh_matrix) return { center: 0, min: 0, max: 0, scaleMin: 0.2, scaleMax: 2 };

    const mesh = bedMesh.mesh_matrix;
    const min = Math.min(...mesh.flatMap((row) => row.flatMap((value) => value)));
    const max = Math.max(...mesh.flatMap((row) => row.flatMap((value) => value)));

    const center = (max + min) / 2;
    const scaleMin = Math.ceil((max - min) * 10) / 10;
    const scaleMax = scaleMin * 10;

    const resp = { center, scaleMin, scaleMax, min, max };
    console.log(resp);
    return resp;
  }, [bedMesh]);

  const axisFormat = {
    axisLine: { lineStyle: { color: colors.gray[300] } },
    axisLabel: {
      textStyle: { color: colors.gray[200] },
      formatter: (value: number) => (value > 10 ? `${Math.floor(value)} mm ` : `${value.toFixed(1)} mm`),
    },
  };

  return (
    <section>
      <h3 className={cx("text-xl")}>Bed Mesh</h3>

      <div className={cx("flex", "flex-row")} style={{ height: "600px" }}>
        <div className={cx("flex-1", "flex", "flex-col", "h-full", "items-end", "justify-between")}>
          <label className={cx("flex", "flex-row", "h-1/2")}>
            <div className={cx("flex", "flex-col", "justify-between")}>
              {new Array(11)
                .fill(null)
                .map((_, i) => ((scaleMax - scaleMin) / 10) * (10 - i) + scaleMin)

                .map((v) => (
                  <span key={v} onClick={() => setScale(v)} className={cx("text-gray-400")}>
                    {v.toFixed(1)} mm
                  </span>
                ))}
            </div>
            <input
              type="range"
              min={scaleMin}
              max={scaleMax}
              step={(scaleMax - scaleMin) / 10}
              value={scale}
              onChange={(evt) => setScale(parseFloat(evt.target.value))}
              // Hack for Firefox vertical slider
              {...{ orient: "vertical" }}
              style={{
                height: "100%",
                width: "22px",
                // Hack for IE vertical slider
                writingMode: "bt-lr" as Property.WritingMode,
                WebkitAppearance: "slider-vertical",
              }}
            />
          </label>

          <div className={cx("flex", "flex-col", "items-end")}>
            <label className={cx("whitespace-nowrap")}>
              {"Probed "}
              <input
                type="radio"
                name="meshType"
                onChange={() => setMeshType("probed")}
                checked={meshType === "probed"}
              />
            </label>
            <label className={cx("whitespace-nowrap")}>
              {"Interpolated "}
              <input
                type="radio"
                name="meshType"
                onChange={() => setMeshType("interpolated")}
                checked={meshType === "interpolated"}
              />
            </label>
            <label className={cx("whitespace-nowrap")}>
              {"Both "}
              <input type="radio" name="meshType" onChange={() => setMeshType("both")} checked={meshType === "both"} />
            </label>
          </div>
        </div>

        <ECharts
          ref={chart}
          echarts={echarts}
          style={{ height: "600px", width: "100%" }}
          option={{
            darkMode: true,
            // textStyle: { color: colors.gray[200] },
            visualMap: {
              show: true,
              dimension: 2,
              top: 0,
              right: 0,
              left: "auto",
              bottom: "auto",
              min: min,
              max: max,
              formatter: (value: number) => `${value.toFixed(2)} mm`,
              textStyle: { color: colors.gray[200] },
              inRange: {
                color: [
                  "#313695",
                  "#4575b4",
                  "#74add1",
                  "#abd9e9",
                  "#e0f3f8",
                  "#ffffbf",
                  "#fee090",
                  "#fdae61",
                  "#f46d43",
                  "#d73027",
                  "#a50026",
                ],
              },
            },
            xAxis3D: { type: "value", ...axisFormat },
            yAxis3D: { type: "value", ...axisFormat },
            zAxis3D: { type: "value", min: center - scale, max: center + scale, ...axisFormat },
            grid3D: {
              viewControl: {
                // projection: "orthographic",
              },
            },
          }}
        />
      </div>
    </section>
  );
}
