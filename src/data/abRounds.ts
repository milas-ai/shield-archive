import type { ABDay } from '../types';

export const abSchedule: ABDay[] = [
  {
    id: 1, week: 1, day: 'Thursday',
    phases: [
      { 
        name: 'Extreme', 
        restrictions: { type: 'Speed', side: 'Hero', gender: 'Female' }
      },
      { 
        name: 'Legend', 
        restrictions: { type: 'Universal', gender: 'Male' }
      }
    ]
  },
  {
    id: 2, week: 1, day: 'Friday',
    phases: [
      { name: 'Extreme' },
      { name: 'Legend' }
    ]
  },
  {
    id: 3, week: 1, day: 'Saturday',
    phases: [
      { name: 'Infinite' }
    ]
  },
  {
    id: 4, week: 1, day: 'Sunday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Combat', gender: 'Female' }
      },
      {
        name: 'Legend',
        restrictions: { side: 'Villain', species: 'Human' }
      }
    ]
  },
  {
    id: 5, week: 1, day: 'Monday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Speed', side: 'Villain' }
      },
      {
        name: 'Legend',
        restrictions: { type: 'Blast', side: 'Hero' }
      }
    ]
  },
  {
    id: 6, week: 1, day: 'Tuesday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Universal', side: 'Villain' }
      },
      {
        name: 'Legend',
        restrictions : { type: 'Combat', side: 'Villain', gender: 'Male' }
      }
    ]
  },
  {
    id: 7, week: 1, day: 'Wednesday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { species: 'Mutant', gender: 'Male' }
      },
      {
        name: 'Legend',
        restrictions: { side: 'Villain', species: 'Alien' }
      }
    ]
  },
  {
    id: 8, week: 2, day: 'Thursday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Combat', side: 'Hero' }
      },
      {
        name: 'Legend',
        restrictions: { type: 'Universal', species: 'Human' }
      }
    ]
  },
  {
    id: 9, week: 2, day: 'Friday',
    phases: [
      { name: 'Extreme' },
      { name: 'Legend' }
    ]
  },
  {
    id: 10, week: 2, day: 'Saturday',
    phases: [
      { name: 'Infinite' }
    ]
  },
  {
    id: 11, week: 2, day: 'Sunday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Combat', side: 'Hero', species: 'Human' }
      },
      {
        name: 'Legend',
        restrictions: { side: 'Villain', gender: 'Male' }
      }
    ]
  },
  {
    id: 12, week: 2, day: 'Monday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Universal', side: 'Hero', gender: 'Male' }
      },
      {
        name: 'Legend',
        restrictions: { side: 'Hero', species: 'Human', gender: 'Female' }
      }
    ]
  },
  {
    id: 13, week: 2, day: 'Tuesday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Blast', gender: 'Male' }
      },
      {
        name: 'Legend',
        restrictions: { species: 'Mutant', gender: 'Female' }
      }
    ]
  },
  {
    id: 14, week: 2, day: 'Wednesday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { side: 'Villain', species: 'Mutant' }
      },
      {
        name: 'Legend',
        restrictions: { type: 'Speed', side: 'Hero', gender: 'Male' }
      }
    ]
  },
  {
    id: 15, week: 3, day: 'Thursday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Universal', side: 'Villain' }
      },
      {
        name: 'Legend',
        restrictions: { type: 'Speed', side: 'Villain' }
      }
    ]
  },
  {
    id: 16, week: 3, day: 'Friday',
    phases: [
      { name: 'Extreme' },
      { name: 'Legend' }
    ]
  },
  {
    id: 17, week: 3, day: 'Saturday',
    phases: [
      { name: 'Infinite' }
    ]
  },
  {
    id: 18, week: 3, day: 'Sunday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Blast', side: 'Villain' }
      },
      {
        name: 'Legend',
        restrictions: { type: 'Speed', gender: 'Female' }
      }
    ]
  },
  {
    id: 19, week: 3, day: 'Monday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Universal', side: 'Hero' }
      },
      {
        name: 'Legend',
        restrictions: { type: 'Combat', species: 'Alien' }
      }
    ]
  },
  {
    id: 20, week: 3, day: 'Tuesday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { species: 'Alien', gender: 'Female' }
      },
      {
        name: 'Legend',
        restrictions: { type: 'Blast', side: 'Hero', gender: 'Male' }
      }
    ]
  },
  {
    id: 21, week: 3, day: 'Wednesday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Blast', gender: 'Female', species: 'Human' }
      },
      {
        name: 'Legend',
        restrictions: { species: 'Inhuman' }
      }
    ]
  },
  {
    id: 22, week: 4, day: 'Thursday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Speed', gender: 'Male', species: 'Human' }
      },
      {
        name: 'Legend',
        restrictions: { type: 'Universal', side: 'Hero', gender: 'Male' }
      }
    ]
  },
  {
    id: 23, week: 4, day: 'Friday',
    phases: [
      { name: 'Extreme' },
      { name: 'Legend' }
    ]
  },
  {
    id: 24, week: 4, day: 'Saturday',
    phases: [
      { name: 'Infinite' }
    ]
  },
  {
    id: 25, week: 4, day: 'Sunday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { side: 'Hero', gender: 'Male', species: 'Alien' }
      },
      {
        name: 'Legend',
        restrictions: { type: 'Universal', gender: 'Female' }
      }
    ]
  },
  {
    id: 26, week: 4, day: 'Monday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Combat', side: 'Villain' }
      },
      {
        name: 'Legend',
        restrictions: { side: 'Hero', species: 'Alien' }
      }
    ]
  },
  {
    id: 27, week: 4, day: 'Tuesday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { type: 'Universal', species: 'Human' }
      },
      {
        name: 'Legend',
        restrictions: { gender: 'Male', species: 'Mutant' }
      }
    ]
  },
  {
    id: 28, week: 4, day: 'Wednesday',
    phases: [
      {
        name: 'Extreme',
        restrictions: { side: 'Villain', gender: 'Female' }
      },
      {
        name: 'Legend',
        restrictions: { type: 'Combat', side: 'Hero', species: 'Human' }
      }
    ]
  }
];