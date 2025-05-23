import { Badge } from "@/components/ui/badge"

interface PageHeaderProps {
  title: string
  description?: string
  badge?: string
}

export default function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="space-y-4 mb-12">
      {badge && <Badge variant="outline">{badge}</Badge>}
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      {description && <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">{description}</p>}
    </div>
  )
}
