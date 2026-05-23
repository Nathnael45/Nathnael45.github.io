import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"

interface PageShellProps {
  children: ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="container max-w-3xl py-12 md:py-20">
          <div className="mb-10">
            <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground hover:text-foreground -ml-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
            </Button>
          </div>
          {children}
        </div>
      </div>
    </PageTransition>
  )
}
