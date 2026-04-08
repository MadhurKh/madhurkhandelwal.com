// src/content/site.ts

export const site = {
  person: {
    name: "Madhur Khandelwal",
    title: "Senior Technical Program Leader",
    location: "Bengaluru, India",
    image: "/madhur.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/madhur17/",
      github: "https://github.com/MadhurKh",
      templatesRepo: "https://github.com/MadhurKh/tpm-templates",
      email: "madhur.khandelwal@gmail.com",
    },
  },

  nav: [
    { label: "Playbook", href: "#playbook" },
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  contact: {
    emailLabel: "Email me",
  },

  leftRail: {
    pills: ["Roadmap + Release", "RAID + Dependencies", "Scale + Reliability"],
    stats: [
      { label: "Delivery impact", value: "$150M+ programs governed" },
      { label: "Operating model", value: "RAID + stage gates + release cadence" },
      { label: "Execution scale", value: "50+ cross-functional delivery org" },
    ],
    positioningLabel: "Positioning statement",
    positioningText:
      "I drive complex platform programs end-to-end — aligning stakeholders, managing dependencies and risk, and delivering measurable outcomes through disciplined execution.",
  },

  hero: {
    pills: [
      "Technical Program Management",
      "Platform Delivery",
      "Roadmap + Release",
      "Operational Excellence",
    ],
    headline:
      "Delivering complex platform programs end-to-end—roadmap, dependencies, release readiness, and measurable outcomes.",
    body:
      "I lead cross-functional technical programs across the full product lifecycle—partnering with Engineering, Product, UX, Legal, Finance, Support, and GTM teams to plan dependencies, manage RAID, drive release readiness, and deliver outcomes tied to reliability, performance, customer experience, and operational efficiency. Tooling + cadence: Jira, Confluence, Smartsheet; weekly exec updates; RAID + decision logs + readiness checklists.",
    primaryCta: { label: "Explore programs", href: "#projects" },
    secondaryCta: {
      label: "Watch featured demo",
      href: "https://drive.google.com/file/d/12sLuSNMl59imbLOYdIYgVAPFbO6yn9TY/view?usp=drive_link",
    },
    highlights: [
      { label: "Execution", value: "Roadmap → delivery → launch" },
      { label: "Governance", value: "RAID + readiness discipline" },
      { label: "Outcomes", value: "Business + technical metrics" },
    ],
  },

  sections: {
    playbook: {
      eyebrow: "How I execute",
      title: "Program Delivery Playbook",
      subtitle:
        "The repeatable system I use to make large, cross-functional programs predictable.",
      items: [
        {
          icon: "roadmap",
          title: "Roadmap planning + prioritization",
          blurb:
            "Define scope, milestones, and success metrics; drive continuous prioritization as constraints change.",
        },
        {
          icon: "deps",
          title: "Dependency mapping (end-to-end)",
          blurb:
            "Clarify interfaces and sequencing across Eng, Product, UX, Legal, Finance, Support, and GTM.",
        },
        {
          icon: "release",
          title: "Release readiness + launch plan",
          blurb:
            "Run readiness reviews, checklists, and cutover plans to ensure smooth launches and customer impact.",
        },
        {
          icon: "raid",
          title: "RAID + change control",
          blurb:
            "Maintain RAID logs, mitigation owners, and decision cadences; manage scope change with clarity.",
        },
        {
          icon: "stakeholders",
          title: "Stakeholder cadence + executive comms",
          blurb:
            "Keep teams aligned through crisp updates, decision memos, and leadership-ready reporting.",
        },
        {
          icon: "metrics",
          title: "LOE/resource planning + delivery metrics",
          blurb:
            "Partner with engineering on LOE, staffing, and capacity; track delivery and outcome KPIs.",
        },
      ],
    },

    featured: {
      eyebrow: "Featured in",
      title: "Genpact — People of Genpact",
      blurb:
        "Recognized as a Digital Transformation & Agentic AI leader; Top 3 winner in Genpact’s global Think Agentic contest (9,000+ ideas). Trusted to scale delivery playbooks and governance across programs.",
      ctaLabel: "Read on LinkedIn",
      url: "https://www.linkedin.com/in/madhur17/",
    },

    projects: {
      eyebrow: "Featured work",
      title: "Programs",
      subtitle:
        "Platform and delivery programs—end-to-end execution, dependencies, release readiness, and measurable outcomes.",
    },

    writing: {
      eyebrow: "Thought leadership",
      title: "Writing",
      subtitle:
        "Posts on program execution, governance, release readiness, and building enterprise-scale platforms.",
      buttonLabel: "View on LinkedIn",
      buttonHref: "https://www.linkedin.com/in/madhur17/",
      posts: [
        {
          title:
            "What Actually Makes Complex Product Launches Succeed: A Technical Program Management Perspective",
          blurb:
            "Complex launches rarely fail due to effort. They fail when dependencies surface too late, decision owners are unclear, and release readiness is managed late. This article shares a practical TPM view on roadmap sequencing, dependency control, launch gates, executive visibility, and post-launch outcomes.",
          tags: ["Launch", "Dependencies", "Release readiness", "TPM"],
          links: [
            {
              label: "Read on LinkedIn",
              href: "https://www.linkedin.com/pulse/what-actually-makes-complex-product-launches-succeed-khandelwal-lhf2c",
            },
          ],
        },
        {
          title: "Running platform releases: readiness, RAID, and predictable delivery",
          blurb:
            "A practical playbook for release planning, risk management, and keeping cross-functional teams aligned.",
          tags: ["Release", "RAID", "Operating model"],
          links: [{ label: "View on LinkedIn", href: "https://www.linkedin.com/in/madhur17/" }],
        },
        {
          title: "Governance that improves predictability (not bureaucracy)",
          blurb:
            "How to use stage gates, interface contracts, and lightweight controls to accelerate delivery outcomes.",
          tags: ["Governance", "Delivery", "Interfaces"],
          links: [{ label: "View on LinkedIn", href: "https://www.linkedin.com/in/madhur17/" }],
        },
      ],
      archiveTitle: "Earlier writing",
      archive: [
        {
          title:
            "Driving Innovation with Intelligent Automation: Unleashing the Power of AI and RPA",
          blurb:
            "A structured view of intelligent automation and where AI adds leverage in enterprise ops.",
          href: "https://www.linkedin.com/in/madhur17/",
        },
        {
          title: "Embracing the Future: The Power of Hyperautomation",
          blurb:
            "Hyperautomation overview: combining RPA, process intelligence, and AI to scale outcomes.",
          href: "https://www.linkedin.com/in/madhur17/",
        },
        {
          title:
            "AI and ML for Digital Transformation: Unlocking Business Opportunities and Efficiency Gains",
          blurb:
            "How AI/ML drives measurable efficiency gains in enterprise transformation programs.",
          href: "https://www.linkedin.com/in/madhur17/",
        },
      ],
    },

    about: {
      eyebrow: "Background",
      title: "About",
      subtitle: "How I work across product, engineering, and program delivery.",
      body:
        "I lead cross-functional teams spanning product, engineering, and transformation delivery. My focus is building scalable solutions with measurable outcomes—through crisp roadmaps, disciplined execution, and strong operating mechanisms (dependencies, RAID, and release readiness).",
      pills: ["Operating model", "Adoption + controls", "Value realization"],
    },

    contact: {
      eyebrow: "Let’s talk",
      title: "Contact",
      subtitle:
        "For roles, collaborations, or a walkthrough of programs and delivery approach.",
      emailButtonLabel: "Email me",
      linkedinButtonLabel: "Message on LinkedIn",
    },
  },

  footer: {
    text: "Built with Next.js + Tailwind",
  },
} as const;