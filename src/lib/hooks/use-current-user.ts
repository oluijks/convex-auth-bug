import { useConvexAuth, useQuery } from "convex/react";

import { api } from "../../../convex/_generated/api";

export function useCurrentUser() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const user = useQuery(api.users.currentAuthenticatedUser);

  return {
    isLoading: isLoading || (isAuthenticated && user === null),
    isAuthenticated: isAuthenticated && user !== null,
  };
}
