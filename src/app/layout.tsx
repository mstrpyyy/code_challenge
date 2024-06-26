import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AOSInit } from '../components/aos'
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300","400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: {
    template: 'Bean It! | %s',
    default: 'Bean It!'
  },
  description: "Bean It! company profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit /> 
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
