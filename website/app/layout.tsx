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
    default: "EM Kuru Temizleme | Profesyonel Kuru Temizleme Hizmeti",
    template: "%s | EM Kuru Temizleme",
  },

  description:
    "EM Kuru Temizleme; kuru temizleme, ütüleme, ev tekstili temizleme, halı yıkama, lostra ve çanta temizleme hizmetleri sunar.",

  keywords: [
    "kuru temizleme",
    "kuru temizleme İstanbul",
    "ütüleme",
    "ev tekstili temizleme",
    "halı yıkama",
    "lostra",
    "çanta temizleme",
    "EM Kuru Temizleme",
  ],

  authors: [
    {
      name: "EM Kuru Temizleme",
    },
  ],

  creator: "EM Kuru Temizleme",

  openGraph: {
    title: "EM Kuru Temizleme | Profesyonel Temizlik ve Bakım",
    description:
      "Kıyafetlerinizden ev tekstillerine kadar profesyonel temizlik ve bakım hizmetleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "EM Kuru Temizleme",
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