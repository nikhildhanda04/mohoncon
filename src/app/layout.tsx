import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";
import { Analytics } from "@vercel/analytics/react"
import JsonLd from "./components/common/JsonLd";

const trap = localFont({
  src: [
    {
      path: './fonts/Trap-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Trap-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Trap-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Trap-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Trap-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Trap-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Trap-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-trap'
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

const metadataBase = new URL("https://www.mohanconbuilds.co.in");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Mohoncon Builds | AAC Blocks in Bhopal, Madhya Pradesh",
    template: "%s | Mohoncon Builds",
  },
  description: "Mohoncon Builds is a premier manufacturer of high-quality AAC blocks and block joining mortar in Bhopal, MP. We provide sustainable, lightweight, and durable construction solutions across Madhya Pradesh.",
  keywords: ["AAC Blocks Bhopal", "AAC Blocks Madhya Pradesh", "Mohoncon Builds Bhopal", "Block Joining Mortar Bhopal", "Bhopal AAC Bricks", "Construction Materials Bhopal", "Best AAC Blocks Bhopal"],
  alternates: {
    canonical: "https://www.mohanconbuilds.co.in",
  },
  openGraph: {
    title: "Mohoncon Builds | Leading AAC blocks Manufacturer in Bhopal",
    description: "Manufacture of high-quality AAC blocks and block joining mortar in Bhopal, Madhya Pradesh. Innovative, sustainable, and eco-friendly construction solutions.",
    url: "https://www.mohanconbuilds.co.in",
    siteName: "Mohoncon Builds",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohoncon Builds | AAC Blocks in Bhopal",
    description: "High-quality AAC blocks and mortar in Bhopal, MP.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mohoncon Builds",
    "image": "https://www.mohanconbuilds.co.in/logo.png",
    "@id": "https://www.mohanconbuilds.co.in",
    "url": "https://www.mohanconbuilds.co.in",
    "telephone": "+91-7089524169", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sehore Bhopal", 
      "addressLocality": "Bhopal",
      "addressRegion": "MP",
      "postalCode": "466001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.2599,
      "longitude": 77.4126
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/mohonconbuilds",
      "https://www.instagram.com/mohonconbuilds"
    ],
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Bhopal"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Madhya Pradesh"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="SUAhk2CjyV0J8xjrhkhEbKFAql88EWs895jvrZMCSDU" />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body
        className={`${trap.variable} ${poppins.variable} ${inter.variable} antialiased bg-stone-200 `}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
        <Analytics />
      </body>
    </html>
  );
}
