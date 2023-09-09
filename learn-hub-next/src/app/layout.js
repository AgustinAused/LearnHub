import "./globals.css";
import { Inter } from "next/font/google";
import {NavbarWithMegaMenu} from "../components/navBars/NavMaterialT";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarWithMegaMenu />
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
