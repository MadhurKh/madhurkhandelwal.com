import { ArrowRight, Github, Linkedin, PlayCircle, FileText, Mail } from "lucide-react";

const projects = [
  {
    title: "GenAI Contract Risk Analyzer",
    blurb:
      "Enterprise-style GenAI demo: risk register + evidence mapping + explainable scoring + audit log + JSON export. Designed with DS↔Engineering interface contracts.",
    tags: ["GenAI", "Governance", "Schemas", "Testing", "Streamlit"],
    links: {
      repo: "https://github.com/MadhurKh/GenAI-Contract-Risk-Analyzer",
      demo: "https://drive.google.com/file/d/12sLuSNMl59imbLOYdIYgVAPFbO6yn9TY/view?usp=drive_link",
    },
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm backdrop-blur">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(900px_500px_at_85%_10%,rgba(16,185,129,0.14),transparent_55%),#ffffff]">
      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <div className="text-sm font-semibold text-slate-900">Madhur Khandelwal</div>
        <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#writing" className="hover:text-slate-900">Writing</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              GenAI • Agentic AI • Transformation • Product/Platform
            </div>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Building enterprise-grade GenAI solutions with strong governance,
              DS/ML collaboration, and measurable business impact.
            </h1>

            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              I’m an AVP at Genpact leading Lean Digital Transformation and AI initiatives—across
              GenAI, process intelligence, and automation. This site showcases practical demos, artifacts,
              and how I structure DS↔Engineering “handshakes” (schemas, scoring logic, tests, evaluation hooks).
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/madhur17/"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>

              <a
                href="https://github.com/MadhurKh"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card>
              <div className="flex flex-wrap gap-2">
                <Pill>GenAI Governance</Pill>
                <Pill>DS↔Eng Contracts</Pill>
                <Pill>Scoring Explainability</Pill>
                <Pill>Evaluation Harness</Pill>
                <Pill>Portfolio Demos</Pill>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-xl border border-slate-200 bg-white/70 p-4">
                  <div className="text-xs font-semibold text-slate-600">Signature strength</div>
                  <div className="mt-1 text-sm text-slate-900">
                    Turning ideas into production-style artifacts: schemas, tests, auditability, measurable outcomes.
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white/70 p-4">
                  <div className="text-xs font-semibold text-slate-600">What you’ll see here</div>
                  <div className="mt-1 text-sm text-slate-900">
                    Working demos + code repos + concise writeups designed for leadership and hiring managers.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
            <p className="mt-1 text-sm text-slate-600">
              Practical demos with enterprise-style outputs, not just slides.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title}>
              <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{p.blurb}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
                >
                  <PlayCircle className="h-4 w-4" /> Watch Demo
                </a>
                <a
                  href={p.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  <Github className="h-4 w-4" /> Repo
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="mx-auto max-w-6xl px-5 py-10">
        <Card>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Writing</h2>
              <p className="mt-1 text-sm text-slate-600">
                Short, leadership-friendly insights on GenAI operating model, governance, and transformation.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/madhur17/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              <FileText className="h-4 w-4" /> View on LinkedIn
            </a>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white/70 p-4">
              <div className="text-sm font-semibold text-slate-900">
                Agentic AI isn’t a tech upgrade. It’s an operating model upgrade.
              </div>
              <div className="mt-1 text-sm text-slate-700">
                Guardrails, controls, auditability, and RACI matter as much as prompts.
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/70 p-4">
              <div className="text-sm font-semibold text-slate-900">
                Productionizing GenAI: evaluation harness + calibration + CI
              </div>
              <div className="mt-1 text-sm text-slate-700">
                How to iterate safely with DS/ML while keeping interfaces stable.
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* About + Contact */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <h2 className="text-2xl font-semibold text-slate-900">About</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                I lead cross-functional teams spanning product, engineering, and transformation delivery.
                My focus is building scalable solutions with measurable outcomes—combining GenAI with strong
                governance and “design for change” (schemas, tests, documentation, and auditability).
              </p>
            </Card>
          </div>
          <div id="contact" className="lg:col-span-5">
            <Card>
              <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
              <p className="mt-2 text-sm text-slate-700">
                For roles, collaborations, or a walkthrough of projects:
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="mailto:YOUR_EMAIL_HERE"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  <Mail className="h-4 w-4" /> Email me
                </a>

                <a
                  href="https://www.linkedin.com/in/madhur17/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  <Linkedin className="h-4 w-4" /> Message on LinkedIn
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Tip: Replace <span className="font-mono">Gpmadhur@gmail.com</span> with your preferred contact email.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-5 pb-10 pt-4 text-xs text-slate-500">
        © {new Date().getFullYear()} Madhur Khandelwal • Built with Next.js + Tailwind
      </footer>
    </main>
  );
}
