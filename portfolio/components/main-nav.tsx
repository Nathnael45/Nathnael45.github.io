"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function MainNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl" onClick={closeMobileMenu}>
          Nathnael<span className="text-primary">.</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-semibold" : "text-foreground/80",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="gap-2">
            <Link href="https://github.com/nathnael45" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> GitHub
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild className="gap-2">
            <Link href="https://linkedin.com/in/nathnael-tesfaw" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/resume.pdf" target="_blank">
              Resume
            </Link>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 border-b dark:border-gray-800 p-4 z-50">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                  pathname === item.href
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-foreground/80 hover:bg-gray-100 dark:hover:bg-gray-800",
                )}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t dark:border-gray-800">
              <Button variant="ghost" size="sm" asChild className="justify-start gap-2">
                <Link href="https://github.com/nathnael45" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="justify-start gap-2">
                <Link href="https://linkedin.com/in/nathnael-tesfaw" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/resume.pdf" target="_blank">
                  Resume
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
