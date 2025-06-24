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
  title: "日本地圖標記工具 | 自訂主題地圖製作器",
  description: "免費的日本地圖標記工具。可用於旅遊規劃、數據視覺化、區域評分、災害分析等。支援自訂顏色、匯出分享。",
  keywords: "日本地圖, 地圖標記, 數據視覺化, 地圖工具, 日本縣市, 地圖製作, infographic, 日本旅遊, 地圖產生器",
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "日本地圖標記工具 - 製作你的主題地圖",
    description: "旅遊規劃？治安評分？美食地圖？用這個工具製作任何主題的日本地圖！",
    url: "https://your-domain.com",
    siteName: "日本地圖標記工具",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "日本地圖標記工具預覽",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "日本地圖標記工具",
    description: "製作專屬的日本主題地圖",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 結構化資料
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "日本地圖標記工具",
    description: "多功能地圖標記工具，適用於數據視覺化、旅遊規劃、區域分析等",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TWD",
    },
    featureList: [
      "自訂顏色標記47都道府縣",
      "一鍵匯出為圖片",
      "支援 TikTok, Instagram Reels, YouTube Shorts 格式",
      "即時預覽編輯結果",
      "拖放式資訊卡片定位",
      "多種預設模板",
    ],
    screenshot: "https://your-domain.com/screenshot.jpg",
  };

  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}