import cn from 'classnames';
import IllustrationContainer from './illustration-container';
import Tree from './illustrations/tree';
import Trailer from './illustrations/tuffy-trailer';
import styles from './sponsors-section-2021.module.css';
import { LEAF_COLORS } from '@lib/constants';
import { sponsors, partners, ICompanyLogo } from '@lib/sponsor-entries-2021';

const CompanyLogo = ({ label, url, picture }: ICompanyLogo) => (
  <a href={url} key={label}>
    <img src={picture} alt={label} />
  </a>
);

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
        <div className={cn(styles['logos-container'])}>{sponsors.map(CompanyLogo)}</div>
      </div>
      <div className={cn(styles['info-container'])}>
        <h2>Partners</h2>
        <div className={cn(styles['logos-container'])}>{partners.map(CompanyLogo)}</div>
      </div>
    </section>
  );
}
