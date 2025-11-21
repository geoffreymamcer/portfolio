import React from "react";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const Transmission: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-6 md:p-12 pb-32 scrollbar-thin flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_1.5fr] border border-mono-800 bg-mono-900/20 min-h-[500px]">
          {/* Left Info Panel */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-mono-800 flex flex-col justify-between bg-mono-950">
            <div>
              <div className="w-12 h-1 bg-white mb-8"></div>
              <h2 className="text-3xl font-bold text-white mb-4">INQUIRIES</h2>
              <p className="text-mono-400 text-sm leading-relaxed">
                Currently accepting proposals for full-stack development roles
                and data analysis contracts.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <div className="text-[10px] font-mono text-mono-500 uppercase mb-2">
                Availability
              </div>
              <div className="flex items-center gap-2 text-white font-bold">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                IMMEDIATE START
              </div>
            </div>
          </div>

          {/* Right Action Panel */}
          <div className="p-8 md:p-12 flex flex-col gap-6 justify-center">
            <a href="batocabemarkgeoffrey@gmail.com" className="group block">
              <div className="text-xs font-mono text-mono-500 mb-2">
                EMAIL PROTOCOL
              </div>
              <div className="flex items-center justify-between p-6 border border-mono-700 bg-mono-900 hover:bg-white hover:text-black transition-all duration-300">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5" />
                  <span className="text-lg font-bold">
                    batocabemarkgeoffrey@gmail.com
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </a>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <a
                href="https://github.com/geoffreymamcer"
                target="_blank"
                rel="noreferrer"
                className="group p-6 border border-mono-700 bg-mono-900 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Github className="w-6 h-6 mb-4" />
                <div className="font-bold">GITHUB</div>
                <div className="text-xs text-mono-500 group-hover:text-black/60 font-mono mt-1">
                  VIEW REPOS {"->"}
                </div>
              </a>
              <a
                href="#"
                className="group p-6 border border-mono-700 bg-mono-900 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 mb-4" />
                <div className="font-bold">LINKEDIN</div>
                <div className="text-xs text-mono-500 group-hover:text-black/60 font-mono mt-1">
                  CONNECT {"->"}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transmission;
