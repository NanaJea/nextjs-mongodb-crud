// Importieren von Typen und Bibliotheken aus Next.js
import type { Metadata } from "next";
import { Inter } from "next/font/google"

// Importieren von globalen CSS-Stilen
import "./globals.css"

// Importieren der Navbar-Komponente
import Navbar from '@/components/Navbar'

// Definieren der Inter-Schriftart mit Latin-Subset
const inter = Inter({ subsets: ["latin"] });

// Definition der Metadaten für die Seite
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Standardexport der RootLayout-Komponente
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML-Dokument mit Spracheinstellung "en"
    <html lang="en">
      <body className={inter.className}>
        {/* Einbindung der Navbar-Komponente */}
        <Navbar />
        {/* Hauptinhalt der Seite in einem zentrierten Container */}
        <main className='container mx-auto px-5 mt-4'>
           {children}
        </main>
      </body>
    </html>
  )
}
