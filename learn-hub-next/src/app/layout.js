import "./globals.css";
import { Inter } from "next/font/google";
import {NavbarWithMegaMenu} from "../components/navBars/NavMaterialT";
import { FooterWithSocialLinks } from "@/components/footer/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Hub",
  description: "This is a page focused on courses for students",
};



export default function RootLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  return (
    <html lang="en">
      <body >
        {/* para utilizar dos tipos de navbar dependiendo de si esta o no autenticado */}
        {isAuthenticated ? <NavbarAutenticado /> : <NavbarNoAutenticado />}
        {/* <NavbarWithMegaMenu /> */}
        <div className={inter.className}>{children}</div>
        <FooterWithSocialLinks />
        
      </body>
    </html>
  );
}
