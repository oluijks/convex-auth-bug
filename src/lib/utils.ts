import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Wait for a condition to be true, checking frequently */
export async function waitFor(fn: () => boolean) {
  while (!fn()) {
    await delay(10);
  }
}
