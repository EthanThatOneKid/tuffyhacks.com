import { Stage } from '@lib/types';
import { speakers } from './speakers';

// Schedule: https://www.notion.so/440f7327a62a48ceb15c22fc1c445483?v=63d1c6fb62004b3d904654f4b9991287

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
        title: 'Hacking Begins',
        description: '',
        start: '2021-03-27T19:00:00.000Z',
        end: '2021-03-27T20:00:00.000Z',
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
        title: 'Intro to Design',
        description: 'Brought to you by acmCreate!',
        start: '2021-03-27T20:00:00.000Z',
        end: '2021-03-27T21:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Intro to React',
        description: 'Learn React with Codecademy Engineers!',
        start: '2021-03-27T20:00:00.000Z',
        end: '2021-03-27T21:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Expansion 101: Turning Your Idea Into a Reality',
        description: '',
        start: '2021-03-27T21:00:00.000Z',
        end: '2021-03-27T22:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Intro to iOS App Development',
        description: '',
        start: '2021-03-27T21:00:00.000Z',
        end: '2021-03-27T22:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Intro to Python',
        description: '',
        start: '2021-03-27T22:00:00.000Z',
        end: '2021-03-27T23:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Intro to Web APIs',
        description: 'Learn about Web APIs with Codecademy Engineers!',
        start: '2021-03-27T22:00:00.000Z',
        end: '2021-03-27T23:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Intro to Web Development',
        description: 'Learn about web development with Aaron Lieberman, Vice President of acmCSUF!',
        start: '2021-03-27T23:00:00.000Z',
        end: '2021-03-28T00:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Creating a Discord Bot 101',
        description: "Learn how to create a Discord bot with Jose from CSUF's Theta Tau.",
        start: '2021-03-27T23:00:00.000Z',
        end: '2021-03-28T00:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Camp Drawing Session: Skribblio',
        description: '',
        start: '2021-03-28T00:00:00.000Z',
        end: '2021-03-28T01:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Git and GitHub',
        description: "Brought to you by acmCSUF's Wesley Chou",
        start: '2021-03-28T00:00:00.000Z',
        end: '2021-03-28T01:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Intro to Backend with Node.js',
        description: '...with Brian Chung!',
        start: '2021-03-28T00:00:00.000Z',
        end: '2021-03-28T01:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Securing and Deploying your Hack with Digital Ocean',
        description: '',
        start: '2021-03-28T01:00:00.000Z',
        end: '2021-03-28T02:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Cook-A-Long Time',
        description: 'Cook-a-long with Chef Angela Moya!',
        start: '2021-03-28T02:00:00.000Z',
        end: '2021-03-28T03:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Camp Rave Pt. 1',
        description: 'Rave with DJ Tseyang and Renzo!',
        start: '2021-03-28T03:30:00.000Z',
        end: '2021-03-28T04:30:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Slideshow Karaoke',
        description: '',
        start: '2021-03-28T04:00:00.000Z',
        end: '2021-03-28T05:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Movie Night in the Lodge',
        description: '',
        start: '2021-03-28T04:00:00.000Z',
        end: '2021-03-28T06:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Bob Ross Paint-A-Long',
        description: '',
        start: '2021-03-28T05:00:00.000Z',
        end: '2021-03-28T06:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Camp Rave Pt. 2',
        description: 'Rave with DJ Tseyang and Renzo again!',
        start: '2021-03-28T06:00:00.000Z',
        end: '2021-03-28T07:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Jackbox Social',
        description: "Get to know the TuffyHacks Team's sense of humor.",
        start: '2021-03-28T06:00:00.000Z',
        end: '2021-03-28T07:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Late-Night Games: Codenames',
        description: '',
        start: '2021-03-28T07:00:00.000Z',
        end: '2021-03-28T08:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Late-Night Games: Uno',
        description: '',
        start: '2021-03-28T08:00:00.000Z',
        end: '2021-03-28T09:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Project Submissions',
        description: '',
        start: '2021-03-28T18:00:00.000Z',
        end: '2021-03-28T19:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Hacking Ends',
        description: '',
        start: '2021-03-28T18:00:00.000Z',
        end: '2021-03-28T19:00:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Jackbox/Among Us Session',
        description: '',
        start: '2021-03-28T19:15:00.000Z',
        end: '2021-03-28T22:30:00.000Z',
        speaker: [speakers[0]]
      },
      {
        title: 'Closing Ceremony',
        description: 'Learn React with Codecademy Engineers!',
        start: '2021-03-28T22:30:00.000Z',
        end: '2021-03-29T00:00:00.000Z',
        speaker: [speakers[0]]
      }
    ]
  }
];
