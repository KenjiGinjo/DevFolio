import { parseCookies } from "./utils/cookie";
import { generateSessionId } from "./utils/session";
import { getUserFromToken } from "./middleware/authentication";
import { saveMessageToDatabase } from "./services/database";

Bun.serve({
  async fetch(req, server) {
    const url = new URL(req.url);
    if (url.pathname === "/chat") {
      console.log("Upgrade request for chat!");
      const cookies = parseCookies(req.headers.get("Cookie") || "");
      const authToken = cookies["X-Token"];
      const sessionId = await generateSessionId();
      const success = server.upgrade(req, {
        headers: {
          "Set-Cookie": `SessionId=${sessionId}`,
        },
        data: {
          createdAt: Date.now(),
          channelId: url.searchParams.get("channelId"),
          authToken: authToken,
        },
      });
      return success
        ? undefined
        : new Response("WebSocket upgrade error", { status: 400 });
    }
    return new Response("Hello world");
  },
  websocket: {
    open(ws) {
      const msg = `${ws.data.username} has entered the chat`;
      ws.subscribe("the-group-chat");
      ws.publish("the-group-chat", msg);
    },
    message(ws, message) {
      const user = getUserFromToken(ws.data.authToken);
      ws.publish("the-group-chat", `${user.id}: ${message}`);
      saveMessageToDatabase({
        channel: ws.data.channelId,
        message: String(message),
        userId: user.id,
      });
    },
    close(ws) {
      const msg = `${ws.data.username} has left the chat`;
      ws.unsubscribe("the-group-chat");
      ws.publish("the-group-chat", msg);
    },
    drain(ws) {
      console.log(`Ready to send more data to: ${ws.remoteAddress}`);
    },
    perMessageDeflate: true,
    idleTimeout: 60,
    maxPayloadLength: 1024 * 1024, // 1 MB
  },
  port: process.env.PORT || 3003,
});
console.log("Socket Server listening on port", process.env.PORT || 3003);
