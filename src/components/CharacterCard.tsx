import type { MFFCharacter } from '../types';
import { getEffectiveStats } from '../utils/mff';

interface Props {
  character: MFFCharacter;
  selectedSkinId: string;
  onClick?: () => void;
}

export const CharacterCard = ({ character, selectedSkinId, onClick }: Props) => {
  const { type, portrait } = getEffectiveStats(character, selectedSkinId);

  const typeColors = {
    Combat: 'border-red-600',
    Blast: 'border-blue-600',
    Speed: 'border-green-600',
    Universal: 'border-purple-600'
  };

  return (
    <div 
      onClick={onClick}
      className={`relative w-24 h-24 ... border-2 rounded-xl ${typeColors[type]} ...`}
    >
      <img src={portrait} alt={character.displayName} className='rounded-xl' />
    </div>
  );
};