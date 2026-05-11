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

interface CharacterCardProps {
  character: MFFCharacter;
  overrideSkinId?: string;
  onClick?: () => void;
  isUsed?: boolean;
}

export const CharacterCard = ({ character, overrideSkinId, onClick, isUsed }: CharacterCardProps) => {
  const settings = useUserStore((state) => state.characterSettings[character.id]);
  const currentTier = settings?.tier || 1;
  const currentSkinId = overrideSkinId !== undefined ? overrideSkinId : (settings?.skinId || '');
  const currentEquipment = settings?.equipment || '';

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (isModalOpen || isUsed) {
      e.stopPropagation();
      return;
    }
    if (onClick) onClick();
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
        onClick={handleCardClick}
        onContextMenu={handleRightClick}
        className={`relative w-full h-full overflow-hidden rounded-lg ${typeGradients[type]} shadow-xl border-2 ${
          isUsed
            ? 'opacity-70 border-slate-700'
            : 'cursor-pointer transition-transform hover:scale-105 border-slate-700'
        }`}
      >
        <img
          src={portrait}
          alt={character.displayName}
          className={`absolute inset-0 h-full w-full object-cover z-10 rounded-lg ${isUsed ? 'grayscale' : ''}`}
        />

        {tierFrame && (
          <img 
            src={tierFrame} 
            alt={`Tier ${currentTier}`}
            className="absolute inset-0 w-full h-full z-20 pointer-events-none object-contain"
          />
        )}

        {isUsed && (
          <div className="absolute top-0 w-full bg-red-800/70 p-1 text-center font-bold text-[0.65rem] z-25 uppercase text-white">
            in use
          </div>
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