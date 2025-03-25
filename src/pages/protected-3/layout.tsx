import { Navigate, Outlet } from "@tanstack/react-router";

import { useCurrentUser } from "@/lib/hooks/use-current-user";

export function ThirdProtectedLayout() {
  const { isLoading, isAuthenticated } = useCurrentUser();
  return (
    <>
      {isLoading
        ? (
            <>Loading...</>
          )
        : isAuthenticated
          ? (
              <Outlet />

            )
          : (
              <Navigate to="/sign-in" replace />
            )}
    </>
  );
}
