import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,

  users: defineTable({
    name: v.string(),
    image: v.optional(v.string()),
    email: v.string(),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    // other "users" fields...
    avatarId: v.optional(v.id("_storage")),
    isSiteAdmin: v.boolean(),
  })
    .index("by_name", ["name"])
    .index("by_email", ["email"])
    .index("by_phone", ["phone"]),
});
