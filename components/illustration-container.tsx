import cn from 'classnames';
import styles from './illustration-container.module.css';

interface Props {
  children: any;
}

export default function IllustrationContainer({ children }: Props) {
  return <div className={cn(styles['illustration-container'])}>{children}</div>;
}
