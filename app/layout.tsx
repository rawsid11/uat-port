import type React from "react"
import type { Metadata, Viewport } from "next"
import { EB_Garamond, UnifrakturMaguntia, IM_Fell_English_SC } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-eb-garamond",
})

const unifraktur = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-unifraktur",
})

const imFellEnglish = IM_Fell_English_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-im-fell",
})

export const metadata: Metadata = {
  title: "The Data Chronicle — Siddhesh Phapale | Data & GenAI Engineer",
  description:
    "Engineer obsessed with converting data & GenAI into automation, revenue, and real business outcomes. Building strategic intelligence platforms that drive sales performance and accelerate decision-making.",
  keywords: [
    "Data Engineer",
    "GenAI",
    "AI Automation",
    "LangChain",
    "Python",
    "Business Intelligence",
    "Siddhesh Phapale",
  ],
  authors: [{ name: "Siddhesh Phapale" }],
  creator: "Siddhesh Phapale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siddheshphapale.live",
    siteName: "The Data Chronicle",
    title: "The Data Chronicle — Siddhesh Phapale",
    description: "Engineer obsessed with converting data & GenAI into automation, revenue, and real business outcomes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Data Chronicle - Siddhesh Phapale Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Data Chronicle — Siddhesh Phapale",
    description: "Engineer obsessed with converting data & GenAI into automation, revenue, and real business outcomes.",
    images: ["/og-image.jpg"],
    creator: "@siddheshphapale",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4e4c9" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1510" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ebGaramond.variable} ${unifraktur.variable} ${imFellEnglish.variable} font-sans antialiased`}>
        <div className="paper-texture-overlay" />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
