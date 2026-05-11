import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RosterPage } from './pages/Roster';
import { AllianceBattlePage } from './pages/AllianceBattle';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen lg:h-screen bg-slate-950 text-slate-100">
        
        <Header />

        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<RosterPage />} />
            <Route path="/ab-guide" element={<AllianceBattlePage />} />
          </Routes>
        </div>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;