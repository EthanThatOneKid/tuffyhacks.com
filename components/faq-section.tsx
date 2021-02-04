import cn from 'classnames';
import Footer from '@components/footer';
import styles from './faq-section.module.css';

interface FaqEntry {
  question: string;
  answer: string;
}

const faqEntries: FaqEntry[] = [
  {
    question: 'What is a hackathon?',
    answer:
      'A hackathon is a weekend-long event where students come together to learn the latest technologies and build innovative technologies.'
  },
  {
    question: 'Who can participate?',
    answer:
      "Any current college student or have graduated in the past year, you're more than welcome to attend! Not a student? No problem! You can attend as a mentor and help out our students! Mentor applications will be opening soon."
  },
  {
    question: 'What if I have no prior experience in programming, coding, or hackathons?',
    answer:
      'We don’t expect hackers to have any prior experience. We will be providing starter packs and beginner-friendly workshops to help new hackers get their projects off the ground.'
  },
  { question: 'How much does it cost to attend TuffyHacks?', answer: 'It is free!' },
  { question: 'What do I need?', answer: 'A computer and a passion for TuffyHacks mission!' },
  {
    question: 'Do I need to have a group?',
    answer:
      'Not at all! You can be a lone wolf, come with a team (no more than four people), or join some teams at TuffyHacks. We’ll also have team building activities to help you find the right teammates!'
  },
  {
    question: 'How many people can I have per group?',
    answer: 'You may have a maximum of four group members.'
  },

  {
    question: 'When and where is TuffyHacks??',
    answer:
      'TuffyHacks is taking place from March 27th to March 28th. Due to the COVID-19 pandemic and for the health and safety of all students, this hackathon will be held virtually.'
  },
  {
    question: 'What can I build?',
    answer:
      "Anything your heart desires! Web, mobile, gaming, VR... You name it, we'll support it. We have five challenges that will have extra resources, sponsored challenges, and other events to inspire you."
  },
  {
    question: 'Question not found?',
    answer:
      "Please email info@tuffyhacks.com if you have any questions! We'd love to hear from you."
  }
];

export default function SponsorsSection() {
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
