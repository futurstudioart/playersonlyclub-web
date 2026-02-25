"use client";

import { useState } from "react";

export default function LogoClient() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        data-logo-fallback="true"
        style={{
          marginTop: "10px",
          fontSize: "12px",
          letterSpacing: ".12em",
          opacity: 0.8,
          textAlign: "center",
          maxWidth: "520px",
        }}
      >
        Logo failed to load. Confirm the file exists at <b>/public/poc-logo.jpeg</b>{" "}
        (exact name + case).
      </div>
    );
  }

  return (
    <img
      src="/poc-logo.jpeg?v=2"
      alt="Players Only Club crest"
      onError={() => setFailed(true)}
      loading="eager"
      decoding="async"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  );
}