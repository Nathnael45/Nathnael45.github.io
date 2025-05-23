import PageShell from "@/components/page-shell"
import PageHeader from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHeader
        title="My Professional Journey"
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
              <div className="flex flex-col items-end">
                <CardTitle className="text-2xl">
                   September 2024 - Present
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Greenzone Project</h3>
                <h3 className="text-xl font-semibold">January 2025 - May 2025</h3>
              </div>
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
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">OKB-Hope Project</h3>
                  <h3 className="text-xl font-semibold">September 2024 - December 2024</h3>
              </div>
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

        {/* Shady Grove Group LLC */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                <CardTitle className="text-2xl">Shady Grove Group LLC</CardTitle>
                <CardDescription className="text-lg">Part-Time Intern</CardDescription>
                </div>
                <div className="flex flex-col items-end">
                <CardTitle className="text-2xl">June 2021 - June 2023</CardTitle>
                </div>
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
