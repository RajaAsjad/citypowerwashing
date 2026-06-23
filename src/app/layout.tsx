import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import MobileCallBar from "@/components/MobileCallBar";
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
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full`}>
      <body className="flex min-h-full flex-col text-slate-800 antialiased">
        <PageLoader />
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
