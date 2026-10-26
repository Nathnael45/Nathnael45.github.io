"use client"

import Image from "next/image"
import { useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp, ArrowUpRight, ChevronDown, FileText, Github, Linkedin, Mail, Play } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ThemeToggle } from "@/components/theme-toggle"
import { AccentSquare, CurvedArrow, Scribble } from "@/components/doodles"
import { ProjectIcon } from "@/components/project-icon"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"
import {
  aboutDetail,
  aboutStatement,
  coursework,
  education,
  experiences,
  featuredExperienceCount,
  featuredProjectIds,
  heroIntro,
  profile,
  projects,
  sectionCopy,
  skillGroups,
  type Experience,
  type Project,
  type RichText,
} from "@/lib/data"

const CONTAINER = "mx-auto max-w-6xl px-5 md:px-8"
const MAX_BULLETS = 3
const MAX_SUB_ROLE_BULLETS = 2

const SECTIONS = ["about", "experience", "projects", "contact"]

const NAV = [
  { id: "about", label: sectionCopy.about.label },
  { id: "experience", label: sectionCopy.experience.label },
  { id: "projects", label: sectionCopy.projects.label },
  { id: "contact", label: sectionCopy.contact.label },
]

const SOCIALS = [
  { href: profile.github, icon: Github, label: "GitHub" },
  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
]

const featuredExperiences = experiences.slice(0, featuredExperienceCount)
const moreExperiences = experiences.slice(featuredExperienceCount)

const featuredProjects = featuredProjectIds.flatMap((id) => projects.filter((p) => p.id === id))
const moreProjects = projects.filter((p) => !featuredProjectIds.includes(p.id))

function Rich({ content }: { content: RichText }) {
  return (
    <>
      {content.map((seg, i) =>
        seg.highlight ? (
          <mark key={i} className="bg-primary/25 px-1 font-semibold text-foreground">
            {seg.text}
          </mark>
        ) : seg.strong ? (
          <strong key={i} className="font-semibold text-foreground">
            {seg.text}
          </strong>
        ) : (
          <span key={i}>{seg.text}</span>
        ),
      )}
    </>
  )
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-2 w-2 bg-primary" />
      {children}
    </p>
  )
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <ScrollReveal>
      <div className="mb-12">
        <Eyebrow>{label}</Eyebrow>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      </div>
    </ScrollReveal>
  )
}

function BulletLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
      <span className="h-1.5 w-1.5 bg-foreground" />
      {children}
    </p>
  )
}

function SocialLinks({ className, withEmail = true }: { className?: string; withEmail?: boolean }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {SOCIALS.filter((s) => withEmail || s.icon !== Mail).map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className="text-foreground/70 transition-colors hover:text-primary"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((b) => (
        <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
          {b}
        </li>
      ))}
    </ul>
  )
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-foreground/50 px-2.5 py-0.5 text-xs">{children}</span>
}

