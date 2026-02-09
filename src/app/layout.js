import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Darpan Children Garden School | Future of Education",
  description: "Darpan Children Garden School - A cutting-edge educational institution shaping tomorrow's leaders through innovative learning experiences.",
  keywords: "Darpan School, future education, Haldwani, modern school, innovative learning, child development",
  openGraph: {
    title: "Darpan Children Garden School | Future of Education",
    description: "Where innovation meets education. Join the future of learning.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0A0E27]`}>
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
