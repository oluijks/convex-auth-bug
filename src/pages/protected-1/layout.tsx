import { Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { useUser } from "@/lib/hooks/use-user.js";

export function FirstProtectedLayout() {
  const currentUser = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate({ to: "/sign-in" });
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <h1 className="my-8 text-3xl lg:text-4xl scroll-m-20">
        Protected 1 Layout (layout.tsx)
      </h1>
      <Outlet />
      <pre>user info:</pre>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  );
}
