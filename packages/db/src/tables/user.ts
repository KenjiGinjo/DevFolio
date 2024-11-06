import { BaseTable } from "./_base";

export class TableUser extends BaseTable {
  public readonly table = "city";

  public columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    name: t.varchar().unique(),
    email: t.boolean().default(false),
    emailVerified: t
      .varchar()
      .encode((v: string) => v.replace(/\s/g, "").toLowerCase()),
    image: t.varchar().nullable(),
  }));
}
