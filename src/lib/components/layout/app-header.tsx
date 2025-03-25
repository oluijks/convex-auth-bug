import { AuthActionsMenu } from "@/lib/components/auth/auth-actions";
import { NavBar } from "@/lib/components/layout/nav-bar";

export function AppHeader() {
  return (
    <header className="sticky-header">
      <div className="flex items-center px-3 h-16">
        <NavBar />
        <div className="flex items-center gap-2 ml-auto">
          <AuthActionsMenu />
        </div>
      </div>
    </header>
  );
}
