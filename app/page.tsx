import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between">
        {/* Left: Text */}
        <section className="max-w-xl">
          <p className="text-sm text-white/60">Computer Science • Navy Veteran</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Stenneth Swaby
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/75">
            I focus on building reliable software and supporting secure infrastructure, with a strong interest in systems, networking, and cybersecurity.
            This site highlights my work and experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/90 hover:border-white/40 hover:text-white transition"
            >
              View Projects →
            </a>

            <a
              href="/resume/Resume_Swaby.pdf"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/90 hover:border-white/40 hover:text-white transition"
            >
              Resume
            </a>

            <a
              href="https://github.com/StennethSwaby"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/90 hover:border-white/40 hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/stenneth-swaby"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/90 hover:border-white/40 hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Right: Photo */}
        <section className="w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/images/IMG_9491.JPG" // change to /images/me.png if needed
              alt="Photo of Stenneth Swaby"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 360px"
            />
          </div>

          <p className="mt-3 text-xs text-white/40">
            Photo • updated {new Date().getFullYear()}
          </p>
        </section>
      </div>
    </main>
  );
}
