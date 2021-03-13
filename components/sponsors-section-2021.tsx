import cn from 'classnames';
import IllustrationContainer from './illustration-container';
import Tree from './illustrations/tree';
import Trailer from './illustrations/tuffy-trailer';
import styles from './sponsors-section-2021.module.css';
import { LEAF_COLORS } from '@lib/constants';

interface CompanyLogo {
  label: string;
  url: string;
  picture: string;
}

const sponsors: CompanyLogo[] = [
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

const partners: CompanyLogo[] = [
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

export default function SponsorsSection2021() {
  return (
    <section id="sponsors" className={cn(styles.container)}>
      <IllustrationContainer>
        <Tree type="square" leafColor={LEAF_COLORS[3]} bottom="0" left="2vw" width="20vw" />
        <Tree type="square" leafColor={LEAF_COLORS[3]} bottom="0" left="10vw" width="22vw" />
        <Tree type="curvy" leafColor={LEAF_COLORS[0]} bottom="0" right="2vw" width="25vw" />
        <Trailer bottom="0" right="5vw" width="38vw" />
      </IllustrationContainer>
      <div className={cn(styles['info-container'])}>
        <h2>Sponsors</h2>
        <div className={cn(styles['logos-container'])}>
          {sponsors.map(({ label, url, picture }) => (
            <a href={url} key={label}>
              <img src={picture} alt={label} />
            </a>
          ))}
        </div>
      </div>
      <div className={cn(styles['info-container'])}>
        <h2>Partners</h2>
        <div className={cn(styles['logos-container'])}>
          {partners.map(({ label, url, picture }) => (
            <a href={url} key={label}>
              <img src={picture} alt={label} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
