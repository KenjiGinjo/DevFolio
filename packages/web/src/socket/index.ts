import { Namespace, Server } from "socket.io";
import { Exception } from "../../exception";
import { sendException, verifySession } from "./_util";
import {
  AdminClientToServerEvents,
  AdminInterServerEvents,
  AdminServerToClientEvents,
  AdminSocketData,
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "./types";
// TODO:  validation/sanitizatio
export const setupSocket = (httpServer: any) => {
  const io = new Server(httpServer);
  const client: Namespace<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  > = io.of("/client");
  const admin: Namespace<
    AdminClientToServerEvents,
    AdminServerToClientEvents,
    AdminInterServerEvents,
    AdminSocketData
  > = io.of("/admin");
  const userSocketMap = new Map();

  let adminSocketId = "";

  admin.on("connection", async (socket) => {
    try {
      const sessionAdmin = await verifySession(socket);
      if (sessionAdmin.id !== process.env.ADMIN_ID) {
        throw new Exception.Unauthorized("user is not admin");
      }

      adminSocketId = socket.id;

      socket.on("message", (data, callback) => {
        client
          .timeout(1000)
          .to(userSocketMap.get(data.user.id) as string)
          .emit("receiveMessage", data, (err, responses) => {
            if (err) return;
            if (responses.find((response) => response.id === data.user.id)) {
              callback(data.user);
            }
          });
      });
    } catch (e) {
      sendException(socket, e);
    }

    socket.on("disconnect", () => {
      console.log("admin disconnected");
    });
  });

  client.on("connection", async (socket) => {
    try {
      const sessionUser = await verifySession(socket);

      userSocketMap.set(sessionUser.id, socket.id);

      socket.on("message", (data, callback) => {
        admin
          .timeout(1000)
          .to(adminSocketId)
          .emit("receiveMessage", data, (err, responses) => {
            if (err) return;
            if (
              responses.find((response) => response.userId === data.user.id)
            ) {
              callback(data.user);
            }
          });
      });
    } catch (e) {
      sendException(socket, e);
    }

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
