import type { ReactNode } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

interface PageShellProps {
  children: ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <MainNav />
      <main className="container py-12 md:py-24 flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
