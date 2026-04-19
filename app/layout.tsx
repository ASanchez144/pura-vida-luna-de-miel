import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pura Vida — Costa Rica para vosotros",
  description: "Un regalo hecho con amor para vuestra luna de miel en Costa Rica.",
  openGraph: {
    title: "Pura Vida — Costa Rica para vosotros",
    description: "Un regalo hecho con amor para vuestra luna de miel en Costa Rica.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream antialiased">{children}</body>
    </html>
  );
}
