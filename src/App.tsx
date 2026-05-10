import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { AllianceBattlePage } from './pages/AllianceBattle';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
        
        <Header />

        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ab-guide" element={<AllianceBattlePage />} />
          </Routes>
        </div>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;