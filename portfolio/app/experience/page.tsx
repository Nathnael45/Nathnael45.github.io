import PageShell from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/data"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ExperiencePage() {
  return (
    <PageShell>
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
        <p className="mt-2 text-sm text-muted-foreground">Professional history, most recent first.</p>
      </div>

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.org + exp.period} index={i}>
            <div>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{exp.org}</h3>
                  <p className="text-xs text-primary mt-0.5">{exp.role}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                  {exp.location && (
                    <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                  )}
                </div>
              </div>

              {exp.subRoles?.map((sub) => (
                <div key={sub.title} className="mt-3">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-medium text-foreground/80">{sub.title}</p>
                    <span className="text-xs text-muted-foreground font-mono">{sub.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {sub.bullets.map((b) => (
                      <li key={b} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {exp.bullets && exp.bullets.length > 0 && (
                <ul className="mt-2 space-y-1.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {exp.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs px-2 py-0.5">{t}</Badge>
                  ))}
                </div>
              )}
            </div>
            {i < experiences.length - 1 && (
              <div className="mt-8 border-t border-border/40" />
            )}
          </ScrollReveal>
        ))}
      </div>
    </PageShell>
  )
}
