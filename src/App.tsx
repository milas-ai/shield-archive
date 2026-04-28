import { characters } from './data/characters';
import { CharacterCard } from './components/CharacterCard';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-500">MFF Team Organizer</h1>
        <p className="text-slate-400">Manage your rosters and uniforms</p>
      </header>

      <main className="mx-auto max-w-6xl">
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Available Characters</h2>
          <div className="flex flex-wrap gap-4">
            {characters.map((char) => (
              <CharacterCard 
                key={char.id} 
                character={char} 
                selectedSkinId=""
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;