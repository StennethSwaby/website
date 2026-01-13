import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <p className="text-sm text-white/60">Selected work</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Projects</h1>

      <div className="mt-10 space-y-8">
        {projects.map((p) => (
          <section key={p.title} className="border-b border-white/10 pb-8">
            <h2 className="text-lg font-medium text-white">{p.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
              {p.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.links && (
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {p.links.github && (
                  <a
                    className="text-white/70 hover:text-white transition"
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                )}
                {p.links.live && (
                  <a
                    className="text-white/70 hover:text-white transition"
                    href={p.links.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live →
                  </a>
                )}
                {p.links.writeup && (
                  <a
                    className="text-white/70 hover:text-white transition"
                    href={p.links.writeup}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Write-up →
                  </a>
                )}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
