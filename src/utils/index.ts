import { KlippyLog, Stats, Temps } from "../types";

function parseKlippyLine(line: string): Stats {
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
    time: parseFloat(time.slice(0, time.length - 1)),
    values: { klippy: {} },
  };

  let section = "klippy";
  for (const part of parts) {
    if (part.endsWith(":")) {
      section = part.slice(0, part.length - 1);
      stats.values[section] = {};
    } else {
      const [key, value] = part.split("=", 2);
      (section ? stats.values[section] : stats.values)[key] = value;
    }
  }

  return stats;
}
export function parseKlippyLog(contents: string): KlippyLog {
  // Grab the section of text between the lines "===== Config file =====" and "======================="
  const configSection = contents.slice(
    contents.lastIndexOf("===== Config file =====") + 24,
    contents.lastIndexOf("=======================")
  );

  return {
    raw: contents,
    config: configSection,
    stats: contents
      //   .slice(contents.lastIndexOf("===== Config file ====="))
      .split("\n")
      .filter((line) => line.startsWith("Stats "))
      //   .slice(-100)
      .map(parseKlippyLine),
  };
}

export function statsToTemps(stats: Array<Stats>): Array<Temps> {
  return stats.map((stat) => ({
    time: stat.time,
    ...Object.fromEntries(
      Object.entries(stat.values)
        .filter(([, value]) => value.temp !== undefined)
        .map(([key, value]) => [key, parseFloat(value.temp)])
    ),
  }));
}
