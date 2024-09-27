import { SwapInterface } from "@/components/SwapInterface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  openGraph: {
    title: "Houdini Swap - Decentralized Cryptocurrency Exchange",
    images: [
      {
        // change url
        url: "https://houdiniswap.com/api/og?title=Houdini%20Swap%20-%20Home",
        width: 1200,
        height: 630,
        alt: "Houdini Swap - Home",
      },
    ],
  },
  twitter: {
    title: "Houdini Swap - Home",
    // change url
    images: ["https://houdiniswap.com/api/og?title=Houdini%20Swap%20-%20Home"],
  },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">
        Welcome to Houdini Swap
      </h1>
      <SwapInterface />
    </div>
  );
}
