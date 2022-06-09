import { KlippyLog } from "../types";

type Props = { klippyLog: KlippyLog };

export default function Stats({ klippyLog }: Props) {
  return (
    <section>
      <h4>Stats</h4>
      <pre>{JSON.stringify(klippyLog.stats, null, 2)}</pre>
    </section>
  );
}
