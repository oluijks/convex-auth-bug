import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";

import type { Id } from "./_generated/dataModel";

import { query } from "./_generated/server";

export const isSignedIn = query(async (ctx) => {
  return !!(await getAuthUserId(ctx));
});

export const me = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      return null;
    }

    let imageUrl = null;
    const user = await ctx.db.get(userId);
    if (user?.avatarId) {
      imageUrl = await ctx.storage.getUrl(user.avatarId as Id<"_storage">);
    }

    return {
      ...user,
      imageUrl,
    };
  },
});

export const users = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const getImageUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

export const checkUserExists = query({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if a user exists with the given email
    const userByEmail = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (userByEmail) {
      return { exists: true, conflict: "email", user: userByEmail };
    }

    // If name is provided, check if a user exists with the given name
    if (args.name) {
      const userByName = await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("name"), args.name))
        .first();

      if (userByName) {
        return { exists: true, conflict: "name", user: userByName };
      }
    }

    // No user found
    return { exists: false, conflict: null, user: null };
  },
});

export const currentAuthenticatedUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return null;
    }

    return await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", identity.email as string))
      .unique();
  },
});
