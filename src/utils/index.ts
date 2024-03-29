import { KlippyLog, Stats, Temps } from "../types";

function parseKlippyLine(line: string, epoch: number): Stats {
  /*
       Parses lines similar to 
         Stats 181891.6: gcodein=0 mcu: mcu_awake=0.014 mcu_task_avg=0.000022 mcu_task_stddev=0.000029 bytes_write=3313562 bytes_read=1126126 bytes_retransmit=0 bytes_invalid=0 send_seq=77515 receive_seq=77514 retransmit_seq=0 srtt=0.000 rttvar=0.000 rto=0.025 ready_bytes=30 stalled_bytes=3326 freq=180003476 rpi: mcu_awake=0.000 mcu_task_avg=0.000008 mcu_task_stddev=0.000012 bytes_write=10147 bytes_read=33138 bytes_retransmit=0 bytes_invalid=0 send_seq=1666 receive_seq=1666 retransmit_seq=0 srtt=0.000 rttvar=0.000 rto=0.025 ready_bytes=0 stalled_bytes=0 freq=49999586 adj=49998638 sd_pos=264628 heater_bed: target=60 temp=60.1 pwm=0.127 chamber: temp=27.9 mcu: temp=31.3 raspberry_pi: temp=44.0 sysload=1.40 cputime=269.122 memavail=552400 print_time=1561.763 buffer_time=2.417 print_stall=0 extruder: target=220 temp=225.8 pwm=0.000
       into an object with the following structure:
          {
              time: 181891.6,
              values: {
                  "gcodein": "0",
                  "mcu": {
                      "mcu_awake": "0.014",
                      ...
                  }, 
                  ...
              }
          }
      */

  const [, time, ...parts] = line.split(" ");
  const stats: Stats = {
    time: parseFloat(time.slice(0, time.length - 1)) + epoch,
    values: { klippy: {} },
  };

  let section = "klippy";
  for (const part of parts) {
    if (part.endsWith(":")) {
      section = part.slice(0, part.length - 1);
      stats.values[section] = {};
    } else {
      const [key, value] = part.split("=", 2);
      (section ? stats.values[section] : stats.values)[key] = parseFloat(value);
    }
  }

  return stats;
}

function extractLastConfig(log: string): string {
  // Grab the section of text between the lines "===== Config file =====" and "======================="

  return log.slice(log.lastIndexOf("===== Config file =====") + 24, log.lastIndexOf("======================="));
}

function extractEpoch(log: string): number {
  // Start printer at Tue May 31 11:43:46 2022 (1654015426.9 180343.4)
  const match = /^Start printer at [\w\d :]+ \((\d+\.\d+) (\d+\.\d+)\)$/m.exec(log);
  console.log(match);
  if (match) {
    return parseFloat(match[1]) - parseFloat(match[2]);
  }
  return 0;
}

export function parseKlippyLog(raw: string): KlippyLog {
  let epoch = extractEpoch(raw);
  return {
    raw,
    config: extractLastConfig(raw),
    stats: raw.split("\n").reduce((stats, line) => {
      if (line.startsWith("Start printer at ")) {
        epoch = extractEpoch(line);
        console.log("new epoch ", epoch);
      } else if (line.startsWith("Stats ")) {
        stats.push(parseKlippyLine(line, epoch));
      }

      return stats;
    }, [] as Stats[]),
  };
}

export function statsToTemps(stats: Array<Stats>): Array<Temps> {
  return stats.map((stat) => ({
    time: stat.time,
    temps: Object.fromEntries(
      Object.entries(stat.values)
        .filter(([, value]) => value.temp !== undefined)
        .map(([key, value]) => [key, value.temp])
    ),
  }));
}

export function humanSize(bytes: number): string {
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 B";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}
