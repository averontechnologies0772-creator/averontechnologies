import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://averontechnologiesllc.com"),
  title: {
    default: "Averon Technologies | IT Staffing & Technology Talent Solutions",
    template: "%s | Averon Technologies LLC",
  },
  description:
    "Averon Technologies LLC connects businesses across the United States with qualified technology professionals in Software Engineering, Cloud, Cybersecurity, Data, and Infrastructure.",
  keywords: [
    "IT Staffing",
    "Technology Talent Solutions",
    "Contract Staffing",
    "Contract-to-Hire",
    "Permanent Placement",
    "Technical Recruitment",
    "Software Engineers",
    "Cloud DevOps",
    "Cybersecurity Staffing",
    "Averon Technologies LLC",
  ],
  authors: [{ name: "Averon Technologies LLC" }],
  creator: "Averon Technologies LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://averontechnologiesllc.com",
    title: "Averon Technologies | IT Staffing & Technology Talent Solutions",
    description:
      "Averon Technologies LLC connects businesses across the United States with qualified technology professionals aligned with technical requirements and business objectives.",
    siteName: "Averon Technologies LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Averon Technologies | IT Staffing & Technology Talent Solutions",
    description:
      "Connecting organizations across the United States with qualified technology professionals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1A2535]">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-midnight focus:text-white focus:rounded focus:shadow"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
