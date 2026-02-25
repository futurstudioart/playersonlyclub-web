"use client";

import { useCallback } from "react";

export default function HeaderClient() {
  const toggleMenu = useCallback(() => {
    const panel = document.getElementById("mobilePanel");
    panel?.classList.toggle("open");
  }, []);

  const closeMenu = useCallback(() => {
    const panel = document.getElementById("mobilePanel");
    panel?.classList.remove("open");
  }, []);

  return (
    <header className="header">
      <div className="nav">
        <a className="brand" href="#top" onClick={closeMenu}>
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
          <a className="pill" href="#consideration" onClick={closeMenu}>
            Request Consideration
          </a>

          <button
            className="menuBtn"
            type="button"
            aria-label="Open menu"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
      </div>

      <div className="mobilePanel" id="mobilePanel" aria-label="Mobile Menu">
        <a href="#standard" onClick={closeMenu}>
          Philosophy
        </a>
        <a href="#advisory" onClick={closeMenu}>
          Analysis
        </a>
        <a href="#membership" onClick={closeMenu}>
          Membership
        </a>
        <a href="#programs" onClick={closeMenu}>
          Training
        </a>
        <a href="#consideration" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </header>
  );
}