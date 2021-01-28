import React from "react"

import "../styles/Content.scss"

export default function About() {
  return (
    <section id="about">
      <div>
        <div id="stats">
          <p>300 Hackers.</p>
          <p>24 Hours.</p>
          <p>Infinite Potential.</p>
        </div>
        <div id="info">
          <h2>Empowering Students</h2>
          <p>
            acmCSUF, Theta Tau, and other STEM Clubs are uniting to host Cal
            State Fullerton's first 24-hour virtual hackathon for beginners and
            first-time hackers, where participants from all our college create
            innovative products. This year, our hackathon will be held virtually
            on March 27 - 28th, meaning you can participate from the comfort of
            your own home! Come learn new topics with recorded workshops ranging
            from intro to Design to creating your own DiscordBot. Meet our
            sponsors at their networking events. Your project also has the
            chance to win some of our cool prizes!
          </p>
          {/* <a href="#get-updates" className="cta">
            Get Updates
          </a> */}
        </div>
      </div>
      {/* <img className="graphic" src="./assets/moon.svg" alt="Moon" />
      <img
        className="graphic"
        src="./assets/marshmellow-on-a-stick.svg"
        alt="Marshmellow on a stick!"
      />
      <img className="graphic" src="./assets/campfire.svg" alt="Campfire" /> */}
    </section>
  )
}
