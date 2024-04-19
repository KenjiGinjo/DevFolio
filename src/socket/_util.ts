import { Exception } from "../../exception";
import { Socket } from "socket.io";
import db from "../lib/prisma";

const parseCookies = (cookieHeader?: string) => {
  const list = {};
  cookieHeader &&
    cookieHeader.split(";").forEach((cookie) => {
      const parts = cookie.split("=");
      list[parts.shift()!.trim()] = decodeURI(parts.join("="));
    });
  return list;
};

export const verifySession = async (socket: Socket) => {
  const cookies = parseCookies(socket.handshake.headers.cookie);
  const sessionToken = cookies["authjs.session-token"];

  const session = await db.session.findUnique({
    where: { sessionToken },
  });

  if (!session) {
    throw new Exception.Unauthorized("session not found");
  }

  if (new Date(session.expires) < new Date()) {
    throw new Exception.Unauthorized("session expired");
  }
  const user = await db.user.findUnique({
    where: { id: session.userId },
  });
  if (!user) {
    throw new Exception.Unauthorized("user not found");
  }
  return user;
};

export const createOrGetUserRoom = async (userId: string) => {
  const room = await db.room.findFirst({
    where: { userId },
  });
  if (room) {
    return room;
  }
  const newRoom = await db.room.create({
    data: {
      userId,
    },
  });

  return newRoom;
};
