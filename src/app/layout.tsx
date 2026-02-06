import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madhur Khandelwal — AI + Transformation",
  description:
    "Portfolio: GenAI, agentic automation, process intelligence, and enterprise transformation demos.",
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
