import { useEffect } from "react";

type RequestID = number;
type RPCRequest = unknown;
type RPCResponse = unknown;

type ServerRPCRequest<method = string, params = RPCRequest> = {
  jsonrpc: "2.0";
  id: RequestID;
  method: method;
  params: params;
};

type ServerRPCResponse<result = RPCResponse> = {
  jsonrpc: "2.0";
  id: RequestID;
  result: result;
};

type ClientRPCRequest<method = string, params = RPCResponse> = {
  jsonrpc: "2.0";
  method: method;
  params: params;
};

function* RequestIDGenerator(): Generator<RequestID, never, never> {
  let id = 0;
  while (true) {
    yield id++;
  }
}

export type ServerRPCMethods = { [key: string]: [RPCRequest, RPCResponse] };
export type ClientRPCMethods = { [key: string]: RPCResponse };

export default class JsonRPCClient<ServerRPC extends ServerRPCMethods, ClientRPC extends ClientRPCMethods> {
  ws: WebSocket;
  requestIds: Generator<RequestID>;
  responseWaiters: Record<RequestID, (response: ServerRPC[keyof ServerRPC][1]) => void>;
  methodHandlers: { [method in keyof ClientRPC]: Set<(params: ClientRPC[method], id?: number) => void> };

  constructor(ws: WebSocket) {
    this.ws = ws;
    this.requestIds = RequestIDGenerator();
    this.responseWaiters = {} as typeof this.responseWaiters;
    this.methodHandlers = {} as typeof this.methodHandlers;

    this.ws.addEventListener("message", this.messageHandler.bind(this));
  }

  private messageHandler(evt: MessageEvent<string>) {
    const resp: ServerRPCResponse | ClientRPCRequest<keyof ClientRPC, ClientRPC[keyof ClientRPC]> = JSON.parse(
      evt.data
    );
    console.debug("JsonRPCClient got message", resp);

    if ("method" in resp) {
      this.clientMethod(resp.method, resp.params);
    } else if ("id" in resp) {
      this.serverResponse(resp.id, resp.result);
    } else {
      console.warn("JsonRPCClient got unknown message", resp);
    }
  }

  private serverResponse(requestId: RequestID, result: RPCResponse) {
    if (this.responseWaiters[requestId]) {
      this.responseWaiters[requestId](result);
      delete this.responseWaiters[requestId];
    }
  }

  private clientMethod<Method extends keyof ClientRPC>(method: Method, params: ClientRPC[Method], id?: number) {
    this.methodHandlers[method]?.forEach((handler) => {
      handler(params, id);
    });
  }

  private async wsReady(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.ws.readyState === WebSocket.OPEN) {
        resolve();
      } else if (this.ws.readyState === WebSocket.CLOSED || this.ws.readyState === WebSocket.CLOSING) {
        reject();
      } else {
        this.ws.addEventListener("open", () => resolve());
        this.ws.addEventListener("close", () => reject());
      }
    });
  }

  private send<Method extends keyof ServerRPC>(request: ServerRPCRequest<ServerRPC[Method][0]>) {
    this.wsReady().then(() => {
      this.ws.send(JSON.stringify(request));
    });
  }

  public call<Method extends keyof ServerRPC>(
    method: Method,
    params?: ServerRPC[Method][0]
  ): Promise<ServerRPC[Method][1]> {
    const requestId = this.requestIds.next().value;

    return new Promise((resolve) => {
      this.responseWaiters[requestId] = resolve;

      this.send({
        jsonrpc: "2.0",
        method: method,
        params,
        id: requestId,
      });
    });
  }

  public addHandler<Method extends keyof ClientRPC, Callback extends (params: ClientRPC[Method], id?: number) => void>(
    method: Method,
    handler: Callback
  ): Callback {
    if (!(method in this.methodHandlers)) this.methodHandlers[method] = new Set();

    this.methodHandlers[method].add(handler);

    return handler;
  }

  public removeHandler<Method extends keyof ClientRPC, Callback extends (params: ClientRPC[Method]) => void>(
    method: Method,
    handler: Callback
  ): Callback {
    this.methodHandlers[method].delete(handler);

    return handler;
  }

  public close() {
    this.ws.close();
  }

  public onOpen(callback: (this: WebSocket, evt: Event) => void) {
    this.ws.addEventListener("open", callback);
  }
  public onError(callback: (this: WebSocket, evt: Event) => void) {
    this.ws.addEventListener("error", callback);
  }
  public onClose(callback: (this: WebSocket, evt: CloseEvent) => void) {
    this.ws.addEventListener("close", callback);
  }
  public onMessage(callback: (this: WebSocket, evt: MessageEvent<ServerRPCResponse<unknown> | unknown>) => void) {
    this.ws.addEventListener("message", callback);
  }
}

export function useRpcHandler<
  ServerRPC extends { [key: string]: [RPCRequest, RPCResponse] },
  ClientRPC extends { [key: string]: RPCResponse },
  Method extends keyof ClientRPC
>(rpc: null | JsonRPCClient<ServerRPC, ClientRPC>, method: Method, handler: (params: ClientRPC[Method]) => void) {
  useEffect(() => {
    if (rpc) {
      rpc.addHandler(method, handler);

      return () => {
        rpc.removeHandler(method, handler);
      };
    }
  }, [rpc, method, handler]);
}
