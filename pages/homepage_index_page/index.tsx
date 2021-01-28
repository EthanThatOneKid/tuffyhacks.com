import React from "react"
import Helmet from "react-helmet"
import Header from "../components/Header"
import Social from "../components/Social"
import Content from "../components/Old-Content"
import Landing from "../components/Landing"
import About from "../components/About"
import Sponsors from "../components/Sponsors"
import FAQ from "../components/FAQ"
import "../styles/main.scss"

export default function Home() {
  return (
    <>
      <Helmet>
        
        <meta charSet="utf-8" />
        <title>TuffyHacks 2021</title>

        {/* Adhering to Open Graph protocol (https://ogp.me/) */}
        <meta property="og:title" content="TuffyHacks" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="mascot.png" />
        <meta property="og:site_name" content="TuffyHacks" />
      </Helmet>
      <Header />
      {/* <Social /> */}
   
      <Landing />
      <About />
      <Sponsors />
      <FAQ/>
    </>
  )
}
