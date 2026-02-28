import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Daver Shayan — Full-Stack Developer & AI/ML Engineer",
  description:
    "SSUET'28 | Next.js Full-Stack Developer & AI/ML Engineer | Building Intelligent Agent Systems — LangChain, RAG pipelines, LLM fine-tuning.",
  keywords: [
    "Muhammad Daver Shayan",
    "Next.js Developer",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Portfolio",
    "LangChain",
    "RAG",
  ],
  authors: [{ name: "Muhammad Daver Shayan" }],
  openGraph: {
    title: "Muhammad Daver Shayan — Full-Stack Developer & AI/ML Engineer",
    description:
      "SSUET'28 | Next.js Full-Stack Developer & AI/ML Engineer | Building Intelligent Agent Systems.",
    type: "website",
  },
};

import NoiseTexture from "@/components/NoiseTexture";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}
    >
      <body style={{ position: "relative", minHeight: "100vh" }}>
        <NoiseTexture />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
