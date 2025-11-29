import type { Metadata } from "next";
import monofontoFont from 'next/font/local';
import "./globals.css";

const monofontoRegular = monofontoFont({
  src: '../public/monofonto.ttf',
})

export const metadata: Metadata = {
  title: "Pan API",
  description: "An community-ran API for Flavortown!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={monofontoRegular.className}
      >
        {children}
      </body>
    </html>
  );
}
