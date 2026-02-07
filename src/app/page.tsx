import type { ReactNode } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  PlayCircle,
  FileText,
  Mail,
  ExternalLink,
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

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700",
        className
      )}
    >
      {children}
    </span>
  );
}

function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-blue-200/35 blur-3xl" />
        <div className="absolute right-[-10%] top-[0%] h-[420px] w-[420px] rounded-full bg-emerald-200/35 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="text-sm font-semibold tracking-tight text-slate-900">
            Madhur <span className="text-blue-600">Khandelwal</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            <a className="hover:text-slate-900" href="#projects">
              Projects
            </a>
            <a className="hover:text-slate-900" href="#writing">
              Writing
            </a>
            <a className="hover:text-slate-900" href="#about">
              About
            </a>
            <a
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              GenAI • Agentic AI • Transformation • Product/Platform
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Building enterprise-grade GenAI solutions with strong governance,
              DS/ML collaboration, and measurable business impact.
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              I’m an AVP at Genpact leading Lean Digital Transformation and AI
              initiatives—across GenAI, process intelligence, and automation.
              This site showcases practical demos, artifacts, and how I structure
              DS↔Engineering “handshakes” (schemas, scoring logic, tests,
              evaluation hooks).
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/madhur17/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>

              <a
                href="https://github.com/MadhurKh"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>

            {/* Proof strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <span className="font-medium text-slate-900">$150M+ value identified</span>
              <span className="hidden sm:inline">•</span>
              <span>50+ team leadership</span>
              <span className="hidden sm:inline">•</span>
              <span>DS ↔ Eng contracts + auditability</span>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-5">
            <Card className="p-6">
              <div className="flex flex-wrap gap-2">
                <Pill className="bg-white">GenAI Governance</Pill>
                <Pill className="bg-white">DS↔Eng Contracts</Pill>
                <Pill className="bg-white">Scoring Explainability</Pill>
                <Pill className="bg-white">Evaluation Harness</Pill>
                <Pill className="bg-white">Portfolio Demos</Pill>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold text-slate-600">
                    Signature strength
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-slate-900">
                    Turning ideas into production-style artifacts: schemas, tests,
                    auditability, measurable outcomes.
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold text-slate-600">
                    What you’ll see here
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-slate-900">
                    Working demos + code repos + concise writeups designed for
                    leadership and hiring managers.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Projects
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Practical demos with enterprise-style outputs, not just slides.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.blurb}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
                >
                  <PlayCircle className="h-4 w-4" /> Watch Demo
                  <ExternalLink className="h-4 w-4 opacity-80" />
                </a>

                <a
                  href={p.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  <Github className="h-4 w-4" /> Repo
                  <ExternalLink className="h-4 w-4 opacity-60" />
                </a>
              </div>
            </Card>
          ))}

          {/* Optional “Coming next” card for visual balance */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <Pill>Coming next</Pill>
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-900">
              Agentic AI — Procurement Copilot
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Multi-agent workflow for sourcing, contract review, PO compliance,
              and vendor comms — with human-in-the-loop approvals and governance.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>Agents + orchestration</Pill>
              <Pill>Policy/guardrails</Pill>
              <Pill>Evaluation + monitoring</Pill>
              <Pill>Ops integration</Pill>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <span className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-500">
                Demo link (soon)
              </span>
              <span className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-500">
                Repo (soon)
              </span>
            </div>
          </Card>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Writing
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Leadership-friendly insights on operating model, governance, and how GenAI actually ships.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/madhur17/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            <FileText className="h-4 w-4" /> View on LinkedIn
            <ExternalLink className="h-4 w-4 opacity-60" />
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="p-6 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Agentic AI isn’t a tech upgrade. It’s an operating model upgrade.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Guardrails, controls, auditability, and RACI matter as much as prompts.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <a
                href="https://www.linkedin.com/in/madhur17/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Read on LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Card>

          <Card className="p-6 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Productionizing GenAI: evaluation harness + calibration + CI
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  How to iterate safely with DS/ML while keeping interfaces stable.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <a
                href="https://www.linkedin.com/in/madhur17/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Read on LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* About + Contact */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                About
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                I lead cross-functional teams spanning product, engineering, and transformation delivery.
                My focus is building scalable solutions with measurable outcomes—combining GenAI with strong
                governance and “design for change” (schemas, tests, documentation, and auditability).
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.linkedin.com/in/madhur17/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn profile
                </a>

                <a
                  href="https://github.com/MadhurKh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  <Github className="h-4 w-4" /> GitHub profile
                </a>
              </div>
            </Card>
          </div>

          <div id="contact" className="lg:col-span-5">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Contact
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                For roles, collaborations, or a walkthrough of projects:
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="mailto:YOUR_EMAIL_HERE"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  <Mail className="h-4 w-4" /> Email me
                </a>

                <a
                  href="https://www.linkedin.com/in/madhur17/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  <Linkedin className="h-4 w-4" /> Message on LinkedIn
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Tip: Update <span className="font-mono">YOUR_EMAIL_HERE</span>{" "}
                to your preferred email.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>© {year} Madhur Khandelwal</div>
          <div className="flex gap-4">
            <a
              className="hover:text-slate-700"
              href="https://www.linkedin.com/in/madhur17/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-slate-700"
              href="https://github.com/MadhurKh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
