import { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";

import { Printer } from "../db";
import { MoonrakerClientRPC, MoonrakerClientType, MoonrakerServerRPC } from "../types";
import JsonRPCClient from "../utils/jsonrpc";
import klippylyzerVersion from "../version";

type OnStatusChangeHandler = (
  status: "connecting" | "connected" | "disconnected" | "error",
  error?: string | Error
) => void;

interface MoonrakerContext {
  connect: (printer: Printer, onStatusChange?: OnStatusChangeHandler, clientType?: MoonrakerClientType) => void;
  disconnect: () => void;

  printer: null | Printer;

  rpc: null | JsonRPCClient<MoonrakerServerRPC, MoonrakerClientRPC>;
  //   rest: null | RestClient<MoonrakerAPI>;
}

const moonrakerContext = createContext<MoonrakerContext>({
  connect() {
    throw new Error("not ready");
  },
  disconnect() {
    throw new Error("not ready");
  },
  rpc: null,
  //   rest: null,
  printer: null,
});

export function useMoonraker(): MoonrakerContext {
  return useContext(moonrakerContext);
}

interface AgentMethods {
  "klippylyzer.version": never;
  "klippylyzer.echo": unknown;
}

export function Moonraker({ children }: PropsWithChildren<unknown>) {
  const [printer, setPrinter] = useState<null | Printer>(null);
  const [rpc, setRpcClient] = useState<null | JsonRPCClient<MoonrakerServerRPC, MoonrakerClientRPC & AgentMethods>>(
    null
  );
  //   const [rest, setRestClient] = useState<null | RestClient<MoonrakerAPI>>(null);

  const disconnect = useCallback(() => {
    if (!rpc) return;

    rpc.close();
    setRpcClient(null);
  }, [rpc, setRpcClient]);

  const connect = useCallback<MoonrakerContext["connect"]>(
    async function (printer: Printer, onStatusChange?: OnStatusChangeHandler, clientType: MoonrakerClientType = "web") {
      if (rpc) {
        disconnect();
      }

      setPrinter(printer);

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

      setRpcClient(rpcClient);
      rpcClient.onClose(() => {
        onStatusChange?.("disconnected");
        setRpcClient(null);
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
