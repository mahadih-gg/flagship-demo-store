import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FlagshipProvider from "@/providers/FlagshipProvider";
import "@thinkflagship/web-shorts/dist/styles.css";
import type { Metadata } from "next";
import { neuePlak, neuePlakText } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon - Demo Store",
  description: "AI powered short form video engagement platform",
  openGraph: {
    title: "Horizon shorts",
    description: "AI powered short form video engagement platform",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    url: "https://demo.horizonexp.com/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${neuePlak.variable} ${neuePlakText.variable}`}>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body
        className={`antialiased font-neue-plak`}
      >
        <FlagshipProvider>
          <Header />
          {children}
          <Footer />
        </FlagshipProvider>
      </body>
    </html>
  );
}
