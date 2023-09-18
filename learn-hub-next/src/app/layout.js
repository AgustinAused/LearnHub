import "./globals.css";
import { Inter } from "next/font/google";
import {NavbarWithMegaMenu} from "../components/navBars/NavMaterialT";
import { FooterWithSocialLinks } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Hub",
  description: "This is a page focused on courses for students",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <NavbarWithMegaMenu />
        <div className={inter.className}>{children}</div>
        <FooterWithSocialLinks />
        
      </body>
    </html>
  );
}
