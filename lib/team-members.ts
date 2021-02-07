interface TeamMember {
  name: string;
  role: string;
  major: string;
  pronouns: 'he/him' | 'she/her' | 'they/them' | 'N/A';
  year: '1st' | '2nd' | '3rd' | '4th';
  picture?: string;
}

// TODO:
// Upload headshot assets of team members:
// https://www.notion.so/samuelsandoval/Team-Info-5cb7d4b7c3814303a1ecb34146974821

export const teamMembers: TeamMember[] = [
  {
    name: 'Sam Sandoval',
    role: '',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '2nd'
  },
  {
    name: 'Jacob Nguyen',
    role: '',
    major: 'Computer Science',
    pronouns: 'they/them',
    year: '4th'
  },
  {
    name: 'Rushi Sharma',
    role: 'Hacker Experience',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '2nd'
  },
  {
    name: 'Ethan Davidson',
    role: 'Digital Platform Director',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '2nd'
  },
  {
    name: 'Tuffy',
    role: 'Mascot',
    major: 'Geography',
    pronouns: 'N/A',
    year: '1st'
  }
];

export default teamMembers;
