import { SwapInterface } from "@/components/SwapInterface";
import { Metadata } from "next";
import { getOgImageUrl } from "./constants";

const pageTitle = "Houdini Swap - Home";

export const metadata: Metadata = {
  title: pageTitle,
  openGraph: {
    title: pageTitle,
    images: [
      {
        url: getOgImageUrl(pageTitle),
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    title: pageTitle,
    images: [getOgImageUrl(pageTitle)],
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
