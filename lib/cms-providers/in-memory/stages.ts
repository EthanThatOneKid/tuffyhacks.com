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
        title: 'Test Talk',
        description: 'Test description',
        start: '2021-03-01T19:24:01.438Z',
        end: '2022-03-01T19:24:01.438Z',
        speaker: [speakers[0]]
      }
    ]
  }
];
