import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreshWave Laundry — Bersih, Cepat, Terpercaya",
  description:
    "Layanan laundry profesional dengan harga terjangkau. Cuci, setrika, dry cleaning, dan ekspres tersedia 7 hari seminggu.",
  keywords: ["laundry", "cuci baju", "setrika", "dry cleaning", "laundry kiloan"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
