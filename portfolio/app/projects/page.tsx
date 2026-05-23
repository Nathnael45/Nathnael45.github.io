import Link from "next/link"
import PageShell from "@/components/page-shell"
import PageHeader from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, ExternalLink, Play } from "lucide-react"
import { projects } from "@/lib/data"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Projects"
        description="Chronological. Most recent first."
      />

      <div className="space-y-3">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} index={i}>
            <div
              id={project.id}
              className="scroll-mt-20 group rounded-lg border border-border bg-card px-6 py-5 hover:border-primary/40 transition-colors"
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h2 className="text-base font-semibold">{project.title}</h2>
                  {project.period && (
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  )}
                </div>
                {/* Link icons */}
                <div className="flex items-center gap-1 shrink-0">
                  {project.githubUrl && (
                    <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                      <Link href={project.githubUrl} target="_blank" aria-label="GitHub">
                        <Code className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                      <Link href={project.demoUrl} target="_blank" aria-label="Demo">
                        <Play className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                  {project.learnMoreUrl && (
                    <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                      <Link href={project.learnMoreUrl} target="_blank" aria-label="Learn more">
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs px-2 py-0.5">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </PageShell>
  )
}
