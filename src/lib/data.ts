// ─────────────────────────────────────────────────────────────
//  data.ts — Single source of truth for all portfolio content
//  Sourced from: Melkicv.pdf (Bolli Yaswanth Melki)
// ─────────────────────────────────────────────────────────────

export const SITE_META = {
  title: "Bolli Yaswanth Melki — Engineer",
  description:
    "Versatile engineer with cross-domain expertise in full-stack web development, data science, and embedded systems. Portfolio of selected engineering work.",
  url: "https://yaswanthmelki.dev",
  locale: "en-IN",
} as const;

export const IDENTITY = {
  name: "Bolli Yaswanth Melki",
  firstName: "Yaswanth",
  lastName: "Melki",
  tagline: "The Engineering Record of a Versatile Developer",
  location: "Rajkot, India",
  availability: "Open to Opportunities",
  established: "Est. 2024",
  edition: "Vol. I",
  missionStatement:
    "Software Engineer and Embedded Engineer building across the full stack — from bare-metal firmware to browser-native AI platforms.",
  shortBio:
    "I am a Software Engineer who likes to build things. My expertise spans full-stack web development, AI-powered agents, and embedded systems. I focus on delivering robust, production-ready solutions across the stack. My main tools are React and Node.js on the front-end, with Python, FastAPI, and Firebase powering the backend. When a project requires hardware integration, I am equally comfortable writing embedded C and ESP32 firmware to bridge the gap between software and the physical world.",
} as const;

export const CONTACT = {
  email: "melkizedek2006@gmail.com",
  phone: "+91-8985614648",
  github: {
    url: "https://github.com/MelkiZedekICT",
    label: "github.com/MelkiZedekICT",
  },
  linkedin: {
    url: "https://linkedin.com/in/yaswanthmelkibolli",
    label: "linkedin.com/in/yaswanthmelkibolli",
  },
} as const;

export const EDUCATION = {
  institution: "Marwadi University",
  accreditation: "NBA Accredited",
  location: "Rajkot",
  degree: "B.Tech in Information and Communication Technology",
  period: "2024 – 2028",
  cgpa: "6.78 / 10",
} as const;

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  department: string;
  location: string;
  period: string;
  bullets: {
    problem: string;
    action: string;
    result: string;
  }[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "aai-cns",
    role: "CNS Intern",
    company: "Airports Authority of India (AAI)",
    department: "CNS Department",
    location: "Rajahmundry, AP",
    period: "Jun 2026 – Jul 2026",
    bullets: [
      {
        problem:
          "Mission-critical aviation communication systems required continuous monitoring and reliability assurance.",
        action:
          "Analyzed and monitored VHF/HF transmitters, DVOR, DME, and ILS infrastructure. Performed systematic hardware reliability testing, fault isolation, and root cause analysis on embedded communication devices.",
        result:
          "Identified and resolved hardware-level failures, ensuring uninterrupted operation of aviation navigation systems.",
      },
      {
        problem:
          "Manual daily operational workflows created inefficiency across the department.",
        action:
          "Collaborated with department mentors to analyze existing workflows and built a custom software solution to streamline operations.",
        result:
          "Delivered a tailored tool that improved daily operational efficiency for the CNS team.",
      },
      {
        problem:
          "A critical CMOS battery file load-up failure in the RCSI Rack threatened DVOR system availability.",
        action:
          "Diagnosed the root cause under the CNS supervisor's guidance, transferred site files via a Controller PC, and rebooted the DVOR equipment.",
        result:
          "Fully restored DVOR system functionality, preventing extended downtime of navigation services.",
      },
      {
        problem:
          "Power redundancy configurations for mission-critical airport communication systems needed evaluation.",
        action:
          "Evaluated Master-Slave and Load Sharing UPS setups to ensure continuous and reliable power availability.",
        result:
          "Validated power redundancy, contributing to DRDO Technology Focus publication (Jan 2026) on high-altitude defense environment technologies.",
      },
    ],
  },
];

