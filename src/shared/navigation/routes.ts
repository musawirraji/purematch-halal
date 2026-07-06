// Central route registry. Screens/components reference these — never hardcode
// paths or import the framework router directly.

export type RouteKey =
  | "home"
  | "about"
  | "services"
  | "register"
  | "policy"
  | "events"
  | "gallery"
  | "faqs"
  | "contact";

export interface RouteDef {
  key: RouteKey;
  path: string;
  label: string;
  /** Show in the primary nav bar */
  inNav: boolean;
}

export const routes: Record<RouteKey, RouteDef> = {
  home: { key: "home", path: "/", label: "Home", inNav: true },
  about: { key: "about", path: "/about", label: "About", inNav: true },
  services: { key: "services", path: "/#journey", label: "The journey", inNav: true },
  events: { key: "events", path: "/#events", label: "Events", inNav: true },
  gallery: { key: "gallery", path: "/gallery", label: "Gallery", inNav: true },
  faqs: { key: "faqs", path: "/faqs", label: "FAQs", inNav: true },
  contact: { key: "contact", path: "/contact", label: "Contact", inNav: true },
  policy: { key: "policy", path: "/policy", label: "Membership", inNav: false },
  register: { key: "register", path: "/register", label: "Begin Application", inNav: false },
};

export const navRoutes: RouteDef[] = Object.values(routes).filter((r) => r.inNav);

export const route = (key: RouteKey): string => routes[key].path;
