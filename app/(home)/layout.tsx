import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barbearia MVP Barber",
  description: "Seu destino para cortes de cabelo e barbearia de alta qualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} `}
      >
        {children}
      </body>
    </html>
  );
}
