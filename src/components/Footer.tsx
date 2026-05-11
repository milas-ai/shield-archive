import packageInfo from '../../package.json';
import { Download, Upload, Database, ChevronUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isBackupOpen, setIsBackupOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsBackupOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleExport = () => {
    const backup = {
      teams: JSON.parse(localStorage.getItem('mff-teams-storage') || 'null'),
      user: JSON.parse(localStorage.getItem('mff-user-roster') || 'null'),
      abSelections: JSON.parse(localStorage.getItem('mff-ab-selections') || 'null'),
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shield-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setIsBackupOpen(false);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const backup = JSON.parse(e.target?.result as string);
        if (backup.teams) localStorage.setItem('mff-teams-storage', JSON.stringify(backup.teams));
        if (backup.user) localStorage.setItem('mff-user-roster', JSON.stringify(backup.user));
        if (backup.abSelections) localStorage.setItem('mff-ab-selections', JSON.stringify(backup.abSelections));
        window.location.reload();
      } catch (err) {
        alert('Invalid backup file.');
      }
    };
    reader.readAsText(file);
  };

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
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-600 transition-colors text-xs font-semibold whitespace-nowrap uppercase tracking-tighter"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            Source Code
          </a>

          <div className="h-4 w-px bg-slate-800" />

          <div className="relative" ref={menuRef}>
            {isBackupOpen && (
              <div className="absolute bottom-full mb-3 right-0 z-100 bg-slate-900 border border-slate-800 rounded-xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-40 flex flex-col gap-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <button 
                  onClick={handleExport}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-cyan-400 transition-all text-[10px] font-black uppercase tracking-widest"
                >
                  <Download size={14} />
                  Export Data
                </button>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-cyan-400 transition-all text-[10px] font-black uppercase tracking-widest"
                >
                  <Upload size={14} />
                  Import Data
                </button>
              </div>
            )}
            
            <button 
              onClick={() => setIsBackupOpen(!isBackupOpen)}
              className={`relative z-101 flex items-center bg-black/30 px-4 py-2 rounded-full border transition-all gap-4 group ${
                isBackupOpen ? 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'border-slate-800 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <Database size={14} className={isBackupOpen ? 'text-cyan-400' : 'text-cyan-600 group-hover:text-cyan-400 transition-colors'} />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-200 transition-colors">
                  Backup
                </span>
                <ChevronUp size={12} className={`text-slate-600 transition-transform duration-300 ${isBackupOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>
            
            <input 
              type="file" 
              accept=".json" 
              ref={fileInputRef} 
              onChange={handleImport} 
              className="hidden" 
            />
          </div>

          <div className="h-4 w-px bg-slate-800" />
          <span className="text-slate-600 text-[10px] font-mono">
            PROTOCOL: GPL-3.0
          </span>
        </div>

      </div>
    </footer>
  );
};