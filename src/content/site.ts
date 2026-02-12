export const site = {
  person: {
    name: "Madhur Khandelwal",
    title: "AVP • AI Product / GenAI • Transformation",
    location: "Bengaluru, India",
    image: "/madhur.jpg", // make sure the actual file name matches
    links: {
      linkedin: "https://www.linkedin.com/in/madhur17/",
      github: "https://github.com/MadhurKh",
      email: "Gpmadhur@gmail.com",
    },
  },

  // Used in the sticky top nav (mobile/header)
  nav: {
    subtitle: "Executive AI Product Leader • GenAI • Enterprise Transformation",
  },

  // Used in the left rail
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

  // Used in the main hero (right panel)
  hero: {
    pills: ["GenAI + Agentic AI", "AI Product Management", "Enterprise Governance", "Transformation"],
    headline:
      "Building enterprise-grade AI products and GenAI solutions with governance, DS/ML collaboration, and measurable outcomes.",
    subheadline:
      "I lead AI product and transformation initiatives across GenAI, process intelligence, and automation. This portfolio showcases practical demos and how I structure DS↔Engineering handshakes (schemas, scoring logic, tests, evaluation hooks).",
    primaryDemoHref:
      "https://drive.google.com/file/d/12sLuSNMl59imbLOYdIYgVAPFbO6yn9TY/view?usp=drive_link",
    stats: [
      { label: "Governance-ready", value: "Controls, audit logs, evidence", icon: "shield" },
      { label: "Interface contracts", value: "DS↔Eng schemas + versioning", icon: "layers" },
      { label: "Product operating model", value: "Roadmaps, adoption, KPI tracking", icon: "workflow" },
    ],
  },

  sections: {
    featured: {
      eyebrow: "Featured in",
      title: "Genpact — People of Genpact",
      blurb:
        "Recognized as a Digital Transformation & Agentic AI leader; Top 3 winner in Genpact’s global Think Agentic contest (9,000+ ideas).",
      ctaLabel: "Read on LinkedIn",
      url: "https://www.linkedin.com/posts/genpact_people-of-genpact-madhur-khandelwal-activity-7384942623574147072-eCeU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA3HwcIB0zqX4660rYqVle_0ItoVUWK2yk0",
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
        "Short, leadership-friendly insights on AI product, governance, and transformation.",
      buttonLabel: "View on LinkedIn",
      buttonHref: "https://www.linkedin.com/in/madhur17/",
      cards: [
        {
          title: "Agentic AI isn’t a tech upgrade. It’s an operating model upgrade.",
          blurb: "Guardrails, controls, auditability, and RACI matter as much as prompts.",
        },
        {
          title: "Productionizing GenAI: evaluation harness + calibration + CI",
          blurb: "How to iterate safely with DS/ML while keeping interfaces stable.",
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

  // Used in left rail email button label
  contact: {
    emailLabel: "Email",
  },
} as const;
