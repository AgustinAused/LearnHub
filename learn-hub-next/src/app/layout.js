import "./globals.css";
import { Inter } from "next/font/google";
import SwitchNavbar from "@/components/navBars/NavbarSwitch";

import { FooterWithSocialLinks } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Hub",
  description: "This is a page focused on courses for students",
  favicon: "/logoPaginaPNG.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logoPaginaPNG.png" sizes="xl" />
      <body>
        <SwitchNavbar></SwitchNavbar>
        <div className={inter.className}>{children}</div>
        <FooterWithSocialLinks />
      </body>
    </html>
  );
}
