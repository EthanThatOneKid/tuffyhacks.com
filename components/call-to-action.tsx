import cn from 'classnames';
import { REGISTRATION } from '@lib/constants';
import styles from './call-to-action.module.css';

// TODO:
// Allow for custom text and link.
interface Props {
  classes: string[];
}

export default function CallToAction({ classes }: Props) {
  return (
    <div className={cn(styles['call-to-action-container'])}>
      <a href={REGISTRATION} className={cn(styles['call-to-action'], ...classes)}>
        Register Now
      </a>
    </div>
  );
}
