import { Navigate, Outlet } from "@tanstack/react-router";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";

import { useUser } from "@/lib/hooks/use-user.js";

export function SecondProtectedLayout() {
  const currentUser = useUser();

  return (
    <div>
      <h1 className="my-8 text-3xl lg:text-4xl scroll-m-20">
        Protected 2 Layout (layout.tsx)
      </h1>
      <AuthLoading>
        <div>Loading...</div>
      </AuthLoading>
      <Unauthenticated>
        <Navigate to="/sign-in" replace />
      </Unauthenticated>
      <Authenticated>
        <div>
          <Outlet />
          <pre>user info:</pre>
          <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        </div>
      </Authenticated>
    </div>
  );
}
