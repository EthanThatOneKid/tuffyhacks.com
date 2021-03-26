import cn from 'classnames';
import { REGISTRATION } from '@lib/constants';
import styles from './call-to-action.module.css';

// TODO:
// Allow for custom text and link.
interface Props {
  text?: string;
  link?: string;
  disabled?: boolean;
  classes?: string[];
}

export default function CallToAction({
  text = 'Register Now',
  link = REGISTRATION,
  disabled = false,
  classes = []
}: Props) {
  return disabled ? (
    <span
      title="Hacker applications have closed."
      className={cn(styles['call-to-action'], ...classes)}
    >
      {text}
    </span>
  ) : (
    <a href={link} className={cn(styles['call-to-action'], ...classes)}>
      {text}
    </a>
  );
}
