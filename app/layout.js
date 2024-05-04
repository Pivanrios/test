import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LaCooperativa", //add title
  description: "Una cooperativa que vende comida en las empresas y escuelas", //quick description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="root">
      <body className="container flex flex-col">
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
