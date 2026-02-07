import Image from "next/image";
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
  Workflow,
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
    highlight: "Explainable scoring + auditability",
  },
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm backdrop-blur ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}


function SectionTitle({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
        ) : null}
      </div>
      {right ? <div className="mt-2 md:mt-0">{right}</div> : null}
    </div>
  );
}

function IconStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200/70 bg-white/70 p-4">
      <div className="mt-0.5 rounded-lg border border-slate-200 bg-white p-2 text-slate-900">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold text-slate-500">{label}</div>
        <div className="mt-0.5 text-sm font-semibold text-slate-900">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(900px_500px_at_85%_10%,rgba(16,185,129,0.12),transparent_55%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
      {/* Mobile/Top nav */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/madhur.jpg" // <-- change if needed
                alt="Madhur Khandelwal"
                width={72}
                height={72}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">
                Madhur Khandelwal
              </div>
              <div className="text-xs text-slate-600">
                AVP • GenAI • Transformation
              </div>
            </div>
          </div>

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

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 md:hidden"
          >
            View <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Layout */}
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 lg:grid-cols-12">
        {/* Left premium rail (desktop) */}
        <aside className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-24 space-y-4">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/madhur.jpg" // <-- change if needed
                    alt="Madhur Khandelwal"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900">
                    Madhur Khandelwal
                  </div>
                  <div className="mt-0.5 text-sm text-slate-600">
                    AVP • Agentic AI & Transformation
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    Bengaluru, India
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Governance-first</Pill>
                <Pill>DS↔Eng handshakes</Pill>
                <Pill>Enterprise delivery</Pill>
              </div>

              <div className="mt-5 grid gap-3">
                <IconStat
                  icon={<Sparkles className="h-4 w-4" />}
                  label="Delivery impact"
                  value="$150M+ identified value"
                />
                <IconStat
                  icon={<Workflow className="h-4 w-4" />}
                  label="Team leadership"
                  value="50+ cross-functional team"
                />
                <IconStat
                  icon={<ShieldCheck className="h-4 w-4" />}
                  label="Core strength"
                  value="Auditability + measurable outcomes"
                />
              </div>

              <div className="mt-5 grid gap-3">
                <a
                  href="https://www.linkedin.com/in/madhur17/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="https://github.com/MadhurKh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="mailto:YOUR_EMAIL_HERE"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200/70 bg-white/60 p-4">
                <div className="text-xs font-semibold text-slate-600">
                  Positioning statement
                </div>
                <div className="mt-1 text-sm text-slate-900">
                  I build enterprise-ready AI products that ship — with governance,
                  evaluation, and adoption built in.
                </div>
              </div>
            </Card>
          </div>
        </aside>

        {/* Right content */}
        <section className="lg:col-span-8">
          {/* Hero */}
          <Card className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              <Pill>GenAI • Agentic AI</Pill>
              <Pill>Transformation</Pill>
              <Pill>Product/Platform</Pill>
              <Pill>Process Intelligence</Pill>
            </div>

            <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Building enterprise-grade GenAI solutions with strong governance,
              DS/ML collaboration, and measurable business impact.
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-700">
              I’m an AVP at Genpact leading Lean Digital Transformation and AI initiatives across
              GenAI, process intelligence, and automation. This portfolio showcases practical demos,
              artifacts, and how I structure DS↔Engineering “handshakes” (schemas, scoring logic,
              tests, evaluation hooks).
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Explore projects <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://drive.google.com/file/d/12sLuSNMl59imbLOYdIYgVAPFbO6yn9TY/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
              >
                <PlayCircle className="h-4 w-4" /> Watch featured demo
              </a>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <IconStat
                icon={<ShieldCheck className="h-4 w-4" />}
                label="Governance-ready"
                value="Controls, audit logs, evidence"
              />
              <IconStat
                icon={<Layers className="h-4 w-4" />}
                label="Interface contracts"
                value="DS↔Eng schemas + versioning"
              />
              <IconStat
                icon={<Workflow className="h-4 w-4" />}
                label="Delivery operating model"
                value="KPI tracking + adoption"
              />
            </div>
          </Card>

          {/* Projects */}
          <div id="projects" className="mt-6 scroll-mt-24">
            <Card className="p-6 md:p-8">
              <SectionTitle
                eyebrow="Featured work"
                title="Projects"
                subtitle="Practical demos with enterprise-style outputs — not just slides."
              />

              <div className="mt-6 grid gap-4">
                {projects.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          {p.highlight}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {p.tags.slice(0, 3).map((t) => (
                          <Pill key={t}>{t}</Pill>
                        ))}
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-700">
                      {p.blurb}
                    </p>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
                      >
                        <PlayCircle className="h-4 w-4" /> Watch demo
                      </a>

                      <a
                        href={p.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
                      >
                        <Github className="h-4 w-4" /> View repo
                      </a>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Writing */}
          <div id="writing" className="mt-6 scroll-mt-24">
            <Card className="p-6 md:p-8">
              <SectionTitle
                eyebrow="Thought leadership"
                title="Writing"
                subtitle="Short, leadership-friendly insights on operating model, governance, and transformation."
                right={
                  <a
                    href="https://www.linkedin.com/in/madhur17/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
                  >
                    <FileText className="h-4 w-4" /> View on LinkedIn
                  </a>
                }
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title:
                      "Agentic AI isn’t a tech upgrade. It’s an operating model upgrade.",
                    blurb:
                      "Guardrails, controls, auditability, and RACI matter as much as prompts.",
                  },
                  {
                    title:
                      "Productionizing GenAI: evaluation harness + calibration + CI",
                    blurb:
                      "How to iterate safely with DS/ML while keeping interfaces stable.",
                  },
                ].map((w) => (
                  <div
                    key={w.title}
                    className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {w.title}
                    </div>
                    <div className="mt-2 text-sm text-slate-700">{w.blurb}</div>
                    <div className="mt-4 text-xs font-semibold text-slate-500">
                      Coming soon: full post link
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* About + Contact */}
          <div id="about" className="mt-6 scroll-mt-24">
            <div className="grid gap-4 lg:grid-cols-12">
              <Card className="p-6 md:p-8 lg:col-span-7">
                <SectionTitle
                  eyebrow="Background"
                  title="About"
                  subtitle="How I work across product, engineering, and transformation delivery."
                />
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  I lead cross-functional teams spanning product, engineering, and transformation delivery.
                  My focus is building scalable solutions with measurable outcomes — combining GenAI with
                  strong governance and “design for change” (schemas, tests, documentation, and auditability).
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Pill>Operating model</Pill>
                  <Pill>Adoption + controls</Pill>
                  <Pill>Value realization</Pill>
                </div>
              </Card>

              <Card id="contact" className="p-6 md:p-8 lg:col-span-5">
                <SectionTitle
                  eyebrow="Let’s talk"
                  title="Contact"
                  subtitle="For roles, collaborations, or a walkthrough of projects."
                />

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="mailto:Gpmadhur@gmail.com"
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

                
              </Card>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 px-1 pb-10 text-xs text-slate-500">
            © {new Date().getFullYear()} Madhur Khandelwal • Built with Next.js + Tailwind
          </footer>
        </section>
      </div>
    </main>
  );
}
