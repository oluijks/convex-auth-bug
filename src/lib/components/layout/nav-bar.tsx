import { Link } from "@tanstack/react-router";

import { buttonVariants } from "@/lib/components/ui/button";

export function NavBar() {
  return (
    <nav className="flex items-center gap-2">
      <Link
        to="/"
        className={buttonVariants({ variant: "ghost" })}
        activeProps={{
          className: buttonVariants({ variant: "secondary" }),
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>
      <Link
        to="/protected-1"
        className={buttonVariants({ variant: "ghost" })}
        activeProps={{
          className: buttonVariants({ variant: "secondary" }),
        }}
      >
        Protected Route 1
      </Link>
      <Link
        to="/protected-2"
        className={buttonVariants({ variant: "ghost" })}
        activeProps={{
          className: buttonVariants({ variant: "secondary" }),
        }}
      >
        Protected Route 2
      </Link>
      <Link
        to="/protected-3"
        className={buttonVariants({ variant: "ghost" })}
        activeProps={{
          className: buttonVariants({ variant: "secondary" }),
        }}
      >
        Protected Route 3
      </Link>
    </nav>
  );
}
