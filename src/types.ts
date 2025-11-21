export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  category: "Fullstack" | "Data Science" | "AI";
  stats?: { label: string; value: string }[];
}

export interface SkillData {
  subject: string;
  A: number; // Proficiency
  fullMark: number;
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export const Section = {
  HERO: "hero",
  SKILLS: "skills",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;
