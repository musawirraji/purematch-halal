"use client";

import { useRouter } from "next/navigation";
import { route, type RouteKey } from "./routes";

// Thin wrapper over the framework router — screens navigate through this, never
// importing next/navigation directly.
export function useNavigation() {
  const router = useRouter();
  return {
    goTo: (key: RouteKey) => router.push(route(key)),
    goToPath: (path: string) => router.push(path),
    back: () => router.back(),
  };
}
