"use client";
import React from "react";
import { Socket, io } from "socket.io-client";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { ClientToServerEvents, ServerToClientEvents } from "@/socket/types";

type SocketContextType = Socket<
  ServerToClientEvents,
  ClientToServerEvents
> | null;

const SocketContext = React.createContext<SocketContextType>(null);

export const SocketProvider = ({ children }: any) => {
  const { status } = useSession();

  const [socket, setSocket] = React.useState<SocketContextType>(null);

  const [isConnected, setIsConnected] = React.useState(false);
  const [transport, setTransport] = React.useState("N/A");

  React.useEffect(() => {
    if (status === "authenticated") {
      const s = io("/client");

      const onConnect = () => {
        setSocket(s);
        setIsConnected(true);
        setTransport(s.io.engine.transport.name);
      };

      const onDisconnect = () => {
        setIsConnected(false);
        setTransport("N/A");
      };

      const onUpgrade = (transport) => {
        setTransport(transport.name);
      };
      const onException = (e) => {
        console.log(e);
        // TODO: handle exception
      };
      s.on("connect", onConnect);
      s.on("disconnect", onDisconnect);
      s.on("exception", onException);
      s.io.engine.on("upgrade", onUpgrade);

      return () => {
        s.off("connect", onConnect);
        s.off("disconnect", onDisconnect);
        s.off("exception", onException);
        s.io.engine.off("upgrade", onUpgrade);
        s.close();
      };
    }
  }, [status]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
      <div
        className={cn(
          "fixed bottom-1 right-1 z-50 flex h-6 w-24 items-center justify-center overflow-hidden rounded-full font-mono text-xs text-white",
          isConnected ? "bg-green-500" : "bg-gray-500",
        )}
      >
        {transport}
      </div>
    </SocketContext.Provider>
  );
};

export default SocketContext;
