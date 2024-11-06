import React from "react";
import SocketContext from "@/contexts/socket-context";

const useSocket = () => {
  const context = React.useContext(SocketContext);
  if (context === undefined) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

export default useSocket;
