import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Car Dr's Garage | Experience Your Car's Full Potential",
  description:
    "The Car Dr's Garage is an end-to-end automotive specialist supporting vehicles through tuning, performing parts, and service maintenance, all under one roof. Dubai, UAE.",
  openGraph: {
    title: "The Car Dr's Garage | Experience Your Car's Full Potential",
    description:
      "An end-to-end automotive specialist supporting vehicles through tuning, performing parts, and service maintenance, all under one roof.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..700&family=Inter:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-cream font-body relative">
        <Header />
        <div className="relative z-10 flex flex-col flex-1 pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
