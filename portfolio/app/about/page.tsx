import PageShell from "@/components/page-shell"
import PageHeader from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Calendar, Code, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        title="About Me"
        description="Learn more about my journey, interests, and what drives me in the field of computer science."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">My Story</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I am currently a student studying Computer Science with a minor in Artificial Intelligence at Cornell
              University's College of Engineering. I am passionate about computer science due to the many ingenious
              solutions one can produce to tackle the ever-present problems in our world.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey in technology began with a curiosity about how digital systems work. This curiosity evolved
              into a passion for creating software that makes a meaningful impact. I aspire to work in technology,
              coding, and software engineering to build solutions that address real-world challenges.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              collaborating with fellow developers on innovative ideas.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">My Philosophy</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I believe that technology should be accessible, inclusive, and designed with the user in mind. My approach
              to software development is centered around creating solutions that not only solve problems efficiently but
              also provide an intuitive and enjoyable user experience.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm committed to continuous learning and staying updated with the latest technologies and best practices
              in the field. I value collaboration and believe that the best solutions come from diverse perspectives and
              open communication.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-xl">Quick Facts</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Expected Graduation</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">May 2027</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rockville, Maryland</p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-xl">Interests & Hobbies</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Technical Interests</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">Software Development</Badge>
                  <Badge variant="secondary">Artificial Intelligence</Badge>
                  <Badge variant="secondary">Backend Development</Badge>
                  <Badge variant="secondary">Web Technologies</Badge>
                </div>
              </div>
              <div>
                <p className="font-medium">Personal Interests</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">Christianity</Badge>
                  <Badge variant="secondary">History</Badge>
                  <Badge variant="secondary">Community Service</Badge>
                  <Badge variant="secondary">Traveling</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-xl">Languages</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>English</span>
                <span className="text-sm">Native</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Amharic</span>
                <span className="text-sm">Fluent</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Spanish</span>
                <span className="text-sm">Elementary</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
