export default function Home() {
  return (
    <>
      <header className="header">
        <div className="nav">
          <a className="brand" href="#top">Players Only Club</a>

          <nav className="navlinks" aria-label="Primary">
            <a href="#standard">Philosophy</a>
            <a href="#advisory">Analysis</a>
            <a href="#membership">Membership</a>
            <a href="#programs">Training</a>
            <a href="#consideration">Contact</a>
          </nav>

          <div className="navcta">
            <a className="pill" href="#consideration">Request Consideration</a>
            <button className="menuBtn" type="button" aria-label="Open menu"
              onClick={() => {
                const panel = document.getElementById("mobilePanel");
                panel?.classList.toggle("open");
              }}
            >
              Menu
            </button>
          </div>
        </div>

        <div className="mobilePanel" id="mobilePanel" aria-label="Mobile Menu">
          <a href="#standard">Philosophy</a>
          <a href="#advisory">Analysis</a>
          <a href="#membership">Membership</a>
          <a href="#programs">Training</a>
          <a href="#consideration">Contact</a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="seal fade" style={{ animationDelay: "80ms" }}>
            {/* Put your logo in /public/crest.png */}
            <img src="/poc-logo.jpeg" alt="Players Only Club crest" />
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
            Players Only Club exists as a private environment dedicated to discipline, refinement, and excellence in the game.
            Performance is shaped through presence, awareness, and deliberate practice—where every detail matters and progress
            is measured by commitment to the craft. Entry is not defined by status, but by intention.
          </p>
        </section>

        {/* PERFORMANCE ADVISORY */}
        <section className="section" id="advisory">
          <div className="sectionHead">
            <h2>Performance Advisory</h2>
            <p className="kicker">Digital Presence</p>
          </div>
          <p className="prose">
            Competitive intelligence and off-court refinement—built for modern players who want clarity, structure, and tangible progress.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Match Analysis</h3>
              <p>Video breakdowns, tactical notes, and actionable priorities—designed to sharpen decision-making and execution.</p>
              <ul className="clean">
                <li>Patterns, shot selection, point construction</li>
                <li>Positioning, tempo control, adjustments</li>
                <li>Mental tendencies and momentum notes</li>
              </ul>
            </div>

            <div className="card">
              <h3>Tournament Intelligence</h3>
              <p>Pre-match frameworks, opponent mapping, and post-match review—built for consistency under pressure.</p>
              <ul className="clean">
                <li>Game plans + situational play</li>
                <li>Opponent scouting framework</li>
                <li>Competitive readiness checklist</li>
              </ul>
            </div>

            <div className="card">
              <h3>WFH Performance Workouts</h3>
              <p>Tennis-specific strength, mobility, and recovery—quiet, structured, and effective off-court.</p>
              <ul className="clean">
                <li>Stability, footwork strength, rotational power</li>
                <li>Mobility + resilience</li>
                <li>Recovery protocols</li>
              </ul>
            </div>

            <div className="card">
              <h3>Private Consultations</h3>
              <p>Strategy sessions for season mapping, performance roadmaps, and accountability—precise and outcome-driven.</p>
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
            Membership is structured to recognize engagement, progression, and contribution within the club environment.
            Advancement reflects participation and commitment to the standard.
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
            Physical presence begins through curated residencies and private cohorts—structured sessions designed to elevate execution,
            composure, and competitive consistency.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Private Coaching</h3>
              <p>Precision work for technical refinement, match discipline, and progress with clear priorities.</p>
            </div>
            <div className="card">
              <h3>Training Blocks</h3>
              <p>Focused multi-week intensives designed to produce measurable outcomes in key performance areas.</p>
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
            If you feel aligned with the environment, begin a conversation. A member of the club will respond with next steps.
          </p>

          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Submitted. Next: wire this to email/CRM.");
            }}
          >
            <input name="name" placeholder="Full Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" rows={5} placeholder="Tell us what you're seeking (training, analysis, membership)" />
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

Global.css

:root{
  --bg0:#0A0A0A;
  --bg1:#0B0B0B;
  --ivory:#EDEAE5;
  --muted: rgba(237,234,229,.72);
  --muted2: rgba(237,234,229,.55);
  --line: rgba(237,234,229,.12);
  --gold:#B08A6A;
  --gold2:#C6A17E;

  --serif: "Cormorant Garamond","Garamond","Times New Roman",serif;
  --sans: "Inter",system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;

  --max: 1120px;
  --pad: clamp(18px, 3vw, 40px);
  --radius: 18px;
}

*{ box-sizing:border-box; }
html,body{ height:100%; }
html{ scroll-behavior:smooth; }

body{
  margin:0;
  color:var(--ivory);
  font-family:var(--sans);
  background:
    radial-gradient(1200px 780px at 50% 8%, rgba(176,138,106,.10), transparent 56%),
    radial-gradient(900px 600px at 66% 92%, rgba(176,138,106,.05), transparent 58%),
    linear-gradient(180deg, var(--bg0), var(--bg1) 55%, #080808);
  overflow-x:hidden;
}

/* Secret-society vignette */
body:before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  background: radial-gradient(1000px 700px at 50% 26%, transparent 55%, rgba(0,0,0,.62) 100%);
  opacity:.75;
  z-index:0;
}

