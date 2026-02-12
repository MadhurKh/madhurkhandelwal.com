// src/content/site.ts

export const site = {
  person: {
    name: "Madhur Khandelwal",
    title: "Senior AI Product Leader • GenAI + Agentic AI • Transformation",
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
  },

  contact: {
    emailLabel: "Email me",
  },

  hero: {
    pills: ["GenAI + Agentic AI", "Transformation", "Product/Platform", "Process Intelligence"],
    headline:
      "Building enterprise-grade GenAI solutions with strong governance, DS/ML collaboration, and measurable business impact.",
    body:
      "I’m an AVP at Genpact leading Lean Digital Transformation and AI initiatives across GenAI, process intelligence, and automation. This portfolio showcases practical demos, artifacts, and how I structure DS↔Engineering “handshakes” (schemas, scoring logic, tests, evaluation hooks).",
    primaryCta: { label: "Explore projects", href: "#projects" },
    secondaryCta: {
      label: "Watch featured demo",
      href: "https://drive.google.com/file/d/12sLuSNMl59imbLOYdIYgVAPFbO6yn9TY/view?usp=drive_link",
    },
    highlights: [
      { label: "Governance-ready", value: "Controls, audit logs, evidence" },
      { label: "Interface contracts", value: "DS↔Eng schemas + versioning" },
      { label: "Delivery operating model", value: "KPI tracking + adoption" },
    ],
  },

  sections: {
    featured: {
      eyebrow: "Featured in",
      title: "Genpact — People of Genpact",
      blurb:
        "Recognized as a Digital Transformation & Agentic AI leader; Top 3 winner in Genpact’s global Think Agentic contest (9,000+ ideas).",
      ctaLabel: "Read on LinkedIn",
      url:
        "https://www.linkedin.com/posts/genpact_people-of-genpact-madhur-khandelwal-activity-7384942623574147072-eCeU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA3HwcIB0zqX4660rYqVle_0ItoVUWK2yk0",
    },

    projects: {
      eyebrow: "Featured work",
      title: "Projects",
      subtitle: "Practical demos with enterprise-style outputs — not just slides.",
    },

    writing: {
      eyebrow: "Thought leadership",
      title: "Writing",
      subtitle:
        "Posts and articles that show how I build AI products: governance, evaluation, interface contracts, and enterprise delivery.",
      buttonLabel: "View on LinkedIn",
      buttonHref: "https://www.linkedin.com/in/madhur17/",
      posts: [
        {
          title: "Enterprise GenAI & Agentic AI Governance + Evaluation Framework (v1)",
          blurb:
            "Readiness ≠ Permission. A practical framework for regulated environments: tiering, evaluation dimensions, gates, and a worked example.",
          tags: ["Agentic AI", "AI Governance", "Evaluation", "Risk"],
          links: [
            {
              label: "Read post",
              href:
                "https://www.linkedin.com/posts/madhur17_enterprise-genai-agentic-ai-governance-activity-7427018116964175873--aI7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA3HwcIB0zqX4660rYqVle_0ItoVUWK2yk0",
            },
            {
              label: "View GitHub repo",
              href: "https://github.com/MadhurKh/enterprise-genai-agentic-governance-framework",
            },
          ],
        },
        {
          title: "GenAI Contract Risk Analyzer (portfolio demo)",
          blurb:
            "Enterprise-style outputs: risk score, risk register, evidence mapping, exportable JSON, and audit log — designed with DS↔Eng interface contracts.",
          tags: ["GenAI", "Product Demo", "Schemas", "Auditability"],
          links: [
            { label: "Watch 2-min demo", href: "https://drive.google.com/file/d/12sLuSNMl59imbLOYdIYgVAPFbO6yn9TY/view?usp=drive_link" },
            { label: "View repo", href: "https://github.com/MadhurKh/GenAI-Contract-Risk-Analyzer" },
          ],
        },
      ],

      // Optional: keep older articles here (shows depth, but doesn’t distract)
      archiveTitle: "Earlier writing",
      archive: [
        {
          title: "Driving Innovation with Intelligent Automation: Unleashing the Power of AI and RPA",
          blurb: "A structured view of intelligent automation and where AI adds leverage in enterprise ops.",
          href: "https://www.linkedin.com/pulse/driving-innovation-intelligent-automation-unleashing-power-madhur",
        },
        {
          title: "Embracing the Future: The Power of Hyperautomation",
          blurb: "Hyperautomation overview: combining RPA, process intelligence, and AI to scale outcomes.",
          href: "https://www.linkedin.com/pulse/embracing-future-power-hyperautomation-madhur-khandelwal",
        },
        {
          title: "AI and ML for Digital Transformation: Unlocking Business Opportunities and Efficiency Gains",
          blurb: "How AI/ML drives measurable efficiency gains in enterprise transformation programs.",
          href: "https://www.linkedin.com/pulse/ai-ml-digital-transformation-unlocking-business-gains-khandelwal",
        },
      ],
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
      emailButtonLabel: "Email me",
      linkedinButtonLabel: "Message on LinkedIn",
    },
  },

  footer: {
    text: "Built with Next.js + Tailwind",
  },
} as const;

export type Site = typeof site;
