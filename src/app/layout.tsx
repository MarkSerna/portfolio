import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#07090e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Marco Eduar Serna López | Full Stack & RPA Developer",
  description: "Portafolio profesional de Marco Eduar Serna López. Desarrollador Full Stack especializado en Automatización de Procesos (RPA), Sistemas en Tiempo Real y Arquitecturas Escalables (TypeScript, Python, React, Node.js, C#, Docker).",
  keywords: [
    "Marco Serna",
    "Marco Eduar Serna López",
    "Desarrollador Full Stack",
    "Full Stack Developer",
    "RPA",
    "Automatización de Procesos",
    "Sistemas en Tiempo Real",
    "Real-Time Systems",
    "Python",
    "TypeScript",
    "React",
    "Node.js",
    "FastAPI",
    "Docker",
    "PostgreSQL PostGIS",
    "Manizales Colombia"
  ],
  authors: [{ name: "Marco Eduar Serna López", url: "https://github.com/MarkSerna" }],
  creator: "Marco Eduar Serna López",
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en_US"],
    url: "https://github.com/MarkSerna",
    title: "Marco Eduar Serna López | Full Stack & RPA Developer",
    description: "Especialista en Automatización de Procesos (RPA) y Sistemas en Tiempo Real. Conoce mis casos de estudio y proyectos en producción.",
    siteName: "Marco Serna Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Eduar Serna López | Full Stack & RPA Developer",
    description: "Desarrollador Full Stack especializado en RPA y sistemas en tiempo real.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
