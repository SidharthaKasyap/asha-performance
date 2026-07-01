"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend yet — this is where you'd POST to an API route or CRM.
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {submitted && (
        <div className="form-success" role="status">
          Thanks — your message is in. Our network team will get back to you
          within one business day.
        </div>
      )}

      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" required placeholder="Jane Doe" />
      </div>

      <div className="field">
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
        />
      </div>

      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" placeholder="Company name" />
      </div>

      <div className="field">
        <label htmlFor="vertical">Vertical</label>
        <select id="vertical" name="vertical" defaultValue="">
          <option value="" disabled>
            Select a vertical
          </option>
          <option>E-Commerce</option>
          <option>Travel</option>
          <option>BFSI</option>
          <option>Education</option>
          <option>Other</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">What are you looking to launch?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your offer, target CPA, and volume goals…"
        />
      </div>

      <button type="submit" className="btn btn-dark">
        Send message
      </button>
      <p className="form-note">
        We reply within one business day. No spam, ever.
      </p>
    </form>
  );
}
