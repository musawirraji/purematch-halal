import type { Metadata } from "next";
import { StyleGuideScreen } from "@features/styleguide";

export const metadata: Metadata = {
  title: "Style Guide",
  robots: { index: false, follow: false },
};

export default function StyleGuidePage() {
  return <StyleGuideScreen />;
}
