import { createRoute } from "@tanstack/react-router";

import { FirstProtectedLayout } from "@/pages/protected-1/layout";
import { SecondProtectedLayout } from "@/pages/protected-2/layout";
import { ThirdProtectedLayout } from "@/pages/protected-3/layout";
import { rootRoute } from "@/routes";

export const firstRootLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: "/protected-1",
  component: FirstProtectedLayout,
});

export const firstProtectedIndexRoute = createRoute({
  getParentRoute: () => firstRootLayout,
  path: "/",
}).lazy(() => import("../pages/protected-1/index.lazy").then(d => d.Route));

export const secondRootLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: "/protected-2",
  component: SecondProtectedLayout,
});

export const secondProtectedIndexRoute = createRoute({
  getParentRoute: () => secondRootLayout,
  path: "/",
}).lazy(() => import("../pages/protected-2/index.lazy").then(d => d.Route));

export const thirdRootLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: "/protected-3",
  component: ThirdProtectedLayout,
});

export const thirdProtectedIndexRoute = createRoute({
  getParentRoute: () => thirdRootLayout,
  path: "/",
}).lazy(() => import("../pages/protected-3/index.lazy").then(d => d.Route));
