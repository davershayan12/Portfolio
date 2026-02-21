import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
