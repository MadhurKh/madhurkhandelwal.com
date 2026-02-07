import {
  ArrowRight,
  Github,
  Linkedin,
  PlayCircle,
  FileText,
  Mail,
  Sparkles,
  ShieldCheck,
  Layers,
  LineChart,
} from "lucide-react";

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

const writing = [
  {
    title: "Agentic AI isn’t a tech upgrade. It’s an operating model upgrade.",
    desc: "Guardrails, controls, auditability, and RACI matter as much as prompts.",
    href: "https://www.linkedin.com/in/madhur17/",
  },
  {
    title: "Productionizing GenAI: evaluation harness + calibration + CI",
    desc: "How to iterate safely with DS/ML while keeping interfaces stable.",
    href: "https://www.linkedin.com/in/madhur17/",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
    >
      {children} {icon}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
  icon,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
    >
      {icon} {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-200/35 via-emerald-200/25 to-indigo-200/25 blur-3xl" />
        <div className="absolute bottom-[-220px] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-200/30 via-blue-200/20 to-emerald-200/20 blur-3xl" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-sm font-semibold text-slate-900">
            Madhur Khandelwal
          </a>

          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#projects" className="hover:text-slate-900">
              Projects
            </a>
            <a href="#writing" className="hover:text-slate-900">
              Writing
            </a>
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <SecondaryButton
              href="https://www.linkedin.com/in/madhur17/"
              icon={<Linkedin className="h-4 w-4" />}
            >
              LinkedIn
            </SecondaryButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              GenAI • Agentic AI • Transformation • Product/Platform
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Enterprise-grade GenAI that ships — with governance, DS/ML alignment, and measurable impact.
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              I’m an AVP at Genpact leading Lean Digital Transformation and AI initiatives across GenAI,
              process intelligence, and automation. This portfolio highlights practical demos and the
              production patterns behind them (schemas, scoring logic, tests, evaluation hooks, auditability).
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href="#projects" icon={<ArrowRight className="h-4 w-4" />}>
                View Projects
              </PrimaryButton>

              <SecondaryButton
                href="https://github.com/MadhurKh"
                icon={<Github className="h-4 w-4" />}
              >
                GitHub
              </SecondaryButton>

              <SecondaryButton
                href="mailto:YOUR_EMAIL_HERE"
                icon={<Mail className="h-4 w-4" />}
                external={false}
              >
                Email
              </SecondaryButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Pill>Governance-first delivery</Pill>
              <Pill>DS↔Eng “handshakes”</Pill>
              <Pill>Evaluation + monitoring</Pill>
              <Pill>Reusable playbooks</Pill>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">What I optimize for</div>
                <Sparkles className="h-4 w-4 text-slate-500" />
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <ShieldCheck className="h-4 w-4" /> Governance + auditability
                  </div>
                  <div className="mt-1 text-sm text-slate-900">
                    Controls, logs, evidence trails, and safe human-in-loop patterns.
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Layers className="h-4 w-4" /> DS/ML ↔ Engineering alignment
                  </div>
                  <div className="mt-1 text-sm text-slate-900">
                    Stable interfaces (schemas), test harnesses, and versioned outputs.
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <LineChart className="h-4 w-4" /> Measurable business impact
                  </div>
                  <div className="mt-1 text-sm text-slate-900">
                    Outcomes tracked like products: KPIs, adoption, and value realization.
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>GenAI governance</Pill>
                <Pill>Scoring explainability</Pill>
                <Pill>Evaluation harness</Pill>
                <Pill>Portfolio demos</Pill>
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
              Practical demos with enterprise-style outputs — not just slides.
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
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  <Github className="h-4 w-4" /> Repo
                </a>
              </div>
            </Card>
          ))}

          <Card>
            <div className="text-sm font-semibold text-slate-900">Coming next</div>
            <div className="mt-2 text-base font-semibold text-slate-900">
              Agentic AI — Procurement Copilot
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Multi-agent workflow for sourcing, contract review, PO compliance, and vendor comms — with
              human-in-the-loop approvals and governance.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>Agents + orchestration</Pill>
              <Pill>Policy/guardrails</Pill>
              <Pill>Evaluation + monitoring</Pill>
              <Pill>Ops integration</Pill>
            </div>
          </Card>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Writing</h2>
            <p className="mt-1 text-sm text-slate-600">
              Leadership-friendly insights on operating model, governance, and production patterns.
            </p>
          </div>

          <SecondaryButton
            href="https://www.linkedin.com/in/madhur17/"
            icon={<FileText className="h-4 w-4" />}
          >
            View on LinkedIn
          </SecondaryButton>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {writing.map((w) => (
            <a key={w.title} href={w.href} target="_blank" rel="noreferrer">
              <Card>
                <div className="text-sm font-semibold text-slate-900">{w.title}</div>
                <div className="mt-1 text-sm text-slate-700">{w.desc}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  Read <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* About + Contact */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <h2 className="text-2xl font-semibold text-slate-900">About</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                I lead cross-functional teams spanning product, engineering, and transformation delivery.
                My focus is building scalable solutions with measurable outcomes — combining GenAI with
                strong governance and “design for change” (schemas, tests, documentation, and auditability).
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <SecondaryButton
                  href="https://www.linkedin.com/in/madhur17/"
                  icon={<Linkedin className="h-4 w-4" />}
                >
                  LinkedIn
                </SecondaryButton>
                <SecondaryButton
                  href="https://github.com/MadhurKh"
                  icon={<Github className="h-4 w-4" />}
                >
                  GitHub
                </SecondaryButton>
              </div>
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  <Linkedin className="h-4 w-4" /> Message on LinkedIn
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Tip: Replace <span className="font-mono">YOUR_EMAIL_HERE</span> with your preferred contact email.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-5 pb-10 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} Madhur Khandelwal • Built with Next.js + Tailwind
      </footer>
    </main>
  );
}