function Expandable({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="more"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SeeMoreButton({ open, count, onClick }: { open: boolean; count: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      className="mt-10 inline-flex items-center gap-2 border-[3px] border-foreground px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
    >
      {open ? sectionCopy.showLess : `${sectionCopy.seeMore} (${count})`}
      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} />
    </button>
  )
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="grid gap-4 border-[3px] border-foreground p-6 md:grid-cols-[180px_1fr] md:p-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{exp.period}</p>
        {exp.location && <p className="mt-1 text-xs text-muted-foreground">{exp.location}</p>}
      </div>
      <div>
        <h3 className="text-xl font-bold">{exp.org}</h3>
        <p className="mt-1 text-sm font-semibold text-primary">{exp.role}</p>
        {exp.bullets && <BulletList items={exp.bullets.slice(0, MAX_BULLETS)} />}
        {exp.subRoles?.map((sub) => (
          <div key={sub.title} className="mt-4">
            <p className="text-sm font-semibold">{sub.title}</p>
            <BulletList items={sub.bullets.slice(0, MAX_SUB_ROLE_BULLETS)} />
          </div>
        ))}
        {exp.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

function ProjectCard({ p }: { p: Project }) {
  const href = p.githubUrl ?? p.learnMoreUrl ?? p.demoUrl
  const showDemo = p.demoUrl && p.demoUrl !== href
  return (
    <article className="flex h-full flex-col">
      <div className="flex items-start justify-between">
        <ProjectIcon id={p.id} className="h-20 w-20" />
        <div className="flex gap-2">
          {showDemo && (
            <a
              href={p.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} demo`}
              className="flex h-11 w-11 items-center justify-center border-2 border-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Play className="h-4 w-4" />
            </a>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.title}`}
              className="flex h-11 w-11 items-center justify-center bg-foreground text-background transition-colors hover:bg-primary"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <span className="h-px w-5 bg-muted-foreground" />
        {p.category}
      </p>
      <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
      <p className="mt-1 font-mono text-xs text-muted-foreground">{p.period}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/75">{p.description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </article>
  )
}

export default function Home() {
  const activeSection = useActiveSection(SECTIONS)
  const [showMoreExperience, setShowMoreExperience] = useState(false)
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  return (
    <div className="min-h-screen bg-background font-display text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 bg-background/90 shadow-[0_1px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        <div className={cn(CONTAINER, "flex h-16 items-center justify-between")}>
          <a href="#top" className="font-semibold">
            {profile.name}.
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-7 md:flex">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className={cn(
                    "relative text-sm font-medium transition-colors",
                    activeSection === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {n.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200",
                      activeSection === n.id ? "w-full" : "w-0",
                    )}
                  />
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section id="top" className={cn(CONTAINER, "grid items-center gap-16 pb-24 pt-32 md:grid-cols-[1.15fr_1fr] md:pt-40")}>
          <ScrollReveal>
            <div className="relative">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">{profile.name}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
                <Rich content={heroIntro} />
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-primary"
                >
                  <FileText className="h-4 w-4" />
                  {sectionCopy.resume}
                </a>
                <SocialLinks />
              </div>
              <CurvedArrow className="absolute -right-16 top-1/2 hidden w-14 -translate-y-1/2 lg:block" />
              <Scribble className="absolute -bottom-20 right-16 hidden w-20 lg:block" />
            </div>
          </ScrollReveal>

          <ScrollReveal index={1}>
            <div className="relative mx-auto w-full max-w-sm">
              <span className="absolute inset-0 translate-x-4 translate-y-4 border-[3px] border-foreground" />
              <div className="relative aspect-[4/5] overflow-hidden border-[6px] border-card bg-card">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(min-width: 768px) 384px, 100vw"
                  className="object-cover"
                />
              </div>
              <AccentSquare className="absolute -left-4 top-10 rotate-12" />
            </div>
          </ScrollReveal>
        </section>

        <section id="about" className={cn(CONTAINER, "scroll-mt-20 py-24")}>
          <SectionHeading label={sectionCopy.about.label} title={sectionCopy.about.title} />
          <div className="grid gap-14 md:grid-cols-2">
            <ScrollReveal>
              <p className="text-2xl font-medium leading-snug text-foreground/80 md:text-3xl">
                <Rich content={aboutStatement} />
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{aboutDetail}</p>
            </ScrollReveal>

            <ScrollReveal index={1}>
              <BulletLabel>{sectionCopy.skills}</BulletLabel>
              <ul className="mt-4 space-y-3">
                {skillGroups.map((g) => (
                  <li
                    key={g.category}
                    className="flex flex-col gap-1 rounded-xl bg-card px-5 py-3.5 shadow-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="shrink-0 text-sm font-semibold">{g.category}</span>
                    <span className="text-sm text-muted-foreground sm:text-right">{g.skills.join(" · ")}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-14">
              <BulletLabel>{sectionCopy.education}</BulletLabel>
              <div className="mt-4 grid gap-8 border-[3px] border-foreground p-6 md:grid-cols-[1fr_1.3fr] md:p-8">
                <div>
                  <h3 className="text-2xl font-bold">{education.school}</h3>
                  <p className="mt-2 text-sm font-semibold text-primary">{education.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{education.meta}</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">{education.period}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{sectionCopy.coursework}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {coursework.map((c) => (
                      <Tag key={c}>{c}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="experience" className={cn(CONTAINER, "scroll-mt-20 py-24")}>
          <SectionHeading label={sectionCopy.experience.label} title={sectionCopy.experience.title} />
          <div className="space-y-6">
            {featuredExperiences.map((exp, i) => (
              <ScrollReveal key={exp.org + exp.period} index={i}>
                <ExperienceCard exp={exp} />
              </ScrollReveal>
            ))}
          </div>
          {moreExperiences.length > 0 && (
            <>
              <Expandable open={showMoreExperience}>
                <div className="space-y-6 pt-6">
                  {moreExperiences.map((exp) => (
                    <ExperienceCard key={exp.org + exp.period} exp={exp} />
                  ))}
                </div>
              </Expandable>
              <SeeMoreButton
                open={showMoreExperience}
                count={moreExperiences.length}
                onClick={() => setShowMoreExperience((v) => !v)}
              />
            </>
          )}
        </section>

        <section id="projects" className={cn(CONTAINER, "scroll-mt-20 py-24")}>
          <SectionHeading label={sectionCopy.projects.label} title={sectionCopy.projects.title} />
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((p, i) => (
              <ScrollReveal key={p.id} index={i}>
                <ProjectCard p={p} />
              </ScrollReveal>
            ))}
          </div>
          {moreProjects.length > 0 && (
            <>
              <Expandable open={showMoreProjects}>
                <div className="grid gap-x-8 gap-y-16 pt-16 sm:grid-cols-2 lg:grid-cols-4">
                  {moreProjects.map((p) => (
                    <ProjectCard key={p.id} p={p} />
                  ))}
                </div>
              </Expandable>
              <SeeMoreButton
                open={showMoreProjects}
                count={moreProjects.length}
                onClick={() => setShowMoreProjects((v) => !v)}
              />
            </>
          )}
        </section>

        <section id="contact" className={cn(CONTAINER, "scroll-mt-20 py-24")}>
          <ScrollReveal>
            <div className="relative grid gap-10 border-[3px] border-foreground p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
              <div>
                <Eyebrow>{sectionCopy.contact.label}</Eyebrow>
                <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{sectionCopy.contact.title}</h2>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{sectionCopy.contact.body}</p>
              </div>
              <div className="flex flex-col justify-center gap-5">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-between gap-3 bg-foreground px-6 py-4 font-semibold text-background transition-colors hover:bg-primary"
                >
                  {profile.email}
                  <ArrowUpRight className="h-5 w-5" />
                </a>
                <SocialLinks withEmail={false} />
              </div>
              <AccentSquare className="absolute -right-3 -top-3 rotate-12" />
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="border-t-[3px] border-foreground">
        <div className={cn(CONTAINER, "flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between")}>
          <nav className="flex flex-wrap gap-6 text-sm font-medium">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <SocialLinks />
        </div>
        <p className={cn(CONTAINER, "pb-8 text-xs text-muted-foreground")}>
          © {new Date().getFullYear()} {profile.name} · {sectionCopy.credit.text}:{" "}
          <a
            href={sectionCopy.credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-primary"
          >
            {sectionCopy.credit.label}
          </a>
        </p>
      </footer>

      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center bg-foreground text-background shadow-lg transition-colors hover:bg-primary"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  )
}
