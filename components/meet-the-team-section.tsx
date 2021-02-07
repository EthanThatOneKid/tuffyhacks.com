import cn from 'classnames';
import Footer from '@components/footer';
import teamMembers from '@lib/team-members';
import styles from './meet-the-team-section.module.css';

export default function MeetTheTeamSection() {
  return (
    <>
      <section id="meet-the-team" className={cn(styles.container)}>
        <h2 className={cn(styles['team-title'])}>Meet the Team</h2>
        <div className={cn(styles['team-list'])}>
          {teamMembers.map(({ name, role, pronouns, year, major, picture }) => {
            return (
              <div key={name} className={cn(styles['team-member'])}>
                {picture !== undefined && <img src={picture} alt={`Picture of ${name}'s face.`} />}
                {[name, role, pronouns, year, major].map(text => (
                  <p>{text}</p>
                ))}
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
