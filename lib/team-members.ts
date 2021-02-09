interface TeamMember {
  name: string;
  role: string;
  pronouns: 'he/him' | 'she/her' | 'they/them' | 'N/A';
  year: '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th' | '7th' | 'Alumni';
  major: string;
  discord?: string;
  picture?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Sam Sandoval',
    role: 'Chief Executive Organizer, Founder',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '2nd',
    discord: 'SJSands#7010',
    picture: 'samuel-sandoval.jpg'
  },
  {
    name: 'Jacob Nguyen',
    role: 'Head of Marketing, Founder',
    major: 'Computer Science',
    pronouns: 'they/them',
    year: '2nd',
    discord: 'jnguyen#6669',
    picture: 'jacob-nguyen.jpg'
  },
  {
    name: 'Ethan Davidson',
    role: 'Head of Technology',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '2nd',
    discord: 'EthanThatOneKid#3456',
    picture: 'ethan-davidson.jpg'
  },
  {
    name: 'Rushi Sharma',
    role: 'Head of Logistics & Finance',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '4th',
    discord: 'SushiShwarma#3513',
    picture: 'rushi-sharma.jpeg'
  },
  {
    name: 'Nicole Traboulsi',
    role: 'Finance Officer',
    major: 'Computer Science',
    pronouns: 'she/her',
    year: 'Alumni',
    discord: 'nmtraboulsi#2184',
    picture: 'nicole-traboulsi.jpeg'
  },
  {
    name: 'Nafis Chowdhury',
    role: 'Finance Officer',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '3rd',
    discord: 'secured#3576',
    picture: 'nafis-chowdhury.jpg'
  },
  {
    name: 'Conner Cook',
    role: 'Hacker Experience Officer',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '3rd',
    discord: 'conborg#1668',
    picture: 'connor-cook.jpeg'
  },
  {
    name: 'Shaleen Mathur',
    role: 'Hacker Experience Officer',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '2nd',
    discord: 'shaleenmathur26#4522',
    picture: 'shaleen-mathur.jpg'
  },
  {
    name: 'Mathias Nguyen',
    role: 'Hacker Experience Officer',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '2nd',
    discord: 'PizzaTime#9399',
    picture: 'mathias-nguyen.jpg'
  },
  {
    name: 'Samuel Valls',
    role: 'Hacker Experience Officer',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '2nd',
    discord: 'SamnJamn#5478',
    picture: 'samuel-valls.jpg'
  },
  {
    name: 'Jason Anthony',
    role: 'Logistics Officer',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '3rd',
    discord: '#Janthony#3096',
    picture: 'jason-anthony.jpg'
  },
  {
    name: 'Connor Chu',
    role: 'Logistics Officer',
    major: 'Mechanical Engineering',
    pronouns: 'he/him',
    year: '3rd',
    discord: 'condorsssss#4941',
    picture: 'connor-chu.jpg'
  },
  {
    name: 'Krystal Hortizuela',
    role: 'Logistics Officer',
    major: 'Business Adminstration',
    pronouns: 'she/her',
    year: '4th',
    discord: '_jingaling13_#6628',
    picture: 'krystal-hortizuela.jpeg'
  },
  {
    name: 'Parth Sharma',
    role: 'Logistics Officer',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: '3rd',
    discord: 'psh239#5166',
    picture: 'parth-sharma.jpeg'
  },
  {
    name: 'Evangelyn Balcita',
    role: 'Marketing Officer',
    major: 'Mechanical Engineering',
    pronouns: 'she/her',
    year: '4th',
    discord: 'evangelyn.balcita.a#8444',
    picture: 'evangelyn-balcita.jpg'
  },
  {
    name: 'Lisa Hong',
    role: 'Marketing Officer',
    major: 'Computer Science',
    pronouns: 'she/her',
    year: '3rd',
    discord: 'LisaHong#1145',
    picture: 'lisa-hong.png'
  },
  {
    name: 'Jesenia Honorato',
    role: 'Marketing Officer',
    major: 'Mechanical Engineer',
    pronouns: 'she/her',
    year: '4th',
    discord: 'JH#7323',
    picture: 'jesenia-honorato.jpeg'
  },
  {
    name: 'Colline Orlanes',
    role: 'Marketing Officer',
    major: 'Civil Engineering',
    pronouns: 'she/her',
    year: '5th',
    discord: 'coollinebean#4303',
    picture: 'colline-orlanes.jpeg'
  },
  {
    name: 'Brian Chung',
    role: 'Technology Officer',
    major: 'Computer Science',
    pronouns: 'he/him',
    year: 'Alumni',
    discord: 'bchung#8636',
    picture: 'brian-chung.jpg'
  },
  {
    name: 'Tuffy',
    role: 'Mascot',
    major: 'Geography',
    pronouns: 'N/A',
    year: '1st',
    picture: 'tuffy-camper.jpg'
  }
];

export default teamMembers;
