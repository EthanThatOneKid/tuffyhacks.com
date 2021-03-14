export interface ICompanyLogo {
  label: string;
  url: string;
  picture: string;
}

export const sponsors: ICompanyLogo[] = [
  { label: 'Codecademy', url: 'https://codecademy.com/', picture: '/sponsors/codecademy.png' },
  { label: 'ECS-ICC', url: 'https://ecsicc.org/', picture: '/sponsors/ecs.png' },
  { label: 'Echo AR', url: 'https://echoar.xyz/', picture: '/sponsors/echoar.png' },
  {
    label: 'Digital Ocean',
    url: 'https://digitalocean.com/',
    picture: '/sponsors/digitalocean.png'
  },
  { label: 'Repl dot IT', url: 'https://repl.it/', picture: '/sponsors/replit.png' },
  { label: 'Linode', url: 'https://linode.com/', picture: '/sponsors/linode.png' }
];

export const partners: ICompanyLogo[] = [
  { label: 'ACM at CSUF', url: 'https://acmcsuf.com/', picture: '/partners/acm-csuf.png' },
  {
    label: 'ACM Create at CSUF',
    url: 'https://acmcsuf.com/paths/#create',
    picture: '/partners/acm-create.png'
  },
  {
    label: 'ACM Dev at CSUF',
    url: 'https://acmcsuf.com/paths/#dev',
    picture: '/partners/acm-dev.png'
  },
  {
    label: 'SHPE at CSUF',
    url: '#', // TODO: Find appropriate URL.
    picture: '/partners/shpe.png'
  },
  {
    label: 'DSC at CSUF',
    url: 'http://dsc-csuf.com/',
    picture: '/partners/dsc.png'
  },
  {
    label: 'Theta Tau at CSUF',
    url: '#', // TODO: Find appropriate URL.
    picture: '/partners/csuf-theta-tau.png'
  }
];
