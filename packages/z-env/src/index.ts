import { process } from 'std-env';
import { parseEnv, port, z } from 'znv';

type APP = 'apps/db' | 'apps/api' | 'features/model';

const schemaModel = {
  DATABASE_LOG: z.boolean().default(false),
  DATABASE_URL: z.string().startsWith('postgresql://'),
};

const model = () => {
  return parseEnv(process.env, schemaModel);
};

type Model = ReturnType<typeof model>;

const schemaService = {};

const service = () => {
  return parseEnv(process.env, schemaService);
};

type Service = ReturnType<typeof service>;

// apps
const schemaApp = {
  TZ: z.literal('UTC'),
  NODE_ENV: z.enum(['development', 'production']),
};

const db = () => {
  return parseEnv(process.env, {
    ...schemaModel,
    ...schemaApp,

    SEED_AUTH_PHONE: z.string(),
    SEED_AUTH_ADMIN: z.boolean(),
    SEED_AUTH_BRANCH: z.boolean(),
  });
};

type DB = ReturnType<typeof db>;

const api = () => {
  return parseEnv(process.env, {
    ...schemaModel,
    ...schemaService,
    ...schemaApp,

    APP_STAGE: z.enum(['local', 'dev', 'prod']),

    PORT: port().default(9000),
  });
};

type API = ReturnType<typeof api>;

export function getEnv(app: 'features/model'): Model;
export function getEnv(app: 'apps/db'): DB;
export function getEnv(app: 'apps/api'): API;

export function getEnv(app: APP): Model | DB | API | Service {
  switch (app) {
    // features
    case 'features/model':
      return model();
    // apps
    case 'apps/db':
      return db();
    case 'apps/api':
      return api();
  }
}
