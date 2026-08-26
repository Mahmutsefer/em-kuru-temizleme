import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hasel Kuru Temizleme | Profesyonel Kuru Temizleme Hizmeti",
    template: "%s | Hasel Kuru Temizleme",
  },

  description:
    "Hasel Kuru Temizleme; kuru temizleme, ütüleme, ev tekstili temizleme, halı yıkama, lostra ve çanta temizleme hizmetleri sunar.",

  keywords: [
    "kuru temizleme",
    "kuru temizleme İstanbul",
    "ütüleme",
    "ev tekstili temizleme",
    "halı yıkama",
    "lostra",
    "çanta temizleme",
    "Hasel Kuru Temizleme",
  ],

  authors: [
    {
      name: "Hasel Kuru Temizleme",
    },
  ],

  creator: "Hasel Kuru Temizleme",

  openGraph: {
    title: "Hasel Kuru Temizleme | Profesyonel Temizlik ve Bakım",
    description:
      "Kıyafetlerinizden ev tekstillerine kadar profesyonel temizlik ve bakım hizmetleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "Hasel Kuru Temizleme",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}