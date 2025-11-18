import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

export const metadata = {
  title: "DocGen – Document Generator",
  description: "Generate certificates and documents instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6004304352641395"
          strategy="beforeInteractive"
          crossorigin="anonymous">

          </Script>

        <Navbar />
        <SpeedInsights />
        <main className="min-h-screen px-4 md:px-8 py-6">
          {children}
          <Analytics />

        </main>
        <Footer />
      </body>
    </html>
  );
}
