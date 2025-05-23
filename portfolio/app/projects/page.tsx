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
                <Image src="/workouthub.png" alt="Workout Hub" fill className="object-cover" />
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
                  src="/placeholder.svg?height=600&width=800"
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
                      <li>Geolocation-based item discovery</li>
                      <li>Item categorization and search functionality</li>
                      <li>In-app messaging between finders and owners</li>
                      <li>Image upload for item identification</li>
                      <li>Push notifications for new matches</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">iOS</Badge>
                    <Badge variant="outline">Flask-SQL</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Google Cloud</Badge>
                    <Badge variant="outline">API Design</Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-6 flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/nathnael45" target="_blank">
                      <Code className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="#" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>

        {/* Project 3 */}
        <div id="greenzone" className="scroll-mt-20">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image src="/placeholder.svg?height=600&width=800" alt="Greenzone" fill className="object-cover" />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl">Greenzone</CardTitle>
                  <CardDescription className="text-lg">
                    Web application delivering data to secure livelihoods of herders in Mongolia
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Greenzone is a web application developed with Hack4Impact Cornell to support over 300,000 herders
                    and their livestock in Mongolia. The platform provides critical data on pasture conditions, weather
                    forecasts, and resource availability to help herders make informed decisions.
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Interactive maps showing pasture conditions and resources</li>
                      <li>Real-time weather data and forecasts</li>
                      <li>Resource management tools for herders</li>
                      <li>Data visualization for trend analysis</li>
                      <li>Offline functionality for remote areas</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Express.js</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-6 flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/nathnael45" target="_blank">
                      <Code className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="#" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Other Project 1 */}
            <Card>
              <CardHeader>
                <CardTitle>OKB-Hope Platform</CardTitle>
                <CardDescription>Mental health resources platform for Ghanaians</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  A web platform connecting Ghanaians to vital mental health resources, featuring resource discovery and
                  professional directories.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Firebase</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/nathnael45" target="_blank">
                    <Code className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Other Project 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Management System</CardTitle>
                <CardDescription>Educational platform for university students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Contributed to an LMS used by 100+ at Shady Grove Group LLC and Florida University Southeast.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Agile</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/nathnael45" target="_blank">
                    <Code className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Other Project 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Portfolio</CardTitle>
                <CardDescription>Professional showcase website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  A responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">React</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/nathnael45" target="_blank">
                    <Code className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
