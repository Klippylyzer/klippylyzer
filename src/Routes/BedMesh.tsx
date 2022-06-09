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
import { useEffect, useRef, useState } from "react";
import cx from "ts-classnames";

import { useMoonraker } from "../Context/Moonraker";
import { BedMeshStatus } from "../types";
import { useRpcHandler } from "../utils/jsonrpc";

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
      });
    }

    if (bedMesh?.mesh_matrix && (meshType === "interpolated" || meshType === "both")) {
      series.push({
        type: "surface",
        data: bedMeshToSeries(bedMesh.mesh_matrix, bedSize),
      });
    }

    chart.current.getEchartsInstance().setOption({ series });
  }, [bedMesh, bedSize, meshType, chart]);

  useEffect(() => {
    if (!chart.current) return;

    chart.current.getEchartsInstance().setOption({ zAxis3D: { type: "value", min: -scale, max: scale } });
  }, [scale, chart]);

  return (
    <section>
      <h3>Bed Mesh</h3>

      <div className={cx("flex", "flex-row")}>
        <div style={{ width: "60px", height: "600px" }}>
          <input
            type="range"
            min={bedMesh ? bedMesh.mesh_matrix?.reduce((a, b) => Math.min(a, Math.min(...b)), 0) : 0.5}
            max={10}
            step={0.5}
            value={scale}
            onChange={(evt) => setScale(parseFloat(evt.target.value))}
            // Hack for Firefox vertical slider
            {...{ orient: "vertical" }}
            style={{
              height: "500px",
              width: "22px",
              // Hack for IE vertical slider
              writingMode: "bt-lr" as Property.WritingMode,
              WebkitAppearance: "slider-vertical",
            }}
          />
          <label>
            <input
              type="radio"
              name="meshType"
              onChange={() => setMeshType("probed")}
              checked={meshType === "probed"}
            />{" "}
            Probed
          </label>
          <label>
            <input
              type="radio"
              name="meshType"
              onChange={() => setMeshType("interpolated")}
              checked={meshType === "interpolated"}
            />{" "}
            Interpolated
          </label>
          <label>
            <input type="radio" name="meshType" onChange={() => setMeshType("both")} checked={meshType === "both"} />{" "}
            Both
          </label>
        </div>

        <ECharts
          ref={chart}
          echarts={echarts}
          style={{ height: "600px", width: "100%" }}
          option={{
            darkMode: true,
            textStyle: { color: "rgb(229, 231, 235)" },
            visualMap: {
              show: false,
              dimension: 2,
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
            xAxis3D: { type: "value" },
            yAxis3D: { type: "value" },
            zAxis3D: { type: "value", min: -1, max: 1 },
            grid3D: {
              viewControl: {
                // projection: "orthographic",
              },
            },
            series: [],
          }}
        />
      </div>
    </section>
  );
}
