import { Stage } from '@lib/types';
import { speakers } from './speakers';

export const stages: Stage[] = [
  {
    name: 'Main Stage',
    slug: 'main',
    stream: '#',
    discord: '#',
    schedule: [
      {
        title: 'Opening Ceremony',
        description: 'Be sure not to miss this opening ceremony!',
        start: '2021-03-27T18:00:00.000Z',
        end: '2021-03-27T19:00:00.000Z',
        speaker: [speakers[0]]
      }
    ]
  }
];
