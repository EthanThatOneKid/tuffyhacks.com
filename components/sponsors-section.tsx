import cn from 'classnames';
import IllustrationContainer from './illustration-container';
import Tree from './illustrations/tree';
import Trailer from './illustrations/tuffy-trailer';
import styles from './sponsors-section.module.css';
import { LEAF_COLORS } from '@lib/constants';

const sponsors: { label: string; url: string; picture: string }[] = [
  { label: 'Codecademy', url: 'https://www.codecademy.com/', picture: '/sponsors/codecademy.png' },
  { label: 'ECS-ICC', url: 'https://ecsicc.org/', picture: '/sponsors/ecs.png' },
  { label: 'Echo AR', url: 'https://www.echoar.xyz/', picture: '/sponsors/echoar.png' },
  {
    label: 'Digital Ocean',
    url: 'https://digitalocean.com/',
    picture: '/sponsors/digitalocean.png'
  },
  { label: 'Repl dot IT', url: 'https://repl.it/', picture: '/sponsors/replit.png' },
  { label: 'Linode', url: 'https://www.linode.com/', picture: '/sponsors/linode.png' }
];

const partners: { label: string; url: string; picture: string }[] = [
  { label: 'ACM CSUF', url: 'https://acmcsuf.com/', picture: '/partners/acmcsuf.png' }
];

export default function SponsorsSection() {
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
        <div className={cn(styles['sponsors-container'])}>
          {sponsors.map(({ label, url, picture }) => (
            <a href={url} key={label}>
              <img src={picture} alt={label} />
            </a>
          ))}
        </div>
        <div className={cn(styles['partners-container'])}>
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
