import cn from 'classnames';
import styles from './about-section.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={cn(styles.container)}>
      <div className={cn(styles.statistics)}>
        <p>300 Hackers</p>
        <p>24 Hours</p>
        <p>Infinite Potential</p>
      </div>
      <div className={cn(styles['info-container'])}>
        <h2>Empowering Students</h2>
        <p>
          acmCSUF, Theta Tau, and other STEM clubs are uniting to host California State University
          Fullerton's first 24-hour hackathon for beginners and first-time hackers. This year, our
          hackathon will be held virtually on March 27th-28th meaning you can participate from the
          comfort of your own home!
        </p>
        <p>
          Come learn new topics with workshops ranging from <em>Intro to Design</em> to{' '}
          <em>Create Your Own Discord Bot</em>. You can even meet representatives from our generous
          sponsors during our networking event. Your project also has the chance to win cool prizes!
          We hope that you are as excited about this event as we are!
        </p>
      </div>
      <div className={cn(styles['about-illustration-container'])}>
        <div>
          <img src="/assets/moon.png" />
        </div>
        <div>
          <img src="/assets/campfire.png" />
        </div>
      </div>
    </section>
  );
}
