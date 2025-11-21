import React from "react";
import { ArrowRight, MapPin, Calendar, Hash } from "lucide-react";
import { HERO_DATA, EDUCATION_DATA } from "../constants";

const Overview: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-6 md:p-12 pb-32 scrollbar-thin">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-mono-600"></div>
              <span className="text-xs font-mono text-mono-500 uppercase tracking-widest">
                Identity Verified
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              MARK
              <br />
              <span className="text-mono-500">GEOFFREY</span>
            </h1>

            <div className="border-l-4 border-white pl-6 py-2">
              <p className="text-xl font-medium text-white mb-2 tracking-tight">
                {HERO_DATA.title}
              </p>
              <p className="text-mono-400 font-light text-lg">
                {HERO_DATA.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black font-bold text-sm tracking-wider hover:bg-mono-200 transition-colors flex items-center gap-3"
              >
                VIEW RESUME
                <ArrowRight size={16} />
              </a>
              <div className="px-8 py-4 border border-mono-700 text-mono-300 font-mono text-xs flex items-center justify-center tracking-wider">
                {HERO_DATA.stats[2].value}
              </div>
            </div>
          </div>

          {/* Profile Image - Technical Style */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Image Container */}
              <div className="w-full h-full bg-mono-800 overflow-hidden grayscale hover:grayscale-0 contrast-125 hover:contrast-100 transition-all duration-700 ease-out relative z-10 border border-mono-700">
                <img
                  src="My_Picture.png"
                  alt="Mark Geoffrey"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://ui-avatars.com/api/?name=Mark+Geoffrey&background=27272a&color=ffffff&size=512&font-size=0.3";
                  }}
                />
                {/* Noise Overlay on Image */}
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
              </div>

              {/* Graphic Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-white/20 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-white/20 z-0"></div>

              {/* Floating Labels */}
              <div className="absolute top-4 -left-12 bg-white text-black px-4 py-1 font-bold text-xs tracking-widest shadow-xl z-20">
                ANALYST
              </div>
              <div className="absolute bottom-4 -right-8 bg-black border border-mono-700 text-white px-4 py-1 font-bold text-xs tracking-widest shadow-xl z-20">
                DEVELOPER
              </div>
            </div>
          </div>
        </div>

        {/* Education Section - "Manifesto" Style */}
        <div className="border-t border-mono-800 pt-12">
          <div className="flex items-baseline gap-4 mb-10">
            <h2 className="text-3xl font-bold text-white">ACADEMIC LOG</h2>
            <span className="text-mono-600 font-mono text-sm">
              REF: {EDUCATION_DATA.year}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-mono-800 bg-mono-900/20">
            <div className="p-8 border-b md:border-b-0 md:border-r border-mono-800">
              <div className="flex items-center gap-2 text-mono-500 mb-4">
                <Hash size={14} />
                <span className="text-xs font-mono uppercase">Institution</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {EDUCATION_DATA.school}
              </h3>
              <div className="flex items-center gap-2 text-mono-400 text-sm">
                <MapPin size={14} />
                {EDUCATION_DATA.location}
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 text-mono-500 mb-4">
                <Hash size={14} />
                <span className="text-xs font-mono uppercase">
                  Qualification
                </span>
              </div>
              <h3 className="text-xl font-medium text-white mb-1">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-mono-400 mb-6">
                Specialization: {EDUCATION_DATA.specialization}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black text-xs font-bold font-mono">
                <Calendar size={12} />
                EST. GRADUATION {EDUCATION_DATA.year}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
