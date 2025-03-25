import { useQuery } from "convex/react";

import { UserProviderContext } from "@/lib/hooks/use-user.js";

import { api } from "../../../convex/_generated/api";

type UserProviderProps = {
  children: React.ReactNode;
};

export function CurrentUserProvider({ children }: UserProviderProps) {
  const currentUser = useQuery(api.users.me);

  return (
    <UserProviderContext value={currentUser}>
      {children}
    </UserProviderContext>
  );
}
