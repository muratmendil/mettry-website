import type { Metadata } from "next";
import { Red_Hat_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-red-hat-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mettry · Le pilotage de votre patrimoine immobilier, enfin centralisé",
  description:
    "Mettry est la plateforme SaaS tout-en-un qui remplace votre GMAO, votre suivi énergétique, votre ticketing et votre GED. Données hébergées en France. Décret Tertiaire intégré.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${redHatDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}