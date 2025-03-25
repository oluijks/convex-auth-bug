import { createRootRoute } from "@tanstack/react-router";

import { RootLayout } from "@/pages/root-layout";

import {
  homeRoute,
  signInRoute,
  signUpRoute,
} from "./routes/app";
import {
  firstProtectedIndexRoute,
  firstRootLayout,
  secondProtectedIndexRoute,
  secondRootLayout,
  thirdProtectedIndexRoute,
  thirdRootLayout,
} from "./routes/protected";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  signInRoute,
  signUpRoute,
  firstRootLayout.addChildren([
    firstProtectedIndexRoute,
  ]),
  secondRootLayout.addChildren([
    secondProtectedIndexRoute,
  ]),
  thirdRootLayout.addChildren([
    thirdProtectedIndexRoute,
  ]),
]);
