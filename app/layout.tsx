import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL, getOgImageUrl } from "./constants";

const inter = Inter({ subsets: ["latin"] });

const defaultTitle = "Houdini Swap - Decentralized Cryptocurrency Exchange";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: "%s | Houdini Swap",
  },
  description:
    "Securely swap cryptocurrencies with Houdini Swap. Fast, efficient, and private transactions across multiple chains.",
  openGraph: {
    title: "Houdini Swap - Decentralized Cryptocurrency Exchange",
    description:
      "Securely swap cryptocurrencies with Houdini Swap. Fast, efficient, and private transactions across multiple chains.",
    url: SITE_URL,
    siteName: "Houdini Swap",
    images: [
      {
        url: getOgImageUrl(defaultTitle),
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Houdini Swap - Decentralized Cryptocurrency Exchange",
    description:
      "Securely swap cryptocurrencies with Houdini Swap. Fast, efficient, and private transactions across multiple chains.",
    images: [getOgImageUrl(defaultTitle)],
    creator: "@halilatilla",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[#F5F5F7] text-[#1D1D1F]`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
