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
                <img
                  src={`team-members/${picture || 'placeholder.png'}`}
                  alt={`Picture of ${name}'s face.`}
                />
                <p>{name}</p>
                <p>{role}</p>
                <p>{pronouns}</p>
                <p>{year !== 'Alumni' ? `${year} Year` : year}</p>
                <p>{major}</p>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
