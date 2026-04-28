export type MFFType = 'Combat' | 'Blast' | 'Speed' | 'Universal';
export type MFFSide = 'Hero' | 'Villain';

export interface Uniform {
  id: string;
  name: string;
  changedType?: MFFType; 
  changedSpecies?: string;
  changedSide?: MFFSide;
  changedGender?: string;
  changedTags?: string[];
}

export interface MFFCharacter {
  id: string;
  displayName: string;
  baseType: MFFType;
  baseSide: MFFSide;
  baseSpecies: string;
  baseGender: string;
  baseTags: string[];
  maxTier: number;
  transcendent?: boolean;
  uniforms: Uniform[];
}

export interface TeamMember {
  characterId: string | null;
  skinId: string;
  gear: string;
}

export interface Team {
  id: number;
  members: [TeamMember, TeamMember, TeamMember];
}