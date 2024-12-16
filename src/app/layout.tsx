import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ladeva Software House - Affordable Digital Solutions",
  description:
    "Ladeva Software House offers top-notch digital solutions at affordable prices, driving Indonesia's digital economy forward.",
  keywords: [
    "Software House",
    "Digital Solutions",
    "Affordable Software",
    "Indonesia Digital Economy",
    "Ladeva",
  ],
  authors: [
    {
      name: "Ladeva Software House",
      url: "https://www.ladeva.com",
    },
  ],
  openGraph: {
    title: "Ladeva Software House - Affordable Digital Solutions",
    description:
      "Ladeva Software House offers top-notch digital solutions at affordable prices, driving Indonesia's digital economy forward.",
    url: "https://www.ladeva.com",
    type: "website",
    images: [
      {
        url: "https://utfs.io/f/YdQML4nhRlwkciu9a0mw2vOl51SWnoepA8RxtfuasYjrd63K",
        width: 1738,
        height: 974,
        alt: "Ladeva Software House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ladeva",
    title: "Ladeva Software House - Affordable Digital Solutions",
    description:
      "Ladeva Software House offers top-notch digital solutions at affordable prices, driving Indonesia's digital economy forward.",
    images:
      "https://utfs.io/f/YdQML4nhRlwkciu9a0mw2vOl51SWnoepA8RxtfuasYjrd63K",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/apple-icon?apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon?favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon?favicon-16x16.png"
        />
        <link rel="manifest" href="/icon/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
