import { createContext, use } from "react";

import type { Id } from "convex/_generated/dataModel";

type User = {
  _id?: Id<"users"> | undefined;
  avatarId?: Id<"_storage"> | undefined;
  email?: string | undefined;
  emailVerificationTime?: number | undefined;
  image?: string | undefined;
  isAnonymous?: boolean | undefined;
  name?: string | undefined;
  phone?: string | undefined;
  phoneVerificationTime?: number | undefined;
  _creationTime?: number | undefined;
};

export const UserProviderContext = createContext<User | null | undefined>(null);

export function useUser() {
  // const context = useContext(UserProviderContext);
  const context = use(UserProviderContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
