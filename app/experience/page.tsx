import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main>
      <p className="text-sm text-white/60">Professional background</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Experience</h1>

      <div className="mt-10 space-y-10">
        {experience.map((item) => (
          <section key={`${item.role}-${item.org}`} className="space-y-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium text-white">{item.role}</h2>
              <div className="text-sm text-white/70">
                <span className="text-white/80">{item.org}</span>
                {item.location ? <span> • {item.location}</span> : null}
                <span className="text-white/50">
                  {" "}
                  • {item.start} – {item.end}
                </span>
              </div>
            </div>

            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="border-b border-white/10 pt-6" />
          </section>
        ))}
      </div>
    </main>
  );
}
