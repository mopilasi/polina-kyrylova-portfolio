export const projectsData = {
  "eat-sip-repeat": {
    id: "eat-sip-repeat",
    title: "Eat Sip Repeat",
    subtitle: "AI-powered iOS app that transforms recipe overwhelm into effortless, seasonally tailored dinner plans.",
    background: "Eat Sip Repeat is an AI-powered iOS app that transforms recipe overwhelm into effortless, seasonally tailored dinner plans. By curating menus based on what's fresh, generating smart shopping lists, and saving recipes from social feeds, the app bridges inspiration and execution for home cooks.",
    problem: [
      "Recipe Overload: Users accumulated bookmarks across Instagram, TikTok, and browser tabs – yet struggled to recall or organize saved ideas.",
      "Decision Fatigue: Faced with dozens of options, home cooks often defaulted to takeout rather than plan a balanced, seasonal menu.",
      "Inefficient Shopping: Manually translating menus into grocery lists cost users 15–30 minutes per week."
    ],
    solution: [
      {
        title: "1. User research & validation",
        description: "Interviewed 20+ home cooks to map pain points and validate demand for AI–driven, seasonally aware menu planning.",
        activities: [
          "Defined three core flows – menu generation and recipe curation – that would deliver the most value in MVP version"
        ]
      },
      {
        title: "2. Vibe-coding prototype & UI",
        description: "Rapid, LLM-assisted \"vibe-coding\" in Figma + SwiftUI to iterate on wireframes and component designs in real time.",
        activities: [
          "Generated UI snippets via prompts, then refined layouts based on usability feedback",
          "Integrated subtle scroll-in animations and clean typography for a modern, approachable feel"
        ]
      },
      {
        title: "3. AI-curated seasonal menus",
        description: "A generation engine that recommends menus in under 2 s, factoring in seasonal produce, dietary constraints, and user preferences.",
        activities: [
          "Prompt-tuned GPT models",
          "Built feedback loop to learn from user ratings",
          "Optimized inference for mobile performance"
        ]
      },
      {
        title: "4. Scalable Firebase migration",
        description: "Migrated data and auth from Airtable to Firebase to support surging beta tests and secure user data.",
        activities: [
          "Refactored data models",
          "Defined Firestore security rules",
          "Monitored performance and optimized reads"
        ]
      }
    ],
    results: [
      "<2 s menu generation: Users receive complete, balanced menus nearly instantaneously."
    ],
    tags: ["SwiftUI", "Firebase", "GPT", "Python", "AI/ML"],
    linkText: "Explore the app"
  },
  "parim": {
    id: "parim",
    title: "PARiM",
    subtitle: "Workforce-management platform serving shift-based businesses – from hospitality to healthcare.",
    background: "PARiM is a workforce-management platform serving shift-based businesses – from hospitality to healthcare – that helps teams schedule, track, and manage staff with precision.",
    problem: [
      "Manual Chaos: Clients relied on spreadsheets for future shift planning, leading to errors and slow response times.",
      "Compliance Risk: Scheduling violations of labor-law limits and overlooked certification requirements exposed businesses to regulatory fines and safety incidents.",
      "Cumbersome Scheduling: The legacy interface made creating and editing large schedules time-consuming, with high conflict rates.",
      "Performance Bottlenecks: Loading enterprise-scale schedule tables (hundreds of staff across dozens of locations) could take sometimes over 20-30 seconds, frustrating power users and stalling growth."
    ],
    solution: [
      {
        title: "1. Mobile companion app",
        description: "A standalone iOS & Android app that surfaces live shift rosters, swap requests, and push notifications.",
        activities: [
          "Defined MVP flows",
          "Rapid prototyping",
          "Iterative beta releases"
        ]
      },
      {
        title: "2. Rules-based compliance engine",
        description: "A behind-the-scenes rules engine enforcing labor-law hour limits and verifying required certifications at schedule-time.",
        activities: [
          "Mapped legal constraints",
          "Encoded qualification checks",
          "Integrated into scheduling workflow"
        ]
      },
      {
        title: "3. Scheduling & Event Module redesign",
        description: "Optimised Scheduling flow and an Event Module to plan and staff one-off events with the same ease as recurring shifts.",
        activities: [
          "Conducted user interviews",
          "Collaborated with UX on wireframes",
          "Usability testing",
          "Deployed redesigned flows"
        ]
      },
      {
        title: "4. Performance optimization for scale",
        description: "A set of front-end and back-end optimizations (smart data caching, query streamlining, and prioritized rendering) to accelerate large-table loads.",
        activities: [
          "Collected user pain metrics",
          "Prioritized bottlenecks",
          "Rolled out phased performance releases"
        ]
      }
    ],
    results: [
      "30% faster shift response: on-the-go swap requests and notifications cut back-and-forth by 30%.",
      "over 80% fewer compliance errors: Automated hour-limit and certification checks virtually eliminated scheduling violations.",
      "40% reduction in scheduling time: Drag-and-drop redesign and Event Module adoption halved conflict rates and sped up plan creation.",
      "85% faster load times: Enterprise schedule views render faster, resulting is higher user satisfaction and NPS scores."
    ],
    tags: ["Mixpanel", "Analytics", "B2B SaaS", "Mobile"],
    link: "https://www.parim.co",
    linkText: "Learn more about PARiM"
  },
  "paxful": {
    id: "paxful",
    title: "Paxful Fraud Prevention",
    subtitle: "Leading peer-to-peer cryptocurrency marketplace fraud prevention system.",
    background: "Paxful is a leading peer-to-peer cryptocurrency marketplace where buyers and sellers trade directly, leveraging escrow and reputation systems to foster trust. As Product Manager for the Marketplace, I partnered closely with Data Analysis and Fraud Prevention teams to harden our trading ecosystem against malicious activity.",
    problem: [
      "Rising fraud attempts: Novel attack patterns and synthetic accounts drove up chargebacks and dispute volumes, undermining user confidence.",
      "Slow resolution: Manual dispute workflows took days, frustrating legitimate traders and increasing support costs.",
      "Eroding trust & retention: Perceived platform risk led to lower repeat usage and negative word-of-mouth."
    ],
    solution: [
      {
        title: "1. Rule-based fraud detection engine",
        description: "A configurable engine that applies data-driven rules – velocity checks, reputation thresholds, and location anomalies – to flag high-risk trades in real time.",
        activities: [
          "Analyzed historical transaction data with the Data Analysis team to identify top fraud vectors",
          "Defined and prioritized detection rules based on risk score impact",
          "Integrated the engine into our existing trade-approval pipeline"
        ]
      },
      {
        title: "2. Automated dispute-resolution workflow",
        description: "A streamlined, partially automated process that routes flagged disputes through tiered review and triggers immediate provisional refunds when warranted.",
        activities: [
          "Mapped current escalation flows with fraud prevention analysts",
          "Introduced decision logic for auto-approving low-risk claims",
          "Instrumented analytics to track resolution times and adjust thresholds"
        ]
      },
      {
        title: "3. Real-time monitoring & feedback loop",
        description: "A live dashboard for support and fraud teams displaying key metrics – fraud flags per hour, dispute backlogs, and rule performance – enabling rapid tuning.",
        activities: [
          "Defined success metrics with stakeholders (e.g., false-positive rate, resolution SLA)",
          "Ran weekly calibration sessions to refine rule sensitivity"
        ]
      }
    ],
    results: [
      "15% decrease in fraud claims: Rule-based detection caught more invalid trades before settlement.",
      "40% faster resolution: Automated workflows slashed average dispute handling time from 5 days to 3 days.",
      "Improved trust & retention: User surveys showed a 20% lift in platform Net Promoter Score, and repeat trader rate grew by 12%."
    ],
    tags: ["Security", "ML", "Marketplace", "Analytics"],
    link: "https://paxful.com",
    linkText: "Visit Paxful"
  }
};
