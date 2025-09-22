import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: "Mohoncon Builds",
    template: "%s | Mohoncon Builds",
  },
  description: "This is the website of mohoncon builds. We build mannufacture AAC blocks, and block joining mortar in madhya paradesh, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${trap.variable} ${poppins.variable} ${inter.variable} antialiased bg-stone-200 `}
      >
        {children}
      </body>
    </html>
  );
}
