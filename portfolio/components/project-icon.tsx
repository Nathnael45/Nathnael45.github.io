import {
  Brain,
  Code,
  Cpu,
  Dumbbell,
  Gamepad2,
  Map,
  Network,
  Orbit,
  Rocket,
  Scissors,
  ShieldCheck,
  Smartphone,
  TrainFront,
  type LucideIcon,
} from "lucide-react"

const PROJECT_ICONS: Record<string, LucideIcon> = {
  "distributed-kv": Network,
  devaudit: ShieldCheck,
  "tower-of-the-tail": Gamepad2,
  dreambooth: Brain,
  "last-mile-transit": TrainFront,
  "nbody-simulation": Orbit,
  greenzone: Map,
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
