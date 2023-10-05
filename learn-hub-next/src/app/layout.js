'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import NavBarNoAutenticado from "../components/navBars/NavMaterialT";
import NavbarAutenticado from "../components/navBars/NavbarAutenticado";
import { FooterWithSocialLinks } from "@/components/footer/Footer";
import React,{useEffect} from 'react'
import useAuth from '@/customHooks/useAuth';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Hub",
  description: "This is a page focused on courses for students",
};



export default function RootLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useAuth('auth', 'false');   
  return (
    <html lang="en">
      <body >
        {console.log(isAuthenticated)/* para utilizar dos tipos de navbar dependiendo de si esta o no autenticado */}
        { isAuthenticated==true ? <NavbarAutenticado /> : <NavBarNoAutenticado />}
        
        <div className={inter.className}>{children}</div>
        <FooterWithSocialLinks />
        
      </body>
    </html>
  );
}
