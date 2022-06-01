import { KlippyLog, Temps } from "../types";
import { statsToTemps } from ".";

export function searchForAbnormalTemperatureSpikes(log: KlippyLog) {
  const allTemps = statsToTemps(log.stats);
  const averages: Temps[] = [];

  let runningTemps: Temps[] = [];
  for (const temps of allTemps) {
    runningTemps = runningTemps.slice(1, 5).concat(temps);
    const average: Temps = {};

    runningTemps.forEach((temps) =>
      Object.entries(temps).forEach(([key, value]) => {
        average[key] = (average[key] || 0) + value;
      })
    );

    averages.push(
      Object.fromEntries(
        Object.entries(average).map(([key, value]) => [
          key,
          value / runningTemps.length,
        ])
      )
    );
  }
}
