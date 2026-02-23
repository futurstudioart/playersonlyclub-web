import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      <div className="mb-8">
        <Image
          src="/poc-logo.jpeg"
          alt="Players Only Club"
          width={240}
          height={240}
          priority
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-4">
        Players Only Club
      </h1>

      <p className="text-lg md:text-xl text-neutral-400 max-w-xl">
        Private instruction. Performance labs.
        AI-powered stroke analysis for serious competitors.
      </p>

      <div className="mt-8">
        <a
          href="/apply"
          className="border border-white px-6 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition"
        >
          Apply for Access
        </a>
      </div>

    </main>
  );
}