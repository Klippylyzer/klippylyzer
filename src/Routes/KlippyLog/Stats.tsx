import cx from "ts-classnames";

import { KlippyLog } from "../../types";

type Props = { klippyLog: KlippyLog };

export default function Stats({ klippyLog }: Props) {
  return (
    <section>
      <h3 className={cx("text-xl")}>Stats</h3>
      <pre>{JSON.stringify(klippyLog.stats, null, 2)}</pre>
    </section>
  );
}
