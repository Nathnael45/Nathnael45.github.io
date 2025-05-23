"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <MainNav />

      <main className="container py-12 md:py-24 space-y-24">
        {/* Hero Section with staggered animation */}
        {mounted && (
          <PageTransition>
            <section className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="flex-1 space-y-6">
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Hi, I'm Nathnael Tesfaw</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a Computer Science student at Cornell University with a minor in Artificial Intelligence. I'm passionate about
                  creating innovative solutions to real-world problems through technology, coding, and software
                  engineering.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:nbt26@cornell.edu" className="hover:text-primary transition-colors">
                      nbt26@cornell.edu
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:2407609718" className="hover:text-primary transition-colors">
                      240-760-9718
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">

                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://linkedin.com/in/nathnael-tesfaw" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/resume.pdf" target="_blank">
                      Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <Image
                  src="/mepicture.jpg"
                  alt="Nathnael Tesfaw"
                  fill
                  className="object-cover"
                  priority
                  />
                </div>
              </div>
            </section>
          </PageTransition>
        )}
      {/* Featured Projects Preview with staggered animation */}
      {mounted && (
          <PageTransition className="delay-300">
            <section className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Recent Projects</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Project 1 */}
                <Card className="group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/workout.jpg"
                      alt="Workout Hub"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Workout Hub</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      A fitness tracking application that helps users monitor their workout progress
                    </p>
                    <Button asChild>
                      <Link href="/projects#workout-hub">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Project 2 */}
                <Card className="group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/lostandfound.jpg"
                      alt="Lost and Found App"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Lost and Found App</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      A platform connecting people who have lost items with those who have found them
                    </p>
                    <Button asChild>
                      <Link href="/projects#lost-and-found">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Project 3 */}
                <Card className="group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/invaders.png"
                      alt="Space Game"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Space Game </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        A modernized and enhanced version of the classic space invaders game
                    </p>
                    <Button asChild>
                      <Link href="/projects#space-game">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">
                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </PageTransition>
        )}
        {/* Skills Preview with staggered animation */}
        {mounted && (
          <PageTransition className="delay-500">
            <section className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold"> My Skills </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-4">Frontend</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                  </div>
                </Card>
                <Card className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-4">Backend</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">Flask-SQL</Badge>
                  </div>
                </Card>
                <Card className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-4">Database</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                  </div>
                </Card>
                <Card className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-4">Languages</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                  </div>
                </Card>
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/skills">
                    View All Skills <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </PageTransition>
        )}

        {/* Call to Action with staggered animation */}
        {mounted && (
          <PageTransition className="delay-700">
            <section className="bg-primary/10 dark:bg-primary/20 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="mailto:nbt26@cornell.edu">
                    <Mail className="mr-2 h-5 w-5" /> Email Me
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </div>
            </section>
          </PageTransition>
        )}
      </main>

      <Footer />
    </div>
  )
}
