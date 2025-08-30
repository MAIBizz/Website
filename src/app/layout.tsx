import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAIBizz — AI Automation Agency",
  description: "AI agents & automations that save time and grow revenue.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className={`${inter.className} min-h-screen`}>{children}</body>
      </html>
  );
}
