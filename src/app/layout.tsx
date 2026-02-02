import type { Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "GRDO | Great-Life Relief and Development Organization",
  description:
    "Transforming lives and building resilient communities across Somalia through inclusive education, humanitarian relief, and civil society development."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${fredoka.variable} font-body`}>{children}</body>
    </html>
  );
}
