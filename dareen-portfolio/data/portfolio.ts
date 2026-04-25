export const meta = {
  name: "Dareen Alsulami",
  role: "Software Engineer",
  email: "DareenAlsulami11@gmail.com",
  phone: "+966 546720269",
  location: "Jeddah, Saudi Arabia",
  linkedin: "Dareen Alsulami",
  github: "DareenAlsulami1",
  status: "open_to_work",
  currentRole: "Software Engineer @ NCM · Tamheer",
  education: "BSc Computer Science · King AbdulAziz University · First Honors · 2025",
};

export const stats = [
  { num: "4+", label: "years shipping" },
  { num: "6",  label: "production systems" },
  { num: "10+", label: "tech in stack" },
  { num: "1st", label: "class honors" },
];

export type BadgeVariant = "prod" | "research" | "design";

export interface Project {
  id: string;
  name: string;
  badge: BadgeVariant;
  badgeLabel: string;
  tagline: string;
  architecture: string;
  challenge: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    id: "anwaa",
    name: "ANWAA_SERVICES_PLATFORM",
    badge: "prod",
    badgeLabel: "PROD",
    tagline:
      "Full-stack notification engine for NCM's mobile app — advertisement lifecycle management with async broadcast delivery.",
    architecture:
      "Django REST backend with Celery workers handling async notification queues. React/Next.js frontend for ad request management. PostgreSQL as the source of truth. Firebase Cloud Messaging (FCM) for mobile push delivery. OCI Object Storage for media assets. Dockerized across all services for environment parity.",
    challenge:
      "Notification broadcast to thousands of devices needed guaranteed delivery without blocking the request thread. Solved by decoupling the approval workflow from delivery — Celery tasks handle fan-out asynchronously, with retry logic on FCM failures. Zero dropped notifications in production.",
    stack: ["Next.js", "React", "Django", "Celery", "PostgreSQL", "Docker", "FCM", "OCI"],
  },
  {
    id: "amneen",
    name: "AMNEEN — CROWD INTELLIGENCE",
    badge: "research",
    badgeLabel: "GRADUATION",
    tagline:
      "Real-time crowd management system using computer vision to detect and predict overcrowding before it becomes dangerous.",
    architecture:
      "Computer vision pipeline running YOLOv8 for real-time crowd detection. Django backend ingesting stream data, writing density metrics to PostgreSQL. Flutter mobile app surfacing alerts + a monitoring dashboard for decision-makers. Inference pipeline optimized for low-latency frame processing.",
    challenge:
      "Running YOLOv8 inference at near-real-time frame rates while simultaneously writing metrics to the DB caused race conditions under concurrent load. Solved with a producer-consumer pattern — inference writes to an in-memory queue, a separate worker handles persistence, keeping the main detection loop unblocked.",
    stack: ["YOLOv8", "Django", "Flutter", "PostgreSQL", "Computer Vision", "Deep Learning"],
  },
  {
    id: "meteo",
    name: "METEO METADATA SYSTEM",
    badge: "prod",
    badgeLabel: "DEPLOYED",
    tagline:
      "High-performance metadata management for large-scale meteorological datasets, built during co-op at NCM.",
    architecture:
      "DuckDB as the analytical query engine — its columnar format handles large dataset scans orders of magnitude faster than row-based alternatives for meteorological time-series. Django REST Framework exposes query endpoints. Vue.js frontend renders interactive data tables and visualizations.",
    challenge:
      "Initial schema design caused full-table scans on large temporal queries. Introduced partition-aware DuckDB queries with predicate pushdown, dropping average query latency significantly on large date-range filters.",
    stack: ["DuckDB", "Python", "Django", "Vue.js", "REST API"],
  },
  {
    id: "eye",
    name: "EYE_DISEASE_DETECTOR.AI",
    badge: "research",
    badgeLabel: "RESEARCH",
    tagline:
      "AI-powered ophthalmology screening tool — classifying eye diseases from fundus images using a multi-model ensemble.",
    architecture:
      "Ensemble of CNN, YOLOv8, ResNet50, and MobileNet for classification with varying confidence trade-offs. MobileNet served real-time inference; ResNet50 provided accuracy headroom. Web UI accepts image uploads and returns instant predictions with confidence scores.",
    challenge:
      "Class imbalance in the training dataset caused the model to over-predict the majority class. Addressed with weighted loss functions and augmentation strategies (flipping, rotation, brightness jitter) to artificially balance the training distribution.",
    stack: ["CNN", "YOLOv8", "ResNet50", "MobileNet", "Python"],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer — Tamheer",
    company: "National Center of Meteorology",
    period: "11/2024 → present",
    location: "Jeddah, SA",
    bullets: [
      "Designed and shipped the Anwaa Services Platform — full-stack ad management + FCM push notification delivery for NCM's mobile app",
      "Stack: Next.js · React · Django · PostgreSQL · Docker · OCI Object Storage",
      "Participated in system integration, testing, and deployment cycles for the NCM Gate (Meteo) platform",
    ],
  },
  {
    role: "Backend Developer Team Leader",
    company: "Ghelaf Almehan",
    period: "08/2024 → 12/2024",
    bullets: [
      "Led a backend team — code reviews, architecture decisions, sprint planning",
      "Mentored intern developers on ASP.NET Core patterns, API design, and SQL query optimization",
      "Introduced Agile workflows + branch protection rules, improving delivery predictability",
    ],
  },
  {
    role: "Full-Stack Developer — Co-op",
    company: "National Center of Meteorology",
    period: "06/2024 → 08/2024",
    location: "Jeddah, SA",
    bullets: [
      "Built a metadata management system for large meteorological datasets: DuckDB · Python · Django · Vue.js",
      "Designed the database schema for efficient querying of high-volume time-series data",
      "Built Django REST Framework APIs powering an interactive data visualization frontend",
    ],
  },
  {
    role: "Backend Developer",
    company: "Ghelaf Almehan",
    period: "04/2024 → 08/2024",
    bullets: [
      "Developed the web platform backend using ASP.NET Core Web API + Entity Framework Core",
      "Designed the relational schema and optimized queries for core application functionality",
    ],
  },
];

export const skillGroups = [
  {
    label: "LANGUAGES",
    items: ["Python", "JavaScript / TypeScript", "C# / Java", "Dart / SQL"],
  },
  {
    label: "FRAMEWORKS",
    items: ["Django + DRF", "Next.js / React", "ASP.NET Core", "Flutter"],
  },
  {
    label: "DATA & INFRA",
    items: ["PostgreSQL / SQLite", "DuckDB / Oracle", "Docker", "Celery / Redis"],
  },
  {
    label: "ML / CV",
    items: ["YOLOv8", "ResNet50 / MobileNet", "CNN architecture", "MATLAB"],
  },
  {
    label: "CONCEPTS",
    items: ["REST API design", "MVC / OOP", "Agile / Scrum", "System architecture"],
  },
  {
    label: "TOOLS",
    items: ["Git / GitHub", "Figma", "VS Code", "Firebase / OCI"],
  },
];
