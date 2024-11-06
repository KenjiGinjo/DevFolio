import { Hono } from "hono";
import { user } from "./user";

export const route = new Hono() //
  .route("/", user);
