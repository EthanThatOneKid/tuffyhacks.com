import React from "react"
import GetUpdates from "./GetUpdates"
import "../styles/Content.scss"

export default function FAQ() {
  return (

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <div>
          <div className="faq-container">
            <div className="faq-column">
              <details>
                <summary>What is a hackathon?</summary>A hackathon is a
                weekend-long event where students come together to learn the
                latest technologies and build innovative technologies.
              </details>
              <details>
                <summary>When and where is TuffyHacks?</summary>
                TuffyHacks is taking place from March 27th to March 28th. Due to
                the COVID-19 pandemic and for the health and safety of all
                students, this hackathon will be held virtually.
              </details>
              <details>
                <summary>Who can participate?</summary>
                Any current college student or have graduated in the past year,
                you're more than welcome to attend! Not a student? No problem!
                You can attend as a mentor and help out our students! Mentor
                applications will be opening soon
              </details>
              <details>
                <summary>
                  What if I have no prior experience in programming, coding, or
                  hackathons?
                </summary>
                We don’t expect hackers to have any prior experience. We will be
                providing starter packs and beginner-friendly workshops to help
                new hackers get their projects off the ground.
              </details>
              <details>
                <summary>How much does it cost to attend Tuffy Hacks?</summary>
                Its free!
              </details>
            </div>
            {/* Second Column */}
            <div className="faq-column">
              <details>
                <summary>When do hacker applications open?</summary>
                Check back on the website sometime in January 2021.
              </details>
              <details>
                <summary>What do I need?</summary>A computer and a passion for
                TuffyHacks mission!
              </details>
              <details>
                <summary>Do I need to have a group? </summary>
                Not at all! You can be a lone wolf, come with a team (no more
                than four people), or join some teams at TuffyHacks. We’ll also
                have team building activities to help you find the right
                teammates!
              </details>
              <details>
                <summary>How many people can I have per group? </summary>
                Maximum of 4 people.
              </details>
              <details>
                <summary>Question not found?</summary>
                Please email{" "}
                <a href="mailto:tuffyhacks@gmail.com">
                  tuffyhacks@gmail.com
                </a>{" "}
                if you have any questions! We'd love to hear from you.
              </details>
            </div>
          </div>
        </div>
        
        {/* <a href="/team" className="cta">
            Our Team
          </a> */}
      </section>


  )
}
