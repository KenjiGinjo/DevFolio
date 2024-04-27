import { process } from "std-env";
import { parseEnv, port, z } from "znv";
type APP = "apps/db" | "apps/api" | "features/model";

const schemaModel = {
  DATABASE_LOG: z.boolean().default(false),
  DATABASE_URL: z.string().startsWith("postgresql://"),
};

type Model = ReturnType<typeof model>;
const model = () => {
  return parseEnv(process.env, schemaModel);
};

const schemaService = {
  YZH_DEALER_ID: z.string(),
};

type Service = ReturnType<typeof service>;
const service = () => {
  return parseEnv(process.env, schemaService);
};

// apps
const schemaApp = {
  TZ: z.literal("UTC"),
  NODE_ENV: z.enum(["development", "production"]),
};

type DB = ReturnType<typeof db>;
const db = () => {
  return parseEnv(process.env, {
    ...schemaModel,
    ...schemaApp,

    SEED_AUTH_PHONE: z.string(),
    SEED_AUTH_ADMIN: z.boolean(),
    SEED_AUTH_BRANCH: z.boolean(),
  });
};

type API = ReturnType<typeof api>;
const api = () => {
  return parseEnv(process.env, {
    ...schemaModel,
    ...schemaService,
    ...schemaApp,

    APP_STAGE: z.enum(["local", "dev", "prod"]),

    PORT: port().default(9000),
  });
};

export function getEnv(app: "features/model"): Model;
export function getEnv(app: "apps/db"): DB;
export function getEnv(app: "apps/api"): API;

export function getEnv(app: APP): Model | DB | API | Service {
  switch (app) {
    // features
    case "features/model":
      return model();
    // apps
    case "apps/db":
      return db();
    case "apps/api":
      return api();
  }
}
