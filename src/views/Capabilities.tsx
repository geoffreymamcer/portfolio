import React from "react";
import SkillRadar from "../components/SkillRadar";
import { TECH_ICONS } from "../constants";
import { Cpu } from "lucide-react";

const Capabilities: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-6 md:p-12 pb-32 scrollbar-thin">
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-mono-800 pb-6">
          <div>
            <h2 className="text-4xl font-black text-white mb-2 tracking-tight">
              CAPABILITIES
            </h2>
            <p className="text-mono-400 text-lg font-light">
              Technical Proficiency Analysis
            </p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-xs font-mono text-mono-600 uppercase">
              Last Updated
            </div>
            <div className="text-sm text-white font-mono">TODAY</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Chart Area */}
          <div className="bg-mono-900/30 border border-mono-800 p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold bg-white text-black px-2 py-1">
                FIG. 1.0
              </span>
              <span className="text-[10px] font-mono text-mono-500">
                RADAR METRICS
              </span>
            </div>
            <SkillRadar />
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-mono-600 text-right">
              DATA_SOURCE: <br /> INTERNAL_ASSESSMENT
            </div>
          </div>

          {/* Stack List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-mono-500 uppercase tracking-widest">
                Core Modules
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TECH_ICONS.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-mono-700 bg-mono-950 p-5 hover:bg-white hover:text-black transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <item.icon className="w-6 h-6 text-mono-400 group-hover:text-black transition-colors" />
                      <span className="text-[10px] font-mono text-mono-600 group-hover:text-black/50">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="font-bold text-lg">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-mono-800 pt-6">
              <div className="flex gap-4 items-start">
                <Cpu className="w-5 h-5 text-mono-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Specialization Summary
                  </h4>
                  <p className="text-sm text-mono-400 leading-relaxed">
                    Primary focus on MERN stack architectures for scalable web
                    applications. Secondary expertise in Python-based data
                    analysis pipelines using Pandas for actionable business
                    intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
