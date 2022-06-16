import { PointTuple, PositionTuple } from "./basic";

export type MoonrakerUpdateStatus = {
  [key: string]: unknown;
};

// TODO: Missing fade details
export interface BedMeshStatus {
  profile_name: string;
  mesh_min: PointTuple;
  mesh_max: PointTuple;
  probed_matrix: Array<Array<number>>; // Actual probed points
  mesh_matrix: Array<Array<number>>; // Interpolated matrix
  profiles: {
    [profile_name: string]: {
      points: Array<Array<number>>;
      mesh_params: {
        min_x: number;
        max_x: number;
        min_y: number;
        max_y: number;
        x_count: number;
        y_count: number;
        mesh_x_pps: number;
        mesh_y_pps: number;
        algo: "lagrange" | "bicubic";
        tension: number;
      };
    };
  };
}

export interface ProbeStatus {
  last_query: boolean;
  last_z_result: number;
}
export interface ZCalibrationStatus {
  last_query: boolean;
  last_z_offset: number;
}

export interface GCodeMove {
  speed_factor: number;
  speed: number;
  extrude_factor: number;
  absolute_coordinates: boolean;
  absolute_extrude: boolean;
  homing_origin: PositionTuple;
  position: PositionTuple;
  gcode_position: PositionTuple;
}

export interface MotionReport {
  live_position: PositionTuple;
  live_velocity: number;
  live_extruder_velocity: number;
  steppers: string[];
  trapq: string[];
}

export interface Toolhead {
  homed_axes: "" | "x" | "y" | "z" | "xy" | "xz" | "yz" | "xyz";
  axis_minimum: PositionTuple;
  axis_maximum: PositionTuple;
  print_time: number;
  stalls: number;
  estimated_print_time: number;
  extruder: string;
  position: PositionTuple;
  max_velocity: number;
  max_accel: number;
  max_accel_to_decel: number;
  square_corner_velocity: number;
}

export interface Extruder {
  temperature: number;
  target: number;
  power: number;
  can_extrude: boolean;
  pressure_advance: number;
  smooth_time: number;
}

export interface MCU {
  mcu_version: string;
  mcu_build_versions: string;
  mcu_constants: { [key: string]: string | number };
  last_stats: {
    mcu_awake: number;
    mcu_task_avg: number;
    mcu_task_stddev: number;
    bytes_write: number;
    bytes_read: number;
    bytes_retransmit: number;
    bytes_invalid: number;
    send_seq: number;
    receive_seq: number;
    retransmit_seq: number;
    srtt: number;
    rttvar: number;
    rto: number;
    ready_bytes: number;
    stalled_bytes: number;
    freq: number;
  };
}
export interface MachineSystemInfo {
  python: {
    version: [number, number, number, string, number];
    version_string: string;
  };
  cpu_info: {
    cpu_count: number; // 4
    bits: string; // "64bit"
    processor: string; // "aarch64"
    cpu_desc: string; // ""
    serial_number: string; // "10000000195cf705"
    hardware_desc: string; // "BCM2835"
    model: string; // "Raspberry Pi 4 Model B Rev 1.4"
    total_memory: number; // 3705688
    memory_units: string; // "kB"
  };
  sd_info?: {
    manufacturer_id: string; // "03"
    manufacturer: string; // "Sandisk"
    oem_id: string; // "5344"
    product_name: string; // "SN128"
    product_revision: string; // "8.0"
    serial_number: string; // "711addbe"
    manufacturer_date: string; // "4/2021"
    capacity: string; // "119.1 GiB"
    total_bytes: number; // 127865454592
  };
  distribution?: {
    name: string; // "Debian GNU/Linux 11 (bullseye)";
    id: string; // "debian";
    version: string; // "11";
    version_parts: {
      major: string; //  "11"
      minor: string; //  ""
      build_number: string; //  ""
    };
    like: string; // ""
    codename: string; // "bullseye"
    release_info: unknown; // {}
  };
  virtualization: {
    virt_type: "none" | string;
    virt_identifier: "none" | string;
  };
  network: {
    [device: string]: {
      mac_address: string;
      ip_addresses: Array<{
        family: "ipv4" | "ipv6";
        address: string;
        is_link_local: boolean;
      }>;
    };
  };
  // TODO: Add more known values
  available_services: "moonraker" | "webcamd" | "klipper_mcu" | "klipper" | "KlipperScreen" | string;
  service_state: Array<{
    [service: string]: {
      // TODO: Add more known values
      active_state: "active" | string;
      // TODO: Add more known values
      sub_state: "running" | string;
    };
  }>;
}

export type MoonrakerPrinterInfo = {
  state: string;
  state_message: string;
  hostname: string;
  software_version: string;
  cpu_info: string;
  klipper_path: string;
  python_path: string;
  log_file: string;
  config_file: string;
};

export type MoonrakerServerInfo = {
  klippy_connected: boolean;
  klippy_state: string;
  components: string[];
  failed_components: string[];
  registered_directories: string[];
  warnings: string[];
  websocket_count: number;
  moonraker_version: string;
  api_version: [number, number, number];
  api_version_string: string;
};

export type MoonrakerAnnouncement = {
  entry_id: string;
  url: string;
  title: string;
  description: string;
  priority: string;
  date: number;
  dismissed: boolean;
  date_dismissed?: null | number;
  dismiss_wake?: unknown;
  source: string;
  feed: string;
};

export enum JobStatus {
  Completed = "completed",
  Cancelled = "cancelled",
  Error = "error",
  Printing = "printing",
  InProgress = "in_progress",
  Server_Exit = "server_exit",
  Klippy_Shutdown = "klippy_shutdown",
  Klippy_Disconnect = "klippy_disconnect",
}

export type MoonrakerJob = {
  job_id: string;
  exists: boolean;
  end_time: number;
  filament_used: number;
  filename: string;
  metadata: { [key: string]: unknown };
  print_duration: number;
  status: JobStatus;
  start_time: number;
  total_duration: number;
};

export type MoonrakerExcludeObjectStatus = {
  objects: Array<{
    name: string;
    center: PointTuple;
    polygon: Array<PointTuple>;
  }>;
  excluded_objects: Array<string>;
  current_object: null | string;
};

export type MoonrakerProcStats = {
  cpu_temp: number;
  moonraker_stats: {
    time: number;
    cpu_usage: number;
    memory: number;
    mem_units: string;
  };
  throttled_state?: {
    bits: number;
    flags: string[];
  };
  network: {
    [device_name: string]: {
      rx_bytes: number;
      tx_bytes: number;
      bandwidth: number;
    };
  };
  system_cpu_usage: { [key: string]: number };
  system_memory: {
    total: number;
    available: number;
    used: number;
  };
  websocket_connections: number;
};

export type MoonrakerHistoryTotals = {
  total_jobs: number;
  total_time: number;
  total_print_time: number;
  total_filament_used: number;
  longest_job: number;
  longest_print: number;
};
