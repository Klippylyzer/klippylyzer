
import { KlippyLog } from "../../types";
import { searchForAbnormalTemperatureSpikes } from "../../utils/analysis";
import cx from "../../utils/cx";

interface Props {
  klippyLog: KlippyLog;
}

export default function Analysis({ klippyLog }: Props) {
  return (
    <div className={cx()}>
      <h2>General Analysis</h2>
      {klippyLog.stats.length.toLocaleString()} stats entries
      <h2>Temperature Analysis</h2>
      {JSON.stringify(searchForAbnormalTemperatureSpikes(klippyLog))}
    </div>
  );
}
