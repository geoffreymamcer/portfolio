import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Archives: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-6 md:p-12 pb-32 scrollbar-thin">
      <div className="max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-white pb-6">
            <div>
              <h2 className="text-4xl font-black text-white mb-2 tracking-tight">ARCHIVES</h2>
              <p className="text-mono-400">Project Catalog & Case Studies</p>
            </div>
            <div className="text-4xl font-mono font-bold text-mono-800">
               0{PROJECTS.length}
            </div>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {PROJECTS.map(project => (
              <div key={project.id} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Archives;