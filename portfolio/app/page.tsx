"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ExternalLink, Code, ArrowRight, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useActiveSection } from "@/hooks/use-active-section"
import { experiences, projects, skillGroups, coursework } from "@/lib/data"

const SECTIONS = ["about", "experience", "projects", "skills", "education"]

const NAV = [
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "skills",     label: "Skills" },
  { id: "education",  label: "Education" },
]

const SOCIALS = [
  { href: "https://github.com/Nathnael45",             icon: Github,   label: "GitHub" },
  { href: "https://linkedin.com/in/nathnael-tesfaw/",  icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:nbt26@cornell.edu",                  icon: Mail,     label: "Email" },
  { href: "/resume.pdf",                               icon: FileText, label: "Resume" },
]

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-xs text-primary">{number}</span>
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">{title}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}

export default function Home() {
  const activeSection = useActiveSection(SECTIONS)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile top nav */}
      <header className="lg:hidden sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="container flex h-14 items-center justify-between">
          <span className="font-semibold text-sm">Nathnael Tesfaw</span>
          <nav className="flex gap-4">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`text-xs transition-colors ${
                  activeSection === n.id ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="lg:flex">
        {/* ── Sidebar (desktop) ─────────────────────────────────── */}
        <aside className="hidden lg:flex lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:px-16 lg:py-20 xl:px-24">
          {/* Top: identity */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-border mb-6">
                <Image
                  src="/mepicture.jpg"
                  alt="Nathnael Tesfaw"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Nathnael Tesfaw
              </h1>
              <p className="mt-3 text-base font-medium text-foreground/80">
                CS @ Cornell · Incoming SWE @ Workday
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                  Computer Science student interested in ML systems, distributed infrastructure, and full-stack engineering.              </p>
            </motion.div>

            {/* Section nav */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-1"
            >
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className={`flex items-center gap-3 py-1.5 text-sm transition-all duration-200 group ${
                    activeSection === n.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`h-px transition-all duration-200 ${
                      activeSection === n.id
                        ? "w-8 bg-primary"
                        : "w-4 bg-border group-hover:w-6 group-hover:bg-muted-foreground"
                    }`}
                  />
                  {n.label}
                </a>
              ))}
            </motion.nav>
          </div>

          {/* Bottom: socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </aside>

        {/* ── Main content ──────────────────────────────────────── */}
        <main className="lg:ml-[44%] lg:w-[56%] px-6 md:px-10 lg:px-16 xl:px-20 pb-32">

          {/* ── About ─────────────────────────────────────────── */}
          <section id="about" className="pt-20 lg:pt-24">
            <SectionLabel number="01" title="About" />
            <ScrollReveal>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  I'm a Computer Science senior at Cornell University (College of Engineering),
                  graduating May 2027, with a Minor in Artificial Intelligence. My focus is full-stack
                  engineering, distributed systems, and ML/AI — and I have a strong bias toward shipping
                  real products. Everything in this portfolio has been deployed or benchmarked against a
                  real paper.
                </p>
                <p>
                  This summer I'm a Software Engineer Intern at{" "}
                  <span className="text-foreground font-medium">Workday</span> in Pleasanton, CA. Last
                  summer I was at{" "}
                  <span className="text-foreground font-medium">Carnegie Mellon University</span>, where I
                  built a GPT-4 cybersecurity extension and deployed it on AWS EC2.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal index={1}>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground">Rockville, MD</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Graduation</p>
                    <p className="text-foreground">May 2027</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Languages</p>
                    <p className="text-foreground">English · Amharic · Spanish</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Interests</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Christianity", "History", "Community Service", "Traveling"].map((i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{i}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ── Experience ────────────────────────────────────── */}
          <section id="experience" className="pt-24">
            <SectionLabel number="02" title="Experience" />
            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <ScrollReveal key={exp.org + exp.period} index={i}>
                  <div className="group">
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
                        {exp.incoming && (
                          <Badge variant="secondary" className="text-xs mt-1">Incoming</Badge>
                        )}
                      </div>
                    </div>

                    {exp.incoming && (
                      <p className="text-xs text-muted-foreground italic mt-2">
                        Bullets coming after the internship — check back in August 2026.
                      </p>
                    )}

                    {exp.subRoles && exp.subRoles.map((sub) => (
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
          </section>

          {/* ── Projects ──────────────────────────────────────── */}
          <section id="projects" className="pt-24">
            <SectionLabel number="03" title="Projects" />
            <div className="space-y-2">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} index={i}>
                  <div
                    id={`proj-${project.id}`}
                    className="rounded-lg border border-border bg-card/50 px-5 py-4 hover:border-primary/50 hover:bg-card transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex items-baseline gap-2.5 flex-wrap">
                        <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                        {project.period && (
                          <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-0.5 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Code className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Demo"
                            className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Play className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {project.learnMoreUrl && (
                          <a
                            href={project.learnMoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Learn more"
                            className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs px-1.5 py-0">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* ── Skills ────────────────────────────────────────── */}
          <section id="skills" className="pt-24">
            <SectionLabel number="04" title="Skills" />
            <div className="space-y-6">
              {skillGroups.map((group, i) => (
                <ScrollReveal key={group.category} index={i}>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2.5">{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* ── Education ─────────────────────────────────────── */}
          <section id="education" className="pt-24">
            <SectionLabel number="05" title="Education" />
            <ScrollReveal>
              <div className="space-y-4">
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
          </section>

          {/* ── Contact ───────────────────────────────────────── */}
          <section className="pt-24 pb-8">
            <ScrollReveal>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Get in touch</p>
                <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                  Open to interesting problems and good conversations. Best reached by email.
                </p>
                <a
                  href="mailto:nbt26@cornell.edu"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
                >
                  nbt26@cornell.edu <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </ScrollReveal>
          </section>

          {/* ── Footer ────────────────────────────────────────── */}
          <footer className="border-t border-border pt-6 mt-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Nathnael Tesfaw
              </p>
              <div className="flex items-center gap-4">
                {SOCIALS.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
