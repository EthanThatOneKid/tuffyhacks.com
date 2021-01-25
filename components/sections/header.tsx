import { useWindowWidth } from '@react-hook/window-size';
import cn from 'classnames';
import styles from './header.module.css';

const links: [string, string][] = [
  ['About', '#about'],
  ['Sponsor', '#sponsors'],
  ['FAQ', '#faq']
];

export default function Header() {
  const windowWidth = useWindowWidth();
  return (
    <header id="navbar" className={cn(styles.headerContainer)}>
      <h1>
        <a href="/#landing">TuffyHacks</a>
      </h1>
      {windowWidth >= 700 ? (
        <nav>
          <ul>
            {links.map(([title, anchor]) => {
              return (
                <li>
                  <a href={anchor}>{title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </header>
  );
}
