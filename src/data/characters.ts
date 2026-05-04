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
  {
    id: 'ebonymaw',
    displayName: 'Ebony Maw',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Evil', 'Mind Resist', 'Black Order'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Infinity' },
        { id: '1', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '2', name: 'Dark Obsidian Armor', changedType: 'Blast' },
        { id: '3', name: 'Generals Hand', changedType: 'Blast' }
    ]
  },
  {
    id: 'echo',
    displayName: 'Echo',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Phoenix Force', 'Agility'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Enter the Phoenix' },
        { id: '1', name: 'Marvel Studios Hawkeye', changedType: 'Speed', changedTags: ['Agility'] },
        { id: '2', name: 'Marvel Studios Echo', changedType: 'Speed', changedTags: ['Agility'] }
    ]
  },
  {
    id: 'electro',
    displayName: 'Electro',
    baseType: 'Speed',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Evil', 'Shock', 'Sinister Six'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Spider-Man: No Way Home' }
    ]
  },
  {
    id: 'elektra',
    displayName: 'Elektra',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Weapons Master'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Marvel Studios Daredevil' },
        { id: '2', name: 'Woman Without Fear' },
        { id: '3', name: 'Elektra' }
    ]
  },
  {
    id: 'elsabloodstone',
    displayName: 'Elsa Bloodstone',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Weapons Master'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Secret Wars: Marvel Zombies' },
        { id: '2', name: 'Monsters Unleashed! (MFF Variant)' }
    ]
  },
  {
    id: 'emmafrost',
    displayName: 'Emma Frost',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Female',
    baseTags: ['Mind Resist', 'Durability'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel NOW!' },
        { id: '2', name: 'Phoenix Five', changedSide: 'Villain', changedTags: ['Mind Resist', 'Durability', 'Phoenix Force'] },
        { id: '3', name: 'Hellfire Gala' },
        { id: '4', name: 'Summer Queen' }
    ]
  },
  {
    id: 'enchantress',
    displayName: 'Enchantress',
    baseType: 'Blast',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Magic', 'Mind'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Summer Days' },
        { id: '2', name: 'War of the Realms' }
    ]
  },
  {
    id: 'exodus',
    displayName: 'Exodus',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Energy Projection', 'Command'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]
  },
  {
    id: 'falcon',
    displayName: 'Falcon',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Fast Movement', 'Leadership'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Marvel Studios Captain America: The Winter Soldier' },
        { id: '1', name: 'All-New Captain America' },
        { id: '2', name: 'Marvel Studios Captain America: Civil War' },
        { id: '3', name: 'Marvel Legacy' },
        { id: '4', name: 'Marvel Studios The Falcon and the Winter Soldier', changedTags: ['Fast Movement', 'Leadership', 'Command'] },
        { id: '5', name: 'What If... Zombies?!', changedSide: 'Villain', changedTags: ['Fast Movement', 'Leadership', 'Zombie'] },
        { id: '6', name: 'Marvel Studios Captain America: Brave New World', changedTags: ['Fast Movement', 'Leadership', 'Command'] }
    ]
  },
  {
    id: 'fandral',
    displayName: 'Fandral',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Agility'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]
  },
  {
    id: 'fantomex',
    displayName: 'Fantomex',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Agility', 'Weapons Master'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'X-Force' }
    ]
  },
  {
    id: 'franklinrichards',
    displayName: 'Franklin Richards',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Energy Projection', 'Mind', 'Fantastic Four'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]
  },
  {
    id: 'gambit',
    displayName: 'Gambit',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Agility', 'Mind'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Excalibur' },
        { id: '2', name: 'X-Men Year-End Party' }
    ]
  },
  {
    id: 'gamora',
    displayName: 'Gamora',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Agility', 'Weapons Master'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Guardians of the Galaxy' },
        { id: '1', name: 'All-New, All-Different' },
        { id: '2', name: 'Guardians of the Galaxy 2' },
        { id: '3', name: 'Requiem', changedSide: 'Villain' },
        { id: '4', name: 'Marvel Studios Guardians of the Galaxy 3', changedTags: ['Agility', 'Weapons Master', 'Guardians of the Galaxy'] },
        { id: '5', name: 'Wastelanders', changedTags: ['Agility', 'Weapons Master', 'Guardians of the Galaxy'] }
    ]
  },
  {
    id: 'ghost',
    displayName: 'Ghost',
    baseType: 'Speed',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Weapons Master', 'Machine'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios Ant-Man and the Wasp', changedGender: 'Female' },
        { id: '2', name: 'Marvel Studios Thunderbolts*', changedSide: 'Hero', changedGender: 'Female', changedTags: ['Weapons Master', 'Machine', 'Thunderbolts'] }
    ]
  },
  {
    id: 'ghostpanther',
    displayName: 'Ghost Panther',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Agility', 'Flame', 'Infinity Warps'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Infinity Warps' }
    ]
  },
  {
    id: 'ghostrider',
    displayName: 'Ghost Rider',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Leaderhip', 'Flame'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: '70s Classic' },
        { id: '2', name: 'Inhumans: Attilan Rising' },
        { id: '3', name: 'King of Hell' },
        { id: '4', name: 'Rage Returned' },
        { id: '5', name: 'Savage Avengers' }
    ]
  },
  {
    id: 'giantman',
    displayName: 'Giant-Man',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Strong'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Modern (Goliath)' },
        { id: '2', name: 'Ultron Pym', changedSide: 'Villain' }
    ]
  },
  {
    id: 'gilgamesh',
    displayName: 'Gilgamesh',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Strong', 'Eternals'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios Eternals' }
    ]
  },
  {
    id: 'gladiator',
    displayName: 'Gladiator',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Annihilators', 'Strong', 'Leadership'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Thanos: The Infinity Revelation' }
    ]
  },
  {
    id: 'goliath',
    displayName: 'Goliath',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Strong', 'Durability'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Classic' }
    ]
  },
  {
    id: 'gorgon',
    displayName: 'Gorgon',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Inhuman',
    baseGender: 'Male',
    baseTags: ['Strong'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'War of Kings' }
    ]
  },
  {
    id: 'gorillaman',
    displayName: 'Gorilla-Man',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Strong', 'Agility', 'Weapons Master'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]
  },
  {
    id: 'gorr',
    displayName: 'Gorr',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Healing', 'Evil', 'Fast Movement'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Marvel Studios Thor: Love and Thunder' }
    ]
  },
  {
    id: 'greengoblin',
    displayName: 'Green Goblin',
    baseType: 'Speed',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Poison', 'Fast Movement', 'Sinister Six'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Ultimate', changedType: 'Combat', changedTags: ['Flame', 'Fast Movement', 'Sinister Six'] },
        { id: '2', name: 'Dark Avengers', changedType: 'Blast', changedTags: ['Dark Avengers', 'Machine', 'Energy Projection'] },
        { id: '3', name: 'Spider-Man: No Way Home' },
        { id: '4', name: 'Red Goblin', changedTags: ['Flame', 'Fast Movement', 'Sinister Six'] }
    ]
  },
  {
    id: 'groot',
    displayName: 'Groot',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Healing'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Guardians of the Galaxy' },
        { id: '1', name: 'Secret Wars: Thors', changedType: 'Universal' },
        { id: '2', name: 'Guardians of the Galaxy 2', changedType: 'Speed' },
        { id: '3', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '4', name: 'Snowflake Festival', changedType: 'Speed' },
        { id: '5', name: 'Marvel Studios Guardians of the Galaxy 3', changedTags: ['Healing', 'Guardians of the Galaxy'] },
        { id: '6', name: 'Planet X Palm', changedTags: ['Healing', 'Guardians of the Galaxy'] }
    ]
  },
  {
    id: 'gwenpool',
    displayName: 'Gwenpool',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Agility'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' },
        { id: '1', name: 'Gwen Poole' },
        { id: '2', name: 'Holiday Party' },
        { id: '3', name: 'April Pools' },
        { id: '4', name: 'Dark Gwenpool', changedSide: 'Villain' }
    ]
  },
  // {
  //   id: 'hades',
  //   displayName: 'Hades',
  // },
  // {
  //   id: 'havok',
  //   displayName: 'Havok',
  // },
  // {
  //   id: 'hawkeye',
  //   displayName: 'Hawkeye',
  // },
  // {
  //   id: 'heimdall',
  //   displayName: 'Heimdall',
  // },
  {
    id: 'hela',
    displayName: 'Hela',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Command', 'Evil'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios Thor: Ragnarok' },
        { id: '2', name: 'Asgard Invasion' },
        { id: '3', name: 'Marvel Studios What If...?' }
    ]
  },
  // {
  //   id: 'hellcat',
  //   displayName: 'Hellcat',
  // },
  // {
  //   id: 'hellstorm',
  //   displayName: 'Hellstorm',
  // },
  // {
  //   id: 'hercules',
  //   displayName: 'Hercules',
  // },
  // {
  //   id: 'hogun',
  //   displayName: 'Hogun',
  // },
  // {
  //   id: 'hopesummers',
  //   displayName: 'Hope Summers',
  // },
  // {
  //   id: 'hulk',
  //   displayName: 'Hulk',
  // },
  // {
  //   id: 'hulkbuster',
  //   displayName: 'Hulkbuster',
  // },
  // {
  //   id: 'hulkling',
  //   displayName: 'Hulkling',
  // },
  // {
  //   id: 'humantorch',
  //   displayName: 'Human Torch',
  // },
  // {
  //   id: 'hydroman',
  //   displayName: 'Hydro-Man',
  // },
  {
    id: 'hyperion',
    displayName: 'Hyperion',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Leaderhip', 'Energy Projection', 'Eternals'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' },
        { id: '1', name: 'Classic' },
        { id: '2', name: 'Enter the Phoenix', changedTags: ['Leaderhip', 'Eternals', 'Phoenix Force'] }
    ]
  },
  {
    id: 'iceman',
    displayName: 'Iceman',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Chill', 'Cold Blooded'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'X-Men Blue' },
        { id: '2', name: 'Krakoan Summer' }
    ]
  },
  // {
  //   id: 'ikaris',
  //   displayName: 'Ikaris',
  // },
  // {
  //   id: 'ikon',
  //   displayName: 'Ikon',
  // },
  // {
  //   id: 'inferno',
  //   displayName: 'Inferno',
  // },
  {
    id: 'invisiblewoman',
    displayName: 'Invisible Woman',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Energy Projection', 'Fantastic Four'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Future Foundation' },
        { id: '2', name: 'Classic' },
        { id: '3', name: 'The Fall of the Fantastic Four' },
        { id: '4', name: 'Marvel Studios The Fantastic Four: First Steps' }
    ]
  },
  // {
  //   id: 'ironfist',
  //   displayName: 'Iron Fist',
  // },
  // {
  //   id: 'ironhammer',
  //   displayName: 'Iron Hammer',
  // },
  // {
  //   id: 'ironheart',
  //   displayName: 'Ironheart',
  // },
  {
    id: 'ironman',
    displayName: 'Iron Man',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Machine', 'Energy Projection'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Avengers: Age of Ultron' },
        { id: '2', name: 'Secret Wars: 2099' },
        { id: '3', name: 'Marvel Studios Captain America: Civil War' },
        { id: '4', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '5', name: 'Marvel Studios Avengers: Endgame' },
        { id: '6', name: 'Team Suit' },
        { id: '7', name: '3099' },
        { id: '8', name: 'Superior Iron Man', changedSide: 'Villain' },
        { id: '9', name: 'Back to Basics' },
        { id: '10', name: 'Model Nil' }
    ]
  },
  // {
  //   id: 'janefoster',
  //   displayName: 'Jane Foster',
  // },
  {
    id: 'jeangrey',
    displayName: 'Jean Grey',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Female',
    baseTags: ['Mind', 'Mind Resist', 'Phoenix Force'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Phoenix' },
        { id: '1', name: 'X-Men Red' },
        { id: '2', name: 'Marvel Girl' },
        { id: '3', name: 'Dark Phoenix', changedType: 'Universal', changedSide: 'Villain' },
    ]
  },
  {
    id: 'jeffthelandshark',
    displayName: 'Jeff the Landshark',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Creature',
    baseGender: 'Male',
    baseTags: ['Agility', 'Healing'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Marvel Rivals' }
    ]
  },
  // {
  //   id: 'jessicajones',
  //   displayName: 'Jessica Jones',
  // },
  // {
  //   id: 'joaquintorres',
  //   displayName: 'Joaquin Torres',
  // },
  // {
  //   id: 'juggernaut',
  //   displayName: 'Juggernaut',
  // },
  // {
  //   id: 'kaecilius',
  //   displayName: 'Kaecilius',
  // },
  // {
  //   id: 'kahhori',
  //   displayName: 'Kahhori',
  // },
  {
    id: 'kamalakhan',
    displayName: 'Kamala Khan',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Inhuman',
    baseGender: 'Female',
    baseTags: ['Strong', 'Healing'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' },
        { id: '1', name: 'Karachi Costume', changedType: 'Speed' },
        { id: '2', name: 'Inhumans: Attilan Rising' },
        { id: '3', name: 'Marvel Studios Ms. Marvel', changedType: 'Speed', changedSpecies: 'Human', changedTags: ['Strong', 'Leadership'] },
        { id: '4', name: 'Marvel Studios The Marvels', changedType: 'Speed', changedSpecies: 'Human', changedTags: ['Strong', 'Leadership'] },
        { id: '5', name: 'Marvel Animations Marvel Zombies', changedType: 'Speed', changedTags: ['Strong', 'Leadership'] }
    ]
  },
  {
    id: 'kang',
    displayName: 'Kang the Conqueror',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Evil', 'Fast Movement'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Ant-Man and the Wasp: Quantumania' },
        { id: '1', name: 'Rama-Tut' }
    ]
  },
  // {
  //   id: 'karnak',
  //   displayName: 'Karnak',
  // },
  // {
  //   id: 'katebishop',
  //   displayName: 'Kate Bishop',
  // },
  {
    id: 'katy',
    displayName: 'Katy',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Weapons Master', 'Agility'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Marvel Studios Shang-Chi' }
    ]
  },
  // {
  //   id: 'kidkaiju',
  //   displayName: 'Kid Kaiju',
  // },
  // {
  //   id: 'kidomega',
  //   displayName: 'Kid Omega',
  // },
  // {
  //   id: 'killmonger',
  //   displayName: 'Killmonger',
  // },
  {
    id: 'kingo',
    displayName: 'Kingo',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Eternals', 'Leadership', 'Energy Projection'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios Eternals', changedType: 'Blast' }
    ]
  },
  {
    id: 'kingpin',
    displayName: 'Kingpin',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Strong', 'Command'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Secret Wars: Armor Wars', changedType: 'Blast', changedTags: ['Strong', 'Command', 'Machine'] },
        { id: '2', name: 'Winter Criminal' },
        { id: '3', name: 'Marvel Televisions Daredevil: Born Again' }
    ]
  },
  {
    id: 'kittypryde',
    displayName: 'Kitty Pryde',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Female',
    baseTags: ['Command', 'Weapons Master'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Red Queen' }
    ]
  },
  {
    id: 'knull',
    displayName: 'Knull',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Symbiote', 'Strong', 'Evil'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Ancient History' }
    ]
  },
  // {
  //   id: 'korath',
  //   displayName: 'Korath',
  // },
  // {
  //   id: 'kraventhehunter',
  //   displayName: 'Kraven the Hunter',
  // },
  // {
  //   id: 'lash',
  //   displayName: 'Lash',
  // },
  // {
  //   id: 'leader',
  //   displayName: 'Leader',
  // },
  // {
  //   id: 'lincolncampbell',
  //   displayName: 'Lincoln Campbell',
  // },
  // {
  //   id: 'lizard',
  //   displayName: 'Lizard',
  // },
  {
    id: 'loki',
    displayName: 'Loki',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Mind', 'Chill'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'The Avengers' },
        { id: '1', name: 'Lady Loki', changedGender: 'Female' },
        { id: '2', name: 'Marvel Studios Thor: Ragnarok' },
        { id: '3', name: 'Classic' },
        { id: '4', name: 'Agent of Asgard' },
        { id: '5', name: 'Marvel Studios Loki (TVA Suit)' },
        { id: '6', name: 'Marvel Studios Loki (President Loki)' },
        { id: '7', name: 'Marvel Studios Loki' },
        { id: '8', name: 'Young Avengers', changedSide: 'Hero', changedTags: ['Mind', 'Chill', 'Young Avengers'] }
    ]
  },
  // {
  //   id: 'lukecage',
  //   displayName: 'Luke Cage',
  // },
  {
    id: 'lunasnow',
    displayName: 'Luna Snow',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Leadership', 'Cold Blooded'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Andromeda Suit' },
        { id: '2', name: 'Lifestyle Series 1' },
        { id: '3', name: 'Light Sirius Armor' },
        { id: '4', name: 'Summer Lilac' },
        { id: '5', name: 'Mirae 2099' }
    ]
  },
  // {
  //   id: 'madelynpryor',
  //   displayName: 'Madelyn Pryor',
  // },
  {
    id: 'magik',
    displayName: 'Magik',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Female',
    baseTags: ['Magic', 'Mind Resist'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Phoenix Five', changedSide: 'Villain', changedTags: ['Magic', 'Mind Resist', 'Phoenix Force'] },
        { id: '2', name: 'Krakoan Winter' },
        { id: '3', name: 'Marvel Rivals' }
    ]
  },
  {
    id: 'magneto',
    displayName: 'Magneto',
    baseType: 'Blast',
    baseSide: 'Villain',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Energy Projection', 'Mind Resist'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Marvel NOW!' },
        { id: '2', name: 'House of X' },
        { id: '3', name: 'Krakoan Winter' }
    ]
  },
  // {
  //   id: 'makkari',
  //   displayName: 'Makkari',
  // },
  // {
  //   id: 'malekith',
  //   displayName: 'Malekith',
  // },
  // {
  //   id: 'manthing',
  //   displayName: 'Man-Thing',
  // },
  // {
  //   id: 'mantis',
  //   displayName: 'Mantis',
  // },
  {
    id: 'marvelboy',
    displayName: 'Marvel Boy',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Fast Movement', 'Young Avengers'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Young Avengers' }
    ]
  },
  // {
  //   id: 'maximus',
  //   displayName: 'Maximus',
  // },
  {
    id: 'mbaku',
    displayName: 'M\'Baku',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Leadership', 'Strong'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Black Panther: Wakanda Forever' }
    ]
  },
  {
    id: 'medusa',
    displayName: 'Medusa',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Inhuman',
    baseGender: 'Female',
    baseTags: ['Command'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' },
        { id: '1', name: 'Monsters Unleashed! (MFF Variant)' },
        { id: '2', name: 'Inhumans vs X-Men' },
        { id: '3', name: 'Ancient Curse' }
    ]
  },
  {
    id: 'mephisto',
    displayName: 'Mephisto',
    baseType: 'Blast',
    baseSide: 'Villain',
    baseSpecies: 'Other',
    baseGender: 'Male',
    baseTags: ['Hellfire', 'Magic', 'Evil'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Master of Hell', changedType: 'Universal' }
    ]
  },
  {
    id: 'milesmorales',
    displayName: 'Miles Morales',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Spider-Sense', 'Agility', 'Leadership'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' },
        { id: '1', name: 'Into the Spider-Verse' },
        { id: '2', name: 'Absolute Carnage', changedType: 'Combat', changedSide: 'Villain', changedTags: ['Spider-Sense', 'Symbiote', 'Evil'] },
        { id: '3', name: 'Anniversary Special' },
        { id: '4', name: 'Spider-Man: Across the Spider-Verse' },
        { id: '5', name: 'Ancient Curse', changedSide: 'Villain' }
    ]
  },
  // {
  //   id: 'minn-erva',
  //   displayName: 'Minn-Erva',
  // },
  {
    id: 'misterfantastic',
    displayName: 'Mister Fantastic',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Durability', 'Leadership', 'Fantastic Four'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Future Foundation' },
        { id: '2', name: 'The Maker', changedSide: 'Villain', changedTags: ['Durability', 'Evil', 'Fantastic Four'] },
        { id: '3', name: 'The Fall of the Fantastic Four' },
        { id: '4', name: 'Marvel Studios The Fantastic Four: First Steps' }
    ]
  },
  // {
  //   id: 'mistersinister',
  //   displayName: 'Mister Sinister',
  // },
  {
    id: 'mistyknight',
    displayName: 'Misty Knight',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Agent', 'Weapons Master'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' }
    ]
  },
  // {
  //   id: 'mockingbird',
  //   displayName: 'Mockingbird',
  // },
  // {
  //   id: 'modok',
  //   displayName: 'MODOK',
  // },
  // {
  //   id: 'moleculeman',
  //   displayName: 'Molecule Man',
  // },
  // {
  //   id: 'moltenman',
  //   displayName: 'Molten Man',
  // },
  // {
  //   id: 'moongirl',
  //   displayName: 'Moongirl',
  // },
  {
    id: 'moonknight',
    displayName: 'Moon Knight',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Weapons Master', 'Leaderhip'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Armored' },
        { id: '2', name: 'Mr. Knight' },
        { id: '3', name: 'Marvel Studios Moon Knight' },
        { id: '4', name: 'Blood Moon Knight', changedType: 'Speed' }
    ]
  },
  // {
  //   id: 'moonstone',
  //   displayName: 'Moonstone',
  // },
  // {
  //   id: 'morbius',
  //   displayName: 'Morbius',
  // },
  {
    id: 'morganlefay',
    displayName: 'Morgan le Fay',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Magic', 'Evil'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Fallen Soul' }
    ]
  },
  {
    id: 'mysterio',
    displayName: 'Mysterio',
    baseType: 'Blast',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Mind', 'Sinister Six'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Spider-Man: Far From Home' },
        { id: '2', name: 'Summer Mystery' }
    ]
  },
  // {
  //   id: 'mystique',
  //   displayName: 'Mystique',
  // },
  // {
  //   id: 'nadiavandyne',
  //   displayName: 'Nadia Van Dyne',
  // },
  // {
  //   id: 'namor',
  //   displayName: 'Namor',
  // },
  // {
  //   id: 'nebula',
  //   displayName: 'Nebula',
  // },
  // {
  //   id: 'negasonicteenagewarhead',
  //   displayName: 'Negasonic Teenage Warhead',
  // },
  {
    id: 'nickfury',
    displayName: 'Nick Fury',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Agent', 'Leadership', 'Weapons Master'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios Captain Marvel' },
        { id: '2', name: 'Marvel Studios The Marvels' },
        { id: '3', name: 'Secret Avengers' }
    ]
  },
  // {
  //   id: 'nightcrawler',
  //   displayName: 'Nightcrawler',
  // },
  // {
  //   id: 'nova',
  //   displayName: 'Nova',
  // },
  // {
  //   id: 'odin',
  //   displayName: 'Odin',
  // },
  // {
  //   id: 'okoye',
  //   displayName: 'Okoye',
  // },
  // {
  //   id: 'omegared',
  //   displayName: 'Omega Red',
  // },
  {
    id: 'philcoulson',
    displayName: 'Phil Coulson',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Command', 'Agent'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Marvel Studios Agents of S.H.I.E.L.D.' },
        { id: '1', name: 'A.O.S. Season 3' },
        { id: '2', name: 'Winter Ops' }
    ]
  },
  {
    id: 'phylavell',
    displayName: 'Phyla-Vell',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Energy Projection', 'Leadership'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Cosmic Invasion' }
    ]
  },
  // {
  //   id: 'polaris',
  //   displayName: 'Polaris',
  // },
  // {
  //   id: 'professorx',
  //   displayName: 'Professor X',
  // },
  {
    id: 'proximamidnight',
    displayName: 'Proxima Midnight',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Agility', 'Fast Movement', 'Black Order'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Infinity' },
        { id: '1', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '2', name: 'Dark Obsidian Armor' }
    ]
  },
  // {
  //   id: 'psylocke',
  //   displayName: 'Psylocke',
  // },
  // {
  //   id: 'punisher',
  //   displayName: 'Punisher',
  // },
  // {
  //   id: 'quasar',
  //   displayName: 'Quasar',
  // },
  {
    id: 'quicksilver',
    displayName: 'Quicksilver',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Fast Movement', 'Agility'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Marvel Legacy' },
        { id: '2', name: 'Uncanny Avengers' },
        { id: '3', name: 'Summer Days' },
        { id: '4', name: 'Mighty Avengers' }
    ]
  },
  // {
  //   id: 'rachelsummers',
  //   displayName: 'Rachel Summers',
  // },
  // {
  //   id: 'redguardian',
  //   displayName: 'Red Guardian',
  // },
  // {
  //   id: 'redhulk',
  //   displayName: 'Red Hulk',
  // },
  // {
  //   id: 'redshehulk',
  //   displayName: 'Red She-Hulk',
  // },
  // {
  //   id: 'redskull',
  //   displayName: 'Red Skull',
  // },
  // {
  //   id: 'rescue',
  //   displayName: 'Rescue',
  // },
  // {
  //   id: 'rhino',
  //   displayName: 'Rhino',
  // },
  // {
  //   id: 'robbiereyes',
  //   displayName: 'Robbie Reyes',
  // },
  // {
  //   id: 'rocketraccoon',
  //   displayName: 'Rocket Raccoon',
  // },
  // {
  //   id: 'rogue',
  //   displayName: 'Rogue',
  // },
  {
    id: 'ronan',
    displayName: 'Ronan',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Mind Resist', 'Command', 'Annihilators'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Guardians of the Galaxy' },
        { id: '1', name: 'Annihilation' },
        { id: '2', name: 'Marvel Studios Captain Marvel' },
        { id: '3', name: 'Annihilators', changedSide: 'Hero' }
    ]
  },
  // {
  //   id: 'sabretooth',
  //   displayName: 'Sabretooth',
  // },
  {
    id: 'samalexander',
    displayName: 'Nova (Sam Alexander)',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Fast Movement', 'Energy Projection'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'All-New, All-Different' }
    ]
  },
  // {
  //   id: 'sandman',
  //   displayName: 'Sandman',
  // },
  {
    id: 'satana',
    displayName: 'Satana',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Magic', 'Flame'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Legacy' },
        { id: '2', name: 'Ascended One' }
    ]
  },
  {
    id: 'scarletspider',
    displayName: 'Scarlet Spider',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Spider-Sense', 'Leadership', 'Agility'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Dark Web', changedSide: 'Villain' },
        { id: '2', name: 'Gift Deliverer' }
    ]
  },
  {
    id: 'scarletwitch',
    displayName: 'Scarlet Witch',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Female',
    baseTags: ['Chaos Magic', 'Fast Movement'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '2', name: 'Uncanny Avengers' },
        { id: '3', name: 'All-New, All-Different' },
        { id: '4', name: 'Marvel Studios WandaVision', changedType: 'Universal' },
        { id: '5', name: 'Marvel Studios Doctor Strange 2', changedType: 'Universal' },
        { id: '6', name: 'Scarlet Witch', changedType: 'Universal' },
        { id: '7', name: 'Marvel Animations Marvel Zombies', changedType: 'Universal', changedSide: 'Villain', changedTags: ['Chaos Magic', 'Fast Movement', 'Zombie'] }
    ]
  },
  {
    id: 'scorpion',
    displayName: 'Scorpion',
    baseType: 'Speed',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Evil', 'Durability', 'Poison'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]
  },
  // {
  //   id: 'scream',
  //   displayName: 'Scream',
  // },
  // {
  //   id: 'sentinel',
  //   displayName: 'Sentinel',
  // },
  {
    id: 'sentry',
    displayName: 'Sentry',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Dark Avengers', 'Leaderhip', 'Energy Projection'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Darkness Merged' },
        { id: '2', name: 'Marvel Studios Thunderbolts*', changedTags: ['Leadership', 'Energy Projection'] }
    ]
  },
  {
    id: 'sersi',
    displayName: 'Sersi',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Eternals', 'Leadership', 'Magic'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios Eternals' }
    ]
  },
  // {
  //   id: 'shadowshell',
  //   displayName: 'Shadow Shell',
  // },
  {
    id: 'shallabal',
    displayName: 'Silver Surfer (Shalla-Bal)',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Power Cosmic'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Marvel Studios The Fantastic Four: First Steps' }
    ]
  },
  // {
  //   id: 'shangchi',
  //   displayName: 'Shang-Chi',
  // },
  // {
  //   id: 'sharoncarter',
  //   displayName: 'Sharon Carter',
  // },
  {
    id: 'sharonrogers',
    displayName: 'Captain America (Sharon Rogers)',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Leadership', 'Energy Projection'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Captain America 75th Anniversary' },
        { id: '1', name: 'Star Light Armor' },
        { id: '2', name: 'Dark Star Armor' },
        { id: '3', name: 'Star Night Armor' },
        { id: '4', name: 'Light Sirius Armor' },
        { id: '5', name: 'Poseidon Armor' },
        { id: '6', name: 'Arctic Warrior' }
    ]
  },
  // {
  //   id: 'shehulk',
  //   displayName: 'She-Hulk',
  // },
  {
    id: 'shuri',
    displayName: 'Shuri',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Heightened Senses', 'Leadership'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Marvel Legacy' },
        { id: '1', name: 'Marvel Studios Black Panther' },
        { id: '2', name: 'Black Panther: Wakanda Forever' },
        { id: '3', name: 'Marvel Studios Black Panther: Wakanda Forever' }
    ]
  },
  {
    id: 'sif',
    displayName: 'Sif',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Agility'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Marvel Studios Agents of S.H.I.E.L.D.' },
        { id: '1', name: 'Modern' },
        { id: '2', name: 'Asgard Invasion' }
    ]
  },
  // {
  //   id: 'silk',
  //   displayName: 'Silk',
  // },
  {
    id: 'silversamurai',
    displayName: 'Silver Samurai',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Weapons Master', 'Evil'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]
  },
  {
    id: 'silversurfer',
    displayName: 'Silver Surfer',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Power Cosmic', 'Annihilators'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Black' },
        { id: '2', name: 'Void Knight', changedSide: 'Villain', changedTags: ['Power Cosmic', 'Symbiote', 'Annihilators'] }
    ]
  },
  // {
  //   id: 'sin',
  //   displayName: 'Sin',
  // },
  // {
  //   id: 'singularity',
  //   displayName: 'Singularity',
  // },
  // {
  //   id: 'sistergrimm',
  //   displayName: 'Sister Grimm',
  // },
  // {
  //   id: 'skurge',
  //   displayName: 'Skurge',
  // },
  // {
  //   id: 'slapstick',
  //   displayName: 'Slapstick',
  // },
  {
    id: 'sleeper',
    displayName: 'Sleeper',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'None',
    baseTags: ['Symbiote', 'Healing', 'Leaderhip'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]
  },
  // {
  //   id: 'songbird',
  //   displayName: 'Songbird',
  // },
  // {
  //   id: 'spectrum',
  //   displayName: 'Spectrum',
  // },
  // {
  //   id: 'spidergwen',
  //   displayName: 'Spider-Gwen',
  // },
  {
    id: 'spiderman',
    displayName: 'Spider-Man',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Spider-Sense', 'Leadership', 'Agility'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Secret Wars: Renew Your Vows' },
        { id: '2', name: 'All-New, All-Different' },
        { id: '3', name: 'Marvel Studios Captain America: Civil War' },
        { id: '4', name: 'Spider-Man: Homecoming Homemade Suit' },
        { id: '5', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '6', name: 'Spider-Man: Far From Home' },
        { id: '7', name: 'Spider-Man: Far From Home (Stealth Suit)' },
        { id: '8', name: 'Spider-Man: No Way Home (Integrated Suit)' },
        { id: '9', name: 'Spider-Man: No Way Home (Black & Gold Suit)' },
        { id: '10', name: 'Back to Basics' },
        { id: '11', name: 'The Symbiote Suit', changedTags: ['Spider-Sense', 'Leadership', 'Symbiote'] }
    ]
  },
  // {
  //   id: 'spiderman2099',
  //   displayName: 'Spider-Man 2099',
  // },
  // {
  //   id: 'spiderwoman',
  //   displayName: 'Spider-Woman',
  // },
  {
    id: 'spot',
    displayName: 'Spot',
    baseType: 'Speed',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Fast Movement', 'Evil'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Spider-Man: Across the Spider-Verse' }
    ]
  },
  // {
  //   id: 'squirrelgirl',
  //   displayName: 'Squirrel Girl',
  // },
  {
    id: 'starlord',
    displayName: 'Star-Lord',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Weapons Master', 'Command'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Guardians of the Galaxy' },
        { id: '1', name: 'Space Armor' },
        { id: '2', name: 'Guardians of the Galaxy 2' },
        { id: '3', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '4', name: 'Grounded' },
        { id: '5', name: 'Marvel Studios Guardians of the Galaxy 3', changedTags: ['Weapons Master', 'Command', 'Guardians of the Galaxy'] },
        { id: '6', name: 'Wastelanders', changedTags: ['Weapons Master', 'Command', 'Guardians of the Galaxy'] }
    ]
  },
  {
    id: 'storm',
    displayName: 'Storm',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Female',
    baseTags: ['Shock', 'Command'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'X-Men Red' },
        { id: '2', name: 'Inhumans vs X-Men' },
        { id: '3', name: 'Krakoan Summer' },
        { id: '4', name: 'Marvel Animations X-Men 97' }
    ]
  },
  // {
  //   id: 'stryfe',
  //   displayName: 'Stryfe',
  // },
  // {
  //   id: 'sunbird',
  //   displayName: 'Sunbird',
  // },
  // {
  //   id: 'sunspot',
  //   displayName: 'Sunspot',
  // },
  // {
  //   id: 'supergiant',
  //   displayName: 'Supergiant',
  // },
  // {
  //   id: 'swordmaster',
  //   displayName: 'Sword Master',
  // },
  // {
  //   id: 'sylvie',
  //   displayName: 'Sylvie',
  // },
  {
    id: 'taskmaster',
    displayName: 'Taskmaster',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Weapons Master', 'Evil'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Marvel Studios Black Widow' },
        { id: '2', name: 'Marvel Studios Thunderbolts*', changedSide: 'Hero', changedGender: 'Female', changedTags: ['Weapons Master', 'Evil', 'Thunderbolts'] }
    ]
  },
  // {
  //   id: 'thane',
  //   displayName: 'Thane',
  // },
  {
    id: 'thanos',
    displayName: 'Thanos',
    baseType: 'Universal',
    baseSide: 'Villain',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Power Cosmic', 'Durability', 'Evil'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Infinity' },
        { id: '1', name: 'Secret Wars: Infinity' },
        { id: '2', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '3', name: 'Marvel Studios Avengers: Endgame' },
        { id: '4', name: 'Obsidian King' },
        { id: '5', name: 'Wise Harvester' },
        { id: '6', name: 'Thanos Wins' }
    ]
  },
  // {
  //   id: 'thehood',
  //   displayName: 'The Hood',
  // },
  // {
  //   id: 'thena',
  //   displayName: 'Thena',
  // },
  {
    id: 'thing',
    displayName: 'The Thing',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Strong', 'Durability', 'Fantastic Four'],
    maxTier: 4,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Future Foundation' },
        { id: '2', name: 'Classic' },
        { id: '3', name: 'The Fall of the Fantastic Four' },
        { id: '4', name: 'Marvel Studios The Fantastic Four: First Steps' }
    ]
  },
  {
    id: 'thor',
    displayName: 'Thor',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Shock', 'Leaderhip'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'The Avengers' },
        { id: '1', name: 'Avengers: Age of Ultron' },
        { id: '2', name: 'Unworthy' },
        { id: '3', name: 'Marvel Studios Thor: Ragnarok' },
        { id: '4', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '5', name: 'Team Suit' },
        { id: '6', name: 'Marvel Studios Avengers: Endgame' },
        { id: '7', name: 'Herald of Thunder', changedTags: ['Shock', 'Leaderhip', 'Power Cosmic'] },
        { id: '8', name: 'Marvel Studios Thor: Love and Thunder' },
        { id: '9', name: 'All-Father Reborn' }
    ]
  },
  // {
  //   id: 'titania',
  //   displayName: 'Titania',
  // },
  // {
  //   id: 'toxin',
  //   displayName: 'Toxin',
  // },
  // {
  //   id: 'ulik',
  //   displayName: 'Ulik',
  // },
  // {
  //   id: 'ultron',
  //   displayName: 'Ultron',
  // },
  // {
  //   id: 'ulyssesklaue',
  //   displayName: 'Ulysses Klaue',
  // },
  // {
  //   id: 'usagent',
  //   displayName: 'US Agent',
  // },
  {
    id: 'valeriarichards',
    displayName: 'Valeria Richards',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Leadership', 'Fantastic Four'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]
  },
  {
    id: 'valkyrie',
    displayName: 'Valkyrie',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Female',
    baseTags: ['Strong'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Marvel Studios Thor: Ragnarok' },
        { id: '1', name: 'Fearless Defenders' },
        { id: '2', name: 'Marvel Studios Thor: Love and Thunder' }
    ]
  },
  {
    id: 'venom',
    displayName: 'Venom',
    baseType: 'Combat',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Healing', 'Symbiote'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Secret Wars: Marvel Zombies' },
        { id: '2', name: 'Anti-Venom', changedSide: 'Hero' },
        { id: '3', name: 'War of the Realms', changedSide: 'Hero' },
        { id: '4', name: 'King in Black', changedSide: 'Hero' },
        { id: '5', name: 'Warstar', changedSide: 'Hero', changedTags: ['Healing', 'Symbiote', 'Weapons Master'] },
        { id: '6', name: 'Snow Symbiote', changedSide: 'Hero' }
    ]
  },
  // {
  //   id: 'venus',
  //   displayName: 'Venus',
  // },
  // {
  //   id: 'victorious',
  //   displayName: 'Victorious',
  // },
  // {
  //   id: 'viper',
  //   displayName: 'Viper',
  // },
  // {
  //   id: 'vision',
  //   displayName: 'Vision',
  // },
  // {
  //   id: 'volstagg',
  //   displayName: 'Volstagg',
  // },
  // {
  //   id: 'vulture',
  //   displayName: 'Vulture',
  // },
  // {
  //   id: 'warmachine',
  //   displayName: 'War Machine',
  // },
  // {
  //   id: 'warpath',
  //   displayName: 'Warpath',
  // },
  // {
  //   id: 'wartiger',
  //   displayName: 'War Tiger',
  // },
  // {
  //   id: 'warwolf',
  //   displayName: 'Warwolf',
  // },
  {
    id: 'wasp',
    displayName: 'Wasp',
    baseType: 'Blast',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Fast Movement'],
    maxTier: 3,
    transcendent: true,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'All-New, All-Different' },
        { id: '2', name: 'Marvel Studios Ant-Man and the Wasp' },
        { id: '3', name: 'Ant-Man and the Wasp: Quantumania' }
    ]
  },
  // {
  //   id: 'wave',
  //   displayName: 'Wave',
  // },
  // {
  //   id: 'weaponhex',
  //   displayName: 'Weapon Hex',
  // },
  // {
  //   id: 'wendellvaughn',
  //   displayName: 'Wendell Vaughn',
  // },
  {
    id: 'wenwu',
    displayName: 'Wenwu',
    baseType: 'Blast',
    baseSide: 'Villain',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Agility', 'Evil'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Marvel Studios Shang-Chi' },
        { id: '1', name: 'Marvel Studios What If...?' }
    ]
  },
  // {
  //   id: 'whiplash',
  //   displayName: 'Whiplash',
  // },
  {
    id: 'whitefox',
    displayName: 'White Fox',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Female',
    baseTags: ['Agility', 'Agent', 'Leadership'],
    maxTier: 3,
    uniforms: [
        { id: '' , name: 'Modern' },
        { id: '1', name: 'Lifestyle Series 1' },
        { id: '2', name: 'Lifestyle Series 2' }
    ]
  },
  // {
  //   id: 'whitetiger',
  //   displayName: 'White Tiger',
  // },
  // {
  //   id: 'wiccan',
  //   displayName: 'Wiccan',
  // },
  {
    id: 'wintersoldier',
    displayName: 'Winter Soldier',
    baseType: 'Speed',
    baseSide: 'Hero',
    baseSpecies: 'Human',
    baseGender: 'Male',
    baseTags: ['Weapons Master'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Marvel Studios Captain America: The Winter Soldier' },
        { id: '1', name: 'Marvel Studios Captain America: Civil War' },
        { id: '2', name: 'Captain America' },
        { id: '3', name: 'Marvel Studios Avengers: Infinity War' },
        { id: '4', name: 'Marvel Studios The Falcon and the Winter Soldier', changedTags: ['Weapons Master', 'Leaderhip'] },
        { id: '5', name: 'Revolution', changedType: 'Combat', changedSide: 'Villain', changedTags: ['Weapons Master', 'Leaderhip'] },
        { id: '6', name: 'Marvel Studios Thunderbolts*', changedTags: ['Weapons Master', 'Leaderhip', 'Thunderbolts'] }
    ]
  },
  {
    id: 'wolverine',
    displayName: 'Wolverine',
    baseType: 'Combat',
    baseSide: 'Hero',
    baseSpecies: 'Mutant',
    baseGender: 'Male',
    baseTags: ['Weapons Master', 'Healing'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Classic' },
        { id: '1', name: 'Age of Apocalypse' },
        { id: '2', name: 'All-New Marvel NOW!' },
        { id: '3', name: 'X-Force' },
        { id: '4', name: 'House of X' },
        { id: '5', name: 'Enter the Phoenix', changedTags: ['Weapons Master', 'Healing', 'Phoenix Force'] },
        { id: '6', name: 'X Deaths of Wolverine' },
        { id: '7', name: 'Marvel Studios Deadpool & Wolverine' }
    ]
  },
  // {
  //   id: 'wong',
  //   displayName: 'Wong',
  // },
  // {
  //   id: 'x-23',
  //   displayName: 'X-23',
  // },
  // {
  //   id: 'yelenabelova',
  //   displayName: 'Yelena Belova',
  // },
  // {
  //   id: 'yondu',
  //   displayName: 'Yondu',
  // },
  {
    id: 'zeus',
    displayName: 'Zeus',
    baseType: 'Universal',
    baseSide: 'Hero',
    baseSpecies: 'Alien',
    baseGender: 'Male',
    baseTags: ['Shock', 'Energy Projection', 'Olympus'],
    maxTier: 4,
    uniforms: [
        { id: '' , name: 'Modern' }
    ]
  }
];