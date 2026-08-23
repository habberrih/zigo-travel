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

const SITE_URL = "https://zigo.ly";
const TITLE = "ZIGO زيقو للسفر والسياحة | تأشيرات ومواعيد سفارات وتذاكر طيران - ليبيا";
const DESCRIPTION =
  "ZIGO زيقو للسفر والسياحة في طرابلس، ليبيا. تأشيرات، حجز مواعيد السفارات، تذاكر طيران، فنادق، وبرامج سياحية — من التأشيرة حتى العودة. اتصل 091 51 014 51.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | ZIGO زيقو للسفر والسياحة",
  },
  description: DESCRIPTION,
  applicationName: "ZIGO Travel",
  keywords: [
    "زيقو",
    "ZIGO",
    "zigo",
    "زيقو للسفر",
    "ZIGO Travel",
    "وكالة سفر ليبيا",
    "تأشيرات ليبيا",
    "مواعيد سفارات",
    "تذاكر طيران طرابلس",
    "حجز فنادق",
    "برامج سياحية",
    "travel agency Libya",
    "Tripoli travel agency",
  ],
  authors: [{ name: "ZIGO للسفر والسياحة", url: SITE_URL }],
  creator: "ZIGO للسفر والسياحة",
  publisher: "ZIGO للسفر والسياحة",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "ZIGO زيقو للسفر والسياحة",
    locale: "ar_LY",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/assets/zigo-emblem-wide.png",
        width: 1080,
        height: 529,
        alt: "ZIGO زيقو للسفر والسياحة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/zigo-emblem-wide.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "travel",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${SITE_URL}/#organization`,
      name: "ZIGO للسفر والسياحة",
      alternateName: ["ZIGO", "زيقو", "زيقو للسفر والسياحة", "ZIGO Travel"],
      url: SITE_URL,
      logo: `${SITE_URL}/assets/zigo-emblem.png`,
      image: `${SITE_URL}/assets/zigo-emblem-wide.png`,
      description: DESCRIPTION,
      telephone: "+218915101451",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "طرابلس",
        addressCountry: "LY",
      },
      areaServed: { "@type": "Country", name: "Libya" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      sameAs: [
        "https://www.facebook.com/share/1EPNADeizY/?mibextid=wwXIfr",
        "https://www.instagram.com/zigo.travel",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ZIGO زيقو للسفر والسياحة",
      inLanguage: "ar",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
