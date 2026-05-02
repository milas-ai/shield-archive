import type { MFFCharacter } from '../types';

export const getEffectiveStats = (character: MFFCharacter, uniformId: string) => {
  const uniform = character.uniforms.find(u => u.id === uniformId);
  
  return {
    type: uniform?.changedType ?? character.baseType,
    side: uniform?.changedSide ?? character.baseSide,
    portrait: `${import.meta.env.BASE_URL}assets/portraits/${character.id}${uniformId}.png`
  };
};