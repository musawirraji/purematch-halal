import { Header } from "@shared/components/Header";
import { Footer } from "@shared/components/Footer";
import { StickyCTA } from "@shared/components/StickyCTA";

// Shared site chrome for all public pages. The style-guide route lives outside
// this group so it renders without header/footer.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <StickyCTA />
    </>
  );
}
