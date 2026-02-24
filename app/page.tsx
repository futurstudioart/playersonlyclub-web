import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-neutral-200 overflow-hidden">
      {/* Lacquer studio-light environment */}
      <div className="absolute inset-0 pointer-events-none">
        {/* top “softbox” reflection */}
        <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 h-[620px] w-[1050px] bg-gradient-to-b from-white/10 via-white/4 to-transparent blur-3xl opacity-60" />
        {/* side reflections */}
        <div className="absolute top-[120px] left-[-220px] h-[520px] w-[520px] rounded-full bg-white/6 blur-3xl opacity-25" />
        <div className="absolute top-[80px] right-[-260px] h-[560px] w-[560px] rounded-full bg-white/6 blur-3xl opacity-25" />
        {/* bottom bounce light */}
        <div className="absolute bottom-[-260px] left-1/2 -translate-x-1/2 h-[520px] w-[920px] bg-gradient-to-t from-white/8 via-transparent to-transparent blur-3xl opacity-35" />
        {/* micro grain */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      {/* Top Nav */}
      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7">
        <Link
          href="/"
          className="text-[10px] tracking-[0.52em] uppercase text-neutral-500 hover:text-neutral-200 transition"
        >
          Players Only Club
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/stroke-intelligence"
            className="text-[10px] tracking-[0.52em] uppercase text-neutral-500 hover:text-neutral-200 transition"
          >
            Stroke Intelligence™
          </Link>
          <Link
            href="/apply"
            className="text-[10px] tracking-[0.52em] uppercase text-neutral-500 hover:text-neutral-200 transition"
          >
            Apply
          </Link>
          <Link
            href="/contact"
            className="text-[10px] tracking-[0.52em] uppercase text-neutral-500 hover:text-neutral-200 transition"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto w-full max-w-6xl px-6 pt-10 pb-20">
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-[10px] tracking-[0.55em] uppercase text-neutral-600">
              Private European sporting society × modern performance intelligence
            </p>

            {/* Lacquer headline */}
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
              <span className="relative inline-block">
                <span className="bg-gradient-to-b from-[#0f0f0f] via-[#2a2a2a] to-[#060606] bg-clip-text text-transparent">
                  Players Only Club
                </span>
                {/* glossy sweep highlight */}
                <span className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent bg-clip-text text-transparent opacity-50 pointer-events-none" />
              </span>
            </h1>

            <p className="mt-4 text-[11px] tracking-[0.55em] uppercase text-neutral-500">
              Virtus in ludo
            </p>

            <p className="mt-7 max-w-xl text-neutral-400 leading-relaxed">
              High-touch coaching and AI stroke analysis for players who demand
              precision. Private instruction, small-group performance labs, and
              cinematic breakdowns that translate directly to match execution.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/apply"
                className="group relative overflow-hidden rounded-full px-10 py-4 text-[11px] tracking-[0.55em] uppercase text-neutral-100 text-center"
              >
                {/* lacquer button base */}
                <span className="absolute inset-0 rounded-full bg-[#0f0f0f]" />
                {/* glossy reflection */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/18 via-white/6 to-transparent opacity-70" />
                {/* subtle edge */}
                <span className="absolute inset-0 rounded-full ring-1 ring-white/10 group-hover:ring-white/18 transition" />
                <span className="relative">Apply for Access</span>
              </Link>

              <Link
                href="/stroke-intelligence"
                className="group relative overflow-hidden rounded-full px-10 py-4 text-[11px] tracking-[0.55em] uppercase text-neutral-300 text-center"
              >
                <span className="absolute inset-0 rounded-full bg-[#090909]" />
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-white/4 to-transparent opacity-60" />
                <span className="absolute inset-0 rounded-full ring-1 ring-white/8 group-hover:ring-white/14 transition" />
                <span className="relative">Stroke Intelligence™</span>
              </Link>
            </div>

            {/* Lacquer micro-panels */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["Private Instruction", "Elite 1:1 coaching built for match pressure."],
                ["Performance Labs", "Small groups engineered for execution."],
                ["Analysis", "Upload → breakdown → training plan."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="relative overflow-hidden rounded-2xl bg-[#0b0b0b] ring-1 ring-white/8"
                >
                  {/* panel gloss */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/3 to-transparent opacity-60" />
                  {/* subtle inner reflection line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/12" />
                  <div className="relative px-5 py-5">
                    <p className="text-[10px] tracking-[0.55em] uppercase text-neutral-600">
                      {title}
                    </p>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="md:justify-self-end">
            <div className="relative mx-auto w-full max-w-[440px]">
              {/* crest stage */}
              <div className="relative overflow-hidden rounded-[36px] bg-[#0b0b0b] ring-1 ring-white/10">
                {/* heavy lacquer gloss */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/16 via-white/6 to-transparent opacity-70" />
                {/* side sheen */}
                <div className="absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-40" />
                <div className="absolute inset-y-0 right-0 w-[120px] bg-gradient-to-l from-white/10 via-transparent to-transparent opacity-35" />
                {/* top reflection line */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-white/14" />

                <div className="relative p-10 backdrop-blur-xl">
                  <div className="relative mx-auto aspect-square w-full max-w-[290px]">
                    <Image
                      src="/poc-logo.jpeg"
                      alt="Players Only Club crest"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <p className="mt-8 text-center text-[10px] tracking-[0.55em] uppercase text-neutral-600">
                    Private. Precise. Relentless.
                  </p>
                </div>
              </div>

              {/* tiny caption */}
              <p className="mt-5 text-center text-[10px] tracking-[0.55em] uppercase text-neutral-600">
                Studio-lacquer aesthetic · performance-grade execution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              label: "Service",
              title: "Private Instruction",
              desc: "High-touch coaching for athletes who want measurable change and match translation.",
              href: "/apply",
              cta: "Request Private Training",
            },
            {
              label: "Program",
              title: "Performance Labs",
              desc: "Small groups built for intensity: patterns, pace tolerance, scenarios, execution.",
              href: "/apply",
              cta: "Join a Lab",
            },
            {
              label: "Technology",
              title: "Stroke Intelligence™",
              desc: "Upload a clip and receive a breakdown + checkpoints + plan. Member portal coming next.",
              href: "/stroke-intelligence",
              cta: "View Platform",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="relative overflow-hidden rounded-3xl bg-[#0b0b0b] ring-1 ring-white/10"
            >
              {/* lacquer gloss */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/14 via-white/5 to-transparent opacity-70" />
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/12" />

              <div className="relative p-8 h-full flex flex-col">
                <p className="text-[10px] tracking-[0.55em] uppercase text-neutral-600">
                  {s.label}
                </p>

                <h3 className="mt-4 text-2xl font-medium">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-b from-[#101010] via-[#2a2a2a] to-[#070707] bg-clip-text text-transparent">
                      {s.title}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-t from-white/22 via-white/8 to-transparent bg-clip-text text-transparent opacity-55 pointer-events-none" />
                  </span>
                </h3>

                <p className="mt-4 text-sm text-neutral-500 leading-relaxed flex-1">
                  {s.desc}
                </p>

                <Link
                  href={s.href}
                  className="group relative mt-7 overflow-hidden rounded-full px-8 py-3 text-[11px] tracking-[0.55em] uppercase text-neutral-300 text-center"
                >
                  <span className="absolute inset-0 rounded-full bg-[#090909]" />
                  <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/12 via-white/5 to-transparent opacity-70" />
                  <span className="absolute inset-0 rounded-full ring-1 ring-white/8 group-hover:ring-white/14 transition" />
                  <span className="relative">{s.cta}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-18 pt-16 flex flex-col items-center justify-between gap-3 text-[10px] tracking-[0.55em] uppercase text-neutral-600 md:flex-row">
          <p>© {new Date().getFullYear()} Players Only Club</p>
          <p>theplayersonlyclub.com</p>
        </footer>
      </section>
    </main>
  );
}