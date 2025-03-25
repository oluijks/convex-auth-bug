import { useAuthActions } from "@convex-dev/auth/react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Authenticated, Unauthenticated } from "convex/react";

import { Button } from "@/lib/components/ui/button";

export function AuthActionsMenu() {
  const navigate = useNavigate();
  const { signOut } = useAuthActions();

  const handleLogOut = () => {
    void signOut().then(() => navigate({ to: "/" }));
  };

  return (
    <>
      <Authenticated>
        <Button
          variant="outline"
          aria-label="Logout"
          onClick={handleLogOut}
        >
          Logout
        </Button>
      </Authenticated>
      <Unauthenticated>
        <Button variant="outline" asChild>
          <Link to="/sign-in">
            Login
          </Link>
        </Button>
      </Unauthenticated>
    </>
  );
}
