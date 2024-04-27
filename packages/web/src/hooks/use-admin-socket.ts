import React from "react";
import SocketContext from "@/contexts/admin-socket-context";

const useAdminSocket = () => {
  const context = React.useContext(SocketContext);
  if (context === undefined) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

export default useAdminSocket;
