import Image from "next/image"
import Link from "next/link"
import PageShell from "@/components/page-shell"
import PageHeader from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Personal Projects"
        description="A showcase of my technical projects, highlighting my skills and experience in software development."
      />

      <div className="space-y-16">
        {/* Project 1 */}
        <div id="workout-hub" className="scroll-mt-20">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image src="/workout.jpg" alt="Workout Hub" fill className="object-cover" />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl">Workout Hub</CardTitle>
                  <CardDescription className="text-lg">
                    A fitness tracking application that helps users monitor their workout progress
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Workout Hub is a full-stack web application designed to help fitness enthusiasts track their
                    workouts, set goals, and monitor their progress over time. Users can create accounts, log exercises,
                    and view their performance analytics through an intuitive dashboard.
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>User authentication with JWT tokens for secure access</li>
                      <li>Exercise logging with customizable categories and metrics</li>
                      <li>Progress tracking with data visualization</li>
                      <li>Responsive design for mobile and desktop use</li>
                      <li>Goal setting and achievement tracking</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">JWT</Badge>
                    <Badge variant="outline">Heroku</Badge>
                    <Badge variant="outline">Vercel</Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-6 flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/Nathnael45/WorkoutHub" target="_blank">
                      <Code className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="https://workout-hub-git-main-nathnael45s-projects.vercel.app/" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Try it Out
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>

        {/* Project 2 */}
        <div id="lost-and-found" className="scroll-mt-20">
          <Card className="overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/lostandfound.jpg"
                  alt="Lost and Found App"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl">Lost and Found App</CardTitle>
                  <CardDescription className="text-lg">
                    A platform connecting people who have lost items with those who have found them
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    The Lost and Found App is an iOS application developed to help people recover lost items by
                    connecting them with individuals who have found these items. The app uses geolocation to show nearby
                    lost and found reports and facilitates communication between users.
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Item categorization and search functionality</li>
                      <li>In-app messaging between finders and owners</li>
                      <li>Image upload for item identification</li>
                      <li>Push notifications for new matches</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Flask-SQL</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Google Cloud</Badge>
                    <Badge variant="outline">API Design</Badge>
                    <Badge variant="outline">iOS</Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-6 flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/dvala041/Lost_And_Found" target="_blank">
                      <Code className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="https://youtu.be/DcUpOmtydV8?si=QONg57mPLGPwlQwb" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
        {/* Project 3 */}
        <div id="space-game" className="scroll-mt-20">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/invaders.png"
                  alt="Space Game"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl">Space Game</CardTitle>
                  <CardDescription className="text-lg">
                    A modernized and enhanced version of the classic space invaders game
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Space Game is a vastly updated and customized version of the invader's final project for CS 1110.
                    Built using Kivy and Python, this multi-layered space-themed game features advanced gameplay mechanics,
                    dynamic scoring systems, and immersive audio-visual elements.
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Multiple game waves with increasing difficulty</li>
                      <li>Dynamic scoring system and leaderboards</li>
                      <li>Custom background music and sound effects</li>
                      <li>Animated space-themed backgrounds</li>
                      <li>Enhanced gameplay mechanics and controls</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Kivy</Badge>
                    <Badge variant="outline">Game Development</Badge>
                    <Badge variant="outline">UI Design</Badge>
                    <Badge variant="outline">Audio Integration</Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-6 flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/nathnael45/space-game" target="_blank">
                      <Code className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                  
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  )
}
