import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PlayLover PhotoLab - Servizio Fotografico Premium per Dating",
  description:
    "Il primo servizio fotografico professionale in Italia per il tuo profilo dating. Aumenta i tuoi match del 300-500% con foto professionali.",
  keywords: "servizio fotografico, dating, tinder, profilo dating, foto professionali",
  openGraph: {
    title: "PlayLover PhotoLab - Trasforma il Tuo Profilo Dating",
    description: "Fotografie professionali che aumentano i tuoi match del 300-500%",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className="dark">
      <body className={`font-sans antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
