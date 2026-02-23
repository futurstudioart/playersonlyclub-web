import Link from "next/link";

export default function ApplyPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-neutral-300 px-6 py-20 overflow-hidden">
      {/* Subtle light reflection overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[520px] w-[900px] bg-gradient-to-b from-white/6 via-transparent to-transparent blur-3xl opacity-40" />
        <div className="absolute -top-24 right-[-140px] h-[360px] w-[360px] rounded-full bg-white/4 blur-3xl opacity-25" />
      </div>

      <div className="relative mx-auto max-w-2xl">
        {/* Top micro-nav */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-[10px] tracking-[0.45em] uppercase text-neutral-500 hover:text-neutral-300 transition"
          >
            Players Only Club
          </Link>
          <Link
            href="/stroke-intelligence"
            className="text-[10px] tracking-[0.45em] uppercase text-neutral-500 hover:text-neutral-300 transition"
          >
            Stroke Intelligence™
          </Link>
        </div>

        {/* Label */}
        <p className="mt-10 text-[10px] tracking-[0.45em] uppercase text-neutral-600">
          Invitation-led Access
        </p>

        {/* Gloss headline */}
        <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
          <span className="bg-gradient-to-b from-neutral-700 via-neutral-300 to-neutral-800 bg-clip-text text-transparent">
            Apply for Access
          </span>
        </h1>

        {/* Supporting copy */}
        <p className="mt-6 text-neutral-400 leading-relaxed max-w-xl">
          Players Only Club is private, performance-driven, and intentionally
          selective. Share your level, training context, and what you want to
          sharpen — we’ll respond with next steps and availability.
        </p>

        {/* Elevated luxury panel */}
        <div className="mt-12 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-[1px]">
          <div className="rounded-3xl bg-[#0f0f0f] p-8 md:p-10 backdrop-blur-xl">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="w-full rounded-2xl border border-neutral-800 bg-[#0a0a0a] px-5 py-4 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-600 transition"
                  placeholder="Full Name"
                />
                <input
                  className="w-full rounded-2xl border border-neutral-800 bg-[#0a0a0a] px-5 py-4 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-600 transition"
                  placeholder="Email"
                  type="email"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="w-full rounded-2xl border border-neutral-800 bg-[#0a0a0a] px-5 py-4 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-600 transition"
                  placeholder="City / Club"
                />
                <input
                  className="w-full rounded-2xl border border-neutral-800 bg-[#0a0a0a] px-5 py-4 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-600 transition"
                  placeholder="Level (UTR / NTRP / ranking)"
                />
              </div>

              <textarea
                className="h-36 w-full rounded-2xl border border-neutral-800 bg-[#0a0a0a] px-5 py-4 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-600 transition"
                placeholder="What are you trying to improve right now?"
              />

              <button
                type="button"
                className="w-full rounded-full bg-neutral-900 px-8 py-4 text-[11px] tracking-[0.45em] uppercase text-neutral-200 hover:bg-neutral-800 transition"
              >
                Submit Application
              </button>

              <p className="text-xs text-neutral-600 leading-relaxed">
                We’ll wire this form to email + CRM next. For now, this is a
                styled intake page to match the Players Only aesthetic.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="rounded-full border border-neutral-800 px-8 py-3 text-[11px] tracking-[0.45em] uppercase text-neutral-500 hover:border-neutral-600 hover:text-neutral-300 transition text-center"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-neutral-800 px-8 py-3 text-[11px] tracking-[0.45em] uppercase text-neutral-500 hover:border-neutral-600 hover:text-neutral-300 transition text-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}