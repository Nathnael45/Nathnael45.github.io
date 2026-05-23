import PageShell from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { skillGroups } from "@/lib/data"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function SkillsPage() {
  return (
    <PageShell>
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Skills</h1>
        <p className="mt-2 text-sm text-muted-foreground">Languages, frameworks, databases, and tools I've worked with.</p>
      </div>

      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <ScrollReveal key={group.category} index={i}>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </PageShell>
  )
}
