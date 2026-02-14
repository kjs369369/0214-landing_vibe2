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
  title: "바이브코딩 마스터클래스 | 비전공자도 4주 만에 나만의 서비스 런칭",
  description:
    "코딩 경험이 없어도 괜찮습니다. AI와 함께하는 바이브코딩으로 4주 만에 실전 웹서비스를 만들고 런칭하세요. 지금 무료 상담을 신청하세요.",
  keywords: [
    "바이브코딩",
    "코딩 강의",
    "비전공자 코딩",
    "AI 코딩",
    "웹개발 입문",
    "Next.js 강의",
  ],
  openGraph: {
    title: "바이브코딩 마스터클래스 | 비전공자도 4주 만에 나만의 서비스 런칭",
    description:
      "코딩 경험이 없어도 괜찮습니다. AI와 함께하는 바이브코딩으로 4주 만에 실전 웹서비스를 만들고 런칭하세요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
