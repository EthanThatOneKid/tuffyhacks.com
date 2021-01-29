import cn from 'classnames';
import { REGISTRATION } from '@lib/constants';
import styles from './call-to-action.module.css';

// TODO:
// Allow for custom text and link.
interface Props {}

export default function CallToAction() {
  return (
    <div className={cn(styles['call-to-action-container'])}>
      <a href={REGISTRATION} className={cn(styles['call-to-action'])}>
        Register Now
      </a>
    </div>
  );
}
