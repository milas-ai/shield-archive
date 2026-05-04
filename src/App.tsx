import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { AllianceBattlePage } from './pages/AllianceBattle';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col h-screen bg-slate-950 text-slate-100">
        
        <header className="p-4 bg-slate-900 border-b border-slate-800 flex gap-8 items-center">
          <h1 className="text-xl font-bold text-yellow-500">SHIELD Archive</h1>
          
          <nav className="flex gap-4">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Characters</Link>
            <Link to="/ab-guide" className="hover:text-cyan-500 transition-colors">Alliance Battle</Link>
          </nav>
        </header>

        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ab-guide" element={<AllianceBattlePage />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;