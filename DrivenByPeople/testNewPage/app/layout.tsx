import type React from "react"
import type { Metadata } from "next"
import { Smooch_Sans } from "next/font/google"
import { Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  variable: "--font-smooch-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Driven by People - Claridad estratégica",
  description:
    "Convertimos el caos organizacional en claridad estratégica. Especialistas en optimización de gestión de proyectos y rendimiento de equipos.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${smoochSans.variable} ${quicksand.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