a{ color:inherit; text-decoration:none; }
a:hover{ color:var(--gold2); }

/* Header / Nav */
.header{
  position:sticky;
  top:0;
  z-index:20;
  backdrop-filter: blur(10px);
  background: linear-gradient(180deg, rgba(11,11,11,.88), rgba(11,11,11,.55));
  border-bottom:1px solid rgba(237,234,229,.08);
}

.nav{
  max-width:var(--max);
  margin:0 auto;
  padding:14px var(--pad);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
}

.brand{
  font-family:var(--serif);
  font-weight:600;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-size:12px;
  opacity:.95;
  white-space:nowrap;
}

.navlinks{
  display:flex;
  align-items:center;
  gap: clamp(14px, 2vw, 26px);
  font-size:12px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--muted);
}
.navlinks a{ padding:8px 2px; }

.navcta{ display:flex; align-items:center; gap:10px; }

.pill{
  border:1px solid rgba(176,138,106,.55);
  border-radius:999px;
  padding:10px 14px;
  font-size:11px;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:rgba(237,234,229,.86);
  background: rgba(176,138,106,.06);
  transition: transform .18s ease, background .18s ease, border-color .18s ease;
  white-space:nowrap;
}
.pill:hover{
  background: rgba(176,138,106,.12);
  border-color: rgba(176,138,106,.85);
  transform: translateY(-1px);
}

.menuBtn{
  display:none;
  border:1px solid rgba(237,234,229,.14);
  background: rgba(18,18,18,.45);
  color:var(--ivory);
  border-radius:12px;
  padding:10px 12px;
  font-size:12px;
  letter-spacing:.14em;
  text-transform:uppercase;
}

/* Mobile menu */
.mobilePanel{
  display:none;
  border-top:1px solid rgba(237,234,229,.08);
  background: rgba(11,11,11,.92);
}
.mobilePanel.open{ display:block; }
.mobilePanel a{
  display:block;
  padding:14px var(--pad);
  border-bottom:1px solid rgba(237,234,229,.06);
  font-size:12px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color: rgba(237,234,229,.75);
}

/* Hero */
.hero{
  position:relative;
  z-index:1;
  max-width:var(--max);
  margin:0 auto;
  padding: clamp(56px, 8vw, 118px) var(--pad) clamp(44px, 7vw, 92px);
  display:grid;
  place-items:center;
  text-align:center;
}

.seal{
  width:min(330px, 78vw);
  aspect-ratio:1/1;
  position:relative;
  display:grid;
  place-items:center;
  margin-bottom:22px;
}
.seal:before{
  content:"";
  position:absolute;
  inset:-16px;
  border-radius:999px;
  background: radial-gradient(circle at 50% 50%,
    rgba(176,138,106,.22) 0%,
    rgba(176,138,106,.10) 30%,
    rgba(176,138,106,.05) 46%,
    transparent 64%);
  filter: blur(9px);
  opacity:.92;
  pointer-events:none;
}
.seal img{
  width:100%;
  height:100%;
  object-fit:contain;
  filter: drop-shadow(0 18px 44px rgba(0,0,0,.55));
}

.title{
  font-family:var(--serif);
  font-weight:600;
  letter-spacing:.22em;
  text-transform:uppercase;
  margin: 10px 0 10px;
  font-size: clamp(16px, 2.2vw, 22px);
  color: rgba(237,234,229,.94);
}

.motto{
  font-family:var(--serif);
  font-style:italic;
  letter-spacing:.18em;
  font-size: clamp(13px, 1.6vw, 18px);
  color: rgba(237,234,229,.74);
  margin: 0;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
}
.hairline{ width:44px; height:1px; background: rgba(237,234,229,.18); }

.scrollhint{
  margin-top:32px;
  font-size:11px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color: rgba(237,234,229,.50);
}

/* Sections */
.section{
  max-width:var(--max);
  margin:0 auto;
  padding: clamp(36px, 5vw, 70px) var(--pad);
  border-top:1px solid rgba(237,234,229,.07);
}

.sectionHead{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:18px;
  flex-wrap:wrap;
  margin-bottom:22px;
}

h2{
  margin:0;
  font-family:var(--serif);
  font-weight:600;
  letter-spacing:.06em;
  font-size: clamp(26px, 3vw, 40px);
  color: rgba(237,234,229,.96);
}

.kicker{
  margin:0;
  font-size:12px;
  letter-spacing:.18em;
  text-transform:uppercase;
  color: var(--muted2);
  white-space:nowrap;
}

.prose{
  max-width:74ch;
  color: rgba(237,234,229,.80);
  font-size:16px;
  line-height:1.8;
  margin:10px 0 0;
}

