import type { MFFCharacter } from '../types';
import { getEffectiveStats } from '../utils/mff';
import { useUserStore } from '../store/useUserStore';
import { useState } from 'react';
import { EditCharacterModal } from './EditCharacterModal';


const typeGradients = {
  Combat:    'bg-linear-to-b from-red-800/60 to-slate-950',
  Blast:     'bg-linear-to-b from-blue-800/60 to-slate-950',
  Speed:     'bg-linear-to-b from-green-800/60 to-slate-950',
  Universal: 'bg-linear-to-b from-purple-800/60 to-slate-950',
};

export const CharacterCard = ({ character, onClick }: { character: MFFCharacter, onClick?: () => void }) => {
  const settings = useUserStore((state) => state.characterSettings[character.id]);
  const currentTier = settings?.tier || 1;
  const currentSkinId = settings?.skinId || '';
  const currentEquipment = settings?.equipment || '';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const getTierFrame = (tier: number) => {
    if (tier != 1) return `${import.meta.env.BASE_URL}assets/frames/tier${tier}${tier === 3 && character.transcendent ? 'transcendent' : ''}.png`;
    return null;
  };

  const { type, portrait } = getEffectiveStats(character, currentSkinId);
  const tierFrame = getTierFrame(currentTier);
  const gearImage = `${import.meta.env.BASE_URL}assets/gear/${currentEquipment}.png`;

  return (
    <>
      <div 
        onClick={onClick}
        onContextMenu={handleRightClick}
        className={`relative w-24 h-24 cursor-pointer overflow-hidden rounded-lg ${typeGradients[type]} transition-transform hover:scale-105 shadow-xl border-slate-700 border-2`}
      >
        <img src={portrait} alt={character.displayName} className='h-full w-full object-cover relative z-10 rounded-lg' />

        {tierFrame && (
          <img 
            src={tierFrame} 
            alt={`Tier ${currentTier}`}
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
          />
        )}

        {currentEquipment !== '' && (
        <div className="absolute bottom-0.5 right-0.5 w-8 h-8 z-40 border border-slate-700 bg-linear-to-br from-slate-800 to-black rounded-sm overflow-hidden">
          <img 
            src={gearImage}
            alt={currentEquipment}
            className="w-full h-full object-contain p-0.5"
            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
          />
        </div>
      )}
      </div>

      {isModalOpen && (
          <EditCharacterModal 
            character={character} 
            onClose={() => setIsModalOpen(false)} 
          />
      )}
    </>
  );
};