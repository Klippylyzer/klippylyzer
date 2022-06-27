import { ClientRPCMethods, ServerRPCMethods } from "../utils/jsonrpc";
import {
  BedMeshStatus,
  DockableProbeStatus,
  ExtruderStatus,
  GCodeMoveStatus,
  MachineSystemInfo,
  MoonrakerAnnouncement,
  MoonrakerExcludeObjectStatus,
  MoonrakerHistoryTotals,
  MoonrakerJob,
  MoonrakerPrinterInfo,
  MoonrakerProcStats,
  MoonrakerServerInfo,
  MoonrakerUpdateStatus,
  MotionReportStatus,
  ProbeStatus,
  ToolheadStatus as ToolheadStatus,
  ZCalibrationStatus,
} from "./moonraker";

export type MoonrakerClientType = "web" | "mobile" | "desktop" | "display" | "bot" | "agent" | "other";

export interface MoonrakerServerRPC extends ServerRPCMethods {
  "printer.emergency_stop": [never, never];
  "printer.restart": [never, never];
  "server.restart": [never, never];

  "server.connection.identify": [
    {
      client_name: string;
      version: string;
      url: string;
      type: MoonrakerClientType;
    },
    { connection_id: number }
  ];
  "printer.info": [never, MoonrakerPrinterInfo];

  "printer.objects.list": [{ objects: { [object_name: string]: null | Array<string> } }, { objects: string[] }];
  "printer.objects.query": [
    { objects: { [object_name: string]: null | Array<string> } },
    { toolhead?: ToolheadStatus; bed_mesh?: BedMeshStatus; [object_name: string]: unknown }
  ];

  "printer.objects.subscribe": [
    { objects?: { [object_name: string]: null | string[] } },
    {
      eventtime: number;
      status: {
        toolhead?: ToolheadStatus;
        exclude_object?: MoonrakerExcludeObjectStatus;
        bed_mesh?: BedMeshStatus;
        gcode_move?: GCodeMoveStatus;
        motion_report?: MotionReportStatus;
        probe?: ProbeStatus;
        dockable_probe?: DockableProbeStatus;
        extruder?: ExtruderStatus;
        z_calibration?: ZCalibrationStatus;
        [key: string]: unknown;
      };
    }
  ];
  "printer.query_endstops.status": [never, { [key: string]: "open" | "TRIGGERED" }];
  "server.info": [never, MoonrakerServerInfo];
  "server.config": [never, { config: unknown }];
  "server.temperature_store": [
    never,
    {
      [key: string]: {
        temperatures: number[];
        targets?: number[];
        powers?: number[];
        speeds?: number[];
      };
    }
  ];
  "server.gcode_store": [
    { count?: number },
    { gcode_store: Array<{ type: "command" | "response"; time: number; message: string }> }
  ];
  "printer.gcode.script": [{ script: string }, never];
  "printer.gcode.help": [never, { [key: string]: string }];
  "printer.print.start": [{ filename: string }, never];
  "printer.print.pause": [never, never];
  "printer.print.resume": [never, never];
  "printer.print.cancel": [never, never];
  "machine.system_info": [never, { system_info: MachineSystemInfo }];
  "machine.shutdown": [never, never];
  "machine.reboot": [never, never];
  "machine.services.restart": [{ service: string }, never];
  "machine.services.stop": [{ service: string }, never];
  "machine.services.start": [{ service: string }, never];
  "machine.proc_stats": [never, { [key: string]: unknown }];
  "server.files.list": [
    undefined | { root: string },
    Array<{ path: string; modified: number; size: number; permissions: string }>
  ];
  "server.files.metadata": [
    { filename: string },
    {
      // TODO: Document
      [key: string]: unknown;
    }
  ];
  "server.files.get_directory": [
    { path?: string; extended?: boolean },
    {
      dirs: Array<{ dirname: string; permissions: string; size: number; modified: number }>;
      files: Array<{ modified: number; size: number; permissions: string; filename: string }>;
      disk_usage: { total: number; used: number; free: number };
      root_info: { name: string; permissions: string };
    }
  ];
  "server.files.post_directory": [
    { path: string },
    {
      action: "create_dir";
      item: { path: string; root: string };
    }
  ];
  "server.files.delete_directory": [
    { path: string; force?: true },
    {
      action: "delete_dir";
      item: { path: string; root: string };
    }
  ];
  "server.files.move_directory": [
    { source: string; dest: string },
    {
      action: "move_dir";
      source_item: { path: string; root: string };
      item: { path: string; root: string };
    }
  ];
  "server.files.copy": [
    { source: string; dest: string },
    {
      action: "create_file";
      item: { root: string; path: string };
    }
  ];
  "server.files.delete_file": [
    { path: string },
    {
      action: "delete_file";
      item: { path: string; root: string };
    }
  ];
  "server.database.list": [never, { namespaces: string[] }];
  "server.database.get_item": [{ namespace: string; key: string }, { namespace: string; key: string; value: unknown }];
  "server.database.post_item": [
    { namespace: string; key: string; value: number | boolean | string | unknown },
    { namespace: string; key: string; value: unknown }
  ];
  "server.database.delete_item": [
    { namespace: string; key: string },
    { namespace: string; key: string; value: unknown }
  ];
  "server.job_queue.status": [
    never,
    {
      queue_state: "ready" | "loading" | "starting" | "paused";
      queued_jobs: Array<{
        filename: string;
        job_id: string;
        time_added: number;
        time_in_queue: string;
      }>;
    }
  ];
  "server.job_queue.post_job": [{ filenames: string[] }, MoonrakerServerRPC["server.job_queue.status"][1]];
  "server.job_queue.delete_job": [{ job_ids: string[] }, MoonrakerServerRPC["server.job_queue.status"][1]];
  "server.job_queue.pause": [never, MoonrakerServerRPC["server.job_queue.status"][1]];
  "server.job_queue.start": [never, MoonrakerServerRPC["server.job_queue.status"][1]];
  "server.announcements.list": [
    { include_dismissed?: boolean },
    { feeds: string[]; entries: Array<MoonrakerAnnouncement> }
  ];
  "server.announcements.update": [never, { entries: Array<MoonrakerAnnouncement>; modified: boolean }];
  "server.announcements.dismiss": [{ entry_id: string; wake_time?: number }, { entry_id: string }];
  "server.announcements.post_feed": [{ name: string }, { action: "added" | "skipped"; feed: string }];
  "server.announcements.delete_feed": [{ name: string }, { action: "removed" | string; feed: string }];
  "machine.update.status": [{ refresh?: boolean }, MoonrakerUpdateStatus];
  "machine.update.full": [never, never];
  "machine.update.moonraker": [never, never];
  "machine.update.klipper": [never, never];
  "machine.update.system": [never, never];
  "machine.update.client": [{ name: string }, never];
  "machine.update.recover": [{ name: string; hard?: boolean }, never];
  "machine.device_power.devices": [
    never,
    { devices: Array<{ device: string; status: string; locked_while_printing: boolean; type: string }> }
  ];
  "machine.device_power.get_device": [{ device: string }, { [key: string]: string }];
  "machine.device_power.post_device": [
    { device: string; action: "on" | "off" | "toggle" },
    { [device: string]: string }
  ];
  "machine.device_power.status": [{ [device: string]: null }, { [device: string]: string }];
  "machine.device_power.on": [{ [device: string]: null }, { [device: string]: string }];
  "machine.device_power.off": [{ [device: string]: null }, { [device: string]: string }];
  "server.history.list": [
    { limit?: number; start?: number; before?: number; since?: number; order?: "asc" | "desc" },
    { count: number; jobs: Array<MoonrakerJob> }
  ];
  "server.history.job": [{ uid: string }, { job: MoonrakerJob }];
  "server.history.delete_job": [{ uid: string }, Array<string>];
  "server.history.totals": [never, { job_totals: MoonrakerHistoryTotals }];
  "server.history.reset_totals": MoonrakerServerRPC["server.history.totals"];

