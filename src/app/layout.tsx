import { Metadata } from "next";
import "./globals.css";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import { NavProvider } from "@/context/NavStateContext";
import { Poppins, Inter } from 'next/font/google'

const heading = Poppins({ subsets: ['latin'], weight: '600' })
const body = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Next.js Profile",
  description:
    "This is Next.js Profile page for Iskandarphon M"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>Iskandarphon M. - Full Stack Developer</title>
        <meta name="description" content="I am a full stack developer with over 7 years of experience. I specialize in developing customer-centric, passionate, and user-friendly web applications." />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${body.className} min-h-screen bg-gray-900`}>     
        <NavProvider >
          <AppHeader />   
          {children}   
          <AppFooter />
        </NavProvider>
      </body>
    </html>
  );
}
