import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "DocGen – Document Generator",
  description: "Generate certificates and documents instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <SpeedInsights />
        <main className="min-h-screen px-4 md:px-8 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
