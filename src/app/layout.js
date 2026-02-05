import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Darpan Children Garden School | Quality Education in Haldwani Since 1991",
  description: "Darpan Children Garden School, Haldwani - A leading institution dedicated to quality education and holistic child development since 1991. Nurturing young minds with academic excellence and co-curricular activities.",
  keywords: "Darpan Children Garden School, school in Haldwani, Haldwani school, education, primary school, pre-primary, Uttarakhand school, quality education, child development",
  openGraph: {
    title: "Darpan Children Garden School | Haldwani",
    description: "Quality education and holistic child development since 1991 in Haldwani, Uttarakhand.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
