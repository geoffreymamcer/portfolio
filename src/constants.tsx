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
  { subject: "React/Next.js", A: 85, fullMark: 100 },
  { subject: "Node/Express", A: 85, fullMark: 100 },
  { subject: "Python/Pandas", A: 85, fullMark: 100 },
  { subject: "MongoDB/SQL", A: 80, fullMark: 100 },
  { subject: "Data Viz", A: 75, fullMark: 100 },
  { subject: "C#", A: 70, fullMark: 100 },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Kanban",
    description:
      "Kanban is a lightweight task management web app designed to help individuals and small teams organize work efficiently. It uses boards, lists, and cards to visualize tasks and track progress in a simple, distraction-free interface",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Fullstack",
    stats: [
      { label: "Boards", value: "Multiple" },
      { label: "Core Features", value: "CRUD Tasks" },
    ],
    link: "https://work-sphere-project.vercel.app/",
  },
  {
    id: "2",
    title:
      "Candelaria Eye Care Clinic EMR System with Integrated Patient Portal",
    description:
      "A secure EMR system for Candelaria Eye Care Clinic with an integrated patient portal that allows patients to access medical records, take an AI-powered Ishihara color vision test, browse clinic products, view invoices, and book appointments.",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Fullstack",
    stats: [
      { label: "Modules", value: "EMR + Portal" },
      { label: "Security", value: "Role-Based" },
    ],
    link: "https://cecc-test.vercel.app/",
  },
  {
    id: "3",
    title: "Data Analytics & Visualization",
    description:
      "A data analytics project involving exploratory data analysis, visualization, and basic predictive modeling on multiple datasets, including Palmer Penguins, Chicago crime rates, and UK road accidents, using Python data science libraries.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
    category: "Data Science",
    stats: [
      { label: "Datasets", value: "4+" },
      { label: "Techniques", value: "EDA & Prediction" },
    ],
    link: "https://github.com/geoffreymamcer/ITELEC_Activities",
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
