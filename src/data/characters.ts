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
  },
  {
    id: 'cable',
    displayName: 'Cable',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Weapons Master', 'Leadership', 'Machine'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'X-Force' },
        { id: '2', name: 'Cable & Deadpool' },
        { id: '3', name: 'Summer Days' },
        { id: '4', name: 'X of Swords' },
        { id: '5', name: 'Heart of Darkness' }
    ]
  },
  {
    id: 'captainamerica',
    displayName: 'Captain America',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Leadership', 'Command'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'The Avengers' },
        { id: '1', name: 'Avengers: Age of Ultron' },
        { id: '2', name: 'Secret Wars: 2099', changedGender: 'Female' },
        { id: '3', name: 'Marvel Studios Captain America: The Winter Soldier' },
        { id: '4', name: 'Marvel Studios Captain America: Civil War' },
        { id: '5', name: 'Marvel NOW!' },
        { id: '6', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '7', name: 'Marvel Studios Avengers: Endgame' },
        { id: '8', name: 'Team Suit' },
        { id: '10', name: '3099' },
        { id: '11', name: 'Hydra Supreme', changedType: 'Blast', changedSide: 'Villain', changedTags: ['Command', 'Cosmic Cube'] },
        { id: '12', name: 'Enter the Phoenix', changedTags: ['Leadership', 'Command', 'Phoenix Force'] },
        { id: '13', name: 'Back to Basics' },
        { id: '14', name: 'What If... Zombies?!', changedSide: 'Villain', changedTags: ['Leadership', 'Command', 'Zombie'] },
        { id: '15', name: 'Galactic Talon' }
    ]
  },
  {
    id: 'captainmarvel',
    displayName: 'Captain Marvel',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Fast Movement', 'Leadership', 'Energy Projection'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Secret Wars: Captain Marvel & the Carol Corps' },
        { id: '2', name: 'Ms. Marvel' },
        { id: '3', name: 'Marvel Studios Captain Marvel' },
        { id: '4', name: 'Marvel Studios Avengers: Endgame' },
        { id: '5', name: 'The Last Avenger', changedSide: 'Villain' },
        { id: '6', name: 'Marvel Studios The Marvels' },
        { id: '7', name: 'Marvel Animations Marvel Zombies', changedSide: 'Villain', changedTags: ['Zombie', 'Leadership', 'Energy Projection'] }
    ]
  },
  {
    id: 'carnage',
    displayName: 'Carnage',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Evil', 'Healing', 'Symbiote'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' },
        { id: '1', name: 'Absolute Carnage' },
        { id: '2', name: 'Fallen Soul' },
        { id: '3', name: 'Superior Carnage' }
    ]
  },
  {
    id: 'cassandranova',
    displayName: 'Cassandra Nova',
    baseType: 'Blast',
    baseSide: 'Villain',
    baseSpecies: 'Mutant',
    baseGender: 'Female',
    baseTags: ['Mind', 'Mind Resist', 'Evil'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Marvel Studios Deadpool & Wolverine' }
    ]
  },
  {
    id: 'cassielang',
    displayName: 'Cassie Lang',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Fast Movement', 'Agility'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Ant-Man and the Wasp: Quantumania' }
    ]
  },
  {
    id: 'clea',
    displayName: 'Clea',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Magic', 'Fast Movement'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]   
  },
  {
    id: 'colossus',
    displayName: 'Colossus',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Strong', 'Leaderhip'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'X-Force' },
        { id: '2', name: 'Phoenix Five', changedSide: 'Villain', changedTags: ['Strong', 'Leadership', 'Phoenix Force'] },
        { id: '3', name: 'Hellfire Gala' }
    ]
  },
  {
    id: 'corvusglaive',
    displayName: 'Corvus Glaive',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Agility', 'Fast Movement', 'Black Order'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Infinity' },
        { id: '1', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '2', name: 'Dark Obsidian Armor' }
    ]
  },
  {
    id: 'crescent',
    displayName: 'Crescent',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Leadership', 'Durability', 'Strong'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Lifestyle Series 1' },
        { id: '2', name: 'Light Sirius Armor' },
        { id: '3', name: 'B-Girl Crew' }
    ]
  },
  {
    id: 'crossbones',
    displayName: 'Crossbones',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Weapons Master'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Marvel Studios Captain America: Civil War' },
        { id: '1', name: 'Modern' },
        { id: '2', name: 'Secret Empire' }
    ]
  },
  {
    id: 'crystal',
    displayName: 'Crystal',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Inhuman',
    baseGender: 'Female',
    baseTags: ['Command', 'Energy Projection'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' },
        { id: '1', name: 'Royal Suit' },
        { id: '2', name: 'Fantastic Four', changedTags: ['Command', 'Energy Projection', 'Fantastic Four'] },
        { id: '3', name: 'Spring Lady' }
    ]
  },
  {
    id: 'cyclops',
    displayName: 'Cyclops',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Energy Projection', 'Command'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Age of Apocalypse', changedSide: 'Villain' },
        { id: '2', name: 'Marvel NOW!' },
        { id: '3', name: 'Phoenix Five', changedSide: 'Villain', changedTags: ['Energy Projection', 'Command', 'Phoenix Force'] },
        { id: '4', name: 'Modern' },
        { id: '5', name: 'Marvel Animations X-Men 97' }
    ]
  },
  {
    id: 'daisyjohnson',
    displayName: 'Daisy Johnson',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Inhuman',
    baseGender: 'Female',
    baseTags: ['Mind Resist', 'Agent'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Marvel Studios Agents of S.H.I.E.L.D.' },
        { id: '1', name: 'Modern', changedTags: ['Command', 'Agent'] },
        { id: '2', name: 'Marvel Studios Agents of S.H.I.E.L.D. (Quake)' }
    ]
  },
  {
    id: 'daken',
    displayName: 'Daken',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Weapons Master', 'Healing'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Dark Wolverine' }
    ]
  },
  {
    id: 'daredevil',
    displayName: 'Daredevil',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Heightened Senses', 'Defenders', 'Leadership'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Devil of Hells Kitchen' },
        { id: '2', name: 'All-New, All-Different' },
        { id: '3', name: 'Fall from Grace' },
        { id: '4', name: 'Marvel Televisions Daredevil: Born Again' }
    ]
  },
  {
    id: 'darkhawk',
    displayName: 'Darkhawk',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Leaderhip', 'Fast Movement'],
    maxTier: 2,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]
  },
  {
    id: 'dazzler',
    displayName: 'Dazzler',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Female',
    baseTags: ['Energy Projection'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'X-Song' }
    ]
  },
  {
    id: 'deadpool',
    displayName: 'Deadpool',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Healing', 'Weapons Master'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'X-Force' },
        { id: '2', name: 'Lady Deadpool', changedGender: 'Female' },
        { id: '3', name: 'Holiday Party', changedGender: 'Female' },
        { id: '4', name: '30th Anniversary Black Version' },
        { id: '5', name: '30th Anniversary White Version' },
        { id: '6', name: 'April Pools' },
        { id: '7', name: 'Marvel Studios Deadpool & Wolverine (Nicepool)' },
        { id: '8', name: 'Marvel Studios Deadpool & Wolverine' }
    ]
  },
  {
    id: 'deathlok',
    displayName: 'Deathlok',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Machine', 'Agent'],
    maxTier: 2,
    uniforms: [
        { id: '' , name: 'Marvel Studios Agents of S.H.I.E.L.D.' },
        { id: '1', name: 'Modern', changedType: 'Blast' }
    ]
  },
  {
    id: 'destroyer',
    displayName: 'Destroyer',
    baseType: 'Universal',
    baseSide: 'Neutral',
    baseSpecies: 'Creature',
    baseGender: 'None',
    baseTags: ['Flame', 'Machine'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Prometheus', changedTags: ['Energy Projection', 'Machine'] },
        { id: '2', name: 'The Mighty Thor', changedTags: ['Energy Projection', 'Machine'] }
    ]
  },
  {
    id: 'doctordoom',
    displayName: 'Doctor Doom',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Evil', 'Magic'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: '3099' },
        { id: '2', name: 'God Emperor' }
    ]
  },
  {
    id: 'doctoroctopus',
    displayName: 'Doctor Octopus',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Machine', 'Durability', 'Sinister Six'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Superior Spider-Man', changedSide: 'Hero', changedTags: ['Machine', 'Spider-Sense', 'Agility'] },
        { id: '2', name: 'Superior Octopus', changedType: 'Speed', changedTags: ['Machine', 'Agility', 'Sinister Six'] },
        { id: '3', name: 'Spider-Man: No Way Home' },
        { id: '4', name: 'Ends of the Earth' }
    ]
  },
  {
    id: 'doctorstrange',
    displayName: 'Doctor Strange',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Magic', 'Fast Movement'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' },
        { id: '1', name: 'Marvel Studios Doctor Strange' },
        { id: '2', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '3', name: 'Space Suit' },
        { id: '4', name: 'Marvel Studios Doctor Strange 2' },
        { id: '5', name: 'Death of Doctor Strange' },
        { id: '6', name: 'What If... Zombies?!', changedSide: 'Villain', changedTags: ['Magic', 'Fast Movement', 'Zombie'] }
    ]
  },
  {
    id: 'doctorvoodoo',
    displayName: 'Doctor Voodoo',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Magic', 'Command'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Strange Academy' },
        { id: '2', name: 'Savage Avengers' }
    ]
  },
  {
    id: 'domino',
    displayName: 'Domino',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Female',
    baseTags: ['Agility', 'Weapons Master'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'X-Force' },
        { id: '1', name: 'Marvel NOW!' },
        { id: '2', name: 'Krakoa X-Force' }
    ]
  },
  {
    id: 'dormammu',
    displayName: 'Dormammu',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Other',
    baseGender: 'Male',
    baseTags: ['Magic', 'Evil'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Damnation' }
    ]
  },
  {
    id: 'drax',
    displayName: 'Drax',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Healing'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Guardians of the Galaxy' },
        { id: '1', name: 'All-New, All-Different' },
        { id: '2', name: 'Classic' }
    ]
  },
];