import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "cosmos gallery",
  description: "こすもす-cosmos-ポートフォリオ",
  keywords: [
    "こすもす",
    "cosmos",
    "ポートフォリオ",
    "イラスト",
    "デジタルアート",
    "アニメイラスト",
    "キャラクターイラスト",
    "イラストレーター"
  ], // 検索キーワード
  authors: [{ name: "こすもす", url: "https://example.com" }], // 作者情報
  openGraph: {
    title: "cosmos gallery",
    description: "こすもす-cosmos-ポートフォリオ",
    images: [
      {
        url: "/metaImage.jpg",
        alt: "cosmos gallery",
      },
    ],
    type: "website", // サイト種別
    locale: "ja_JP", // ロケール設定
    siteName: "cosmos gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "cosmos gallery",
    description: "こすもす-cosmos-ポートフォリオ",
    images: ["/metaImage.webp"],
  },
  metadataBase: new URL("https://example.com"), // サイトのベースURL
  robots: {
    index: true, // インデックス許可
    follow: true, // リンクのクロール許可
  },
  alternates: {
    canonical: "https://example.com", // 正規URL
    languages: {
      "ja": "https://example.com/ja",
      "en": "https://example.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

