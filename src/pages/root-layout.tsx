import { HeadContent, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { AppProviders } from "@/lib/components/app-providers";
import { AppHeader } from "@/lib/components/layout/app-header";

export function RootLayout() {
  return (
    <AppProviders>
      <HeadContent />
      <AppHeader />
      <main className="container">
        <Outlet />
        <TanStackRouterDevtools />
      </main>
    </AppProviders>
  );
}
