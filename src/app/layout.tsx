import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "Portfolio | Video Editor & Filmmaker",
  description: "Professional video editor and filmmaker portfolio showcasing creative work and services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans ${jakarta.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
