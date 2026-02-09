export const site = {
  person: {
    name: "Madhur Khandelwal",
    title: "AVP • Agentic AI & Transformation",
    location: "Bengaluru, India",
    image: "/madhur.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/madhur17/",
      github: "https://github.com/MadhurKh",
      email: "Gpmadhur@gmail.com",
    },
  },

  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  leftRail: {
    pills: ["Governance-first", "DS↔Eng handshakes", "Enterprise delivery"],
    stats: [
      { label: "Delivery impact", value: "$150M+ identified value" },
      { label: "Team leadership", value: "50+ cross-functional team" },
      { label: "Core strength", value: "Auditability + measurable outcomes" },
    ],
    positioningLabel: "Positioning statement",
    positioningText:
      "I build enterprise-ready AI products that ship — with governance, evaluation, and adoption built in.",
    ctas: {
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      emailLabel: "Email",
    },
  },

  hero: {
    pills: ["GenAI • Agentic AI", "Transformation", "Product/Platform", "Process Intelligence"],
    title:
      "Building enterprise-grade GenAI solutions with strong governance, DS/ML collaboration, and measurable business impact.",
    blurb:
      "I’m an AVP at Genpact leading Lean Digital Transformation and AI initiatives across GenAI, process intelligence, and automation. This portfolio showcases practical demos, artifacts, and how I structure DS↔Engineering “handshakes” (schemas, scoring logic, tests, evaluation hooks).",
    primaryCta: { label: "Explore projects", href: "#projects" },
    secondaryCta: {
      label: "Watch featured demo",
      href: "https://drive.google.com/file/d/12sLuSNMl59imbLOYdIYgVAPFbO6yn9TY/view?usp=drive_link",
    },
    stats: [
      { label: "Governance-ready", value: "Controls, audit logs, evidence" },
      { label: "Interface contracts", value: "DS↔Eng schemas + versioning" },
      { label: "Delivery operating model", value: "KPI tracking + adoption" },
    ],
  },

  sections: {
    projects: {
      eyebrow: "Featured work",
      title: "Projects",
      subtitle: "Practical demos with enterprise-style outputs — not just slides.",
    },
    writing: {
      eyebrow: "Thought leadership",
      title: "Writing",
      subtitle: "Short, leadership-friendly insights on operating model, governance, and transformation.",
      rightCtaLabel: "View on LinkedIn",
      rightCtaHref: "https://www.linkedin.com/in/madhur17/",
    },
    about: {
      eyebrow: "Background",
      title: "About",
      subtitle: "How I work across product, engineering, and transformation delivery.",
      body:
        "I lead cross-functional teams spanning product, engineering, and transformation delivery. My focus is building scalable solutions with measurable outcomes — combining GenAI with strong governance and “design for change” (schemas, tests, documentation, and auditability).",
      pills: ["Operating model", "Adoption + controls", "Value realization"],
    },
    contact: {
      eyebrow: "Let’s talk",
      title: "Contact",
      subtitle: "For roles, collaborations, or a walkthrough of projects.",
      primaryLabel: "Email me",
      secondaryLabel: "Message on LinkedIn",
    },
  },

  projects: [
    {
      title: "GenAI Contract Risk Analyzer",
      highlight: "Explainable scoring + auditability",
      blurb:
        "Enterprise-style GenAI demo: risk register + evidence mapping + explainable scoring + audit log + JSON export. Designed with DS↔Engineering interface contracts.",
      tags: ["GenAI", "Governance", "Schemas", "Testing", "Streamlit"],
      links: {
        repo: "https://github.com/MadhurKh/GenAI-Contract-Risk-Analyzer",
        demo: "https://drive.google.com/file/d/12sLuSNMl59imbLOYdIYgVAPFbO6yn9TY/view?usp=drive_link",
      },
      topTags: 3,
    },
  ],

  writing: [
    {
      title: "Agentic AI isn’t a tech upgrade. It’s an operating model upgrade.",
      blurb: "Guardrails, controls, auditability, and RACI matter as much as prompts.",
      note: "Coming soon: full post link",
    },
    {
      title: "Productionizing GenAI: evaluation harness + calibration + CI",
      blurb: "How to iterate safely with DS/ML while keeping interfaces stable.",
      note: "Coming soon: full post link",
    },
  ],

  footer: {
    suffix: "Built with Next.js + Tailwind",
  },
} as const;
