"use client";
import React from "react";
import { Socket, io } from "socket.io-client";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { ClientToServerEvents, ServerToClientEvents } from "@/socket/types";

const SocketContext = React.createContext<WebSocket>(null);

export const SocketProvider = ({ children }: any) => {
  const { status } = useSession();
  const [ws, setWs] = React.useState<WebSocket>(null);
  const [isConnected, setIsConnected] = React.useState(false);

  React.useEffect(() => {
    if (status === "authenticated") {
      const s = {};

      const socket = new WebSocket("ws://127.0.0.1:3003/chat");

      socket.onopen = () => {
        setWs(socket);
        setIsConnected(true);
      };

      socket.onerror = (event) => {
        console.error("WebSocket error:", event);
      };
      socket.onclose = (event) => {
        setIsConnected(false);
      };
    }
  }, [status]);

  return (
    <SocketContext.Provider value={ws}>
      {children}
      <div
        className={cn(
          "fixed bottom-1 right-1 z-50 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full font-mono text-xs text-white",
          isConnected ? "bg-green-500" : "bg-gray-500",
        )}
      />
    </SocketContext.Provider>
  );
};

export default SocketContext;
