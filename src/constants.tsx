import type { Project, SkillData } from "./types";
import { Database, Layout, Brain, BarChart3 } from "lucide-react";

export const HERO_DATA = {
  name: "Mark Geoffrey Batocabe",
  title: "FULLSTACK DEVELOPER // DATA ANALYST",
  tagline:
    "Bridging the gap between scalable web systems and actionable data insights.",
  stats: [
    { label: "Experience", value: "ENTRY LEVEL" },
    { label: "Stack", value: "MERN + PANDAS" },
    { label: "Status", value: "OPEN FOR WORK" },
  ],
};

export const EDUCATION_DATA = {
  school: "Dalubhasaan ng Lungsod ng Lucena",
  degree: "Bachelor of Science in Information Technology",
  specialization: "Web and Mobile Application",
  year: "2026",
  location: "Lucena City, Quezon Province, Philippines",
};

export const SKILL_METRICS: SkillData[] = [
  { subject: "React/Next.js", A: 90, fullMark: 100 },
  { subject: "Node/Express", A: 85, fullMark: 100 },
  { subject: "Python/Pandas", A: 95, fullMark: 100 },
  { subject: "MongoDB/SQL", A: 80, fullMark: 100 },
  { subject: "Data Viz", A: 75, fullMark: 100 },
  { subject: "Algorithms", A: 70, fullMark: 100 },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Analytics Dashboard",
    description:
      "A comprehensive MERN stack application that visualizes sales data using Recharts. Includes a Python microservice for predictive analytics on inventory.",
    tags: ["React", "Node.js", "MongoDB", "Python", "Pandas"],
    category: "Fullstack",
    stats: [
      { label: "Data Points", value: "10k+" },
      { label: "Latency", value: "<50ms" },
    ],
  },
  {
    id: "2",
    title: "Crypto Sentiment Analyzer",
    description:
      "Data analysis pipeline that scrapes Twitter/X data, processes sentiment using NLTK/Pandas, and serves a live trend report via a React frontend.",
    tags: ["Python", "Pandas", "FastAPI", "React", "Tailwind"],
    category: "Data Science",
    stats: [
      { label: "Accuracy", value: "87%" },
      { label: "Sources", value: "3 APIs" },
    ],
  },
  {
    id: "3",
    title: "TaskFlow Neural",
    description:
      "An intelligent task management system that suggests priority based on deadlines and task complexity using a custom weighted algorithm.",
    tags: ["React", "Redux", "Express", "JWT"],
    category: "Fullstack",
    stats: [
      { label: "Users", value: "Demo" },
      { label: "Components", value: "45+" },
    ],
  },
];

export const TECH_ICONS = [
  { icon: Layout, label: "Frontend", color: "text-mono-300" },
  { icon: Database, label: "Backend", color: "text-mono-400" },
  { icon: BarChart3, label: "Analysis", color: "text-mono-300" },
  { icon: Brain, label: "AI/ML", color: "text-mono-500" },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant embedded in the portfolio website of Geoffrey.
Geoffrey is a Fullstack Developer (MERN Stack) and Data Analyst (Python, Pandas).
Geoffrey has no formal work experience yet but has built impressive personal projects.
He is currently studying for a BS in Information Technology at Dalubhasaan ng Lungsod ng Lucena (Class of 2026).
Your goal is to answer questions about Geoffrey's skills, projects, education, and potential value to an employer.
Be professional, concise, and futuristic in tone.
If asked about contact info, direct them to the contact section or mention 'batocabemarkgeoffrey@gmail.com'.
Highlight the combination of web dev and data analysis as a unique strength. If the question is not related to the developer. Just say "I cannot answer that." or something like that.
`;
