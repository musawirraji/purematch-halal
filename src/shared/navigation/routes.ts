// Central route registry. Screens/components reference these — never hardcode
// paths or import the framework router directly.

export type RouteKey =
  | "home"
  | "about"
  | "membership"
  | "faqs"
  | "contact"
  | "services"
  | "register";

export interface RouteDef {
  key: RouteKey;
  path: string;
  label: string;
  /** Show in the primary nav bar */
  inNav: boolean;
}

// Order here IS the nav order: Home · About · How It Works · FAQs · Contact.
export const routes: Record<RouteKey, RouteDef> = {
  home: { key: "home", path: "/", label: "Home", inNav: true },
  about: { key: "about", path: "/about", label: "About", inNav: true },
  membership: { key: "membership", path: "/membership", label: "How It Works", inNav: true },
  faqs: { key: "faqs", path: "/faqs", label: "FAQs", inNav: true },
  contact: { key: "contact", path: "/contact", label: "Contact", inNav: true },
  // Anchor to the on-home journey scroller — not a top-nav item.
  services: { key: "services", path: "/#journey", label: "The journey", inNav: false },
  register: { key: "register", path: "/register", label: "Begin Your Application", inNav: false },
};

export const navRoutes: RouteDef[] = Object.values(routes).filter((r) => r.inNav);

export const route = (key: RouteKey): string => routes[key].path;
