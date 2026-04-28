import { useTeamStore } from './store/useTeamStore';
import { characters } from './data/characters';
import { CharacterCard } from './components/CharacterCard';
import { TeamRow } from './components/TeamRow';

function App() {
  const { assignCharacter, selectedSlot } = useTeamStore();

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      
      {/* COLUNA DA ESQUERDA: Times (35% de largura) */}
      <aside className="w-full max-w-md min-w-130 border-r border-slate-800 bg-slate-900/30 p-6 overflow-y-auto flex flex-col gap-6">
        <header>
          <h1 className="text-2xl font-bold text-yellow-500">MFF Organizer</h1>
          <p className="text-sm text-slate-400">Team Assignments</p>
        </header>

        <section className="space-y-4">
          {[1, 2, 3, 4, 5].map(id => (
            <TeamRow key={id} teamId={id} />
          ))}
        </section>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3">
            Available Roster ({characters.length})
          </h2>
          
          <div className="text-sm text-slate-500">
            {selectedSlot ? 
              <span className="text-yellow-400 animate-pulse">Select a character for Team {selectedSlot.teamId}...</span> : 
              "Select a slot to assign a character"
            }
          </div>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-20 gap-3 min-w-[400px]">
          {characters.map((char) => (
            <CharacterCard 
              key={char.id} 
              character={char} 
              selectedSkinId={char.uniforms[0]?.id || ''}
              onClick={() => {
                if (selectedSlot) assignCharacter(char.id);
              }}
            />
          ))}
        </div>
      </main>

    </div>
  );
}

export default App;