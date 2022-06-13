import { produce } from "immer";
import { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";

import { Printer } from "../Context/Database";
import { MoonrakerClientRPC, MoonrakerClientType, MoonrakerServerRPC } from "../types";
import JsonRPCClient from "../utils/jsonrpc";
import klippylyzerVersion from "../version";

interface AgentMethods {
  "klippylyzer.version": never;
  "klippylyzer.echo": unknown;
}

type OnStatusChangeHandler = (
  status: "connecting" | "connected" | "disconnected" | "error",
  error?: string | Error
) => void;

export type MoonrakerRPCClient = JsonRPCClient<MoonrakerServerRPC, MoonrakerClientRPC & AgentMethods>;

type Connect = (printer: Printer, onStatusChange?: OnStatusChangeHandler, clientType?: MoonrakerClientType) => void;
type Disconnect = () => void;
export interface MoonrakerContext {
  connect: Connect;
  disconnect: Disconnect;

  printer?: Printer;

  rpc?: MoonrakerRPCClient;
  //   rest: null | RestClient<MoonrakerAPI>;
}

const moonrakerContext = createContext<MoonrakerContext>({
  connect() {
    throw new Error("not ready");
  },
  disconnect() {
    throw new Error("not ready");
  },
});

export function MoonrakerProvider({ children }: PropsWithChildren<unknown>) {
  const [{ printer, rpc }, setState] = useState<{
    printer?: Printer;
    rpc?: MoonrakerRPCClient;
  }>({});

  const disconnect = useCallback(() => {
    if (rpc) rpc.close();

    setState({});
  }, [rpc, setState]);

  const connect = useCallback<MoonrakerContext["connect"]>(
    async function (printer: Printer, onStatusChange?: OnStatusChangeHandler, clientType: MoonrakerClientType = "web") {
      if (rpc) {
        disconnect();
      }

      setState(
        produce((draft) => {
          draft.printer = printer;
        })
      );

      const url = new URL("/websocket", printer.url);
      if (url.protocol === "https:") {
        url.protocol = "wss:";
      } else {
        url.protocol = "ws:";
      }

      if (printer.apikey) {
        const resp = await fetch(new URL("/access/oneshot_token", printer.url).toString(), {
          headers: { "X-Api-Key": printer.apikey },
        });
        const oneShotToken = await resp.json();

        url.searchParams.set("token", oneShotToken.result);
      }

      onStatusChange?.("connecting");

      const rpcClient = new JsonRPCClient<MoonrakerServerRPC, AgentMethods & MoonrakerClientRPC>(new WebSocket(url));
      console.log("rpcClient", rpcClient);

      setState(
        produce((draft) => {
          draft.rpc = rpcClient;
        })
      );

      rpcClient.onClose(() => {
        onStatusChange?.("disconnected");

        setState(
          produce((draft) => {
            delete draft.rpc;
          })
        );
      });

      const { connection_id } = await rpcClient.call("server.connection.identify", {
        client_name: "klippylyzer",
        version: klippylyzerVersion,
        type: clientType,
        url: (() => {
          const currentUrl = new URL(document.location.href);
          currentUrl.pathname = "";
          currentUrl.search = "";
          return currentUrl.toString();
        })(),
      });
      console.log(`Connected to ${rpcClient.ws.url}, connection_id: ${connection_id}`);

      onStatusChange?.("connected");
    },
    [rpc, disconnect]
  );

  return (
    <moonrakerContext.Provider
      value={{
        connect,
        disconnect,
        printer,
        rpc,
        // rest,
      }}
    >
      {children}
    </moonrakerContext.Provider>
  );
}

export default function useMoonraker(): MoonrakerContext {
  return useContext(moonrakerContext);
}
