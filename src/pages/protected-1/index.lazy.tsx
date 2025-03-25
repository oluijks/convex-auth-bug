import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/protected-1")({
  component: IndexPage,
});

export function IndexPage() {
  return (
    <div>
      <h1 className="my-8 text-3xl lg:text-4xl scroll-m-20">
        Protected 1 Route Index Page (index.lazy.tsx)
      </h1>
    </div>
  );
}
