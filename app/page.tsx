import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-neutral-300 overflow-hidden">
      {/* Subtle light reflection overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[520px] w-[920px] bg-gradient-to-b from-white/6 via-transparent to-transparent blur-3xl opacity-40" />
        <div className="absolute -top-28 right-[-160px] h-[420px] w-[420px] rounded-full bg-white/4 blur-3xl opacity-20" />
        <div className="absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full bg-white/3 blur-3xl opacity-20" />
      </div>

      {/* Top Nav */}
      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-[10px] tracking-[0.45em] uppercase text-neutral-500 hover:text-neutral-300 transition"
        >
          Players Only Club
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/stroke-intelligence"
            className="text-[10px] tracking-[0.45em] uppercase text-neutral-500 hover:text-neutral-300 transition"
          >
            Stroke Intelligence™
          </Link>
          <Link
            href="/apply"
            className="text-[10px] tracking-[0.45em] uppercase text-neutral-500 hover:text-neutral-300 transition"
          >
            Apply
          </Link>
          <Link
            href="/contact"
            className="text-[10px] tracking-[0.45em] uppercase text-neutral-500 hover:text-neutral-300 transition"
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
            <p className="text-[10px] tracking-[0.45em] uppercase text-neutral-600">
              Invitation-led performance coaching
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
  <span className="relative inline-block bg-gradient-to-b from-[#111111] via-[#2f2f2f] to-[#080808] bg-clip-text text-transparent">
    Players Only Club
    <span className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent bg-clip-text text-transparent opacity-50 pointer-events-none" />
  </span>
</h1>

            <p className="mt-4 text-[11px] tracking-[0.45em] uppercase text-neutral-500">
              Virtus in ludo
            </p>

            <p className="mt-7 max-w-xl text-neutral-400 leading-relaxed">
              Private instruction and performance intelligence for serious
              players. Cinematic coaching, precision sequencing, and AI-powered
              stroke analysis — built to hold under pressure.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/apply"
                className="rounded-full bg-neutral-900 px-10 py-4 text-[11px] tracking-[0.45em] uppercase text-neutral-200 hover:bg-neutral-800 transition text-center"
              >
                Apply for Access
              </Link>

              <Link
                href="/stroke-intelligence"
                className="rounded-full border border-neutral-800 px-10 py-4 text-[11px] tracking-[0.45em] uppercase text-neutral-500 hover:border-neutral-600 hover:text-neutral-300 transition text-center"
              >
                Stroke Intelligence™
              </Link>
            </div>

            {/* Micro metrics */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["Private Instruction", "Elite 1:1 coaching."],
                ["Performance Labs", "Small group intensity."],
                ["Analysis", "Upload. Breakdown. Improve."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-neutral-900 bg-[#0f0f0f]/70 px-5 py-5"
                >
                  <p className="text-[10px] tracking-[0.45em] uppercase text-neutral-600">
                    {title}
                  </p>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right / Crest panel */}
          <div className="md:justify-self-end">
            <div className="relative mx-auto w-full max-w-[420px]">
              {/* Glow behind crest */}
              <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-b from-white/6 via-transparent to-transparent blur-2xl opacity-60" />

              <div className="rounded-[36px] bg-gradient-to-b from-neutral-900 to-neutral-950 p-[1px]">
                <div className="rounded-[36px] bg-[#0f0f0f] p-10 backdrop-blur-xl">
                  <div className="relative mx-auto aspect-square w-full max-w-[280px]">
                    <Image
                      src="/poc-logo.jpeg"
                      alt="Players Only Club crest"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <p className="mt-8 text-center text-[10px] tracking-[0.45em] uppercase text-neutral-600">
                    Private. Precise. Relentless.
                  </p>
                </div>
              </div>
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
              desc: "Small groups engineered for intensity: patterns, pace tolerance, scenarios, execution.",
              href: "/apply",
              cta: "Join a Lab",
            },
            {
              label: "Technology",
              title: "Stroke Intelligence™",
              desc: "Upload your serve, forehand, or backhand and receive a breakdown + checkpoints + plan.",
              href: "/stroke-intelligence",
              cta: "View Platform",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-[1px]"
            >
              <div className="rounded-3xl bg-[#0f0f0f] p-8 backdrop-blur-xl h-full flex flex-col">
                <p className="text-[10px] tracking-[0.45em] uppercase text-neutral-600">
                  {s.label}
                </p>

                <h3 className="mt-4 text-2xl font-medium text-neutral-200">
                  <span className="bg-gradient-to-b from-neutral-700 via-neutral-300 to-neutral-800 bg-clip-text text-transparent">
                    {s.title}
                  </span>
                </h3>

                <p className="mt-4 text-sm text-neutral-500 leading-relaxed flex-1">
                  {s.desc}
                </p>

                <Link
                  href={s.href}
                  className="mt-7 rounded-full border border-neutral-800 px-8 py-3 text-[11px] tracking-[0.45em] uppercase text-neutral-500 hover:border-neutral-600 hover:text-neutral-300 transition text-center"
                >
                  {s.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-3 text-[10px] tracking-[0.45em] uppercase text-neutral-600 md:flex-row">
          <p>© {new Date().getFullYear()} Players Only Club</p>
          <p>theplayersonlyclub.com</p>
        </footer>
      </section>
    </main>
  );
}