  "connection.send_event": [{ event: string; data: unknown }, never];
}

export interface MoonrakerClientRPC extends ClientRPCMethods {
  notify_gcode_response: [string];
  notify_proc_stat_update: [MoonrakerProcStats];
  notify_status_update: [
    {
      toolhead?: Partial<ToolheadStatus>;
      exclude_object?: Partial<MoonrakerExcludeObjectStatus>;
      bed_mesh?: Partial<BedMeshStatus>;
      gcode_move?: Partial<GCodeMoveStatus>;
      motion_report?: Partial<MotionReportStatus>;
      probe?: Partial<ProbeStatus>;
      dockable_probe?: Partial<DockableProbeStatus>;
      extruder?: Partial<ExtruderStatus>;
      z_calibration?: Partial<ZCalibrationStatus>;
    },
    number
  ];
  notify_klippy_ready: never;
  notify_klippy_shutdown: never;
  notify_klippy_disconnected: never;
  notify_filelist_changed: [
    {
      action:
        | "root_update"
        | "create_file"
        | "create_dir"
        | "delete_file"
        | "delete_dir"
        | "move_file"
        | "move_dir"
        | "modify_file";
      item: { path: string; root: string; size: number; modified: number };
      source_item?: { path: string; root: string };
    }
  ];
  notify_update_response: [{ application: string; proc_id: number; message: string; complete: boolean }];
  notify_update_refreshed: [MoonrakerUpdateStatus];
  notify_cpu_throttled: [Pick<MoonrakerProcStats, "throttled_state">];
  notify_history_changed: [{ action: "added" | "finished"; job: MoonrakerJob }];
  notify_user_created: [{ username: string }];
  notify_user_deleted: [{ username: string }];
  notify_service_state_changed: [{ [service: string]: { active_state: string; sub_state: string } }];
  notify_job_queue_changed: [
    {
      action: "state_changed" | "jobs_added" | "jobs_removed" | "job_loaded";
      updated_queue: null | Array<MoonrakerJob>;
      queue_state: "paused" | string;
    }
  ];
  notify_button_event: [
    {
      name: string;
      type: "gpio";
      event: { elapsed_time: number; received_time: number; render_time: number; pressed: boolean };
      aux: null | unknown;
    }
  ];
  notify_announcement_update: [{ entries: Array<MoonrakerAnnouncement> }];
  notify_announcement_dismissed: [Pick<MoonrakerAnnouncement, "entry_id">];
  notify_agent_event: [{ agent: string; event: "connected" | "disconnected" | string; data: unknown }];
}

/*
     HTTP Only requests
    
     GET /server/files/{root}/{filename}
     POST /server/files/upload
        multipart/form-data:
            root: 'gcodes' | 'config' = 'gcodes'
            path: string
            checksum: string
     GET /server/files/klippy.log
     GET /server/files/moonraker.log
    
     */
