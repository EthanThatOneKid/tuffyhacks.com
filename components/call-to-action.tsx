import cn from 'classnames';
import { REGISTRATION } from '@lib/constants';
import styles from './call-to-action.module.css';

// TODO:
// Allow for custom text and link.
interface Props {
  text?: string;
  link?: string;
  classes?: string[];
}

export default function CallToAction({
  text = 'Register Now',
  link = REGISTRATION,
  classes = []
}: Props) {
  return (
    <a href={link} className={cn(styles['call-to-action'], ...classes)}>
      {text}
    </a>
  );
}
