import cn from 'classnames';
import Footer from '@components/footer';
import faqEntries from '@lib/faq-entries';
import styleUtils from "./utils.module.css"
import styles from './faq-section.module.css';
import { EVENT_DATE } from '@lib/constants';
import Countdown from 'react-countdown';
import {formatTimeWithUnits} from './countdown-format';

export default function FaqSection() {
  return (
    <>
      <section id="faq" className={cn(styles.container)}>
        <h2 className={cn(styles['faq-title'])}>Frequently Asked Questions</h2>
        <div className={cn(styles['faq-list'])}>
          {faqEntries.map(({ question, answer }) => {
            return (
              <div key={question} className={cn(styles['faq-list-item'])}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            );
          })}
          <div className={cn(styles['faq-list-item'])}>
            <h3>When does TuffyHacks begin?</h3>
            <Countdown 
              date={EVENT_DATE} 
              renderer={
                ({ days, hours, minutes, seconds }: any) =>
                  <p>
                    TuffyHacks will begin on Saturday March 27th, 2021 at 11:00 AM PST which is in {formatTimeWithUnits(days, 'day')},{" "}
                    {formatTimeWithUnits(hours, 'hour')},{" "}
                    {formatTimeWithUnits(minutes, 'minute')},{" "}
                    and {formatTimeWithUnits(seconds, 'second')}.
                  </p>
              }/>
        </div>
        </div>
        <a href="/#top">
          <svg
            width={58}
            height={33}
            viewBox="0 0 58 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 29L28.522 4.478a.676.676 0 01.956 0L54 29"
              stroke="#513513"
              strokeWidth={6.757}
              strokeLinecap="round"
            />
          </svg>
        </a>
      </section>
      <Footer />
    </>
  );
}
