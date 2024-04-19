import { Server, Socket } from "socket.io";
import db from "../lib/prisma";
import { Exception } from "../../exception";
import { verifySession, createOrGetUserRoom } from "./_util";

export const setupSocket = (io: Server) => {
  const client = io.of("/client");
  const admin = io.of("/admin");

  const userSocketMap = new Map();

  let adminSocketId = "";

  admin.on("connection", async (socket) => {
    try {
      const user = await verifySession(socket);
      if (user.id !== process.env.ADMIN_ID) {
        throw new Exception.Unauthorized("user is not admin");
      }

      adminSocketId = socket.id;

      socket.on("message", (data, callback) => {
        client
          .to(userSocketMap.get(data.userId) as string)
          .emit("receive-message", { message: data.message }, (err) => {
            if (err) {
              console.error(err); // TODO: Handle error
            }
            callback("Message sent successfully");
          });
      });
    } catch (e) {
      // Overcome the limitation of Error object serialization in JavaScript.
      socket.emit("exception", {
        message: e.message,
        code: e.code,
        status: e.status,
      });
      socket.disconnect();
      return;
    }
    socket.on("disconnect", () => {
      console.log("admin disconnected");
    });
  });

  client.on("connection", async (socket) => {
    try {
      const user = await verifySession(socket);

      userSocketMap.set(user.id, socket.id);

      socket.on("message", (message, callback) => {
        admin
          .timeout(1000)
          .to(adminSocketId as string)
          .emit("receive-message", { message, user }, (err) => {
            if (err) {
              console.error(err); // TODO: Handle error
            }
            callback("Message received successfully");
          });
      });
    } catch (e) {
      // Overcome the limitation of Error object serialization in JavaScript.
      socket.emit("exception", {
        message: e.message,
        code: e.code,
        status: e.status,
      });
      socket.disconnect();
    }

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
