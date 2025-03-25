import { Migrations } from "@convex-dev/migrations";

import type { DataModel } from "./_generated/dataModel.js";

import { components, internal } from "./_generated/api.js";

export const migrations = new Migrations<DataModel>(components.migrations);

export const setUserRoles = migrations.define({
  table: "users",
  migrateOne: () => ({ isSiteAdmin: false }),
});

export const runSetUserRoles = migrations.runner(
  internal.migrations.setUserRoles,
);
