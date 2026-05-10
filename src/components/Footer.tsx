import packageInfo from '../../package.json';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="text-slate-100 font-black tracking-tighter uppercase italic text-lg">SHIELD</span>
            <span className="text-slate-400 font-bold text-lg uppercase">Archive</span>
            <span className="bg-slate-800 text-slate-400 text-[10px] px-1.5 py-0.5 rounded font-mono ml-2">
              v{packageInfo.version}
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            © {currentYear} • Hero Intelligence Terminal
          </p>
        </div>

        <div className="flex flex-col items-center max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
              System Status: Active Duty
            </span>
          </div>
          <p className="text-[9px] text-slate-600 text-center uppercase leading-tight tracking-tight">
            Fan-made tool. All game assets and Marvel characters are property of Netmarble and Marvel Characters, Inc. 
            No copyright infringement intended.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/milas-ai/shield-archive" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-500 transition-colors text-sm font-bold uppercase tracking-tighter"
          >
            <svg // Github Icon
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Source Code
          </a>
          <div className="h-4 w-px bg-slate-800" />
          <span className="text-slate-600 text-[10px] font-mono">
            PROTOCOL: GPL-3.0
          </span>
        </div>

      </div>
    </footer>
  );
};