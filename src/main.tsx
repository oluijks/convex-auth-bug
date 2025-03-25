import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/app.css";

import { routeTree } from "@/routes";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  type CustomRegister = {
    router: typeof router;
  };
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
