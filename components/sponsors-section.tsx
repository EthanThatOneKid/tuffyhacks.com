import cn from 'classnames';
import styles from './sponsors-section.module.css';
import CallToAction from './call-to-action';
import { SPONSORSHIP } from '@lib/constants';

export default function SponsorsSection() {
  return (
    <section id="sponsors" className={cn(styles.container)}>
      <div>
        <h2>Sponsors</h2>
        <div>Coming soon...</div>
        <p>
          Interested in sponsoring? Check out our 2021 sponsorship package. Click here for more
          details and instructions on how to sponsor.
        </p>
        <CallToAction text="Become a Sponsor" link={SPONSORSHIP} />
      </div>
      <div className={cn(styles['sponsors-illustration-container'])}>
        <div>
          <img src="/assets/tree.png" />
        </div>
        <div>
          <img src="/assets/trailer.png" />
        </div>
      </div>
    </section>
  );
}
