import React from "react"
import { useWindowWidth } from "@react-hook/window-size" // https://github.com/jaredLunde/react-hook/tree/master/packages/window-size#readme
import "../styles/Header.scss"

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', { header: '#navbar' })
}

const links: [string, string][] = [
  ["About", "#about"],
  ["Sponsor", "#sponsors"],
  ["FAQ", "#faq"],
]

export default function Header() {
  const windowWidth = useWindowWidth()
  return (
    <header id="navbar">
      <h1><a href="/#landing">TuffyHacks</a></h1>
      {windowWidth >= 700 ? (
        <nav>
          <ul>
            {links.map(([title, anchor]) => {
              return (
                <li key={title}>
                  <a href={anchor}>{title}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </header>
  )
}
