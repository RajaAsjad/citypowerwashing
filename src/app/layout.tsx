import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import PageLoader from "@/components/PageLoader";
import { localBusinessSchema } from "@/lib/schema";
import { SITE } from "@/lib/site-data";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "City Power Washing | Central Florida Pressure & Soft Washing",
    template: "%s | City Power Washing",
  },
  description:
    "Professional pressure washing and soft washing in Central Florida. Licensed, insured, 5-star rated.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#082f49",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-sky-50 text-slate-900 antialiased">
        <PageLoader />
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
