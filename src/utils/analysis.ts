import { KlippyLog, Temps } from "../types";
import { statsToTemps } from ".";

function calculateRunningAverages(allTemps: Temps[]) {
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
      Object.fromEntries(Object.entries(average).map(([key, value]) => [key, value / runningTemps.length]))
    );
  }

  return averages;
}
export function searchForAbnormalTemperatureSpikes(log: KlippyLog) {
  const allTemps = statsToTemps(log.stats);
  const averages = calculateRunningAverages(allTemps);

  const anomalies = [];
  let lastAverage = averages[0];
  for (const average of averages.slice(1)) {
    for (const [key, value] of Object.entries(average)) {
      if (lastAverage[key] > 0 && value > lastAverage[key] * 1.2) {
        anomalies.push({
          time: average.time,
          name: key,
          previousAverage: lastAverage[key],
          value,
        });
      }
    }
    lastAverage = average;
  }

  return anomalies;
}
