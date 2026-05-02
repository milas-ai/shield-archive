import type { MFFCharacter } from '../types';
import { getEffectiveStats } from '../utils/mff';

interface Props {
  character: MFFCharacter;
  selectedSkinId: string;
  onClick?: () => void;
}

export const CharacterCard = ({ character, selectedSkinId, onClick }: Props) => {
  const { type, portrait } = getEffectiveStats(character, selectedSkinId);

  const typeGradients = {
    Combat:    'bg-linear-to-b from-red-800/60 to-slate-950',
    Blast:     'bg-linear-to-b from-blue-800/60 to-slate-950',
    Speed:     'bg-linear-to-b from-green-800/60 to-slate-950',
    Universal: 'bg-linear-to-b from-purple-800/60 to-slate-950',
  };

  return (
    <div 
      onClick={onClick}
      className={`relative w-24 h-24 cursor-pointer overflow-hidden rounded-lg ${typeGradients[type]} transition-transform hover:scale-105 shadow-xl`}
    >
      <img src={portrait} alt={character.displayName} className='h-full w-full object-cover relative z-10 rounded-lg' />
    </div>
  );
};