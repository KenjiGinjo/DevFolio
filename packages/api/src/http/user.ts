import { db } from "@devfolio/db";
import { Hono } from "hono";

export const user = new Hono().basePath("/user").get("/", async (c) => {
  const user = await db.user.select();
  return c.json({ data: "ke123" });
});
