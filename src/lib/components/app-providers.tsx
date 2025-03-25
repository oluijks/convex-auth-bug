import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

import { CurrentUserProvider } from "@/lib/components/user-provider";

type AppProvidersProps = {
  children: React.ReactNode;
};

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ConvexProvider client={convex}>
      <ConvexAuthProvider client={convex}>
        <CurrentUserProvider>{children}</CurrentUserProvider>
      </ConvexAuthProvider>
    </ConvexProvider>
  );
}
