"use client";
import React from "react";
import { Socket, io } from "socket.io-client";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

const AdminSocketContext = React.createContext<Socket | null>(null);

export const AdminSocketProvider = ({ children }: any) => {
  const { status } = useSession();

  const [socket, setSocket] = React.useState<Socket | null>(null);

  const [isConnected, setIsConnected] = React.useState(false);
  const [transport, setTransport] = React.useState("N/A");

  React.useEffect(() => {
    if (status === "authenticated") {
      const s = io("/admin", {
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        randomizationFactor: 0.5,
      });

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
      s.io.engine.on("upgrade", onUpgrade);
      s.on("exception", onException);

      return () => {
        s.off("connect", onConnect);
        s.off("disconnect", onDisconnect);
        s.io.engine.off("upgrade", onUpgrade);
        s.off("exception", onException);
        s.close();
      };
    }
  }, [status]);

  return (
    <AdminSocketContext.Provider value={socket}>
      {children}
      <div
        className={cn(
          "fixed bottom-1 right-1 z-50 flex h-6 w-24 items-center justify-center overflow-hidden rounded-full font-mono text-xs text-white",
          isConnected ? "bg-green-500" : "bg-gray-500",
        )}
      >
        {transport}
      </div>
    </AdminSocketContext.Provider>
  );
};

export default AdminSocketContext;
