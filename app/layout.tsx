import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "ZIGO للسفر والسياحة",
  description:
    "وكالة سفر متكاملة: تأشيرات، مواعيد سفارات، تذاكر طيران، فنادق، وبرامج سياحية — من التأشيرة حتى العودة.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
