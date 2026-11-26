import {
  Brain,
  Code,
  Cpu,
  Dumbbell,
  Gamepad2,
  Map,
  Network,
  Orbit,
  PenTool,
  Radar,
  Rocket,
  Scissors,
  ShieldCheck,
  Smartphone,
  TrainFront,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react"

const PROJECT_ICONS: Record<string, LucideIcon> = {
  "dining-allergens": Utensils,
  "newgrad-radar": Radar,
  "distributed-kv": Network,
  devaudit: ShieldCheck,
  "tower-of-the-tail": Gamepad2,
  whiteboard: PenTool,
  dreambooth: Brain,
  "last-mile-transit": TrainFront,
  "nbody-simulation": Orbit,
  greenzone: Map,
  "study-buddy": Users,
  "embedded-keys": Cpu,
  "lost-and-found": Smartphone,
  "workout-hub": Dumbbell,
  "interactive-image-selector": Scissors,
  "space-game": Rocket,
}

export function ProjectIcon({ id, className }: { id: string; className?: string }) {
  const Icon = PROJECT_ICONS[id] ?? Code
  return <Icon className={className} strokeWidth={1.25} />
}
