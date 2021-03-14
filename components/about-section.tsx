import cn from 'classnames';
import CallToAction from './call-to-action';
import IllustrationContainer from './illustration-container';
import Moon from './illustrations/tuffy-moon';
import Campfire from './illustrations/tuffy-campfire';
import MarshmellowOnAStick from './illustrations/marshmellow-on-a-stick';
import styles from './about-section.module.css';
import { REGISTRATION } from '@lib/constants';

export default function AboutSection() {
  return (
    <section id="about" className={cn(styles.container)}>
      <IllustrationContainer>
        <Moon top="2em" left="2em" width="17vw" />
        <Campfire bottom="0" left="16vw" width="17vw" />
        <MarshmellowOnAStick bottom="8em" left="0" width="16vw" />
      </IllustrationContainer>
      <div className={cn(styles.statistics)}>
        <p>300 Hackers</p>
        <p>24 Hours</p>
        <p>Infinite Potential</p>
      </div>
      <div className={cn(styles['info-container'])}>
        <h2>Empowering Students</h2>
        <p>
          acmCSUF, Theta Tau (ΦΕ), and other STEM clubs are uniting to host California State
          University Fullerton's first 24-hour hackathon for beginners and first-time hackers. This
          year, our hackathon will be held virtually on March 27th-28th meaning you can participate
          from the comfort of your own home!
        </p>
        <p>
          Come learn new topics with workshops ranging from <em>Intro to Design</em> to{' '}
          <em>Create Your Own Discord Bot</em>. You can even meet representatives from our generous
          sponsors during our networking event. Your project also has the chance to win cool prizes!
          We hope that you are as excited about this event as we are!
        </p>
        <CallToAction text="Apply" link={REGISTRATION} />
      </div>
    </section>
  );
}
