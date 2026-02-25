import HeaderClient from "./components/HeaderClient";

export default function Home() {
  return (
    <>
      <HeaderClient />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="seal fade" style={{ animationDelay: "80ms" }}>
            {/* Must exist at: /public/poc-logo.jpeg */}
            <img src="/poc-logo.jpeg?v=2" alt="Players Only Club crest" />
          </div>

          <div className="title fade" style={{ animationDelay: "160ms" }}>
            PLAYERS ONLY CLUB
          </div>

          <div className="motto fade" style={{ animationDelay: "230ms" }}>
            <span className="hairline" />
            <span>Virtus in ludo</span>
            <span className="hairline" />
          </div>

          <div className="scrollhint fade" style={{ animationDelay: "320ms" }}>
            Scroll
          </div>
        </section>

        {/* THE STANDARD */}
        <section className="section" id="standard">
          <div className="sectionHead">
            <h2>The Standard</h2>
            <p className="kicker">Society • Discipline • Craft</p>
          </div>
          <p className="prose">
            Players Only Club exists as a private environment dedicated to
            discipline, refinement, and excellence in the game. Performance is
            shaped through presence, awareness, and deliberate practice—where
            every detail matters and progress is measured by commitment to the
            craft. Entry is not defined by status, but by intention.
          </p>
        </section>

        {/* PERFORMANCE ADVISORY */}
        <section className="section" id="advisory">
          <div className="sectionHead">
            <h2>Performance Advisory</h2>
            <p className="kicker">Digital Presence</p>
          </div>
          <p className="prose">
            Competitive intelligence and off-court refinement—built for modern
            players who want clarity, structure, and tangible progress.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Match Analysis</h3>
              <p>
                Video breakdowns, tactical notes, and actionable priorities—designed
                to sharpen decision-making and execution.
              </p>
              <ul className="clean">
                <li>Patterns, shot selection, point construction</li>
                <li>Positioning, tempo control, adjustments</li>
                <li>Mental tendencies and momentum notes</li>
              </ul>
            </div>

            <div className="card">
              <h3>Tournament Intelligence</h3>
              <p>
                Pre-match frameworks, opponent mapping, and post-match review—built
                for consistency under pressure.
              </p>
              <ul className="clean">
                <li>Game plans + situational play</li>
                <li>Opponent scouting framework</li>
                <li>Competitive readiness checklist</li>
              </ul>
            </div>

            <div className="card">
              <h3>WFH Performance Workouts</h3>
              <p>
                Tennis-specific strength, mobility, and recovery—quiet, structured,
                and effective off-court.
              </p>
              <ul className="clean">
                <li>Stability, footwork strength, rotational power</li>
                <li>Mobility + resilience</li>
                <li>Recovery protocols</li>
              </ul>
            </div>

            <div className="card">
              <h3>Private Consultations</h3>
              <p>
                Strategy sessions for season mapping, performance roadmaps, and
                accountability—precise and outcome-driven.
              </p>
              <ul className="clean">
                <li>Training priorities</li>
                <li>Competition calendar planning</li>
                <li>Routine and habit design</li>
              </ul>
            </div>

            <div className="chips" aria-label="Services list">
              <span className="chip">Video Review Reports</span>
              <span className="chip">Tactical Game Plans</span>
              <span className="chip">Opponent Prep</span>
              <span className="chip">Remote Strength Programs</span>
              <span className="chip">Mobility + Recovery</span>
              <span className="chip">Season Strategy</span>
            </div>
          </div>
        </section>

        {/* MEMBERSHIP */}
        <section className="section" id="membership">
          <div className="sectionHead">
            <h2>Membership</h2>
            <p className="kicker">Standing within the club</p>
          </div>
          <p className="prose">
            Membership is structured to recognize engagement, progression, and
            contribution within the club environment. Advancement reflects
            participation and commitment to the standard.
          </p>

          <div className="grid">
            <div className="tier">
              <div className="lvl">Level I</div>
              <div className="name">Initiate</div>
              <div className="tone">The beginning of your standing.</div>
              <ul className="clean">
                <li>Access to club sessions</li>
                <li>Foundational assessment</li>
                <li>Orientation within the standard</li>
              </ul>
            </div>

            <div className="tier">
              <div className="lvl">Level II</div>
              <div className="name">Player</div>
              <div className="tone">Commitment expressed through participation.</div>
              <ul className="clean">
                <li>Structured training pathway</li>
                <li>Match play integration</li>
                <li>Coaching guidance + tracking</li>
              </ul>
            </div>

            <div className="tier">
              <div className="lvl">Level III</div>
              <div className="name">Inner Circle</div>
              <div className="tone">Recognized within the club.</div>
              <ul className="clean">
                <li>Priority scheduling</li>
                <li>Advanced coaching access</li>
                <li>Private sessions + strategy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TRAINING */}
        <section className="section" id="programs">
          <div className="sectionHead">
            <h2>Training &amp; Programs</h2>
            <p className="kicker">On-court presence</p>
          </div>
          <p className="prose">
            Physical presence begins through curated residencies and private
            cohorts—structured sessions designed to elevate execution, composure,
            and competitive consistency.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Private Coaching</h3>
              <p>
                Precision work for technical refinement, match discipline, and
                progress with clear priorities.
              </p>
            </div>
            <div className="card">
              <h3>Training Blocks</h3>
              <p>
                Focused multi-week intensives designed to produce measurable
                outcomes in key performance areas.
              </p>
            </div>
          </div>
        </section>

        {/* CONSIDERATION */}
        <section className="section" id="consideration">
          <div className="sectionHead">
            <h2>Request Consideration</h2>
            <p className="kicker">Invitation • Merit</p>
          </div>
          <p className="prose">
            If you feel aligned with the environment, begin a conversation. A member
            of the club will respond with next steps.
          </p>

          {/* No onSubmit handler here (server-safe). We'll keep it static-styled. */}
          <form className="form" action="#" method="post">
            <input name="name" placeholder="Full Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us what you're seeking (training, analysis, membership)"
            />
            <button type="submit">Request Consideration</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="foot">
          <div>
            <div className="society">Players Only Club</div>
            <div className="footsub">EST 2026 • — Virtus in ludo —</div>
          </div>
          <div className="byline">By invitation or merit</div>
        </div>
      </footer>
    </>
  );
}