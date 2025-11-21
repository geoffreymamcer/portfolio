import { Github, ArrowUpRight } from "lucide-react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group h-full bg-mono-950 border border-mono-800 hover:border-white transition-colors duration-300 flex flex-col relative overflow-hidden">
      {/* Hover Fill Effect */}
      <div className="absolute inset-0 bg-mono-900/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none"></div>

      <div className="p-6 flex-1 flex flex-col relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-mono-500 border border-mono-800 px-2 py-1 w-fit bg-mono-900">
              {project.category}
            </span>
            <h3 className="text-xl font-sans font-bold text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="w-5 h-5 text-mono-600 group-hover:text-white transition-colors" />
        </div>

        {/* Description */}
        <p className="text-mono-400 text-sm leading-relaxed mb-8 border-l border-mono-800 pl-4 group-hover:border-white transition-colors flex-1">
          {project.description}
        </p>

        {/* Stats Grid */}
        {project.stats && (
          <div className="grid grid-cols-2 gap-px bg-mono-800 border border-mono-800 mb-6">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="bg-mono-950 p-3">
                <div className="text-[10px] text-mono-500 font-mono uppercase mb-1">
                  {stat.label}
                </div>
                <div className="text-sm font-mono font-bold text-white">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-mono-800/50">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono text-mono-500">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 py-4 border-t border-mono-800 bg-mono-900/30 flex justify-between items-center relative z-10">
        <div className="flex gap-4">
          <a
            href="https://github.com/geoffreymamcer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-mono-400 hover:text-white transition-colors text-xs font-bold tracking-wider"
          >
            <Github size={14} />
            SOURCE
          </a>
        </div>
        <div className="w-2 h-2 bg-mono-800 group-hover:bg-white transition-colors rounded-full"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
