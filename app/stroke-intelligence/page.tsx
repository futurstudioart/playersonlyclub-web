import Link from "next/link";

export default function StrokeIntelligencePage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-neutral-300 px-6 py-20 overflow-hidden">

      {/* Subtle light gloss overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-to-b from-white/5 via-transparent to-transparent blur-3xl opacity-40" />
      </div>

      <div className="relative mx-auto max-w-5xl">

        {/* Label */}
        <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-500">
          Stroke Intelligence™
        </p>

        {/* Gloss headline */}
        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
          <span className="bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-800 bg-clip-text text-transparent">
            Upload. Analyze. Improve.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-neutral-400 leading-relaxed">
          A private performance laboratory for Players Only members. Upload a serve,
          forehand, or backhand clip and receive a precision breakdown combining
          elite coaching principles with AI-driven biomechanical sequencing.
        </p>

        {/* Modules */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            ["Serve", "Toss precision. Load integrity. Shoulder axis. Contact stability."],
            ["Forehand", "Unit turn timing. Spacing discipline. Lag mechanics. Release path."],
            ["Backhand", "Structure control. Elbow alignment. Depth generation. Match translation."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="group rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-[1px] transition"
            >
              <div className="rounded-3xl bg-[#0f0f0f] p-8 backdrop-blur-xl">
                <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-600">
                  Module
                </p>

                <h3 className="mt-4 text-2xl font-medium text-neutral-200">
                  {title}
                </h3>

                <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Future section */}
        <div className="mt-20 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-[1px]">
          <div className="rounded-3xl bg-[#0f0f0f] p-12 backdrop-blur-xl">

            <h2 className="text-3xl font-medium">
              <span className="bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-800 bg-clip-text text-transparent">
                Member Platform Launching
              </span>
            </h2>

            <ul className="mt-8 space-y-4 text-neutral-500 text-sm">
              <li>• Secure video upload + private analysis</li>
              <li>• Frame-by-frame mechanical checkpoints</li>
              <li>• Personalized drill programming</li>
              <li>• Performance tracking across sessions</li>
            </ul>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/apply"
                className="rounded-full bg-neutral-900 px-8 py-3 text-xs tracking-[0.35em] uppercase text-neutral-200 hover:bg-neutral-800 transition text-center"
              >
                Apply for Access
              </Link>

              <Link
                href="/"
                className="rounded-full border border-neutral-800 px-8 py-3 text-xs tracking-[0.35em] uppercase text-neutral-500 hover:border-neutral-600 transition text-center"
              >
                Return Home
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}