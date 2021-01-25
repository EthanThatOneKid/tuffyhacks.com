import { speakers } from './speakers';
import { stages } from './stages';
import { sponsors } from './sponsors';
import { jobs } from './jobs';

export const getAllSpeakers = () => Promise.resolve(speakers),
  getAllSponsors = () => Promise.resolve(sponsors),
  getAllStages = () => Promise.resolve(stages),
  getAllJobs = () => Promise.resolve(jobs);
