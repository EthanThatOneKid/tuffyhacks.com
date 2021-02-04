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
        <Tree type="square" leafColor={LEAF_COLORS[3]} bottom="0" left="5vw" width="22.5vw" />
        <Tree type="square" leafColor={LEAF_COLORS[3]} bottom="0" left="5vw" width="22.5vw" />
        <Tree type="curvy" leafColor={LEAF_COLORS[3]} bottom="0" left="5vw" width="22.5vw" />
        <Trailer bottom="0" left="15vw" width="15vw" />
      </IllustrationContainer>
      <div>
        <h2>Sponsors</h2>
        <div>Coming soon...</div>
        <p>
          Interested in sponsoring? Check out our 2021 sponsorship package. Click here for more
          details and instructions on how to sponsor.
        </p>
        <CallToAction text="Become a Sponsor" link={SPONSORSHIP} />
      </div>
    </section>
  );
}
