import { KlippyLog, Temps } from "../types";
import { statsToTemps } from ".";

function calculateRunningAverages(allTemps: Temps[]) {
  const averages: Temps[] = [];

  let runningTemps: Temps[] = [];
  for (const temps of allTemps) {
    runningTemps = runningTemps.slice(1, 5).concat(temps);
    const average: Temps = { time: temps.time, temps: {} };

    runningTemps.forEach((temps) =>
      Object.entries(temps.temps).forEach(([key, value]) => {
        average.temps[key] = (average.temps[key] || 0) + value;
      })
    );

    averages.push({
      time: average.time,
      temps: Object.fromEntries(
        Object.entries(average.temps).map(([key, value]) => [key, value / runningTemps.length])
      ),
    });
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
      if (lastAverage.temps[key] > 0 && value > lastAverage.temps[key] * 1.2) {
        anomalies.push({
          time: average.time,
          name: key,
          previousAverage: lastAverage.temps[key],
          value,
        });
      }
    }
    lastAverage = average;
  }

  return anomalies;
}
