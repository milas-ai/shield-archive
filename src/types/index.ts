export type MFFType = 'Combat' | 'Blast' | 'Speed' | 'Universal';
export type MFFSide = 'Hero' | 'Villain';

export interface Uniform {
  id: string;
  name: string;
  changedType?: MFFType; 
  changedSide?: MFFSide;
}

export interface MFFCharacter {
  id: string;
  displayName: string;
  baseType: MFFType;
  baseSide: MFFSide;
  uniforms: Uniform[];
}

export interface TeamMember {
  characterId: string | null;
  skinId: string;
  equipment: string;
}

export interface Team {
  id: number;
  members: [TeamMember, TeamMember, TeamMember];
}