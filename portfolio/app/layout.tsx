import type React from "react"
import "@/app/globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Bai_Jamjuree, Fraunces } from "next/font/google"
import { MotionConfig } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
})

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

export const metadata = {
  title: "Nathnael Tesfaw",
  description:
    "Cornell CS senior focused on distributed systems, full-stack engineering, and ML/AI. Previously SWE Intern at Workday.",
  // An empty data URI stops browsers from falling back to requesting /favicon.ico
  icons: { icon: "data:," },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable} ${baiJamjuree.variable}`}
    >
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  )
}
