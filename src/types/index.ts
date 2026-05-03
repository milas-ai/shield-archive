export type MFFType = 'Combat' | 'Blast' | 'Speed' | 'Universal';
export type MFFSide = 'Hero' | 'Villain' | 'Neutral';
export type MFFGender = 'Male' | 'Female' | 'None';

export interface Uniform {
  id: string;
  name: string;
  changedType?: MFFType; 
  changedSpecies?: string;
  changedSide?: MFFSide;
  changedGender?: MFFGender;
  changedTags?: string[];
}

export interface MFFCharacter {
  id: string;
  displayName: string;
  baseType: MFFType;
  baseSide: MFFSide;
  baseSpecies: string;
  baseGender: MFFGender;
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

export interface ABRestrictions {
  type?: MFFType;
  side?: MFFSide;
  gender?: MFFGender;
  species?: string;
  tags?: string[];
}

export interface ABPhase {
  name: 'Extreme' | 'Legend' | 'Infinite';
  restrictions?: ABRestrictions;
}

export interface ABDay {
  id: number;
  week: number;
  day: string;
  phases: ABPhase[];
}

export interface ABSelection {
  charId: string;
  skinId: string;
}