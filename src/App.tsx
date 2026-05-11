import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RosterPage } from './pages/Roster';
import { AllianceBattlePage } from './pages/AllianceBattle';

function AppLayout() {
  const location = useLocation();
  const isRoster = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen lg:h-screen bg-slate-950 text-slate-100">
      <Header />

      <div className={`flex-1 flex flex-col ${isRoster ? 'overflow-hidden' : 'overflow-y-auto'} no-scrollbar`}>
        <Routes>
          <Route path="/" element={<RosterPage />} />
          <Route path="/ab-guide" element={<AllianceBattlePage />} />
        </Routes>
        
        {!isRoster && (
          <div className="mt-auto">
            <Footer />
          </div>
        )}
      </div>

      {isRoster && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;