.grid{
  display:grid;
  grid-template-columns: repeat(12,1fr);
  gap: 18px;
  margin-top: 26px;
}

.card{
  grid-column: span 6;
  border:1px solid rgba(237,234,229,.10);
  background: linear-gradient(180deg, rgba(18,18,18,.62), rgba(11,11,11,.12));
  border-radius: var(--radius);
  padding: 22px;
  position:relative;
  overflow:hidden;
}
.card:before{
  content:"";
  position:absolute;
  inset:-50px;
  background: radial-gradient(circle at 18% 12%, rgba(176,138,106,.10), transparent 48%);
  opacity:.85;
  pointer-events:none;
}
.card h3{
  position:relative;
  z-index:1;
  margin:0 0 8px;
  font-family:var(--serif);
  font-weight:600;
  font-size:20px;
  letter-spacing:.02em;
}
.card p{
  position:relative;
  z-index:1;
  margin:0;
  color: rgba(237,234,229,.74);
  font-size:15px;
  line-height:1.7;
}

.clean{
  position:relative;
  z-index:1;
  margin: 14px 0 0;
  padding-left: 18px;
  color: rgba(237,234,229,.72);
  font-size:14px;
  line-height:1.8;
}

/* Tiers */
.tier{
  grid-column: span 4;
  border:1px solid rgba(237,234,229,.10);
  background: linear-gradient(180deg, rgba(18,18,18,.62), rgba(11,11,11,.10));
  border-radius: var(--radius);
  padding: 22px;
  position:relative;
  overflow:hidden;
}
.tier:before{
  content:"";
  position:absolute;
  inset:-60px;
  background: radial-gradient(circle at 20% 10%, rgba(176,138,106,.08), transparent 55%);
  opacity:.75;
  pointer-events:none;
}
.lvl{
  position:relative;
  z-index:1;
  font-size:11px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color: rgba(237,234,229,.60);
  margin-bottom: 10px;
}
.name{
  position:relative;
  z-index:1;
  font-family:var(--serif);
  font-weight:600;
  font-size:22px;
  margin:0 0 8px;
}
.tone{
  position:relative;
  z-index:1;
  margin:0 0 14px;
  font-family:var(--serif);
  font-style:italic;
  letter-spacing:.03em;
  color: rgba(176,138,106,.92);
}

/* Chips */
.chips{
  grid-column: span 12;
  display:flex;
  flex-wrap:wrap;
  gap: 12px;
  margin-top: 8px;
}
.chip{
  border:1px solid rgba(237,234,229,.10);
  background: rgba(18,18,18,.35);
  border-radius:999px;
  padding: 10px 14px;
  font-size:12px;
  letter-spacing:.06em;
  color: rgba(237,234,229,.76);
}

/* Form */
.form{
  margin-top: 18px;
  max-width: 560px;
  display:grid;
  gap: 12px;
}
input, textarea{
  width:100%;
  padding: 14px 14px;
  border-radius: 14px;
  border:1px solid rgba(237,234,229,.12);
  background: rgba(18,18,18,.45);
  color: var(--ivory);
  font-family: var(--sans);
  font-size:14px;
  outline:none;
}
input:focus, textarea:focus{
  border-color: rgba(176,138,106,.60);
  box-shadow: 0 0 0 3px rgba(176,138,106,.12);
}
button{
  justify-self:start;
  cursor:pointer;
  border:1px solid rgba(176,138,106,.58);
  border-radius:999px;
  background: transparent;
  color: rgba(237,234,229,.90);
  padding: 12px 16px;
  font-size: 11px;
  letter-spacing:.22em;
  text-transform:uppercase;
  transition: transform .18s ease, background .18s ease, border-color .18s ease;
}
button:hover{
  background: rgba(176,138,106,.10);
  border-color: rgba(176,138,106,.90);
  transform: translateY(-1px);
}

/* Footer */
.footer{
  border-top:1px solid rgba(237,234,229,.07);
  padding: 26px var(--pad) 34px;
  color: rgba(237,234,229,.60);
}
.foot{
  max-width:var(--max);
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  gap:18px;
  flex-wrap:wrap;
}
.society{
  font-family:var(--serif);
  font-weight:600;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-size:12px;
  color: rgba(237,234,229,.78);
}
.footsub{
  margin-top:10px;
  font-size:12px;
  color:rgba(237,234,229,.52);
  letter-spacing:.12em;
}
.byline{
  font-size:12px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color: rgba(237,234,229,.55);
  white-space:nowrap;
}

/* Calm fade-in */
.fade{
  opacity:0;
  transform: translateY(8px);
  animation: fadeIn 900ms ease forwards;
}
@keyframes fadeIn{ to { opacity:1; transform: translateY(0); } }

/* Responsive */
@media (max-width: 920px){
  .card{ grid-column: span 12; }
  .tier{ grid-column: span 12; }
  .hairline{ width:28px; }
}

@media (max-width: 640px){
  .navlinks{ display:none; }
  .menuBtn{ display:inline-block; }
}