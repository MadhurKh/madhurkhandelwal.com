// src/app/page.tsx

import { site } from "@/content/site";
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
        {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
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
        <div className="mt-0.5 text-sm font-semibold text-slate-900">{value}</div>
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
                src={site.person.image}
                alt={site.person.name}
                width={72}
                height={72}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">{site.person.name}</div>
              <div className="text-xs text-slate-600">AI Product • GenAI • Transformation</div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            {site.nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-slate-900">
                {n.label}
              </a>
            ))}
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
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-slate-200 via-white to-slate-200 opacity-80 blur-sm" />
                  <div className="relative h-32 w-32 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={site.person.image}
                      alt={site.person.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="text-base font-semibold text-slate-900">
                    {site.person.name}
                  </div>
                  <div className="mt-0.5 text-sm text-slate-600">{site.person.title}</div>
                  <div className="mt-1 text-xs text-slate-500">{site.person.location}</div>

                  {/* pills UNDER the photo+name block */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {site.leftRail.pills.map((p) => (
                      <Pill key={p}>{p}</Pill>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <IconStat
                  icon={<Sparkles className="h-4 w-4" />}
                  label={site.leftRail.stats[0].label}
                  value={site.leftRail.stats[0].value}
                />
                <IconStat
                  icon={<Workflow className="h-4 w-4" />}
                  label={site.leftRail.stats[1].label}
                  value={site.leftRail.stats[1].value}
                />
                <IconStat
                  icon={<ShieldCheck className="h-4 w-4" />}
                  label={site.leftRail.stats[2].label}
                  value={site.leftRail.stats[2].value}
                />
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href={site.person.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>

                <a
                  href={site.person.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>

                <a
                  href={`mailto:${site.person.links.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  <Mail className="h-4 w-4" /> {site.contact.emailLabel}
                </a>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200/70 bg-white/60 p-4">
                <div className="text-xs font-semibold text-slate-600">
                  {site.leftRail.positioningLabel}
                </div>
                <div className="mt-1 text-sm text-slate-900">
                  {site.leftRail.positioningText}
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
              {site.hero.pills.map((p) => (
                <Pill key={p}>{p}</Pill>
              ))}
            </div>

            {/* Reduced header size slightly */}
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {site.hero.headline}
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-700">
              {site.hero.body}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={site.hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                {site.hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={site.hero.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
              >
                <PlayCircle className="h-4 w-4" /> {site.hero.secondaryCta.label}
              </a>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <IconStat
                icon={<ShieldCheck className="h-4 w-4" />}
                label={site.hero.highlights[0].label}
                value={site.hero.highlights[0].value}
              />
              <IconStat
                icon={<Layers className="h-4 w-4" />}
                label={site.hero.highlights[1].label}
                value={site.hero.highlights[1].value}
              />
              <IconStat
                icon={<Workflow className="h-4 w-4" />}
                label={site.hero.highlights[2].label}
                value={site.hero.highlights[2].value}
              />
            </div>
          </Card>

          {/* Featured (Genpact) */}
          <div className="mt-6">
            <Card className="p-6 md:p-8">
              <SectionTitle
                eyebrow={site.sections.featured.eyebrow}
                title={site.sections.featured.title}
                subtitle={site.sections.featured.blurb}
                right={
                  <a
                    href={site.sections.featured.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
                  >
                    <FileText className="h-4 w-4" /> {site.sections.featured.ctaLabel}
                  </a>
                }
              />
            </Card>
          </div>

          {/* Projects */}
          <div id="projects" className="mt-6 scroll-mt-24">
            <Card className="p-6 md:p-8">
              <SectionTitle
                eyebrow={site.sections.projects.eyebrow}
                title={site.sections.projects.title}
                subtitle={site.sections.projects.subtitle}
              />

              <div className="mt-6 grid gap-4">
                {projects.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{p.highlight}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {p.tags.slice(0, 3).map((t) => (
                          <Pill key={t}>{t}</Pill>
                        ))}
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{p.blurb}</p>

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
                eyebrow={site.sections.writing.eyebrow}
                title={site.sections.writing.title}
                subtitle={site.sections.writing.subtitle}
                right={
                  <a
                    href={site.sections.writing.buttonHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
                  >
                    <FileText className="h-4 w-4" /> {site.sections.writing.buttonLabel}
                  </a>
                }
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {site.sections.writing.posts.map((w) => (
                  <div
                    key={w.title}
                    className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm"
                  >
                    <div className="text-sm font-semibold text-slate-900">{w.title}</div>
                    <div className="mt-2 text-sm text-slate-700">{w.blurb}</div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {w.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      {w.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
                        >
                          <ArrowRight className="h-4 w-4" /> {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Archive */}
              <div className="mt-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {site.sections.writing.archiveTitle}
                </div>
                <div className="mt-3 grid gap-3">
                  {site.sections.writing.archive.map((a) => (
                    <a
                      key={a.href}
                      href={a.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-700 shadow-sm hover:bg-white"
                    >
                      <div className="font-semibold text-slate-900">{a.title}</div>
                      <div className="mt-1 text-sm text-slate-600">{a.blurb}</div>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* About + Contact */}
          <div id="about" className="mt-6 scroll-mt-24">
            <div className="grid gap-4 lg:grid-cols-12">
              <Card className="p-6 md:p-8 lg:col-span-7">
                <SectionTitle
                  eyebrow={site.sections.about.eyebrow}
                  title={site.sections.about.title}
                  subtitle={site.sections.about.subtitle}
                />
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  {site.sections.about.body}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {site.sections.about.pills.map((p) => (
                    <Pill key={p}>{p}</Pill>
                  ))}
                </div>
              </Card>

              <Card id="contact" className="p-6 md:p-8 lg:col-span-5">
                <SectionTitle
                  eyebrow={site.sections.contact.eyebrow}
                  title={site.sections.contact.title}
                  subtitle={site.sections.contact.subtitle}
                />

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={`mailto:${site.person.links.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    <Mail className="h-4 w-4" /> {site.sections.contact.emailButtonLabel}
                  </a>

                  <a
                    href={site.person.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
                  >
                    <Linkedin className="h-4 w-4" /> {site.sections.contact.linkedinButtonLabel}
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 px-1 pb-10 text-xs text-slate-500">
            © {new Date().getFullYear()} {site.person.name} • {site.footer.text}
          </footer>
        </section>
      </div>
    </main>
  );
}
