// src/content/site.ts

export const site = {
  person: {
    name: "Madhur Khandelwal",
    title: "AI Transformation Leader | Enterprise AI Strategy | GenAI & Agentic AI",
    location: "Bengaluru, India",
    image: "/madhur.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/madhur17/",
      github: "https://github.com/MadhurKh",
      email: "gpmadhur@gmail.com",
    },
  },

  nav: [
    { label: "Playbook", href: "#playbook" },
    { label: "Solutions", href: "#solutions" },
    { label: "Writing", href: "#writing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  contact: {
    emailLabel: "Email me",
  },

  leftRail: {
    pills: ["Enterprise AI Strategy", "GenAI & Agentic AI", "Governance + Value Realization"],
    stats: [
      { label: "Programs delivered", value: "10+ AI & transformation programs" },
      { label: "Value delivered", value: "$150M+ identified • $50M+ active" },
      { label: "Teams led", value: "50+ cross-functional resources" },
    ],
    positioningLabel: "What I do",
    positioningText:
      "I help enterprises scale AI from pilots to production—building use-case portfolios, governance, and operating models that drive adoption and measurable business outcomes.",
  },

  hero: {
    pills: ["AI Transformation", "GenAI", "Agentic AI", "Automation", "Governance", "Value Realization"],
    headline:
      "Scaling AI from pilot to enterprise adoption—strategy, governance, and measurable value.",
    body:
      "I lead enterprise AI transformation programs that convert ambiguous AI ambition into structured execution. My focus areas include GenAI and agentic AI, intelligent automation, use-case portfolio design, responsible AI governance (HITL, RBAC, auditability), and change management—so solutions ship, get adopted, and sustain value.",
    primaryCta: { label: "Explore solutions", href: "#solutions" },
    secondaryCta: {
      label: "Watch GenAI demo",
      href: "https://drive.google.com/file/d/12sLuSNMl59imbLOYdIYgVAPFbO6yn9TY/view?usp=drive_link",
    },
    highlights: [
      { label: "Strategy → Execution", value: "Use-cases • roadmaps • business cases" },
      { label: "Governed deployment", value: "HITL • RBAC • audit trails" },
      { label: "Outcomes", value: "Productivity • accuracy • cycle-time • $ value" },
    ],
  },

  sections: {
    playbook: {
      eyebrow: "How I scale AI",
      title: "AI Transformation Playbook",
      subtitle:
        "A practical, repeatable approach to move from ideas to production AI with adoption and value realization.",
      items: [
        {
          icon: "discover",
          title: "Discover & diagnose",
          blurb: "Assess processes, data, risk constraints, and “what good looks like” using structured diagnostics and benchmarking.",
        },
        {
          icon: "design",
          title: "Design the portfolio",
          blurb: "Define a prioritized use-case portfolio with ROI logic, feasibility, operating mechanisms, and clear ownership.",
        },
        {
          icon: "build",
          title: "Build & integrate",
          blurb: "Deliver solutions across RPA, process mining, OCR, analytics, GenAI/agentic AI with scalable patterns and integrations.",
        },
        {
          icon: "govern",
          title: "Govern responsibly",
          blurb: "Implement controls: HITL checkpoints, RBAC, auditability, monitoring, and compliance guardrails.",
        },
        {
          icon: "adopt",
          title: "Drive adoption",
          blurb: "Enable teams through SOPs, change management, training, and measurable adoption metrics.",
        },
        {
          icon: "value",
          title: "Realize & sustain value",
          blurb: "Track outcomes (cost, cycle time, accuracy), run continuous improvement, and report value with executive visibility.",
        },
      ],
    },

    featured: {
      eyebrow: "Recognition",
      title: "Top 3 Global Leader — Genpact Agentic AI Program",
      blurb:
        "Recognized among the Top 3 globally for designing enterprise-ready multi-agent solutions with practical business applicability and strong ROI focus.",
      ctaLabel: "View LinkedIn",
      url: "https://www.linkedin.com/in/madhur17/",
    },

    solutions: {
      eyebrow: "Selected work",
      title: "AI Solutions & Accelerators",
      subtitle:
        "A curated set of enterprise AI initiatives—productized tools, governed GenAI patterns, and scalable operating mechanisms.",
    },

    writing: {
      eyebrow: "Thought leadership",
      title: "Writing",
      subtitle:
        "Perspectives on scaling AI, governance, and building production-ready GenAI/agentic solutions.",
      buttonLabel: "View on LinkedIn",
      buttonHref: "https://www.linkedin.com/in/madhur17/",
      posts: [
        {
          title:
            "What Actually Makes Complex Product Launches Succeed: A Technical Program Management Perspective",
          blurb:
            "A practical execution lens on dependencies, decision ownership, launch gates, executive visibility, and post-launch outcomes—useful patterns for scaling AI delivery too.",
          tags: ["Execution", "Governance", "Operating model"],
          links: [
            {
              label: "Read on LinkedIn",
              href: "https://www.linkedin.com/pulse/what-actually-makes-complex-product-launches-succeed-khandelwal-lhf2c",
            },
          ],
        },
        {
          title: "Scaling AI from pilots to production",
          blurb:
            "How to move beyond isolated demos: portfolio design, governance, adoption, and value realization.",
          tags: ["AI transformation", "Adoption", "Value"],
          links: [{ label: "View on LinkedIn", href: "https://www.linkedin.com/in/madhur17/" }],
        },
      ],
    },

    about: {
      eyebrow: "Background",
      title: "About",
      subtitle: "Enterprise AI transformation, delivery leadership, and governance.",
      body:
        "AI transformation leader with 13+ years of experience driving enterprise adoption of AI, GenAI, and intelligent automation across global organizations. I lead cross-functional teams across engineering, architecture, analytics, PMO, and business functions to translate strategy into AI roadmaps, governed deployment, adoption, and measurable business outcomes.",
      pills: ["Enterprise AI", "GenAI & Agentic AI", "Automation", "Governance", "Value realization"],
    },

    contact: {
      eyebrow: "Let’s connect",
      title: "Contact",
      subtitle: "For AI transformation leadership roles, collaborations, or solution walkthroughs.",
      emailButtonLabel: "Email me",
      linkedinButtonLabel: "Message on LinkedIn",
    },
  },

  footer: {
    text: "Built with Next.js + Tailwind",
  },
} as const;
