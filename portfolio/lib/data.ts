export type Experience = {
  org: string
  role: string
  period: string
  location?: string
  subRoles?: { title: string; period: string; bullets: string[] }[]
  bullets?: string[]
  tags: string[]
}

export type Project = {
  id: string
  title: string
  period: string
  description: string
  detail: string
  features: string[]
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  learnMoreUrl?: string
  image: string
  side?: boolean
}

export type SkillGroup = {
  category: string
  skills: string[]
}

// ─── Experience ───────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    org: "Workday",
    role: "Software Engineer Intern",
    period: "May 2026 – Present",
    location: "Pleasanton, CA",
    bullets: [
      "Led a solo proof of concept adopting GUAC for vulnerability blame assignment across Workday's containers, approved by leadership for phased fleet-wide rollout.",
      "Designed the architecture to pin each vulnerability to its owning team: cross-referencing SARIF scan findings against GUAC's dependency graph and a package-ownership database.",
      "Built a full-stack visualization tool to demo the POC: explores GUAC's dependency graph and, per package, separates its native vulnerabilities from those inherited through its dependencies.",
      "Deploying Build Doctor to production, a Python tool that fixes broken builds blocking security scans — 41/41 repos diagnosed with zero misses, expected to cut Snyk's build failure rate from 30% to 10%.",
    ],
    tags: ["Python", "GUAC", "SARIF", "Docker", "Snyk"],
  },
  {
    org: "Carnegie Mellon University",
    role: "Software Engineering Intern",
    period: "May – Aug 2025",
    location: "Pittsburgh, PA",
    bullets: [
      "Engineered a GPT-4–powered cybersecurity extension that guides users toward secure behaviors, presented to hundreds of Pennsylvania state government representatives.",
      "Designed large-scale data processing pipelines in Python (NumPy) to analyze 6,000+ LLM outputs, improving response actionability by 50% through prompt iteration and scoring.",
    ],
    tags: ["Python", "NumPy", "GPT-4"],
  },
  {
    org: "Rethink Food @ Hack4Impact Cornell",
    role: "Lead Software Developer",
    period: "Aug – Dec 2025",
    location: "Ithaca, NY",
    bullets: [
      "Led a team of 7 developers and designers to deliver a production web application from requirements through deployment for a nonprofit combating food insecurity across New York City.",
      "Built an interactive data visualization platform using Mapbox to display data from 10,000+ restaurants and community organizations, improving transparency and donor engagement.",
    ],
    tags: ["Next.js", "Mapbox", "Node.js", "TypeScript"],
  },
  {
    org: "Hack4Impact Cornell",
    role: "Software Developer",
    period: "September 2024 – May 2025",
    subRoles: [
      {
        title: "Greenzone Project",
        period: "January 2025 – May 2025",
        bullets: [
          "Built a web-app to deliver data that secures the livelihoods of 300,000+ herders and their livestock in Mongolia.",
          "Engineered data retrieval and modification functionalities for map data using Supabase and PostgreSQL.",
          "Established robust API-Routing from backend to the Next.js frontend using Node.js and Express.js.",
          "Collaborated with a team of developers to implement features according to client specifications.",
          "Participated in weekly code reviews and agile development processes to ensure high-quality deliverables.",
        ],
      },
      {
        title: "OKB-Hope Project",
        period: "September 2024 – December 2024",
        bullets: [
          "Developed a web platform that connects 10,000+ Ghanaians to vital mental health resources.",
          "Implemented user-friendly interfaces for the Discover and Psychiatrists pages using Node.js and HTML/CSS.",
          "Constructed and tested multi-file upload and storage features by integrating Firebase with the Next.js frontend.",
          "Worked closely with UX designers to implement responsive and accessible user interfaces.",
          "Documented code and created technical guides for future maintenance and feature development.",
        ],
      },
    ],
    tags: ["Next.js", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Firebase", "HTML/CSS"],
  },
  {
    org: "Shady Grove Group LLC",
    role: "Part-Time Intern",
    period: "June 2021 – June 2023",
    bullets: [
      "Contributed to an LMS that is used by 100+ at the company and in Florida University Southeast (FUSE).",
      "Utilized Flutter for frontend and Firebase for the deployment, while using an Agile development framework.",
      "Optimized platform functionality through testing and key document uploads, enhancing usability and reliability.",
      "Participated in sprint planning and retrospective meetings as part of the Agile development process.",
      "Collaborated with senior developers to implement new features and fix bugs in the application.",
    ],
    tags: ["Flutter", "Firebase", "Agile", "LMS"],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  // ── Spring 2026 ──────────────────────────────────────────────────────────────
  {
    id: "devaudit",
    title: "DevAudit",
    period: "Jan 2026 – Present",
    description: "Full-stack AI security-auditing agent for GitHub repositories",
    detail:
      "DevAudit clones a GitHub repo and runs Semgrep, Bandit, and Gitleaks in parallel, streaming Claude's live reasoning and triaged findings to the browser as it works. Backed by 88 automated tests (Vitest, run against a real Postgres) across API, worker, and frontend, wired into a GitHub Actions pipeline that runs lint, typecheck, and the full suite on every push.",
    features: [
      "Built a full-stack AI security-auditing agent that clones a GitHub repo, runs Semgrep, Bandit, and Gitleaks in parallel, and streams Claude's live reasoning and triaged findings to the browser as it works.",
      "Wrote 88 automated tests (Vitest, run against a real Postgres) across API, worker, and frontend, wired into a GitHub Actions pipeline that runs lint, typecheck, and the full suite on every push.",
      "Root-caused production bugs through controlled experiments: traced a silent Semgrep timeout to AWS burstable-CPU throttling, and a truncated AI response to an undersized max_tokens.",
    ],
    tags: ["TypeScript", "Next.js", "Node.js", "Claude API", "PostgreSQL", "Redis", "Docker", "AWS"],
    githubUrl: "https://github.com/Nathnael45/DevAudit",
    image: "/placeholder.jpg",
  },
  {
    id: "tower-of-the-tail",
    title: "Tower of the Tail",
    period: "Jan – May 2026 · CIS 3152",
    description: "Fully playable polished game built from scratch with a 9-person team",
    detail:
      "A fully playable, polished game built from scratch in a 9-person team (developers + designers) for Cornell's Practicum in Game Design. Contributed as developer: owned level design and the MVC architecture for the level/controller system.",
    features: [
      "Fully playable with polished art and sound from a 9-person team",
      "MVC architecture for level and controller systems",
      "Owned level design end-to-end",
    ],
    tags: ["Java", "LibGDX"],
    demoUrl: "https://gdiac.cs.cornell.edu/gdiac/showcase/games/tower_of_the_tail/",
    image: "/prev.png",
  },
  {
    id: "dreambooth",
    title: "DreamBooth Re-implementation",
    period: "Spring 2026 · CS 4782",
    description: "From-scratch re-implementation of DreamBooth fine-tuning for Stable Diffusion",
    detail:
      "Re-implemented DreamBooth (Ruiz et al. 2023) from scratch — fine-tunes Stable Diffusion v1.5 from 3–5 reference photos using full UNet fine-tuning and LoRA variants with prior-preservation loss. Achieved CLIP-T of 0.30 vs. the paper's 0.305.",
    features: [
      "Re-implemented DreamBooth (Ruiz et al. 2023) from scratch, fine-tuning Stable Diffusion v1.5 for subject-driven image generation from as few as 3–5 reference photos.",
      "Built full UNet fine-tuning and LoRA variants with prior-preservation loss, matching the paper's benchmark for prompt fidelity (CLIP-T 0.30 vs. 0.305 reported).",
    ],
    tags: ["PyTorch", "Diffusers", "HuggingFace"],
    githubUrl: "https://github.com/Anthony-PB/cs4782finalDream",
    image: "/placeholder.jpg",
  },
  {
    id: "last-mile-transit",
    title: "NYC Last-Mile Subway-to-Taxi Analysis",
    period: "Spring 2026 · ORIE 3120",
    description: "Spatial data pipeline identifying NYC subway stations with disproportionate last-mile taxi demand",
    detail:
      "Built a full spatial analytics pipeline over 2024 MTA ridership and Yellow/Green/HVFHV taxi trip parquets. Matched every taxi zone to its nearest subway station via cKDTree + 500m radius with area-proportional weighting, ran a 10,000-iteration Monte Carlo simulation to produce per-station, per-hour positioning scores for drivers, and ran a formal multinomial hypothesis test (Gini + top-station share) to confirm pickup concentration is statistically significant beyond ridership alone.",
    features: [
      "Resumable paginated downloader against the NY.gov Socrata API for full 2024 MTA hourly ridership",
      "Spatial matching via scipy cKDTree with area-weighted pickup discounting for large taxi zones",
      "10,000-trial Monte Carlo simulation producing P10/P90 uncertainty bands and hourly positioning scores",
      "Multinomial hypothesis test (Gini coefficient + top-station share) with 10,000 simulated H₀ distributions",
      "pickups_per_1000_riders normalization to surface true last-mile hotspots beyond raw station busyness",
    ],
    tags: ["Python", "Pandas", "NumPy", "SciPy", "GIS", "Tableau", "Monte Carlo", "SQL"],
    image: "/placeholder.jpg",
  },
  // ── Fall 2025 ────────────────────────────────────────────────────────────────
  {
    id: "nbody-simulation",
    title: "3D N-Body Gravity Simulation",
    period: "Fall 2025 · CS 3110",
    description: "Modular n-body physics engine in OCaml with an interactive 3D visualization",
    detail:
      "Built a modular n-body physics engine in OCaml using functional programming, implementing gravitational dynamics, collision detection, and state management across 7+ modules, validated with 40+ OUnit tests. Developed an interactive 3D visualization system with orbital trails, dynamic camera controls, and live parameter editing; implemented quadratic-time collision detection across multiple astronomical scenarios.",
    features: [
      "Modular OCaml engine with gravitational dynamics, collision detection, and state management across 7+ modules.",
      "Validated correctness with 40+ OUnit tests covering edge cases across multiple astronomical scenarios.",
      "Interactive 3D visualization with orbital trails, dynamic camera controls, and live parameter editing via Raylib.",
    ],
    tags: ["OCaml", "Raylib", "OUnit", "Functional Programming"],
    githubUrl: "https://github.com/Anthony-PB/CS3110MP",
    image: "/placeholder.jpg",
  },
  // ── Spring 2025 ──────────────────────────────────────────────────────────────
  {
    id: "greenzone",
    title: "Greenzone",
    period: "Jan – May 2025",
    description: "Carrying-capacity early-warning web app for rangeland degradation in Mongolia",
    detail:
      "Built for Hack4Impact Cornell, Greenzone serves 300,000+ herders and 71M livestock with real-time remote-sensing and biomass data. Secure RESTful APIs backed by Supabase ingest satellite datasets to power an interactive map dashboard.",
    features: [
      "Developed a carrying capacity early-warning web app to monitor rangeland degradation affecting 300,000+ herders and 71 million livestock across Mongolia.",
      "Implemented secure RESTful APIs and integrated Supabase to ingest and visualize large-scale remote-sensing and biomass datasets in real time, enabling data-driven land management decisions.",
    ],
    tags: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Git"],
    githubUrl: "https://github.com/Nathnael45/greenzone",
    image: "/Screenshot 2025-06-30 110412.png",
  },
  {
    id: "embedded-keys",
    title: "Embedded Keys",
    period: "Spring 2025 · ECE 3140",
    description: "Digital piano on the NXP FRDM-KL46Z board using its capacitive slider and a passive buzzer",
    detail:
      "This project turns the KL46Z's onboard touch slider and two buttons into a 7-zone keyboard (notes C–B), drives a passive piezo buzzer via PIT-driven PWM for tone generation, and uses the RGB LED for visual feedback. It also plays a special tune hidden behind a button-hold Easter egg.",
    features: [
      "7-zone capacitive \"keyboard\" mapped to notes C–B",
      "Non-blocking PWM tone generation via PIT interrupts",
      "RGB LED flashes per note + startup & Easter-egg melodies",
    ],
    tags: ["C", "NXP FRDM-KL46Z", "Embedded Systems"],
    githubUrl: "https://github.com/Nathnael45/Embedded-Keys",
    demoUrl: "https://drive.google.com/file/d/14T9HkcXC2n1E8W-GcuEIgz6YVdRtPcOv/view?usp=sharing",
    learnMoreUrl: "https://pages.github.coecis.cornell.edu/ece3140-sp2025/ap2357-dev38-nbt26/",
    image: "/embedded.png",
  },
  // ── Fall 2024 ─────────────────────────────────────────────────────────────────
  {
    id: "lost-and-found",
    title: "Lost and Found App",
    period: "Fall 2024",
    description: "Fullstack iOS app connecting people who lost items with those who found them",
    detail:
      "The Lost and Found App is an iOS application developed to help people recover lost items by connecting them with individuals who have found these items. The app uses geolocation to show nearby lost and found reports and facilitates communication between users.",
    features: [
      "Item categorization and search functionality",
      "In-app messaging between finders and owners",
      "Image upload for item identification",
      "Push notifications for new matches",
    ],
    tags: ["Flask-SQL", "Docker", "Google Cloud", "API Design", "iOS"],
    githubUrl: "https://github.com/dvala041/Lost_And_Found",
    demoUrl: "https://youtu.be/DcUpOmtydV8?si=QONg57mPLGPwlQwb",
    image: "/lostandfound.jpg",
  },
  // ── Spring 2024 ───────────────────────────────────────────────────────────────
  {
    id: "workout-hub",
    title: "Workout Hub",
    period: "Spring 2024",
    description: "MERN-stack fitness tracking app for logging workouts and visualizing progress",
    detail:
      "Workout Hub is a full-stack web application designed to help fitness enthusiasts track their workouts, set goals, and monitor their progress over time. Users can create accounts, log exercises, and view their performance analytics through an intuitive dashboard.",
    features: [
      "User authentication with JWT tokens for secure access",
      "Exercise logging with customizable categories and metrics",
      "Progress tracking with data visualization",
      "Responsive design for mobile and desktop use",
      "Goal setting and achievement tracking",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Heroku", "Vercel"],
    githubUrl: "https://github.com/Nathnael45/WorkoutHub",
    demoUrl: "https://workout-hub-git-main-nathnael45s-projects.vercel.app/",
    image: "/workout.jpg",
  },
  {
    id: "interactive-image-selector",
    title: "Interactive Image Selector",
    period: "Spring 2024 · CS 2110",
    description: "Java Swing tool for selecting and extracting arbitrary image regions using Dijkstra's algorithm",
    detail:
      "Selector App (CS 2110 Final project) is a Java/Swing desktop application offering two selection modes. In Point-to-Point mode, you build straight-line segments by clicking endpoints. In Intelligent Scissors mode, the app computes real-time live-wire paths using Dijkstra's algorithm on a pixel graph with interchangeable monotone or full-color weight functions.",
    features: [
      "Dual-mode (Point-to-Point & Intelligent Scissors) selection with seamless model switching",
      "Undo/redo/reset/finish controls and menu integration",
      "Real-time \"live-wire\" preview and progress bar while pathfinding",
    ],
    tags: ["Java", "Swing", "JUnit"],
    demoUrl: "https://drive.google.com/file/d/1tb53XM5BVRz8JGiehciLkvXkAbhuFI3X/view?usp=sharing",
    image: "/A6.png",
  },
  // ── Fall 2023 ─────────────────────────────────────────────────────────────────
  {
    id: "space-game",
    title: "Space Game",
    period: "Fall 2023 · CS 1110",
    description: "Modernized space invaders built in Python with dynamic scoring and custom audio",
    detail:
      "Space Game is a vastly updated and customized version of the invader's final project for CS 1110. Built using Kivy and Python, this multi-layered space-themed game features advanced gameplay mechanics, dynamic scoring systems, and immersive audio-visual elements.",
    features: [
      "Multiple game waves with increasing difficulty",
      "Dynamic scoring system and leaderboards",
      "Custom background music and sound effects",
      "Animated space-themed backgrounds",
      "Enhanced gameplay mechanics and controls",
    ],
    tags: ["Python", "Kivy", "Game Development"],
    githubUrl: "https://github.com/nathnael45/space-game",
    image: "/invaders.png",
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "TypeScript", "C", "SQL", "Bash", "HTML/CSS"],
  },
  {
    category: "Frameworks",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Flask", "PyTorch", "NumPy", "Pandas"],
  },
  {
    category: "Databases & Cloud",
    skills: ["AWS", "Google Cloud Platform", "PostgreSQL", "Redis", "MongoDB", "Supabase"],
  },
  {
    category: "Tools",
    skills: ["Docker", "Git", "GitHub Actions", "Nginx", "Linux", "Vercel"],
  },
]

// ─── Coursework ───────────────────────────────────────────────────────────────

export const coursework = [
  "OOP & Data Structures", "Computer Organization", "Embedded Systems",
  "Machine Learning", "Deep Learning", "Cybersecurity", "Analysis of Algorithms",
  "Practicum in Game Design", "Practical Tools for OR/ML/DS",
]

// ─── Featured projects shown on homepage ──────────────────────────────────────

export const featuredProjectIds = ["devaudit", "dreambooth", "greenzone"]
