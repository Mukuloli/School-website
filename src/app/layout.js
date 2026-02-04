import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Bright Future Academy - Where Excellence Meets Education",
  description: "Welcome to Bright Future Academy, a leading educational institution dedicated to nurturing young minds and shaping tomorrow's leaders. Join us for an exceptional learning experience.",
  keywords: "school, education, academy, learning, students, teachers, excellence",
  openGraph: {
    title: "Bright Future Academy - Where Excellence Meets Education",
    description: "Welcome to Bright Future Academy, a leading educational institution dedicated to nurturing young minds.",
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
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
