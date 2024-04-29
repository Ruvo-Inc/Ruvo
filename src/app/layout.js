import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/layouts/Header/Header";
import Aos from "@/app/components/UI/AOS/aos";
import Footer from "./layouts/Footer/Footer";
import { ThemeConfiger } from "./contexts/ThemeConfig/ThemeConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ruvo",
  description: "DRIVE CHANGE, RIDE GREEN",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" >
      <body className={inter.className}>
        <ThemeConfiger>
        <Aos/>
        <Header/>
        {children}
        <Footer/>
        </ThemeConfiger>
        </body>
    </html>
  );
}
