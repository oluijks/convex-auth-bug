import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import { ConvexError } from "convex/values";

import type { DataModel } from "./_generated/dataModel";

import { INVALID_PASSWORD } from "./errors";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password<DataModel>({
      profile(params) {
        return {
          name: params.name as string,
          email: params.email as string,
          isSiteAdmin: params.isSiteAdmin as boolean,
        };
      },
      validatePasswordRequirements(password) {
        if (!password || password.length < 8) {
          throw new ConvexError(INVALID_PASSWORD);
        }
      },
    }),
  ],
});
