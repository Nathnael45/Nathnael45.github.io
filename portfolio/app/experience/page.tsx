import PageShell from "@/components/page-shell"
import PageHeader from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHeader
        badge="My Experience"
        title="Professional Journey"
        description="A detailed overview of my work experience, projects, and professional achievements."
      />

      <div className="space-y-8">
        {/* Hack4Impact Cornell */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <CardTitle className="text-2xl">Hack4Impact Cornell</CardTitle>
                <CardDescription className="text-lg">Software Developer</CardDescription>
              </div>
              <Badge>January 2025 - Present</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Greenzone Project (January 2025 - Present)</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  Built a web-app to deliver data that secures the livelihoods of 300,000+ herders and their livestock
                  in Mongolia.
                </li>
                <li>
                  Engineered data retrieval and modification functionalities for map data using Supabase and PostgreSQL.
                </li>
                <li>
                  Established robust API-Routing from backend to the Next.js frontend using Node.js and Express.js.
                </li>
                <li>
                  Collaborated with a team of developers to implement features according to client specifications.
                </li>
                <li>
                  Participated in weekly code reviews and agile development processes to ensure high-quality
                  deliverables.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">OKB-Hope Project (September 2024 - December 2024)</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Developed a web platform that connects 10000+ of Ghanaians to vital mental health resources.</li>
                <li>
                  Implemented user-friendly interfaces for the Discover and Psychiatrists pages using Node.js and
                  HTML/CSS.
                </li>
                <li>
                  Constructed and tested multi-file upload and storage features by integrating Firebase with the Next.js
                  frontend.
                </li>
                <li>Worked closely with UX designers to implement responsive and accessible user interfaces.</li>
                <li>Documented code and created technical guides for future maintenance and feature development.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">Express.js</Badge>
              <Badge variant="outline">Supabase</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="outline">Firebase</Badge>
              <Badge variant="outline">HTML/CSS</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Workout Hub Website */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <CardTitle className="text-2xl">Workout Hub Website</CardTitle>
                <CardDescription className="text-lg">Lead Developer</CardDescription>
              </div>
              <Badge>July 2024 - Present</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Designed and developed a full-stack website to allow for any number of users to store and track their
                exercises.
              </li>
              <li>
                Built the frontend with React, the backend with Node.js/Express, and used MongoDB for data storage.
              </li>
              <li>
                Implemented secure user authentication using JWT tokens, tying accounts to user's email and password.
              </li>
              <li>
                Deployed the backend via Heroku and the frontend via Vercel for scalable hosting, accessibility and ease
                of use.
              </li>
              <li>Created a responsive design that works seamlessly across desktop, tablet, and mobile devices.</li>
              <li>Implemented data visualization features to help users track their progress over time.</li>
            </ul>
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
        </Card>

        {/* Lost and Found App */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <CardTitle className="text-2xl">Lost and Found App</CardTitle>
                <CardDescription className="text-lg">Backend Developer</CardDescription>
              </div>
              <Badge>April 2024 - May 2024</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Developed a Lost and Found IOS Application in a team of 4 other students for an app creation
                competition.
              </li>
              <li>Designed and implemented the backend using Flask-SQL to handle API-routing for frontend requests.</li>
              <li>Deployed the backend via Docker on Google Cloud Platform for live accessing, testing and hosting.</li>
              <li>Implemented geolocation features to help users find lost items in their vicinity.</li>
              <li>Created comprehensive API documentation to facilitate frontend-backend integration.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">iOS</Badge>
              <Badge variant="outline">Flask-SQL</Badge>
              <Badge variant="outline">Docker</Badge>
              <Badge variant="outline">Google Cloud</Badge>
              <Badge variant="outline">API Design</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Shady Grove Group LLC */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <CardTitle className="text-2xl">Shady Grove Group LLC</CardTitle>
                <CardDescription className="text-lg">Part-Time Intern</CardDescription>
              </div>
              <Badge>June 2021 - June 2023</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Contributed to an LMS that is used by 100+ at the company and in Florida University Southeast (FUSE).
              </li>
              <li>
                Utilized Flutter for frontend and Firebase for the deployment, while using an Agile development
                framework.
              </li>
              <li>
                Optimized platform functionality through testing and key document uploads, enhancing usability and
                reliability.
              </li>
              <li>
                Participated in sprint planning and retrospective meetings as part of the Agile development process.
              </li>
              <li>Collaborated with senior developers to implement new features and fix bugs in the application.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Flutter</Badge>
              <Badge variant="outline">Firebase</Badge>
              <Badge variant="outline">Agile</Badge>
              <Badge variant="outline">LMS</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
