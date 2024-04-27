import { process } from 'std-env';
import { parseEnv, port, z } from 'znv';
type APP = 'apps/db' | 'apps/api' | 'apps/cron' | 'features/model' | 'features/service';

// features
const schemaModel = {
  DATABASE_LOG: z.boolean().default(false),
  DATABASE_URL: z.string().startsWith('postgresql://'),
};

type Model = ReturnType<typeof model>;
const model = () => {
  return parseEnv(process.env, schemaModel);
};

const schemaService = {
  // 以后可以放到xbass的config里
  YZH_DEALER_ID: z.string(),
  YZH_BROKER_ID: z.string(),
  YZH_APP_KEY: z.string(),
  YZH_DES3_KEY: z.string(),
  YZH_PRIVATE_KEY: z.string(),
  YZH_PUBLIC_KEY: z.string(),

  SMS_ALIYUN_AK: z.string(),
  SMS_ALIYUN_SK: z.string(),
  SMS_ALIYUN_SIGN: z.string(),
  SMS_TEMPLATE_ACTIVITY_REMIND: z.string(),
  SMS_TEMPLATE_CAPTCHA: z.string(),

  DRIVE_IMAGE_AK: z.string(),
  DRIVE_IMAGE_SK: z.string(),
  DRIVE_IMAGE_REGION: z.string(),
  DRIVE_IMAGE_BUCKET: z.string(),
  DRIVE_IMAGE_HOST: z.string(),

  DRIVE_SECURE_AK: z.string(),
  DRIVE_SECURE_SK: z.string(),
  DRIVE_SECURE_REGION: z.string(),
  DRIVE_SECURE_BUCKET: z.string(),
  DRIVE_SECURE_HOST: z.string(),

  WECHAT_MINI_PROGRAM_APPID: z.string(),
  WECHAT_MINI_PROGRAM_APPSECRET: z.string(),
};

type Service = ReturnType<typeof service>;
const service = () => {
  return parseEnv(process.env, schemaService);
};

// apps
const schemaApp = {
  TZ: z.literal('UTC'),
  NODE_ENV: z.enum(['development', 'production']),
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

    REDIS_URL: z.string(),
    APP_STAGE: z.enum(['local', 'dev', 'prod']),

    HOST: z.string(),
    PORT: port().default(9000),

    DEV_PHONE: z.string().optional(),
  });
};

type CRON = ReturnType<typeof cron>;
const cron = () => {
  return parseEnv(process.env, {
    ...schemaModel,
    ...schemaApp,

    APP_STAGE: z.enum(['local', 'dev', 'prod']),

    HOST: z.string(),
    PORT: port().default(9000),
  });
};

export function getEnv(app: 'features/model'): Model;
export function getEnv(app: 'features/service'): Service;
export function getEnv(app: 'apps/db'): DB;
export function getEnv(app: 'apps/api'): API;
export function getEnv(app: 'apps/cron'): CRON;

export function getEnv(app: APP): Model | DB | API | Service {
  switch (app) {
    // features
    case 'features/model':
      return model();
    case 'features/service':
      return service();

    // apps
    case 'apps/db':
      return db();
    case 'apps/api':
      return api();
    case 'apps/cron':
      return cron();
  }
}
