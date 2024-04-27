import { getEnv } from "@devfolio/env";
import { orchidORM } from "orchid-orm";
import { TableUser } from "./user";

export const db = orchidORM(
  {
    log: getEnv("features/model").DATABASE_LOG,
    databaseURL: getEnv("features/model").DATABASE_URL,
  },
  {
    user: TableUser,
  }
);
