import { Stage } from '@lib/types';
import { speakers } from './speakers';

// To-do:
// Copy over the schedule here...
// https://www.notion.so/440f7327a62a48ceb15c22fc1c445483?v=63d1c6fb62004b3d904654f4b9991287

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
      },
      {
        title: 'Team Formation & First Hackathon Tips',
        description: '',
        start: '2021-03-27T19:00:00.000Z',
        end: '2021-03-27T20:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'How to Build a Cloud-Connected AR/VR App',
        description: '',
        start: '2021-03-27T20:00:00.000Z',
        end: '2021-03-27T21:00:00.000Z',
        speaker: [speakers[0]]
      }
    ]
  }
];
