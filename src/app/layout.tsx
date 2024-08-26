import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { TracingBeam } from "@/components/ui/tracing-beams";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ladeva Software House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>
        <TracingBeam className="w-full bg-stone-800">
          <Navbar />
          {children}
          <Footer />
        </TracingBeam>
      </body>
    </html>
  );
}
