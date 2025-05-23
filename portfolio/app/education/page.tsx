import PageShell from "@/components/page-shell"
import PageHeader from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Divide } from "lucide-react"

export default function EducationPage() {
  return (
    <PageShell>
      <PageHeader
        title="Academic Background"
        description="Details about my educational journey, coursework, and academic achievements."
      />

      <div className="space-y-12">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start flex-wrap gap-4">
                <div className="flex flex-col">
                <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  Cornell University, College of Engineering
                </div>
                <div className="text-base text-gray-500 dark:text-gray-400">
                  Bachelor of Science in Computer Science, Minor in A.I.
                </div>
                </div>
                <div className="flex flex-col items-end">
                <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  May 2027
                </div>
                <div className="text-base text-gray-500 dark:text-gray-400 mt-2">
                  GPA: 3.5
                </div>
                </div>
              </div>
            
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CourseCard
                  title="CS 2110: Object-Oriented Programming & Data Structures with Java"
                  description="Fundamentals of object-oriented design, analysis, and programming. Topics include data structures, algorithm analysis, and software engineering principles."
                />
                <CourseCard
                  title="CS 1998: Intro to Backend Development"
                  description="Server-side web development, API design, database integration, and deployment strategies for scalable web applications."
                />
                <CourseCard
                  title="CS 2800: Discrete Math"
                  description="Mathematical foundations of computer science including logic, proof techniques, set theory, relations, functions, and combinatorics."
                />
                <CourseCard
                  title="ECE 2300: Digital Logic & Computer Organization"
                  description="Fundamentals of digital systems, Boolean algebra, logic gates, memory systems, and computer architecture."
                />
                <CourseCard
                  title="CS 4820: Intro to Analysis of Algorithms"
                  description="Design and analysis of efficient algorithms, complexity theory, and algorithmic paradigms for solving computational problems."
                />
                <CourseCard
                  title="CS 3420: Embedded Systems"
                  description="Design and implementation of software for embedded systems, including real-time operating systems and hardware interfaces."
                />
                <CourseCard
                  title="Intro to Cybersecurity by Codepath"
                  description="Fundamentals of computer security, cryptography, network security, and ethical hacking techniques."
                />
                <CourseCard
                  title="CS 1110: Introduction to Computing: A Design and Development Perspective with Python"
                  description="Introduction to programming concepts using Python. Topics include variables, control structures, functions, and data structures."
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}

function CourseCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
