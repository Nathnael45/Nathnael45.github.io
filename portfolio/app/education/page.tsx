import PageShell from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { coursework } from "@/lib/data"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function EducationPage() {
  return (
    <PageShell>
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="mt-2 text-sm text-muted-foreground">Cornell University, Class of 2027.</p>
      </div>

      <ScrollReveal>
        <div className="space-y-5">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Cornell University</h3>
              <p className="text-xs text-primary mt-0.5">B.S. Computer Science · Minor in Artificial Intelligence</p>
              <p className="text-xs text-muted-foreground mt-0.5">College of Engineering · GPA 3.5</p>
            </div>
            <span className="text-xs font-mono text-muted-foreground">Aug 2023 – May 2027</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Coursework</p>
            <div className="flex flex-wrap gap-1.5">
              {coursework.map((c) => (
                <Badge key={c} variant="secondary" className="text-xs">{c}</Badge>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </PageShell>
  )
}
