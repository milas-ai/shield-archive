import type { MFFCharacter } from '../types';

export const characters: MFFCharacter[] = [
  {
    id: 'abomination',
    displayName: 'Abomination',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Gamma Radiation', 'Durability'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Infected Bioweapon', changedTags: ['Gamma Radiation', 'Durability', 'Zombie'] }
    ]
  },
  {
    id: 'absorbingman',
    displayName: 'Absorbing Man',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Strong'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Fear Itself' }
    ]
  },
  {
    id: 'adamwarlock',
    displayName: 'Adam Warlock',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Creature',
    baseGender: 'Male',
    baseTags: ['Magic', 'Time Freezing Immunity'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Infinity Countdown' },
        { id: '2', name: 'Marvel Studios Guardians of the Galaxy 3' }
    ]
  },
  {
    id: 'aero',
    displayName: 'Aero',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Leadership', 'Fast Movement'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Classic' }
    ]
  },
  {
    id: 'agentvenom',
    displayName: 'Agent Venom',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Symbiote', 'Leadership', 'Agent'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' },
        { id: '1', name: 'Agent Anti-Venom' },
        { id: '2', name: 'Classic' },
        { id: '3', name: 'Guardians of the Galaxy' }
    ]
  },
  {
    id: 'amadeuscho',
    displayName: 'Amadeus Cho',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Gamma Radiation', 'Durability'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Totally Awesome Hulk' },
        { id: '1', name: 'Monsters Unleashed! (MFF Variant)' },
        { id: '2', name: 'Brawn' },
        { id: '3', name: 'Heroic Age' }
    ]
  },
  {
    id: 'americachavez',
    displayName: 'America Chavez',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Strong', 'Fast Movement'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Ultimates' },
        { id: '1', name: 'Classic' },
        { id: '2', name: 'Marvel Studios Doctor Strange 2' },
        { id: '3', name: 'Young Avengers', changedTags: ['Strong', 'Fast Movement', 'Young Avengers'] }
    ]
  },
  {
    id: 'ancientone',
    displayName: 'Ancient One',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Magic', 'Leadership'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios Doctor Strange', changedGender: 'Female' },
        { id: '2', name: 'Unleashed Mystic', changedGender: 'Female' },
        { id: '3', name: 'The Monk of Kamar-Taj' }
    ]
  },
  {
    id: 'angel',
    displayName: 'Angel',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Fast Movement', 'Leadership'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'X-Force' },
        { id: '2', name: 'All-New X-Men' },
        { id: '3', name: 'Fallen One' }
    ]
  },
  {
    id: 'angela',
    displayName: 'Angela',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Weapons Master'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Secret Wars: 1602 Witch Hunter Angela' },
        { id: '2', name: 'All-New, All-Different', changedTags: ['Weapons Master', 'Flame'] },
        { id: '3', name: 'Asgards Assassin' }
    ]
  },
  {
    id: 'antiman',
    displayName: 'Anti-Man',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Fast Movement', 'Energy Projection'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' },
        { id: '1', name: 'Ultimates' }
    ]
  },
  {
    id: 'antman',
    displayName: 'Ant-Man',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Agility'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios Ant-Man' },
        { id: '2', name: 'Marvel Studios Captain America: Civil War' },
        { id: '3', name: 'Marvel Studios Ant-Man and the Wasp' },
        { id: '4', name: 'Marvel Studios Avengers: Endgame' },
        { id: '5', name: 'Team Suit' },
        { id: '6', name: 'Ant-Man and the Wasp: Quantumania' }
    ]
  },
  {
    id: 'apocalypse',
    displayName: 'Apocalypse',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Fast Movement', 'Evil', 'Durability'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Age of Apocalypse' },
        { id: '1', name: 'Messiah Complex' },
        { id: '2', name: 'Heralds of Apocalypse' }
    ]
  },
  {
    id: 'arachknight',
    displayName: 'Arachknight',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Leadership', 'Infinity Warps', 'Spider-sense'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Infinity Warps' },
        { id: '1', name: 'Arachknight 2099' }
    ]
  },
  {
    id: 'ares',
    displayName: 'Ares',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Dark Avengers', 'Weapons Master', 'Strong'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Punisher', changedSide: 'Villain', changedTags: ['Weapons Master', 'Strong', 'Olympus'] }
    ]
  },
  {
    id: 'athena',
    displayName: 'Athena',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Agility', 'Healing', 'Olympus'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Incredible Hercules' }
    ]
  },
  {
    id: 'baronmordo',
    displayName: 'Baron Mordo',
    baseType: 'Blast',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Magic', 'Evil'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Marvel Studios Doctor Strange', changedType: 'Speed', changedSide: 'Hero', changedTags: ['Agility', 'Heightened Senses', 'Magic'] },
        { id: '2', name: 'Marvel Studios Doctor Strange 2', changedType: 'Speed', changedSide: 'Hero', changedTags: ['Agility', 'Heightened Senses', 'Magic'] }
    ]
  },
  {
    id: 'baronzemo',
    displayName: 'Baron Zemo',
    baseType: 'Speed',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Agility', 'Evil'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios The Falcon and the Winter Soldier' }
    ]
  },
  {
    id: 'beast',
    displayName: 'Beast',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Strong', 'Agility'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Age of Apocalypse', changedSide: 'Villain' },
        { id: '2', name: 'Uncanny X-Men' },
        { id: '3', name: 'All-New X-Men' },
        { id: '4', name: 'Marvel Animations X-Men 97' }
    ]
  },
  {
    id: 'betaraybill',
    displayName: 'Beta Ray Bill',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Shock', 'Leadership', 'Annihilators'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Beta Ray Bill', changedTags: ['Flame', 'Leadership', 'Annihilators'] }
    ]
  },
  {
    id: 'bishop',
    displayName: 'Bishop',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Energy Projection'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Disassembled' },
        { id: '1', name: 'Marvel Animations X-Men 97' }
    ]
  },
  {
    id: 'blackbolt',
    displayName: 'Black Bolt',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Inhuman',
    baseGender: 'Male',
    baseTags: ['Fast Movement', 'Energy Projection'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'All-New, All-Different' },
        { id: '2', name: 'Inhumans: Attilan Rising' },
        { id: '3', name: 'Marvels X' },
        { id: '4', name: 'Fallen Soul', changedSide: 'Villain' }
    ]
  },
  {
    id: 'blackcat',
    displayName: 'Black Cat',
    baseType: 'Speed',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Agility'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Claws' },
        { id: '2', name: 'All-New, All-Different' },
        { id: '3', name: 'Winter Criminal' }
    ]
  },
  {
    id: 'blackdwarf',
    displayName: 'Black Dwarf',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Strong', 'Durability', 'Black Order'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Infinity' },
        { id: '1', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '2', name: 'Dark Obsidian Armor' }
    ]
  },
  {
    id: 'blackknight',
    displayName: 'Black Knight',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Weapons Master'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Savage Avengers' }
    ]
  },
  {
    id: 'blackpanther',
    displayName: 'Black Panther',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Agility', 'Command'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios Captain America: Civil War' },
        { id: '2', name: 'Marvel Studios Black Panther' },
        { id: '3', name: '3099' },
        { id: '4', name: 'King Without a Crown' }
    ]
  },
  {
    id: 'blackswan',
    displayName: 'Black Swan',
    baseType: 'Speed',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Evil', 'Black Order'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Black Order' }
    ]
  },
  {
    id: 'blackwidow',
    displayName: 'Black Widow',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Agility', 'Agent'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'The Avengers' },
        { id: '1', name: 'Avengers: Age of Ultron' },
        { id: '2', name: 'Secret Wars: 2099' },
        { id: '3', name: 'Marvel Studios Captain America: Civil War' },
        { id: '4', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '5', name: 'Marvel Studios Avengers: Endgame' },
        { id: '6', name: 'Team Suit' },
        { id: '7', name: '3099' },
        { id: '8', name: 'Marvel Studios Black Widow' },
        { id: '9', name: 'Marvel Studios Black Widow (Snow Suit)' },
        { id: '10', name: 'Golden Gate Vigilante' },
        { id: '11', name: 'Venomous', changedTags: ['Agility', 'Agent', 'Symbiote'] }
    ]
  },
  {
    id: 'blade',
    displayName: 'Blade',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Healing', 'Weapons Master'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: '70s Classic' },
        { id: '2', name: 'Avengers' },
        { id: '3', name: 'Vampire Slayer' }
    ]
  },
  {
    id: 'bluedragon',
    displayName: 'Blue Dragon',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Warriors of the Sky', 'Leadership', 'Shock'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Moon Temple Defenders' }
    ]
  },
  {
    id: 'bluemarvel',
    displayName: 'Blue Marvel',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Leadership', 'Energy Projection'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Ultimates' },
        { id: '1', name: 'Classic' }
    ]
  },
  {
    id: 'bullseye',
    displayName: 'Bullseye',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Weapons Master', 'Evil'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Secret Wars: 1872' },
        { id: '2', name: 'Dark Avengers', changedType: 'Speed', changedTags: ['Dark Avengers', 'Weapons Master'] },
        { id: '3', name: 'Wastelanders', changedType: 'Speed' }
    ]
  }
];