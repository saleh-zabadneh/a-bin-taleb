import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const droidArabicKufi = localFont({
  src: "./fonts/Droid-Arabic-Kufi.ttf.woff",
  variable: "--font-droid-arabic-kufi",
});

export const metadata: Metadata = {
  title: "A.BIN Taleb",
  description: "Swimming Pools CO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${droidArabicKufi.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
