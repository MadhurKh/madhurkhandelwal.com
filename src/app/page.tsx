const LINKS = {
  github: "https://github.com/MadhurKh",
  linkedin: "https://www.linkedin.com/in/madhur17/",
  repoContractRisk: "https://github.com/MadhurKh/GenAI-Contract-Risk-Analyzer",
  demoContractRisk:
    "https://drive.google.com/file/d/12sLuSNMl59imbLOYdIYgVAPFbO6yn9TY/view?usp=drive_link",
  email: "mailto:madhurkhandelwal@gmail.com",
};

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div className="badge">{eyebrow}</div>
      <h2 style={{ margin: "10px 0 6px", fontSize: 26, letterSpacing: -0.4 }}>
        {title}
      </h2>
      {subtitle ? (
        <p style={{ margin: 0, color: "rgba(11,18,32,0.72)", lineHeight: 1.6 }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span
      style={{
        padding: "8px 10px",
        borderRadius: 999,
        border: "1px solid rgba(15,23,42,0.10)",
        background: "rgba(255,255,255,0.7)",
        fontSize: 13,
      }}
    >
      {text}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      {/* Top Nav */}
      <div className="container" style={{ paddingBottom: 10 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          <div style={{ fontWeight: 800, letterSpacing: -0.4 }}>
            Madhur<span style={{ color: "#0b5cff" }}>Khandelwal</span>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn" href="#projects">
              Projects
            </a>
            <a className="btn" href="#writing">
              Writing
            </a>
            <a className="btn" href="#about">
              About
            </a>
            <a className="btn btnPrimary" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="container">
        <div
          className="card"
          style={{
            padding: 26,
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 18,
          }}
        >
          <div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="badge">AVP • GenAI & Transformation</span>
              <span className="badge">Enterprise delivery • 50+ team</span>
              <span className="badge">Portfolio demos + governance</span>
            </div>

            <h1
              style={{
                margin: "14px 0 10px",
                fontSize: 44,
                lineHeight: 1.05,
                letterSpacing: -1.2,
              }}
            >
              I build enterprise-ready AI products that ship.
            </h1>

            <p
              style={{
                margin: 0,
                color: "rgba(11,18,32,0.74)",
                lineHeight: 1.7,
                fontSize: 16,
                maxWidth: 680,
              }}
            >
              Digital Transformation leader specializing in GenAI, Agentic AI,
              Intelligent Automation, and Process Intelligence — with a focus on
              auditability, measurable impact, and scalable operating models.
            </p>

            <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
              <a className="btn btnPrimary" href="#projects">
                View featured work →
              </a>
              <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn" href={LINKS.email}>
                Email
              </a>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
              <Pill text="GenAI • RAG • Prompt Engineering" />
              <Pill text="Agentic workflows • governance" />
              <Pill text="Process Mining • SaaS platforms" />
              <Pill text="Value tracking • KPI operating model" />
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: "grid", gap: 12 }}>
            <div className="card" style={{ padding: 16 }}>
              <div style={{ fontSize: 12, color: "rgba(11,18,32,0.65)" }}>
                Delivery impact
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>
                $150M+
              </div>
              <div style={{ color: "rgba(11,18,32,0.70)", lineHeight: 1.6 }}>
                Identified value across solutions (POCs + production).
              </div>
            </div>
            <div className="card" style={{ padding: 16 }}>
              <div style={{ fontSize: 12, color: "rgba(11,18,32,0.65)" }}>
                Scalable execution
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>
                50+
              </div>
              <div style={{ color: "rgba(11,18,32,0.70)", lineHeight: 1.6 }}>
                Cross-functional team leadership (DE/Architects/PM/BA).
              </div>
            </div>
            <div className="card" style={{ padding: 16 }}>
              <div style={{ fontSize: 12, color: "rgba(11,18,32,0.65)" }}>
                GenAI readiness
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>
                DS ↔ Eng
              </div>
              <div style={{ color: "rgba(11,18,32,0.70)", lineHeight: 1.6 }}>
                Data contracts, evaluation harness, tests, audit logs.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div id="projects" className="container" style={{ marginTop: 22 }}>
        <SectionTitle
          eyebrow="Featured work"
          title="Projects that demonstrate real production patterns"
          subtitle="Not just demos — each project is structured with schemas, interfaces, auditability, and testing to mirror how enterprise teams build and iterate safely."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 14,
          }}
        >
          <div className="card" style={{ padding: 18 }}>
            <div className="badge">GenAI • Legal/Procurement • Governance-ready</div>
            <h3 style={{ margin: "10px 0 6px", fontSize: 18 }}>
              GenAI Contract Risk Analyzer
            </h3>
            <p style={{ margin: 0, color: "rgba(11,18,32,0.72)", lineHeight: 1.65 }}>
              Converts contract text into a structured risk register with evidence,
              explainable scoring, feature extraction (“DS handshake”), audit log, and
              exportable JSON.
            </p>

            <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
              <a className="btn btnPrimary" href={LINKS.demoContractRisk} target="_blank" rel="noreferrer">
                2-min demo video →
              </a>
              <a className="btn" href={LINKS.repoContractRisk} target="_blank" rel="noreferrer">
                GitHub repo
              </a>
            </div>

            <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Pill text="Risk register + evidence" />
              <Pill text="Schema contract" />
              <Pill text="Scoring logic" />
              <Pill text="Unit tests + CI" />
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div className="badge">Coming next</div>
            <h3 style={{ margin: "10px 0 6px", fontSize: 18 }}>
              Agentic AI — Procurement Copilot
            </h3>
            <p style={{ margin: 0, color: "rgba(11,18,32,0.72)", lineHeight: 1.65 }}>
              Multi-agent workflow for sourcing, contract review, PO compliance,
              and vendor comms — with human-in-the-loop approvals and governance.
            </p>

            <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
              <button className="btn" disabled style={{ opacity: 0.7 }}>
                Demo link (soon)
              </button>
              <button className="btn" disabled style={{ opacity: 0.7 }}>
                Repo (soon)
              </button>
            </div>

            <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Pill text="Agents + orchestration" />
              <Pill text="Policy/guardrails" />
              <Pill text="Evaluation + monitoring" />
              <Pill text="Ops integration" />
            </div>
          </div>
        </div>
      </div>

      {/* Writing */}
      <div id="writing" className="container" style={{ marginTop: 22 }}>
        <SectionTitle
          eyebrow="Writing"
          title="Thought leadership that’s grounded in delivery"
          subtitle="Short, practical posts and articles on operating models, governance, and how AI actually lands in real workflows."
        />

        <div className="card" style={{ padding: 18 }}>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
            <li>
              <strong>Agentic AI isn’t a tech upgrade. It’s an operating model upgrade.</strong>{" "}
              <span style={{ color: "rgba(11,18,32,0.7)" }}>
                (Governance, RACI, auditability, controls)
              </span>
            </li>
            <li>
              <strong>How to move from GenAI pilots to embedded systems.</strong>{" "}
              <span style={{ color: "rgba(11,18,32,0.7)" }}>
                (Integration patterns, evaluation, monitoring)
              </span>
            </li>
          </ul>

          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              View posts on LinkedIn →
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="container" style={{ marginTop: 22 }}>
        <SectionTitle
          eyebrow="About"
          title="Leadership + delivery across AI, automation, and transformation"
          subtitle="I lead end-to-end delivery — from strategy and operating model to implementation and measurable value realization."
        />

        <div className="card" style={{ padding: 18 }}>
          <p style={{ margin: 0, color: "rgba(11,18,32,0.78)", lineHeight: 1.75 }}>
            I’m an AVP at Genpact leading Lean Digital Transformation initiatives across
            enterprise clients. My work spans GenAI, process mining, automation platforms,
            and governance — with a strong focus on building reusable playbooks and
            scaling adoption across accounts.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn profile
            </a>
            <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub profile
            </a>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="container" style={{ marginTop: 22, paddingBottom: 46 }}>
        <div className="card" style={{ padding: 18 }}>
          <SectionTitle
            eyebrow="Contact"
            title="Want to discuss a role or a collaboration?"
            subtitle="Happy to share a deeper walkthrough of my portfolio projects and how I’d scale them into production-grade implementations."
          />

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn btnPrimary" href={LINKS.email}>
              Email me
            </a>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              Message on LinkedIn
            </a>
          </div>

          <div style={{ marginTop: 14, color: "rgba(11,18,32,0.6)", fontSize: 13 }}>
            © {new Date().getFullYear()} Madhur Khandelwal
          </div>
        </div>
      </div>
    </main>
  );
}
