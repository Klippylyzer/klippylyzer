import { PrismLight } from "react-syntax-highlighter";
import PrismLanguageLog from "react-syntax-highlighter/dist/esm/languages/prism/log";
import PrismThemeTomorrow from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";

import { KlippyLog } from "../../types";

PrismLight.registerLanguage("log", PrismLanguageLog);

type Props = { klippyLog: KlippyLog };

export default function Log({ klippyLog }: Props) {
  return (
    <section>
      <h4>Raw Log</h4>

      <PrismLight language="log" style={PrismThemeTomorrow}>
        {klippyLog.raw}
      </PrismLight>
    </section>
  );
}
