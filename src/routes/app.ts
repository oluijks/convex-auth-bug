import { createRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/home";
import { rootRoute } from "@/routes";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

export const signInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sign-in",
}).lazy(() => import("../pages/(auth)/sign-in.lazy").then(d => d.Route));

export const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sign-up",
}).lazy(() => import("../pages/(auth)/sign-up.lazy").then(d => d.Route));
