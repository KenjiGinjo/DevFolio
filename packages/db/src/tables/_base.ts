import { createId } from "@paralleldrive/cuid2";
import { stringify } from "@xstools/utility";
import type { DefaultColumnTypes, DefaultSchemaConfig } from "orchid-orm";
import { createBaseTable } from "orchid-orm";

const cuid = (t: DefaultColumnTypes<DefaultSchemaConfig>) => () =>
  t
    .varchar(36)
    .primaryKey()
    .default(() => createId());

const deletedAt = (t: DefaultColumnTypes<DefaultSchemaConfig>) => () =>
  t
    .timestampNoTZ()
    .encode((value: Date | string) => {
      if (typeof value === "string") {
        return new Date(value);
      } else {
        return value;
      }
    })
    .parse((v: any): Date => (v ? new Date(v) : v))
    .nullable();
const createdAt = (t: DefaultColumnTypes<DefaultSchemaConfig>) => () =>
  t
    .timestampsNoTZSnakeCase()
    .createdAt.default(() => new Date().toISOString())
    .encode((value: Date | string) => {
      if (typeof value === "string") {
        return new Date(value);
      } else {
        return value;
      }
    })
    .parse((v: any): Date => (v ? new Date(v) : v));
const updatedAt = (t: DefaultColumnTypes<DefaultSchemaConfig>) => () =>
  t
    .timestampsNoTZSnakeCase()
    .updatedAt.default(() => new Date().toISOString())
    .encode((value: Date | string) => {
      if (typeof value === "string") {
        return new Date(value);
      } else {
        return value;
      }
    })
    .parse((v: any): Date => (v ? new Date(v) : v));

export const BaseTable = createBaseTable({
  snakeCase: true,
  nowSQL: `now()::timestamptz(3) AT TIME ZONE 'UTC'`,

  columnTypes: (t) => ({
    ...t,

    varchar: (length?: number) => t.varchar(length || 255),
    text: (min = 0, max = Infinity) => t.text(min, max),

    xEnum: <T extends Record<any, any>>(_: T) =>
      t
        .varchar()
        .encode((v: T[keyof T]) => v)
        .parse((v) => v as unknown as T[keyof T]),
    xJsonText: () =>
      t.jsonText().encode((v: Record<string, any> | any[]) => stringify(v)),
    xTimestamp: () =>
      t
        .timestampNoTZ()
        .encode((value: string | Date) => {
          if (typeof value === "string") {
            return new Date(value);
          } else {
            return value;
          }
        })
        .parse((v: any): Date => (v ? new Date(v) : v)),

    createdAt: createdAt(t),
    updatedAt: updatedAt(t),
    deletedAt: deletedAt(t),
    cuid: cuid(t),

    baseColumns: () => {
      return {
        id: cuid(t)(),
        createdAt: createdAt(t)(),
        updatedAt: updatedAt(t)(),
        deletedAt: deletedAt(t)(),
      };
    },
  }),
});
