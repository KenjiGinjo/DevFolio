import { Hono } from "hono";
import { showRoutes } from "hono/dev";
import { logger } from "hono/logger";
import { ENV } from "./env";
// import { handler } from "./handler";
import { route } from "./http";

const app = new Hono().route("/", route);

app.use(logger());
// _app.onError(handler);

if (ENV.APP_STAGE === "local") {
  console.log(`server: http://127.0.0.1:${ENV.PORT}`);
  showRoutes(app);
}

export default {
  port: ENV.PORT,
  fetch: app.fetch,
};
