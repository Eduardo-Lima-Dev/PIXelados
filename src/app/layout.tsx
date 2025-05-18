import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast'
import { Providers } from '@/components/Providers'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixelados - Gerenciador de Despesas",
  description: "Gerencie suas despesas compartilhadas de forma simples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark`}>
        <Providers>
        {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#1F1F38',
                color: '#EDEDED',
                border: '1px solid #1B1F3B',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
