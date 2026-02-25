"use client";

import { useCallback } from "react";

export default function HeaderClient() {
  const toggleMobile = useCallback(() => {
    const panel = document.getElementById("mobilePanel");
    panel?.classList.toggle("open");
  }, []);

  const closeMobile = useCallback(() => {
    const panel = document.getElementById("mobilePanel");
    panel?.classList.remove("open");
  }, []);

  return (
    <header className="header">
      <div className="nav">
        <a className="brand" href="#top" onClick={closeMobile}>
          Players Only Club
        </a>

        <nav className="navlinks" aria-label="Primary">
          <a href="#standard">Philosophy</a>
          <a href="#advisory">Analysis</a>
          <a href="#membership">Membership</a>
          <a href="#programs">Training</a>
          <a href="#consideration">Contact</a>
        </nav>

        <div className="navcta">
          <a className="pill" href="#consideration">
            Request Consideration
          </a>

          <button
            className="menuBtn"
            type="button"
            aria-label="Open menu"
            onClick={toggleMobile}
          >
            Menu
          </button>
        </div>
      </div>

      <div className="mobilePanel" id="mobilePanel" aria-label="Mobile Menu">
        <a href="#standard" onClick={closeMobile}>
          Philosophy
        </a>
        <a href="#advisory" onClick={closeMobile}>
          Analysis
        </a>
        <a href="#membership" onClick={closeMobile}>
          Membership
        </a>
        <a href="#programs" onClick={closeMobile}>
          Training
        </a>
        <a href="#consideration" onClick={closeMobile}>
          Contact
        </a>
      </div>
    </header>
  );
}