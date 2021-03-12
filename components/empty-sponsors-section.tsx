import cn from 'classnames';
import IllustrationContainer from './illustration-container';
import Tree from './illustrations/tree';
import Trailer from './illustrations/tuffy-trailer';
import styles from './sponsors-section.module.css';
import CallToAction from './call-to-action';
import { LEAF_COLORS, SPONSORSHIP } from '@lib/constants';

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
        <div>
          <p>Coming soon...</p>
        </div>
        <p>
          Interested in sponsoring? Check out our 2021 sponsorship package. Click here for more
          details and instructions on how to sponsor.
        </p>
        <CallToAction text="Become a Sponsor" link={SPONSORSHIP} />
      </div>
    </section>
  );
}
