import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar/navbar";

import { Nunito } from "next/font/google";
import ClientOnly from "./components/clientonly";
import Modal from "./components/modals/modal";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone app",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/**/}
        {/* <Modal title="modal" isOpen/> */}
          <Navbar />
          </ClientOnly>
        {children}
      </body>
    </html>
  );
}
