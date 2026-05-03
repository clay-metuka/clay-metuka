import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WhatsAppFAB } from "@/components/whatsapp-fab";

export const metadata: Metadata = {
  title: {
    default: "Clay Metuka — Handmade Jewish Ritual Pottery from Israel",
    template: "%s | Clay Metuka",
  },
  description:
    "Handmade ceramic vessels for Jewish life — natla, kli sheni, Shabbat trays, kiddush cups, and more. Food safe, Shabbat-oven safe, shaped with love in Israel.",
  keywords: [
    "handmade pottery",
    "Jewish ritual objects",
    "Judaica",
    "Israeli ceramics",
    "natla",
    "kli sheni",
    "Shabbat",
    "handmade ceramics",
    "Clay Metuka",
  ],
  openGraph: {
    title: "Clay Metuka — Handmade Jewish Ritual Pottery",
    description:
      "Ceramic vessels for Jewish life — shaped by hand, meant to be used, made to be cherished.",
    url: "https://claymetuka.com",
    siteName: "Clay Metuka",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Frank+Ruhl+Libre:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg font-body text-text">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-terra focus:outline-2 focus:outline-terra"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
