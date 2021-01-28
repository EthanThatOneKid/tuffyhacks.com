import React from "react"
import "../styles/Content.scss"

export default function Landing() {
  return (
    // <main>
    <section id="landing">
      <div>
        <img src="./assets/splash-title2.png" />
        {/* <h1>TuffyHacks 2021</h1> */}
        {/* <p>Making dreams reality</p> */}
        <br />
        <time className="when" dateTime="2021-3-27">
          March 27-28, 2021 • Online Event
        </time>
        {/* <br />
        <br /> */}
        <div className="cta-container">
          {/* <a href="#get-updates" className="cta">
            Get Updates
          </a> */}

          {/* Uncomment when the site is completely updated */}
          <a href="https://tinyurl.com/tuffyhacks2021-app" className="cta">
              Apply Now
            </a>

          <a href="#about" className="cta">
            Learn More
          </a>
        </div>
        {/* <p>Interested in sponsoring?</p> */}
      </div>
      <img className="graphic" src="./assets/tree-1.svg" alt="Tree 1" />
      <img className="graphic" src="./assets/tree-2.svg" alt="Tree 2" />
      <img className="graphic" src="./assets/tree-3.svg" alt="Tree 3" />
      <img
        className="graphic"
        src="./assets/tuffy-camper.svg"
        alt="Tuffy the Camper"
      />
      <img className="graphic" src="./assets/tent.svg" alt="Tent" />
    </section>

    // </main>
  )
}
