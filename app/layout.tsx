import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stenneth Swaby",
  description:
    "Minimal personal website showcasing projects, experience, and professional focus in software, IT, and security.",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-white/70 hover:text-white transition"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-sm font-medium tracking-tight">
              Stenneth Swaby
            </Link>

            <nav className="flex items-center gap-5">
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/experience">Experience</NavLink>
              <a
                href="/resume.pdf"
                className="text-sm text-white/70 hover:text-white transition"
              >
                Resume
              </a>
            </nav>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-14">{children}</div>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Stenneth Swaby</p>
            <div className="flex gap-4">
              <a
                className="hover:text-white transition"
                href="mailto:swabys1@tcnj.edu"
              >
                Email
              </a>
              <a
                className="hover:text-white transition"
                href="https://github.com/StennethSwaby"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="hover:text-white transition"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

