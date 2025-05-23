import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl">Nathnael Tesfaw</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Computer Science Student & Developer</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/nathnael45" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/nathnael-tesfaw" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:nbt26@cornell.edu">
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Resume">
                <FileText className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
           {new Date().getFullYear()} Nathnael Tesfaw. 
        </div>
      </div>
    </footer>
  )
}
