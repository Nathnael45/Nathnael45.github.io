import PageShell from "@/components/page-shell"
import PageHeader from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsPage() {
  return (
    <PageShell>
      <PageHeader
        badge="My Expertise"
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
              skills={["React", "Next.js", "HTML5", "CSS3/SCSS", "Tailwind CSS", "Flutter", "Responsive Design"]}
            />

            <SkillCard
              title="Backend Development"
              skills={["Node.js", "Express.js", "Flask-SQL", "RESTful APIs", "GraphQL", "Authentication", "Serverless"]}
            />

            <SkillCard
              title="Databases & Storage"
              skills={["MongoDB", "PostgreSQL", "Firebase", "Supabase", "SQL", "NoSQL", "Data Modeling"]}
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
                  <Badge variant="secondary">AWS (basics)</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Design & Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Adobe XD</Badge>
                  <Badge variant="secondary">Jira</Badge>
                  <Badge variant="secondary">Trello</Badge>
                  <Badge variant="secondary">Slack</Badge>
                  <Badge variant="secondary">Notion</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Software Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  I specialize in full-stack development with a focus on creating responsive, user-friendly
                  applications. My experience spans from frontend UI/UX implementation to backend API design and
                  database management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Full-Stack Development</Badge>
                  <Badge variant="secondary">API Design</Badge>
                  <Badge variant="secondary">Database Management</Badge>
                  <Badge variant="secondary">User Authentication</Badge>
                  <Badge variant="secondary">Responsive Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Artificial Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  With my minor in A.I., I've developed skills in machine learning algorithms, neural networks, and data
                  analysis. I'm passionate about applying AI solutions to real-world problems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Neural Networks</Badge>
                  <Badge variant="secondary">Data Analysis</Badge>
                  <Badge variant="secondary">Natural Language Processing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Embedded Systems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  I have experience working with embedded systems, including programming microcontrollers and
                  understanding hardware interfaces. My coursework in Digital Logic and Computer Organization has
                  provided a strong foundation in this area.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Microcontroller Programming</Badge>
                  <Badge variant="secondary">Hardware Interfaces</Badge>
                  <Badge variant="secondary">RISC-V</Badge>
                  <Badge variant="secondary">Digital Logic</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  My coursework in Cybersecurity has given me knowledge of security principles, cryptography, and secure
                  coding practices. I implement these principles in my development work to create secure applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Secure Coding</Badge>
                  <Badge variant="secondary">Authentication Systems</Badge>
                  <Badge variant="secondary">Data Protection</Badge>
                  <Badge variant="secondary">Security Best Practices</Badge>
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
