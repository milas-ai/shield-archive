import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="p-4 bg-slate-950 border-b border-slate-800 flex items-center px-8 shadow-2xl relative z-50 gap-10">
      
      {/* SEÇÃO DA LOGO */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <img 
            src="/assets/icon/icon_alt.svg" 
            alt="SHIELD Logo" 
            className="w-10 h-10 opacity-90"
            style={{ filter: 'invert(1)' }} 
          />
          <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-full -z-10" />
        </div>

        <Link to="/" className="flex flex-col leading-none">
          <h1 className="text-xl font-black text-slate-100 tracking-tighter uppercase italic">
            SHIELD
          </h1>
          <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">Archive</span>
        </Link>
      </div>

      {/* NAVEGAÇÃO À ESQUERDA (SEM CONTORNOS) */}
      <nav className="flex gap-2">
        <Link 
          to="/" 
          className={`px-3 py-2 rounded text-xs font-bold uppercase tracking-widest transition-all ${
            isActive('/') 
              ? 'text-slate-100 bg-slate-900/50' 
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Characters
        </Link>

        <Link 
          to="/ab-guide" 
          className={`px-3 py-2 rounded text-xs font-bold uppercase tracking-widest transition-all ${
            isActive('/ab-guide') 
              ? 'text-slate-100 bg-slate-900/50' 
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Alliance Battle
        </Link>
      </nav>

      {/* ESPAÇADOR PARA EMPURRAR O DETALHE PARA A DIREITA */}
      <div className="flex-1" />

      {/* DETALHE TÉCNICO NA DIREITA */}
      <div className="hidden md:flex items-center gap-3 text-[10px] font-mono text-slate-700 tracking-tighter">
        SECURE_CONNECTION://ESTABLISHED
      </div>
    </header>
  );
};