"use client";

import { useState } from "react";

export default function ConsiderationFormClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        // Next: wire to email/CRM endpoint.
      }}
    >
      <input name="name" placeholder="Full Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea
        name="message"
        rows={5}
        placeholder="Tell us what you're seeking (training, analysis, membership)"
      />

      <button type="submit">{submitted ? "Received" : "Request Consideration"}</button>

      {submitted && (
        <p style={{ margin: 0, color: "rgba(237,234,229,.65)", fontSize: 12, letterSpacing: ".08em" }}>
          Submitted. Next step: wire to email/CRM.
        </p>
      )}
    </form>
  );
}