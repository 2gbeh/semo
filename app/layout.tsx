import "./globals.css";
import type { Metadata } from "next";
//
import APP from "@/utils/constants/APP";
//
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
//
export const metadata: Metadata = {
  title: { default: APP.title, template: `%s | ${APP.hashtag}` },
  description: APP.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
