import { useState } from "react";
import { User, Cpu, Database, Radio, Activity, Command } from "lucide-react";
import Overview from "./views/Overview";
import Capabilities from "./views/Capabilities";
import Archives from "./views/Archives";
import Transmission from "./views/Transmission";
import GeminiChat from "./components/GeminiChat";

type ViewState = "overview" | "capabilities" | "archives" | "transmission";

function App() {
  const [currentView, setCurrentView] = useState<ViewState>("overview");

  const renderView = () => {
    switch (currentView) {
      case "overview":
        return <Overview />;
      case "capabilities":
        return <Capabilities />;
      case "archives":
        return <Archives />;
      case "transmission":
        return <Transmission />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="h-screen w-full bg-mono-950 text-mono-300 font-sans overflow-hidden flex flex-col md:flex-row relative selection:bg-white selection:text-black">
      {/* Global Noise Texture */}
      <div className="absolute inset-0 bg-noise z-0 pointer-events-none opacity-[0.03]"></div>

      {/* Sidebar / Navigation Deck */}
      <aside className="w-full md:w-64 h-20 md:h-full z-40 bg-mono-950 border-b md:border-b-0 md:border-r border-mono-800 flex md:flex-col justify-between shrink-0 relative">
        {/* Brand Header */}
        <div className="hidden md:flex flex-col p-6 border-b border-mono-800">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
              <Command size={18} strokeWidth={3} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              GEOFFREY
            </span>
          </div>
          <span className="text-[10px] font-mono text-mono-500 uppercase tracking-widest pl-1">
            Portfolio System v2.0
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex md:flex-col w-full md:p-4 gap-1 md:gap-2 justify-between md:justify-start px-4 md:px-4 items-center md:items-stretch">
          {/* Mobile Logo (Only Visible on Small Screens) */}
          <div className="md:hidden flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
              <Command size={16} strokeWidth={3} />
            </div>
          </div>

          <NavButton
            icon={User}
            label="OVERVIEW"
            active={currentView === "overview"}
            onClick={() => setCurrentView("overview")}
            subLabel="Profile & Edu"
          />
          <NavButton
            icon={Cpu}
            label="CAPABILITIES"
            active={currentView === "capabilities"}
            onClick={() => setCurrentView("capabilities")}
            subLabel="Tech Stack"
          />
          <NavButton
            icon={Database}
            label="ARCHIVES"
            active={currentView === "archives"}
            onClick={() => setCurrentView("archives")}
            subLabel="Projects"
          />
          <NavButton
            icon={Radio}
            label="TRANSMISSION"
            active={currentView === "transmission"}
            onClick={() => setCurrentView("transmission")}
            subLabel="Contact"
          />
        </nav>

        {/* Footer Stats (Sidebar) */}
        <div className="hidden md:block p-6 border-t border-mono-800">
          <div className="flex items-center gap-2 text-[10px] font-mono text-mono-500 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            SYSTEM OPERATIONAL
          </div>
          <div className="text-[10px] text-mono-600">
            Lat: 34ms | Uptime: 99.9%
          </div>
        </div>
      </aside>

      {/* Main Viewport */}
      <main className="flex-1 relative z-10 overflow-hidden flex flex-col h-[calc(100vh-80px)] md:h-screen bg-mono-950">
        {/* Top Bar */}
        <header className="h-14 border-b border-mono-800 bg-mono-950/80 backdrop-blur flex items-center justify-between px-8 shrink-0">
          <div className="text-xs font-mono text-mono-400">
            DIRECTORY:{" "}
            <span className="text-white">
              ~/USER/{currentView.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-mono-600 hidden sm:block">
              ENCRYPTED // SHA-256
            </span>
            <Activity className="w-4 h-4 text-mono-500" />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Grid Background Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

          <div key={currentView} className="h-full animate-slide-up">
            {renderView()}
          </div>
        </div>
      </main>

      <GeminiChat />
    </div>
  );
}

const NavButton = ({
  icon: Icon,
  label,
  subLabel,
  active,
  onClick,
}: {
  icon: any;
  label: string;
  subLabel?: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`group w-full flex items-center gap-4 p-3 rounded-sm transition-all duration-200 border ${
      active
        ? "bg-white border-white text-black"
        : "bg-transparent border-transparent text-mono-400 hover:bg-mono-900 hover:text-white"
    }`}
  >
    <Icon
      className={`w-5 h-5 shrink-0 ${
        active ? "text-black" : "text-mono-500 group-hover:text-white"
      }`}
    />
    <div className="hidden md:flex flex-col items-start">
      <span
        className={`text-xs font-bold tracking-wider ${
          active ? "text-black" : ""
        }`}
      >
        {label}
      </span>
      {subLabel && (
        <span
          className={`text-[9px] font-mono ${
            active ? "text-mono-600" : "text-mono-600"
          }`}
        >
          {subLabel}
        </span>
      )}
    </div>
  </button>
);

export default App;
