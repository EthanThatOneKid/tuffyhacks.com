import cn from 'classnames';
import Footer from '@components/footer';
import styles from './faq-section.module.css';

export default function SponsorsSection() {
  return (
    <>
      <section id="faq" className={cn(styles.container)}>
        <div>
          <h2>Frequently Asked Questions</h2>
          <div>
            <div>
              <h3>What is TuffyHacks</h3>
              <p>Answer Here</p>
            </div>
            <div>
              <h3>Will TuffyHacks happen in-person or virtually?</h3>
              <p>Answer Here</p>
            </div>
            <div>
              <h3>Who can participate?</h3>
              <p>Answer Here</p>
            </div>
            <div>
              <h3>What if I've never been to a hackathon before?</h3>
              <p>Answer Here</p>
            </div>
            <div>
              <h3>How much does it cost to attend TuffyHacks?</h3>
              <p>Answer Here</p>
            </div>
            <div>
              <h3>When do hacker applications open?</h3>
              <p>Answer Here</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
