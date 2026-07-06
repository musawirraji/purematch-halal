import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";

// -----------------------------------------------------------------------------
// Pairing A (PRIMARY) — Bricolage Grotesque + Instrument Sans
// The warmest grotesk available; suits terracotta best. Both variable.
// -----------------------------------------------------------------------------
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--pm-font-bricolage",
});

export const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--pm-font-instrument",
});

// -----------------------------------------------------------------------------
// Pairing B (comparison on the specimen) — Clash Display + General Sans
// Self-hosted from Fontshare (ITF-FFL, commercial OK).
// -----------------------------------------------------------------------------
export const clash = localFont({
  variable: "--pm-font-clash",
  display: "swap",
  src: [
    { path: "../../../public/fonts/ClashDisplay-400.woff2", weight: "400", style: "normal" },
    { path: "../../../public/fonts/ClashDisplay-500.woff2", weight: "500", style: "normal" },
    { path: "../../../public/fonts/ClashDisplay-600.woff2", weight: "600", style: "normal" },
    { path: "../../../public/fonts/ClashDisplay-700.woff2", weight: "700", style: "normal" },
  ],
});

export const generalSans = localFont({
  variable: "--pm-font-general",
  display: "swap",
  src: [
    { path: "../../../public/fonts/GeneralSans-400.woff2", weight: "400", style: "normal" },
    { path: "../../../public/fonts/GeneralSans-500.woff2", weight: "500", style: "normal" },
    { path: "../../../public/fonts/GeneralSans-600.woff2", weight: "600", style: "normal" },
    { path: "../../../public/fonts/GeneralSans-700.woff2", weight: "700", style: "normal" },
  ],
});

// All four variable classes, applied to <html> so the CSS vars resolve globally.
export const fontVariables = [
  bricolage.variable,
  instrument.variable,
  clash.variable,
  generalSans.variable,
].join(" ");