export interface ProjectEntry {
  id: string;
  entryLabel: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  featured?: boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    id: "superpower",
    entryLabel: "Current Project",
    title: "Superpower",
    subtitle: "Autonomous AI-Powered Coding Agent",
    year: "2026",
    description:
      "Superpower is my new AI-powered coding agent designed to help developers build, debug, and improve software autonomously. It can understand a codebase, plan tasks, edit files, run commands and tests, recover from failures, and verify its own work. The long-term vision is to evolve Superpower into a reliable, persistent coding partner capable of handling complex, long-running software projects.",
    techStack: ["AI/LLM", "Agent Architecture", "Python", "Node.js"],
    githubUrl: "https://github.com/MelkiZedekICT",
    featured: true,
  },
  {
    id: "project-l",
    entryLabel: "Entry I",
    title: "Project L",
    subtitle: "Freestanding x86 Operating System",
    year: "2026",
    description:
      "Built a custom freestanding 32-bit x86 operating system from scratch — eliminating dependence on any existing kernel or distribution. Engineered the low-level boot and execution environment with direct hardware interaction, cross-compilation, linker configuration, and bare-metal system programming.",
    techStack: ["C++", "NASM Assembly", "GCC", "GNU Make", "QEMU"],
    githubUrl: "https://github.com/MelkiZedekICT",
  },
  {
    id: "lad-engine",
    entryLabel: "Entry II",
    title: "LAD Engine",
    subtitle: "High-Throughput Local Analytics & Telemetry Engine",
    year: "2026",
    description:
      "Engineered a VS Code-native analytics engine capable of processing massive local datasets through chunked streaming and real-time telemetry. Designed a Node.js–Python telemetry bridge with IPC, memory-safe batch processing, and a custom Webpack build pipeline, packaged as a local .vsix extension.",
    techStack: ["Node.js", "Python", "Webpack", "VS Code API", "IPC"],
    githubUrl: "https://github.com/MelkiZedekICT",
  },
  {
    id: "flow",
    entryLabel: "Entry III",
    title: "Flow",
    subtitle: "GitHub Repository Intelligence & Portfolio Generator",
    year: "2026",
    description:
      "Built an AI-powered developer intelligence platform that analyzes GitHub repositories, commit history, technologies, and development patterns to reconstruct the technical story behind a project. Transforms raw repository activity into structured portfolio, resume, and project descriptions.",
    techStack: ["AI/LLM", "GitHub API", "React", "Node.js"],
    githubUrl: "https://github.com/MelkiZedekICT",
  },
  {
    id: "damage-claim-agent",
    entryLabel: "Entry IV",
    title: "Multi-Modal AI Damage Claim Agent",
    subtitle: "Insurance Claim Processing Intelligence",
    year: "2025",
    description:
      "Developed a multi-modal insurance claim processing agent combining image understanding, LLM reasoning, structured validation, and asynchronous processing. Integrated Gemini 1.5 Pro, DeepSeek, Pydantic, Pillow, Asyncio, and Pandas into a coordinated AI workflow pipeline.",
    techStack: [
      "Gemini 1.5 Pro",
      "DeepSeek",
      "Pydantic",
      "Asyncio",
      "Pandas",
    ],
    githubUrl: "https://github.com/MelkiZedekICT",
  },
  {
    id: "eqion",
    entryLabel: "Entry V",
    title: "Eqion",
    subtitle: "Engineering Formula Intelligence Workspace",
    year: "2025",
    description:
      "Built a web-based engineering formula workspace providing students with a searchable, structured library of engineering equations. Implemented responsive frontend workflows with Vanilla JavaScript and KaTeX, integrating Firebase Authentication and Firestore for persistent, cloud-backed functionality.",
    techStack: [
      "JavaScript",
      "KaTeX",
      "Firebase Auth",
      "Firestore",
      "Responsive UI",
    ],
    githubUrl: "https://github.com/MelkiZedekICT",
  },
];

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    id: "languages",
    category: "Languages & Scripting",
    skills: [
      "Python",
      "C++",
      "Embedded C",
      "JavaScript",
      "OOP",
      "DSA",
    ],
  },
  {
    id: "ai-ml",
    category: "AI / ML Frameworks",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "CUDA",
      "LangGraph",
    ],
  },
  {
    id: "dsp",
    category: "Data & Signal Processing",
    skills: [
      "DSP",
      "DFT / FFT",
      "Sampling",
      "Convolution",
      "Digital Filtering",
      "Spectral Analysis",
    ],
  },
  {
    id: "embedded",
    category: "Embedded & IoT",
    skills: [
      "ESP32",
      "NodeMCU",
      "Arduino",
      "ARM Cortex",
      "UART",
      "SPI",
      "I2C",
    ],
  },
  {
    id: "vlsi",
    category: "VLSI & Hardware",
    skills: [
      "Hardware Trojan Analysis",
      "Timing Analysis",
      "KiCad",
      "Proteus",
      "Keil",
      "PCB Design",
    ],
  },
  {
    id: "software",
    category: "Software & Backend",
    skills: [
      "React",
      "Node.js",
      "FastAPI",
      "REST APIs",
      "Firebase",
      "MongoDB",
      "SQL",
    ],
  },
  {
    id: "cloud",
    category: "Cloud & Deployment",
    skills: ["Docker", "Kubernetes"],
  },
  {
    id: "tools",
    category: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Jupyter",
      "Postman",
      "Vite",
      "NPM",
    ],
  },
];

export interface CertificationEntry {
  title: string;
  issuer: string;
}

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    title: "Web Development: Zero to Hero",
    issuer: "Udemy",
  },
  {
    title: "Linux Fundamentals",
    issuer: "Intellipaat",
  },
  {
    title: "CNS Internship Certification",
    issuer: "Airports Authority of India",
  },
];

export interface AchievementEntry {
  id: string;
  title: string;
  description: string;
}

export const ACHIEVEMENTS: AchievementEntry[] = [
  {
    id: "chatgenai",
    title: "ChatGenAI — College Fest",
    description:
      "Designed 30 high-end LLM-based problems and evaluated 50 participants on AI workflows, reasoning, and problem-solving.",
  },
  {
    id: "hackerrank",
    title: "HackerRank Orchestrate — Campus Crew",
    description:
      "Selected as a HackerRank Campus Crew member, contributing to the student developer community and hackathon ecosystem.",
  },
  {
    id: "sih",
    title: "Smart India Hackathon 2025",
    description:
      "Developed an AI-driven solution under a national-level innovation challenge.",
  },
  {
    id: "amd",
    title: "AMD Slingshot Ideathon",
    description:
      "Developed and deployed a functional web application under time constraints.",
  },
  {
    id: "dsc",
    title: "Data Science Club — Marwadi University",
    description:
      "Served as Pseudo Committee Member, supporting the core team in organizing technical activities and student engagement.",
  },
];
