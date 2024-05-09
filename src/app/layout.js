import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/layouts/Header/Header";
import Aos from "@/app/components/UI/AOS/aos";
import Footer from "./layouts/Footer/Footer";
import { ThemeConfiger } from "./contexts/ThemeConfig/ThemeConfig";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ruvo - Home",
  description: "DRIVE CHANGE, RIDE GREEN",
  verification: { google: "-U2s6Kf1Kj_0bM2QHU4x6NEypkj-a8YdPjOZGGLjbtU" },
  robots: {
    index: true,
    googleBot: {
      index: true,
    }
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-G49VLFBJRR" />
      </head>
      <body className={inter.className}>
        <ThemeConfiger>
          <Aos />
          <Header />
          {children}
          <Footer />
        </ThemeConfiger>
      </body>
    </html>
  );
}
