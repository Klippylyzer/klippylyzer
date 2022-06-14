import { PrismLight } from "react-syntax-highlighter";
import PrismLanguageLog from "react-syntax-highlighter/dist/esm/languages/prism/log";
import PrismThemeTomorrow from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";
import cx from "ts-classnames";

import { KlippyLog } from "../../types";

PrismLight.registerLanguage("log", PrismLanguageLog);

type Props = { klippyLog: KlippyLog };

export default function Log({ klippyLog }: Props) {
  return (
    <section>
      <h3 className={cx("text-xl")}>Raw Log</h3>

      {klippyLog.raw.length > 10000 ? (
        <pre>{klippyLog.raw}</pre>
      ) : (
        <PrismLight language="log" style={PrismThemeTomorrow}>
          {klippyLog.raw}
        </PrismLight>
      )}
    </section>
  );
}
