import PageShell from "@/components/page-shell"
import PageHeader from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Skills & Technologies"
        description="An overview of my technical skills, tools, and areas of expertise in software development."
      />

      <div className="space-y-12">
        {/* Technical Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              title="Programming Languages"
              skills={["Python", "Java", "JavaScript", "HTML/CSS", "Dart", "C", "RISC-V", "Verilog"]}
            />

            <SkillCard
              title="Frontend Development"
              skills={["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Flutter", "MUI "]}
            />

            <SkillCard
              title="Backend Development"
              skills={["Node.js", "Express.js", "Flask-SQL", "RESTful APIs", "GraphQL", "JWT Authentication", "Serverless"]}
            />

            <SkillCard
              title="Databases & Storage"
              skills={["MongoDB", "PostgreSQL", "Firebase", "Supabase"]}
            />
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Tools & Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Development Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">VS Code</Badge>
                  <Badge variant="secondary">IntelliJ IDEA</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Postman</Badge>
                  <Badge variant="secondary">npm/yarn</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Cloud Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Google Cloud</Badge>
                  <Badge variant="secondary">Heroku</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Azure Labs</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                </div>
              </CardContent>
            </Card>

           
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Strong written and verbal communication skills developed through team projects, presentations, and
                  documentation writing. Able to explain complex technical concepts to non-technical stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Problem Solving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Analytical approach to problem-solving with the ability to break down complex issues into manageable
                  components. Experience in debugging, troubleshooting, and implementing efficient solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Teamwork & Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Collaborative team player with experience in both contributing to and leading development teams.
                  Skilled in coordinating tasks, meeting deadlines, and fostering a positive work environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
