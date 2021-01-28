import React from "react"
import "../styles/GetUpdates.scss"

const mailchimpUrl =
    "https://tuffyhacks.us2.list-manage.com/subscribe/post?u=d31df1f969a989a94e25f8dc6&amp;id=441948ac07",
  mailchimpId = "b_d31df1f969a989a94e25f8dc6_441948ac07"

export default function GetUpdates() {
  return (
    <div>
      <form action={mailchimpUrl} method="post" target="_blank" noValidate>
        <input
          type="email"
          name="EMAIL"
          className="email-input-field"
          placeholder="enter your email"
          required
        />
        <input
          type="text"
          name={mailchimpId}
          tabIndex={-1}
          className="hidden"
        />
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          className="cta"
        />
      </form>
    </div>
  )
}
