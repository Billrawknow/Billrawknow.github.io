/* =====================================================================
   YOUR CONTENT LIVES HERE.
   Edit this one file and both the portfolio (index.html) and the
   Europass CV (cv.html) update. Keep the quotes and commas intact.
   Dates use "YYYY-MM". Use "present" for a current role.
   ===================================================================== */

window.CV = {
  updated: "2026-09",

  person: {
    fullName: "Bildad Cheruiyot Ronoh",
    title: "Software Developer",
    location: "Nairobi, Kenya",
    email: "bildadronoh@gmail.com",
    phone: "+254 720 115 905",
    github: "https://github.com/Billrawknow",
    linkedin: "https://www.linkedin.com/in/bildad-ronoh/",
    twitter: "https://x.com/RawknowCheru", // X (Twitter); "" hides the icon
    website: "", // paste your Netlify link once it's live
    photo: "", // optional: put photo.jpg in this folder and write "photo.jpg"
    nationality: "", // Europass optional field, e.g. "Kenyan"; "" hides it
    dateOfBirth: "", // Europass optional field, e.g. "15/03/1995"; "" hides it
  },

  // Short intro on the portfolio home page (first person).
  headline:
    "I build backend systems, APIs and data pipelines in Java, Spring Boot, TypeScript and Python — mostly for telecom, enterprise and fintech work where the data is large and the numbers have to be right.",

  // "About me" on the Europass CV.
  cvSummary:
    "Detail-oriented and results-driven Software Developer with strong experience in backend engineering, AI and data engineering, and ETL pipeline development. Proficient in Java, Spring Boot and Python, with hands-on experience building machine learning pipelines, natural language processing components and data transformation workflows. Proven ability to design secure, high-performance APIs, implement multi-level workflow systems and process high-volume data at scale. Experienced in both public sector and private environments, with a solid understanding of government systems, data integrity and operational reliability.",

  /* ---------------- PORTFOLIO-ONLY CONTENT (not on the CV) ---------------- */
  site: {
    heroTitle: "Backend engineer, data builder & founder.",
    heroSub:
      "I build the systems behind the screen: APIs, data pipelines and business platforms that stay fast when the data gets big.",

    introTitle: "Hi, I'm Bildad. Nice to meet you.",
    // Your story, one paragraph per line.
    story: [
      "I started in public-sector ICT, keeping school platforms, networks and digital records running at the Ministry of Education and the National Council for Persons with Disabilities. That's where I learned that data people depend on has to be correct, backed up and available.",
      "I moved into software full time: machine learning and NLP pipelines at Redfin Kenya, then Java and Spring Boot systems at Bushnet for telecom operators, where I built ETL for Huawei, Nokia and Cisco network data and turned a 57-second API into a sub-second one.",
      "Today I freelance for businesses that need reliable software, build my own products for African markets, and run Rawknow, an IT and computer hardware company in Kericho and Nairobi.",
    ],

    // The three columns in the big card. icon: "server", "data" or "rocket".
    hats: [
      {
        icon: "server",
        title: "Backend engineer",
        text: "I design APIs and services that are secure, well structured and quick under real load.",
        enjoyTitle: "Things I enjoy building",
        enjoy:
          "REST and GraphQL APIs, approval workflows, multi-tenant platforms, performance tuning",
        toolsTitle: "Stack",
        tools: [
          "Java",
          "Spring Boot",
          "WebFlux",
          "TypeScript",
          "Fastify",
          "GraphQL",
        ],
        stat: "57 s → under 1 s",
        statLabel: "critical API response time",
      },
      {
        icon: "data",
        title: "Data & AI engineer",
        text: "I move messy data from where it's created to where it's useful, and check it at every step.",
        enjoyTitle: "Things I enjoy building",
        enjoy:
          "ETL pipelines, batch reconciliation, NLP document extraction, ML models",
        toolsTitle: "Tools",
        tools: [
          "Python",
          "scikit-learn",
          "PostgreSQL",
          "MySQL",
          "Oracle",
          "MSSQL",
        ],
        stat: "1.2M+",
        statLabel: "records in a single import",
      },
      {
        icon: "rocket",
        title: "Builder & founder",
        text: "I build my own products for African markets and run an IT hardware business.",
        enjoyTitle: "Things I enjoy building",
        enjoy: "Marketplaces, supply chain, fintech and edtech products",
        toolsTitle: "Shipping with",
        tools: ["Next.js", "React", "Prisma", "Docker", "Linux", "CI/CD"],
        stat: "3 ventures",
        statLabel: "a business and two products",
      },
    ],

    // Name wall. Remove any you're not allowed to name publicly.
    builtForTitle: "Organisations I've built systems for",
    builtFor: [
      "Zain KSA",
      "Zain Jordan",
      "Telkom Kenya",
      "Meridian Power & Automation",
      "KIPS Hardware & Lubricants",
      "NCPWD",
      "Ministry of Education",
    ],

    // Your own ventures. status: "Active", "In progress", "On hold", etc.
    // stack is optional (leave [] to hide the tags).
    ventures: [
      {
        name: "Rawknow Company Ltd",
        mark: "R",
        text: "IT and computer hardware sales, repair and refurbishment in Kericho and Nairobi.",
        status: "Active",
        link: "",
        stack: [],
      },
      {
        name: "Dukalink",
        mark: "D",
        text: "Supply chain platform connecting retailers, aggregation groups and field agents in informal markets, with retailer credit accounts.",
        status: "In progress",
        link: "",
        stack: [
          "TypeScript",
          "Fastify",
          "Apollo GraphQL",
          "Prisma",
          "BullMQ",
          "PostgreSQL",
        ],
      },
      {
        name: "RahaSpace",
        mark: "S",
        text: "Rental platform where viewing requests go out to agents Uber-style, top-rated agents first, with commissions tracked per showing.",
        status: "In progress",
        link: "",
        stack: ["TypeScript", "GraphQL", "Fastify", "Prisma", "PostgreSQL"],
      },
    ],

    // What you're doing now: shown at the top of "How I got here".
    now: {
      title: "Freelance software developer",
      org: "Building for clients and my own products",
      when: "Now",
    },

    // Leave empty to hide. Only add real quotes you have permission to use:
    // { quote: "...", name: "Jane Doe", role: "CTO, Company" }
    testimonials: [],

    ctaTitle: "Start a project",
    ctaText:
      "Need an API, a data pipeline or a full business system? Let's talk about it.",
    ctaButton: "Let's talk",
    footerLine: "Building fast, reliable systems from Nairobi.",
  },

  experience: [
    {
      title: "Software Developer",
      org: "Bushnet Systems",
      location: "Kenya",
      start: "2025-02",
      end: "2026-04",
      items: [
        "Designed and developed scalable backend systems and microservices using Java and Spring Boot with clean, modular architecture.",
        "Built and maintained secure RESTful and GraphQL APIs with advanced filtering, validation and protection against SQL injection.",
        "Implemented multi-level approval workflows and automated complex business processes for enterprise systems.",
        "Optimized performance through refactoring, query tuning and caching, reducing critical response times from over 57 seconds to under one second.",
        "Designed and managed database schemas across MySQL, Oracle, PostgreSQL and MSSQL, including large-scale imports exceeding 1.2 million records.",
        "Built ETL workflows for inventory, network and reporting systems, processing Huawei OSN and Cisco datasets into structured, normalized records.",
        "Implemented scheduled batch jobs for data validation, reconciliation and synchronization across multiple systems.",
        "Supported CI/CD pipelines, environment configuration, WAR-based deployments and production monitoring via Spring Boot Actuator.",
      ],
    },

    {
      title: "Software Developer",
      org: "Redfin Kenya Limited",
      location: "Nairobi, Kenya",
      start: "2024-09",
      end: "2025-05",
      groups: [
        {
          name: "AI & data engineering",
          items: [
            "Build ML pipelines that ingest, clean and process structured and unstructured data from operational sources, producing outputs suitable for analysis and automated reporting.",
            "Develop NLP components that extract structured information from text-heavy documents including reports, forms and correspondence, reducing manual data entry workload.",
            "Implement and tune classification and prediction models using Python and scikit-learn, with deployment managed through versioned model registries.",
            "Design data transformation workflows that move information between source systems and analytical stores, with validation checks at each stage.",
            "Build APIs that expose model outputs to internal applications and third-party systems behind clean, documented interfaces.",
          ],
        },
        {
          name: "Systems integration & backend",
          items: [
            "Develop backend services in Python integrating with government data systems, financial platforms and enterprise databases, handling authentication, rate limiting and error recovery.",
            "Design PostgreSQL schemas for data-intensive applications, including audit trails, soft deletes and time-series querying patterns.",
            "Build document processing services that ingest PDFs and structured files and parse them into normalized data models.",
          ],
        },
        {
          name: "Cloud & deployment",
          items: [
            "Manage containerized deployments with Docker, maintaining separate staging and production environments.",
            "Set up automated pipelines that run test suites on each push and gate production releases on passing builds.",
            "Monitor services with structured logs and alerting, triaging incidents and coordinating fixes in production.",
          ],
        },
      ],
    },
    {
      title: "ICT Support Officer",
      org: "National Council for Persons with Disabilities (NCPWD)",
      location: "Kenya",
      start: "2022-05",
      end: "2023-05",
      items: [
        "Supported data management, digital reporting systems and ICT infrastructure for government inclusion programmes.",
        "Managed digital records, backups and secure storage systems to ensure data integrity and compliance.",
        "Provided user support, system troubleshooting and ICT training to staff.",
      ],
    },
    {
      title: "ICT Intern",
      org: "Ministry of Education – State Department of Early Learning & Basic Education",
      location: "Kenya",
      start: "2021-05",
      end: "2022-04",
      items: [
        "Assisted in maintaining institutional ICT systems and digital school platforms.",
        "Supported LAN/WAN configurations, internet connectivity and device maintenance.",
        "Delivered digital literacy training for students and teachers.",
      ],
    },
  ],

  // art picks the drawn illustration on the portfolio tile.
  // showOnCV: true puts the project in the Europass "Projects" section too.
  // status: "" for finished work, or "In progress".
  projects: [
    {
      name: "ALM Dashboard microservice",
      art: "dashboard", // illustration: dashboard, network, quote, receipt, supply, map, web
      context: "Telecom asset lifecycle management — Bushnet",
      description:
        "Standalone Spring Boot service that aggregates metrics from four ALM modules (totals, financial report, additions, disposals) for a Gulf telecom operator. Cut response time from 10.15 s to under 50 ms with parallel CompletableFuture queries, targeted indexes and a 30-minute cache.",
      stack: ["Java 17", "Spring Boot", "MySQL", "Spring Cache"],
      link: "",
      status: "",
      showOnCV: true,
    },
    {
      name: "Nokia inventory XML ETL",
      art: "network", // illustration: dashboard, network, quote, receipt, supply, map, web
      context: "Zain KSA network inventory — Bushnet",
      description:
        "Production ETL that turns Nokia network inventory XML into normalized records: site resolution, node-name normalization across naming variants, controller-to-node inheritance and serial-number de-duplication.",
      stack: ["Java", "Spring Boot", "MySQL", "Batch processing"],
      link: "",
      status: "",
      showOnCV: true,
    },
    {
      name: "Quotation & business management platform",
      art: "quote", // illustration: dashboard, network, quote, receipt, supply, map, web
      context: "Meridian Power & Automation Ltd — client build",
      description:
        "Multi-tenant platform for quotations, clients and operations with three front ends: a public website, a staff admin portal and a client portal. Sequence-based quote numbering, AOP audit logging and JWT auth on a reactive GraphQL API.",
      stack: ["Spring Boot 3", "WebFlux", "GraphQL", "PostgreSQL"],
      link: "",
      status: "In progress",
      showOnCV: true,
    },
    {
      name: "Hardware store point of sale",
      art: "receipt", // illustration: dashboard, network, quote, receipt, supply, map, web
      context: "KIPS Hardware & Lubricants Ltd — client build",
      description:
        "POS backend with sales, warehouses, bulk product setup and license management. Prints ESC/POS receipts straight to a thermal printer over TCP, with barcode and QR code, and records M-Pesa payment references.",
      stack: ["Spring Boot 3", "PostgreSQL", "JWT", "ESC/POS"],
      link: "",
      status: "",
      showOnCV: true,
    },
    {
      name: "Telecom company website & CMS",
      art: "web", // illustration: dashboard, network, quote, receipt, supply, map, web
      context: "Client build",
      description:
        "Marketing site with a full admin CMS: pages, job listings, accreditation and a video library supporting YouTube, Vimeo and self-hosted files.",
      stack: ["Next.js 15", "Fastify", "Apollo GraphQL", "Prisma"],
      link: "https://telecom-web-two.vercel.app",
      status: "",
      showOnCV: false,
    },
  ],

  education: [
    {
      title: "Bachelor of Science in Information Technology",
      org: "University of Kabianga",
      location: "Kericho, Kenya",
      start: "",
      end: "2019-04",
      note: "Second Class Honours (Upper Division)",
    },
  ],

  skills: [
    {
      group: "Languages",
      items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      group: "Frameworks",
      items: [
        "Spring Boot",
        "Spring Security",
        "JPA / Hibernate",
        "WebFlux",
        "Node.js / Fastify",
        "GraphQL",
        "React",
        "Next.js",
      ],
    },
    {
      group: "Databases",
      items: ["PostgreSQL", "MySQL", "Oracle", "MSSQL", "MongoDB"],
    },
    {
      group: "AI & data",
      items: [
        "ML pipelines",
        "NLP",
        "scikit-learn",
        "ETL pipelines",
        "Batch processing",
        "Model versioning",
      ],
    },
    {
      group: "Tools & platforms",
      items: [
        "Git",
        "Docker",
        "Linux",
        "CI/CD",
        "Spring Boot Actuator",
        "WAR deployments",
        "Jira",
      ],
    },
  ],

  certifications: [
    "Spring Boot & Java (project)",
    "Database Design & Optimization",
    "Linux Server Administration",
    "Machine Learning with Python (scikit-learn)",
  ],

  /* Europass language section. CEFR levels: A1 A2 B1 B2 C1 C2.
     Leave motherTongues empty ([]) to hide the section. Example:
     motherTongues: ["Kiswahili"],
     other: [
       { language: "English", listening: "C2", reading: "C2", production: "C1", interaction: "C1", writing: "C2" }
     ] */
  languages: {
    motherTongues: [],
    other: [],
  },

  /* References. "on-request" prints "References available upon request."
     Anything in this file is public once the site is live, so only
     switch to "list" and add people if they're happy for their
     contact details to be online. Example entry:
     { name: "Jane Doe", role: "Senior Developer", org: "Company", phone: "07xx", email: "jane@example.com" } */
  references: {
    mode: "on-request",
    people: [],
  },
};

/* ---------- shared helpers (no need to edit) ---------- */
window.CVUtil = {
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  esc(s) {
    return String(s ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  },
  // style "long" -> "Sep 2024", "europass" -> "09/2024"
  date(ym, style) {
    if (!ym) return "";
    if (ym === "present") return style === "europass" ? "Current" : "Present";
    const [y, m] = ym.split("-");
    if (!m) return y;
    return style === "europass" ? `${m}/${y}` : `${this.months[+m - 1]} ${y}`;
  },
  range(a, b, style) {
    const s = this.date(a, style),
      e = this.date(b, style);
    return s && e ? `${s} – ${e}` : s || e;
  },
};
