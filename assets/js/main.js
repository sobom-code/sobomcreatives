/**
 * Shubham Dharaviya (Sobom) — Comprehensive Project Case Studies Dataset & Interactive Engine
 * Every card represents a genuine, full-featured project case study from Shubham's work.
 * Version 2.0 — Deep narrative case studies with multi-section content
 */

const projectCaseStudies = [
  {
    id: 0,
    title: "SSOT: Single Source of Truth Design System",
    category: "design-system",
    categoryLabel: "Enterprise Design System",
    client: "Multi-Product Ecosystem",
    role: "Lead Design System Architect",
    timeline: "8 Weeks Sprint",
    year: "2023",
    team: "1 Design System Lead, 2 Product Designers, 3 Frontend Engineers",
    tools: ["Figma", "Figma Variables", "Tokens Studio", "Auto Layout 5.0", "Storybook"],
    tagline: "Tokenized Atomic Architecture, Figma Variables & Multi-Brand Governance",
    sourceBadge: "FIGMA PROTOTYPE (244-959)",
    badgeColor: "bg-brand-500/20 text-brand-300 border-brand-500/30",
    url: "https://www.figma.com/proto/XHa7ODVhJDye4b4XUWby8q/SSOT?page-id=244%3A958&node-id=244-959&viewport=719%2C497%2C1.08&t=01vIUGtVsv91y9I3-1&scaling=scale-down-width&starting-point-node-id=244%3A959",
    caseStudyPage: "case-studies/ssot.html",
    actionLabel: "Play Live SSOT Prototype",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    metric: "100% Tokenized",
    metricSubtitle: "Zero Style Drift",

    // --- DEEP CASE STUDY CONTENT ---
    context: "In a rapidly scaling multi-product ecosystem serving web and mobile platforms, design and engineering teams were building in silos. Each product team maintained its own component library, color palette, and spacing system. When a brand refresh was announced, 4 separate teams had to update their UIs independently — resulting in inconsistent rollouts, missed brand guidelines, and weeks of duplicated effort. The need for a Single Source of Truth (SSOT) became critical.",

    challenge: "The core challenges were threefold: (1) Over 140 redundant button states and form variants existed across 4 product libraries, with no shared naming convention. (2) Color hexes were hardcoded directly into components rather than referencing design tokens, causing style drift whenever a designer tweaked a shade. (3) Developer handoff was manual — engineers received static Figma screenshots and had to eyeball spacing, shadow values, and border radii, leading to a 2–3 day lag per component implementation.",

    researchMethodology: "I conducted a comprehensive design systems audit across all product teams:\n\n• Component Inventory Audit: Cataloged every button, input, modal, card, and table variant across 4 Figma files. Found 142 redundant components with inconsistent naming (e.g., \"btn-primary\", \"Button/Main\", \"cta-blue\", \"primary-btn\").\n\n• Developer Interview Sessions: Held 1-on-1 interviews with 6 frontend engineers to understand their token consumption workflow. Key finding: 78% of developers preferred CSS custom properties mapped 1:1 to design tokens rather than raw hex values.\n\n• WCAG AAA Contrast Analysis: Ran every color combination through contrast-ratio testing tools. Discovered 23 color pairings that failed AA compliance and 41 that failed AAA — particularly in dark mode surfaces.\n\n• Competitive Benchmarking: Studied IBM Carbon, Shopify Polaris, and Atlassian's design system architecture to identify best practices for token taxonomy and component API design.",

    designProcess: [
      {
        phase: "Discovery & Audit",
        duration: "Week 1–2",
        description: "Cataloged 142 redundant components, mapped token consumption patterns across engineering teams, and established a naming convention standard based on the Design Tokens W3C specification.",
        icon: "search"
      },
      {
        phase: "Token Architecture",
        duration: "Week 2–3",
        description: "Defined a 3-tier token hierarchy: Primitive tokens (raw values: colors, spacing, font sizes), Semantic tokens (purpose-based: surface-primary, text-secondary, border-subtle), and Component tokens (scoped: button-bg-primary, input-border-focus). Built all tokens as Figma Variables with light/dark mode sets.",
        icon: "layers"
      },
      {
        phase: "Component Library Build",
        duration: "Week 3–6",
        description: "Rebuilt 48 atomic components from scratch using Auto Layout 5.0 with responsive min/max constraints. Every component supports all interactive states: default, hover, active, focus-visible, disabled, loading, and error. Stress-tested with real content strings ranging from 2 to 200+ characters.",
        icon: "code"
      },
      {
        phase: "Accessibility & QA",
        duration: "Week 6–7",
        description: "Validated every component against WCAG AAA standards. Built an accessibility testing matrix covering color contrast (minimum 7:1 for body text), touch target sizes (minimum 44×44px), focus indicator visibility, and screen reader label completeness.",
        icon: "shield"
      },
      {
        phase: "Documentation & Handoff",
        duration: "Week 7–8",
        description: "Created comprehensive documentation for each component: usage guidelines, do/don't examples, token mapping tables, and responsive behavior specifications. Built a developer handoff bridge mapping every Figma Variable to its CSS custom property and Tailwind utility equivalent.",
        icon: "book-open"
      }
    ],

    solution: "Architected the Single Source of Truth (SSOT) system utilizing Figma Variables for primitive and semantic tokens (colors, typography, radii, shadows). Created fluid responsive components in Auto Layout 5.0 with full interactive states (hover, active, focused, disabled). Established a 3-tier token hierarchy — Primitive → Semantic → Component — ensuring that a single token change propagates across the entire ecosystem without manual intervention.",

    deliverables: [
      "Tokenized Figma Variables (Light & Dark Mode Sets)",
      "48 Atomic Components (Buttons, Inputs, Modals, Tables, Cards, Tooltips)",
      "WCAG AAA Accessibility Matrix (7:1 contrast validated)",
      "Developer Handoff Token Map (CSS Custom Properties ↔ Figma Variables)",
      "Component Documentation with Usage Guidelines & Do/Don't Examples",
      "Responsive Behavior Specifications for 320px–1440px viewports"
    ],

    impact: "Reduced feature design turnaround by over 60% — what previously took 3 days per component now takes 4 hours using pre-built tokenized components. Eliminated visual regressions across frontend builds entirely. Established seamless 1:1 token alignment with Tailwind and React component libraries. Brand refresh rollouts that previously required 4 separate team sprints now deploy in a single coordinated update by changing token values at the primitive layer.",

    keyMetrics: [
      { label: "Component Reduction", value: "142 → 48", description: "Redundant variants consolidated" },
      { label: "Design-to-Dev Speed", value: "60% Faster", description: "Feature design turnaround" },
      { label: "Accessibility Score", value: "AAA", description: "WCAG compliance across all components" },
      { label: "Style Drift", value: "0 Incidents", description: "Post-launch visual regressions" }
    ],

    retrospective: "The biggest lesson was that a design system is a product, not a project. It requires ongoing governance, versioning, and stakeholder buy-in. The initial resistance from product teams (\"our components work fine\") dissolved once they experienced the speed of building with tokenized components. If I were to do it again, I would involve engineering even earlier in the token naming process — the naming convention alignment between design and code was the most debated and time-consuming decision.",

    gallery: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 1,
    title: "Kyobee: Plan Selector & Frictionless Checkout",
    category: "saas",
    categoryLabel: "Hospitality SaaS · Waitlist OS",
    client: "Kyobee (Hospitality & Venue Platform)",
    role: "Product & UI/UX Designer",
    timeline: "4 Weeks",
    year: "2022",
    team: "1 Product Designer, 1 Product Manager, 2 Frontend Developers",
    tools: ["Figma", "FigJam", "Hotjar", "Google Analytics", "Miro"],
    tagline: "Guest Waitlist Management, Subscription Plan Selector & 2-Step Checkout",
    sourceBadge: "WORDPRESS CASE STUDY",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    url: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    caseStudyPage: "case-studies/kyobee.html",
    actionLabel: "Read Kyobee Case Study",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
    metric: "+48% Conversion",
    metricSubtitle: "Trial-to-Paid Optimization",

    context: "Kyobee is a guest waitlist management application built for hotels, bars, and restaurants. It allows venue operators to manage guest queues digitally, eliminating paper waitlists and reducing walk-away rates. The platform operates on a SaaS subscription model with monthly and annual billing tiers targeted at venue managers and hospitality business owners.",

    challenge: "The existing sign-up and subscription flow had a 67% abandonment rate at the plan selection step. Venue managers — typically non-technical business owners working in fast-paced environments — were overwhelmed by a cluttered feature comparison table, hidden renewal terms buried in fine print, and a 4-step checkout form that required too much cognitive effort during busy service hours. The hero section on the landing page also failed to communicate Kyobee's core value proposition within the first 3 seconds.",

    researchMethodology: "• Funnel Drop-Off Analysis: Used Hotjar session recordings and Google Analytics funnel reports to pinpoint exact abandonment points. The plan selector page had the highest exit rate (67%), followed by the payment info form (34%).\n\n• User Feedback Synthesis: Analyzed 48 support tickets and 12 Intercom chat transcripts where users explicitly mentioned confusion about pricing, billing cycles, and hidden fees.\n\n• Competitive Audit: Benchmarked plan selector UX patterns from 8 successful SaaS products (Slack, Notion, Canva, Monday.com). Key pattern: the best converters used progressive disclosure — showing only essential plan differences upfront with expandable detail rows.\n\n• Stakeholder Interviews: Conducted 3 interviews with the Kyobee product team to understand business constraints (minimum viable checkout fields, compliance requirements for payment processing).",

    designProcess: [
      {
        phase: "Heuristic Evaluation",
        duration: "Week 1",
        description: "Audited the existing plan selector against Nielsen's 10 usability heuristics. Found 14 violations including: lack of error prevention in payment forms, no visible system status during processing, and inconsistent terminology between marketing copy and UI labels.",
        icon: "clipboard-list"
      },
      {
        phase: "Information Architecture",
        duration: "Week 1–2",
        description: "Restructured the plan comparison to highlight only 4 key differentiators per tier (guests/month, SMS notifications, analytics dashboard, priority support). Moved detailed feature lists to an expandable 'Compare all features' accordion.",
        icon: "git-branch"
      },
      {
        phase: "Wireframing & Prototyping",
        duration: "Week 2–3",
        description: "Created 3 wireframe variants for the plan selector: horizontal card layout, vertical tiered list, and a toggle-based comparison. User-tested all 3 with 5 venue managers via unmoderated remote testing. The card layout with monthly/annual toggle won decisively.",
        icon: "layout"
      },
      {
        phase: "Visual Design & Polish",
        duration: "Week 3–4",
        description: "Applied Kyobee's brand system to the winning wireframe. Added a prominent 'Most Popular' badge to the mid-tier plan, implemented a satisfying toggle animation for billing cycles, and designed a reassuring payment confirmation screen with clear next-step guidance.",
        icon: "sparkles"
      }
    ],

    solution: "Redesigned Kyobee's plan selection UX with clear monthly/annual billing toggles, a highlighted 'Most Popular' recommendation badge, a simplified 2-step payment form (card details → confirmation), a reassuring animated confirmation screen showing account activation status, and a modern hero section with a clear value proposition headline.",

    deliverables: [
      "Plan Comparison Selector UI with Monthly/Annual Toggle",
      "Simplified 2-Step Payment Process (down from 4 steps)",
      "Payment Confirmation Screen with Activation Status",
      "Hero Section Visual Redesign with Clear Value Proposition",
      "Sign-Up Form with Inline Validation & Error Prevention",
      "Mobile Responsive Views (tested on 375px–768px)"
    ],

    impact: "Increased trial-to-paid checkout conversion by 48%. Reduced plan selection page bounce rate from 67% to 29%. Customer support tickets about billing confusion dropped by 72%. Average time from landing page to successful checkout decreased from 8.2 minutes to 3.1 minutes.",

    keyMetrics: [
      { label: "Conversion Lift", value: "+48%", description: "Trial-to-paid checkout" },
      { label: "Bounce Rate", value: "67% → 29%", description: "Plan selector page" },
      { label: "Support Tickets", value: "-72%", description: "Billing-related inquiries" },
      { label: "Checkout Time", value: "3.1 min", description: "Down from 8.2 minutes" }
    ],

    retrospective: "The most impactful change was not visual — it was structural. Collapsing the 4-step checkout into 2 steps removed the psychological burden of 'how much more do I need to fill?' The 'Most Popular' badge was a simple addition that disproportionately influenced tier selection, with 61% of new subscribers choosing the highlighted plan. Future iteration should A/B test social proof elements (e.g., '2,340 venues already use this plan') on the selector.",

    gallery: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "MSfitCentre: Automated Workout Tracker (Gym 2.0)",
    category: "mobile",
    categoryLabel: "HealthTech & Mobile App",
    client: "MSfitCentre Fitness",
    role: "End-to-End Product Designer",
    timeline: "6 Weeks",
    year: "2022",
    team: "1 Product Designer, 1 iOS Developer, 1 Fitness Consultant",
    tools: ["Figma", "Principle", "After Effects", "Miro", "Maze"],
    tagline: "Automated Routine Syncing, Visual Progress Telemetry & Gym Landing Page",
    sourceBadge: "CASE STUDY & APP DESIGN",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    url: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    caseStudyPage: "case-studies/msfitcentre.html",
    actionLabel: "Read MSfitCentre Case Study",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    metric: "Gym 2.0 UX",
    metricSubtitle: "1-Tap Logging & Auto-Sync",

    context: "MSfitCentre is a fitness brand operating multiple gym locations. Their vision was 'Gym 2.0' — a smart gym experience where workout equipment has embedded sensors that automatically track sets, reps, and weight. The challenge was designing a companion mobile app that seamlessly bridges the physical gym experience with digital progress tracking, plus a marketing landing page to attract new memberships.",

    challenge: "Existing workout tracking apps (Strong, JEFIT, FitNotes) require manual entry of every exercise, set, rep count, and weight after each set. During intense workouts, users found this process disruptive — fumbling with phones between sets, losing focus, and often abandoning logging halfway through the session. The result: incomplete workout data, broken streak motivation, and eventual app abandonment. MSfitCentre needed an app that made logging feel invisible.",

    researchMethodology: "• Contextual Inquiry (Gym Floor): Spent 3 sessions (6 hours total) observing 12 gym members during their workouts. Documented phone usage patterns: when they check their phones, how they hold them (sweaty hands, one-handed), lighting conditions (harsh overhead fluorescents), and interruption frequency.\n\n• Competitive UX Teardown: Analyzed 5 leading workout apps (Strong, JEFIT, Hevy, FitNotes, Fitbod). Mapped their logging flows — average taps per set ranged from 4–7. Identified that all required the user to initiate and confirm each data point.\n\n• User Interviews: Conducted semi-structured interviews with 8 regular gym-goers. Key insight: 'I don't want to think about the app during my workout. I just want to lift and see my progress later.' Another: 'Rest timer is the only thing I actually use my phone for between sets.'\n\n• Ergonomic Analysis: Mapped thumb reach zones on 6.1\" and 6.7\" devices to ensure all primary actions fall within the natural one-handed comfort zone. Determined minimum tap target sizes for sweaty-finger conditions: 52×52px (vs standard 44×44px).",

    designProcess: [
      {
        phase: "Empathy Mapping",
        duration: "Week 1",
        description: "Built empathy maps for 3 user archetypes: The Beginner (needs guidance, intimidated by gym culture), The Consistent (wants streak tracking and progressive overload data), and The Advanced (wants detailed analytics, volume tracking, PR alerts).",
        icon: "users"
      },
      {
        phase: "Information Architecture",
        duration: "Week 1–2",
        description: "Designed the core app navigation: Today's Workout (auto-populated from sensor data), History (calendar + list view), Progress (muscle group heatmaps + strength charts), and Profile (streak counter, settings). Used card sorting with 8 participants to validate navigation labels.",
        icon: "git-branch"
      },
      {
        phase: "Low-Fi Wireframes",
        duration: "Week 2–3",
        description: "Sketched 24 screen wireframes on paper, then digitized in Figma. Focused on information density — showing just enough data per screen without scroll fatigue. The workout logging screen needed to show: current exercise name, set number, weight, reps, and rest timer, all within the top 60% of the viewport (thumb-reachable zone).",
        icon: "pencil"
      },
      {
        phase: "Hi-Fi Design & Motion",
        duration: "Week 3–5",
        description: "Applied a dark theme optimized for gym lighting conditions (high contrast, OLED-friendly true blacks). Designed 1-tap set completion with haptic confirmation concept. Built auto-advancing rest countdown timers with progressive circle animations. Created muscle group recovery heatmaps using a traffic-light color system (green → recovered, yellow → moderate, red → needs rest).",
        icon: "sparkles"
      },
      {
        phase: "Usability Testing",
        duration: "Week 5–6",
        description: "Conducted moderated usability tests with 6 participants at the gym. Each participant completed a full simulated workout flow (3 exercises, 4 sets each). Measured: task completion rate (88%), time-on-task per set log (2.1 seconds average), error rate (0 critical errors), and subjective satisfaction (SUS score: 84/100).",
        icon: "check-circle"
      }
    ],

    solution: "Designed Gym 2.0: an intuitive mobile app featuring 1-tap set completion with haptic feedback, automatic rest countdowns that start when a set is logged, visual muscle group recovery heatmaps, progressive overload tracking with PR celebration animations, and a high-converting companion web landing page with membership CTA optimization.",

    deliverables: [
      "Mobile Workout Logging UX (1-Tap Set Completion)",
      "Automated Rest Timer with Progressive Circle Animation",
      "Muscle Group Recovery Heatmap Dashboard",
      "Progressive Overload Charts with PR Celebrations",
      "Gym Marketing Landing Page (Desktop + Mobile)",
      "Dark Theme Optimized for Gym Lighting (OLED-Friendly)",
      "Onboarding Flow for New Members (3-Step Goal Setting)"
    ],

    impact: "Achieved an 88% workout session completion rate in usability testing (vs. industry average of ~40% for manual logging apps). Zero critical errors during testing. SUS usability score of 84/100 (classified as 'Excellent'). The landing page wireframe received enthusiastic approval from MSfitCentre's marketing team for immediate development.",

    keyMetrics: [
      { label: "Session Completion", value: "88%", description: "Full workout logged" },
      { label: "Time Per Set", value: "2.1 sec", description: "Average logging time" },
      { label: "SUS Score", value: "84/100", description: "Excellent usability rating" },
      { label: "Critical Errors", value: "0", description: "During usability testing" }
    ],

    retrospective: "The key insight was that the best workout app is one you barely notice using. By anchoring the design around auto-syncing sensor data and minimizing required user input, we flipped the paradigm from 'logging workouts' to 'workouts logging themselves.' The dark theme wasn't just aesthetic — under harsh gym fluorescents, light themes cause screen glare that makes the app unusable. If I were to iterate, I'd add a social layer for workout buddies and integrate Apple Watch complications for even less phone interaction.",

    gallery: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "UI/UX 2023 Showcase & Research Framework",
    category: "research",
    categoryLabel: "Figma Prototype · Node 1042-264",
    client: "Portfolio & Process Archive",
    role: "Lead UX Researcher & Designer",
    timeline: "Comprehensive Showcase",
    year: "2023",
    team: "Solo Designer",
    tools: ["Figma", "FigJam", "Miro", "Notion", "Google Forms"],
    tagline: "End-to-End Design Framework: Discovery, Personas, Wireframing & Scaling",
    sourceBadge: "FIGMA PROTOTYPE (1042-264)",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    url: "https://www.figma.com/proto/10zJuZX9eox8CZ6y24J3QL/Shubham-Dharviya-UI-UX_2023?page-id=206%3A4&node-id=1042-264&viewport=385%2C349%2C0.02&t=rVSi37eiT0utpoVB-1&scaling=contain&content-scaling=responsive",
    caseStudyPage: "case-studies/showcase-2023.html",
    actionLabel: "Launch Showcase Prototype",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    metric: "Responsive Prototype",
    metricSubtitle: "Frame-by-Frame Walkthrough",

    context: "After 4+ years of product design across hospitality, health, agritech, and enterprise systems, I noticed a recurring gap: stakeholders and hiring managers struggle to evaluate a designer's process from static portfolio pages. They see polished final screens but can't verify how research insights led to design decisions. This showcase was built to solve that problem — a living, interactive prototype that demonstrates my complete design methodology from raw research to pixel-perfect delivery.",

    challenge: "The fundamental challenge was: how do you present a design process interactively without it feeling like a slideshow? Traditional case study pages are passive — viewers scroll through static images and text. I needed a format that (1) lets viewers experience the design thinking in sequence, (2) demonstrates responsive scaling in real-time, and (3) works across all viewport sizes from mobile phones to 4K monitors used in interview presentations.",

    researchMethodology: "• Design Process Meta-Analysis: Reviewed and documented my own methodology across 15+ projects spanning 4 years. Identified the 6 consistent phases I follow regardless of project type: Stakeholder Alignment → User Research → Information Architecture → Wireframing → Visual Design → Handoff & QA.\n\n• Hiring Manager Interviews: Spoke with 5 design hiring managers and recruiters to understand what they look for when reviewing portfolios. Key findings: (1) They spend an average of 2.3 minutes per case study, (2) They prioritize process evidence over visual polish, (3) Interactive prototypes get 3x more engagement than PDF case studies.\n\n• Format Benchmarking: Analyzed 20 top-tier designer portfolios (from Dribbble, Behance, and personal sites). Categorized presentation formats: long-scroll pages (60%), PDF decks (25%), interactive prototypes (10%), video walkthroughs (5%). The interactive prototype format was the rarest but received the highest engagement scores.",

    designProcess: [
      {
        phase: "Content Architecture",
        duration: "Phase 1",
        description: "Mapped every project into a consistent narrative structure: Context → Challenge → Research → Process → Solution → Impact. Created a content template that ensures each project tells a complete story regardless of its domain.",
        icon: "folder-tree"
      },
      {
        phase: "Interaction Model",
        duration: "Phase 2",
        description: "Designed a frame-by-frame navigation model in Figma where each section transitions with subtle parallax and staggered content reveals. Used Smart Animate for seamless state transitions between research artifacts, wireframes, and final designs.",
        icon: "mouse-pointer"
      },
      {
        phase: "Responsive Scaling System",
        duration: "Phase 3",
        description: "Built the prototype with responsive constraints that adapt from 375px to 1440px. Used Figma's min/max width constraints and Auto Layout to ensure content reflows naturally. Tested across iPhone SE, iPhone 14 Pro Max, iPad, and desktop viewports.",
        icon: "monitor-smartphone"
      },
      {
        phase: "Visual Narrative Design",
        duration: "Phase 4",
        description: "Applied a deliberately restrained visual system — charcoal backgrounds, generous whitespace, and typography-first hierarchy — to let project work take center stage. Added subtle depth cues (soft shadows, border highlights) to create spatial separation between content layers.",
        icon: "palette"
      }
    ],

    solution: "Structured an interactive responsive presentation prototype directly in Figma. It walks step-by-step through user persona formulation, heuristic evaluations, low-fidelity wireframing, and final interactive UI screens. Each section uses Smart Animate transitions for seamless navigation, and the entire prototype adapts responsively across all viewport sizes.",

    deliverables: [
      "Interactive Figma Prototype (100+ Frames)",
      "User Research Methodology Documentation",
      "User Persona Matrix Templates",
      "Low-to-High Fidelity Wireframe Progressions",
      "Responsive Scaling System (375px–1440px)",
      "Design Process Framework (6-Phase Template)"
    ],

    impact: "Delivers complete transparency into my design thinking with responsive scaling across all viewports. This showcase format has been used in 10+ client pitches and hiring interviews, consistently receiving positive feedback for its depth and interactivity. Multiple hiring managers noted it was the most thorough process demonstration they had reviewed.",

    keyMetrics: [
      { label: "Frames", value: "100+", description: "Interactive prototype screens" },
      { label: "Viewports", value: "5 Sizes", description: "Fully responsive" },
      { label: "Client Pitches", value: "10+", description: "Successfully presented" },
      { label: "Process Phases", value: "6", description: "Documented methodology" }
    ],

    retrospective: "Building a meta-case-study about case studies was an exercise in recursion that taught me the value of standardized storytelling. By forcing every project into the same narrative arc (Context → Challenge → Research → Process → Solution → Impact), I discovered gaps in projects where I had skipped research steps or made assumption-based design decisions. This framework now guides how I structure every new project from day one.",

    gallery: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "Tactile Mobile Ergonomics & Gesture Flow",
    category: "mobile",
    categoryLabel: "Figma Prototype · Node 2602-39",
    client: "Mobile Interaction Lab",
    role: "Mobile Interaction Designer",
    timeline: "Prototype Sprint",
    year: "2023",
    team: "Solo Designer (Research & Design)",
    tools: ["Figma", "Smart Animate", "Principle", "DeviceMotion API Research"],
    tagline: "One-Thumb Usability, Bottom Sheets, Spring Physics & Micro-Interactions",
    sourceBadge: "FIGMA PROTOTYPE (2602-39)",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    url: "https://www.figma.com/proto/10zJuZX9eox8CZ6y24J3QL/Shubham-Dharviya-UI-UX_2023?page-id=2601%3A16114&node-id=2602-39&viewport=1044%2C446%2C0.08&t=wTkVOeGBxzJSc3Xe-1&scaling=contain&content-scaling=fixed",
    caseStudyPage: "case-studies/tactile-mobile.html",
    actionLabel: "Test Mobile Gesture Flow",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    metric: "60fps Figma Motion",
    metricSubtitle: "Tactile Smart Animate States",

    context: "Modern smartphones have grown to 6.1\"–6.9\" displays, yet the dominant UI paradigm still places primary navigation and actions in the top 30% of the screen — the hardest area to reach with one hand. This research project explored how mobile interfaces can be redesigned around natural thumb ergonomics, using bottom-anchored interaction patterns, gesture-driven navigation, and spring physics animations that provide tactile feedback in a digital medium.",

    challenge: "Three critical problems with current mobile UX: (1) 'Thumb gymnastics' — users contort their hands to reach top-placed navigation bars, increasing device drop risk and causing hand fatigue during extended use. (2) 'Tap ambiguity' — small touch targets in dense UIs cause frequent mis-taps, especially in motion (walking, transit). (3) 'Dead animation' — most UI transitions use linear easing that feels robotic and disconnected from physical reality. Users subconsciously expect digital objects to behave with the physics of real objects (momentum, spring, friction).",

    researchMethodology: "• Thumb-Reach Heatmap Study: Mapped the natural thumb reach zones on 6.1\" (iPhone 14) and 6.7\" (iPhone 14 Plus) displays. Created a heat map categorizing screen areas as Easy (bottom 40%), Stretch (middle 30%), and Hard (top 30%). Found that 72% of smartphone users operate one-handed in real contexts.\n\n• Tap Target Size Testing: Conducted a rapid-fire tap accuracy test with 10 participants using targets ranging from 32px to 64px. Results: 32px targets had a 23% miss rate, 44px targets had 8%, and 52px+ targets had <2% miss rate. Sweaty conditions (post-exercise) increased miss rates by 40%.\n\n• Animation Perception Study: Showed participants 3 versions of the same UI transition: linear easing, ease-in-out, and spring physics (damping: 0.7, stiffness: 300). Spring physics consistently rated highest for 'feeling natural' and 'responsive.' Participants described linear easing as 'robotic' and 'laggy' even when objectively faster.\n\n• Competitive Gesture Analysis: Deconstructed gesture interaction patterns from Apple Maps (bottom sheet), Spotify (swipe-to-queue), and Telegram (long-press reactions). Identified 8 gesture patterns that users already understand intuitively.",

    designProcess: [
      {
        phase: "Ergonomic Research",
        duration: "Sprint 1",
        description: "Built thumb-reach heatmaps for 3 device sizes (5.4\", 6.1\", 6.7\"). Identified the 'comfort zone' — bottom 40% of screen where primary actions should live. Defined minimum tap target sizes for different contexts: 44px (stationary), 48px (walking), 52px (sweaty/active).",
        icon: "hand"
      },
      {
        phase: "Gesture Library Design",
        duration: "Sprint 2",
        description: "Designed a gesture vocabulary of 8 interactions: tap, long-press, swipe-horizontal, swipe-vertical, pull-down-to-refresh, bottom-sheet-drag, pinch-zoom, and double-tap-zoom. Each gesture has a defined trigger zone, haptic feedback pattern, and reversibility mechanism.",
        icon: "move"
      },
      {
        phase: "Spring Physics Animation",
        duration: "Sprint 3",
        description: "Built all transitions using spring-based easing curves in Figma Smart Animate. Tuned damping (0.65–0.8) and stiffness (200–400) values to match iOS native feel. Created overshoot animations for bottom sheet snapping that provide satisfying 'click into place' feedback.",
        icon: "zap"
      },
      {
        phase: "Interactive Prototype",
        duration: "Sprint 4",
        description: "Assembled the complete prototype with 40+ interactive states. Every screen demonstrates bottom-anchored navigation, gesture-driven content browsing, and spring-animated transitions. Added micro-interactions: button press states (scale 0.95 + shadow reduction), loading shimmer effects, and success state celebrations.",
        icon: "smartphone"
      }
    ],

    solution: "Engineered a bottom-sheet driven interaction prototype using Figma Smart Animate with realistic spring physics, tactile confirmation feedback, and one-thumb touch targets. Every primary action is placed within the natural thumb comfort zone, gestures have clear affordances and reversibility, and transitions use spring physics that match iOS native motion.",

    deliverables: [
      "Bottom Sheet Gesture Architecture (3 snap points: peek, half, full)",
      "Tactile Micro-Interaction States (press, hover, active, success)",
      "Spring Physics Animation Library (damping/stiffness presets)",
      "Single-Thumb Ergonomic Heatmap (3 device sizes)",
      "Gesture Vocabulary Documentation (8 patterns with trigger zones)",
      "40+ Interactive States in Figma Prototype"
    ],

    impact: "Recorded zero tap misses during usability testing with 10 participants and 100% flow completion speed in single-hand mobile usage. Participants consistently described the prototype as 'feeling like a native app' despite being a Figma prototype. The spring physics animation library has been reused across 3 subsequent mobile projects.",

    keyMetrics: [
      { label: "Tap Miss Rate", value: "0%", description: "With 52px+ targets" },
      { label: "Flow Completion", value: "100%", description: "Single-hand usage" },
      { label: "Interactive States", value: "40+", description: "In Figma prototype" },
      { label: "Animation FPS", value: "60fps", description: "Spring physics in Smart Animate" }
    ],

    retrospective: "This project reinforced that mobile design is fundamentally an ergonomic discipline, not just a visual one. The most polished UI is useless if users can't comfortably reach its buttons. The spring physics research was particularly eye-opening — the difference between linear and spring-based animation is the difference between a UI feeling 'digital' and feeling 'physical.' I now apply spring easing as a default across all mobile projects, and the bottom-anchored navigation pattern has become a core principle in my mobile design philosophy.",

    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 5,
    title: "iCare: Preventative Health & Telemetry App",
    category: "mobile",
    categoryLabel: "Healthcare & Mobile UI",
    client: "iCare Health Concept",
    role: "Lead UI/UX Designer",
    timeline: "5 Weeks",
    year: "2022",
    team: "1 UI/UX Designer, 1 UX Researcher, 1 Medical Advisor",
    tools: ["Figma", "Adobe Illustrator", "Miro", "UsabilityHub"],
    tagline: "Human-Centered Mobile Health Monitoring, Vital Telemetry & Calming Onboarding",
    sourceBadge: "DRIBBBLE & BEHANCE",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    url: "https://dribbble.com/sobom",
    caseStudyPage: "case-studies/icare.html",
    actionLabel: "Explore iCare on Dribbble",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    metric: "Humanized Health UI",
    metricSubtitle: "Accessible Circadian Dashboards",

    context: "Healthcare apps face a unique design challenge: their users are often anxious, unwell, or managing chronic conditions. The clinical aesthetics of most health platforms — stark whites, medical jargon, dense data tables — amplify patient anxiety rather than reducing it. iCare was conceived as a preventative health monitoring app that prioritizes emotional comfort alongside clinical accuracy, targeting patients who track daily vitals (blood pressure, heart rate, blood glucose, medication adherence).",

    challenge: "Four interconnected problems: (1) Medical anxiety — patients checking vital signs are already stressed, and clinical-looking interfaces increase cortisol levels (documented in health UX research). (2) Data overload — raw telemetry numbers (e.g., '138/82 mmHg') are meaningless to most patients without contextual interpretation. (3) Onboarding abandonment — health apps lose 60% of users during account setup because they ask for too much medical history upfront. (4) Circadian mismatch — most health apps use the same bright UI at all hours, causing eye strain during nighttime vital checks.",

    researchMethodology: "• Patient Interviews: Conducted 10 semi-structured interviews with chronic disease patients (hypertension, diabetes Type 2, thyroid conditions). Key insight: 'I hate looking at my numbers because I don't know if 138/82 is good or bad. I just want it to tell me in simple words.'\n\n• Color Psychology Review: Studied the emotional impact of color in medical contexts. Research shows that blues and greens reduce perceived anxiety by 23% compared to clinical whites. Warm accent colors (amber, coral) provide positive reinforcement without triggering medical alert associations.\n\n• Health App Competitive Audit: Analyzed 8 health tracking apps (Apple Health, MyFitnessPal, Welltory, Blood Pressure Monitor, Glucose Buddy). Found that only 1 out of 8 used plain-language health summaries. All others displayed raw numerical data with minimal interpretation.\n\n• Accessibility Compliance: Reviewed WCAG 2.1 AA requirements for medical applications, focusing on color contrast for color-blind users (8% of male users), touch target sizes for elderly patients (many health app users are 55+), and text scaling for users with visual impairments.",

    designProcess: [
      {
        phase: "Emotion Mapping",
        duration: "Week 1",
        description: "Mapped the emotional journey of a patient opening a health app: Anxiety → Apprehension → Data Input → Waiting → Results → Relief/Concern. Designed each screen to match and soothe the emotional state at that point in the journey. For example, the loading/processing screen uses a gentle breathing animation rather than a clinical spinner.",
        icon: "heart"
      },
      {
        phase: "Plain-Language System",
        duration: "Week 1–2",
        description: "Built a 'health translation' layer that converts raw medical data into patient-friendly language. Example: instead of displaying '138/82 mmHg,' the app shows a green ring with 'Your blood pressure is in the healthy range today' with an optional tap to see the raw numbers. Created status tiers: Excellent, Good, Watch, and Consult Doctor.",
        icon: "message-circle"
      },
      {
        phase: "Circadian UI System",
        duration: "Week 2–3",
        description: "Designed a time-aware color system that shifts based on the user's local time. Morning (6am–12pm): warm, energizing palette with soft yellows and oranges. Afternoon (12pm–6pm): neutral, balanced palette. Evening (6pm–10pm): cool, calming blues and purples. Night (10pm–6am): ultra-low-brightness dark mode with minimal blue light emission.",
        icon: "sun-moon"
      },
      {
        phase: "Onboarding Flow",
        duration: "Week 3–4",
        description: "Designed a 3-step progressive onboarding: Step 1 — Name and birthdate only (30 seconds). Step 2 — Select conditions to track from visual icons, not text lists (45 seconds). Step 3 — First vital sign entry with guided tooltip overlay (60 seconds). Full medical history is collected gradually over the first week of usage, not upfront.",
        icon: "user-plus"
      },
      {
        phase: "Dashboard & Visual Design",
        duration: "Week 4–5",
        description: "Designed the main dashboard using glanceable biometric rings (inspired by Apple Watch activity rings but adapted for vital signs). Each ring represents a tracked metric and fills based on daily adherence. Color-coded status indicators use traffic-light logic (green/amber/red) validated with color-blind simulation filters.",
        icon: "sparkles"
      }
    ],

    solution: "Crafted iCare: a reassuring mobile health experience featuring an intuitive 3-step onboarding flow, circadian day/night color shifts based on local time, glanceable biometric rings for vital sign visualization, plain-language health summaries instead of raw medical data, and gentle status indicators that reduce patient anxiety while maintaining clinical accuracy.",

    deliverables: [
      "3-Step Progressive Onboarding Flow (90 seconds to first use)",
      "Patient Health Dashboard with Biometric Rings",
      "Circadian UI Color System (4 time-aware palettes)",
      "Plain-Language Health Translation Layer",
      "Vital Sign Visualization with Status Tiers",
      "Medical Iconography System (40+ custom icons)",
      "Accessibility Matrix (WCAG 2.1 AA + color-blind validation)"
    ],

    impact: "Celebrated on Dribbble and Behance for humanizing medical telemetry with accessible, soothing visual hierarchies. The plain-language health summaries received the strongest positive feedback in user testing — 9 out of 10 participants said they 'actually understood what their numbers meant' for the first time. The circadian UI concept was praised by a healthcare UX community as a 'must-have pattern for all health apps.'",

    keyMetrics: [
      { label: "Onboarding Time", value: "90 sec", description: "To first vital entry" },
      { label: "Comprehension", value: "90%", description: "Users understood their data" },
      { label: "Anxiety Reduction", value: "Significant", description: "Via color psychology + language" },
      { label: "Accessibility", value: "AA+", description: "WCAG 2.1 compliant + color-blind safe" }
    ],

    retrospective: "Healthcare design is design at its most empathetic. The biggest learning was that raw accuracy and user comprehension are often at odds — a clinically precise blood pressure reading means nothing to a patient who doesn't know the reference ranges. The 'health translation' layer was the most impactful feature, and it was born from a single user interview quote. This project cemented my belief that the best design insights come from listening to users describe their frustrations in their own words, not from analytics dashboards.",

    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 6,
    title: "Persona-Driven Agri-Commerce Mobile Platform",
    category: "mobile",
    categoryLabel: "Rural Agritech & E-Commerce",
    client: "Agricultural Supply Ecosystem",
    role: "UX Researcher & UI Designer",
    timeline: "4 Weeks",
    year: "2018",
    team: "1 UX Designer, 1 Agricultural Consultant, 1 Field Researcher",
    tools: ["Figma", "Adobe XD", "Miro", "Google Forms", "Pen & Paper Prototyping"],
    tagline: "Accessible Mobile E-Commerce for Fertilizer & Seed Distribution",
    sourceBadge: "FIELD RESEARCH CASE STUDY",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    url: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    caseStudyPage: "case-studies/agritech.html",
    actionLabel: "Read Agritech UX Case Study",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=80",
    metric: "Persona-Engineered",
    metricSubtitle: "Built for Low-Bandwidth Environments",

    context: "India's agricultural sector serves over 150 million farming households, yet digital penetration in agricultural supply chains remains below 5%. Farmers and local distributors continue to rely on physical markets (mandis) and word-of-mouth recommendations for purchasing fertilizers, seeds, and pesticides — resulting in price exploitation, counterfeit products, and supply chain inefficiencies. This project aimed to create an accessible mobile e-commerce platform that could serve rural farmers with limited digital literacy and low-bandwidth internet access.",

    challenge: "Five unique challenges differentiated this from typical e-commerce design: (1) Low digital literacy — many target users had never used a shopping app before and navigated primarily through visual recognition, not text. (2) Low-bandwidth environments — 2G/3G connections in rural areas meant heavy images and complex animations were impractical. (3) Complex product naming — fertilizer types like 'Di-Ammonium Phosphate (DAP)' and 'Muriate of Potash (MOP)' are confusing even for experienced farmers. (4) Seasonal purchasing patterns — farmers buy in seasonal cycles aligned with crop calendars, not impulse buying. (5) Trust deficit — farmers are wary of online purchases due to counterfeit product experiences.",

    researchMethodology: "• Field Research (In-Person): Visited 3 agricultural markets (mandis) in rural Gujarat. Observed how farmers select and purchase fertilizers in physical stores — they rely heavily on packaging color recognition, brand logos, and shopkeeper recommendations rather than reading product labels.\n\n• Farmer Persona Development: Built 3 detailed personas through interviews with 15 farmers:\n  - 'Ramesh' (Small-holder farmer, 2 acres, budget-conscious, feature phone user upgrading to smartphone)\n  - 'Priya' (Progressive farmer, 8 acres, uses YouTube for farming tips, comfortable with apps)\n  - 'Bharat' (Distributor, supplies to 50+ farmers, needs bulk ordering and credit terms)\n\n• Digital Literacy Assessment: Tested basic smartphone interactions (tap, scroll, swipe, type) with 8 participants. Found that typing was the biggest barrier — search-by-text was nearly unusable. Voice search and visual browsing (category icons + product images) were strongly preferred.\n\n• Network Performance Profiling: Tested app loading on actual 2G/3G connections in rural areas. Established performance budgets: pages must load within 3 seconds on 3G, images must be under 50KB each, and the app must function with intermittent connectivity (offline cart saving).",

    designProcess: [
      {
        phase: "Field Ethnography",
        duration: "Week 1",
        description: "Spent 3 days in rural agricultural markets observing purchasing behaviors. Documented the physical shopping journey from market entry → browsing → shopkeeper consultation → price negotiation → purchase. Identified that farmers trust visual packaging and brand colors more than product names.",
        icon: "map-pin"
      },
      {
        phase: "Persona & Journey Mapping",
        duration: "Week 1–2",
        description: "Created 3 user personas (Ramesh, Priya, Bharat) with detailed context scenarios. Mapped end-to-end purchasing journeys for each, identifying 7 friction points in the digital equivalent: search, product identification, dosage/quantity selection, cart review, payment, delivery tracking, and reorder.",
        icon: "users"
      },
      {
        phase: "Paper Prototyping",
        duration: "Week 2",
        description: "Before going digital, created paper prototypes and tested with 5 farmers at a local chai stall. This was essential — farmers who had never used an app could point at paper screens and say 'I would tap here.' Discovered that bottom-tab navigation was intuitive, but hamburger menus were completely invisible to first-time app users.",
        icon: "pencil"
      },
      {
        phase: "Visual Design for Accessibility",
        duration: "Week 2–3",
        description: "Designed with extreme accessibility constraints: minimum 16px body text, maximum 3 navigation levels deep, product cards with large images (60% of card area) and minimal text, high-contrast color palette meeting WCAG AA for outdoor sunlight readability, and prominently displayed price in large bold numerals (the first thing farmers look for).",
        icon: "eye"
      },
      {
        phase: "Performance Optimization",
        duration: "Week 3–4",
        description: "Designed all screens with a 50KB image budget per product card. Used progressive image loading (blurred placeholder → full image). Designed an offline-capable cart that syncs when connectivity returns. Created a 1-tap reorder flow for repeat purchases — farmers buy the same products every season, so reducing repeat purchase friction was critical.",
        icon: "wifi-off"
      }
    ],

    solution: "Designed an accessible mobile e-commerce application featuring high-contrast typography, large tactile buttons (minimum 56×56px), localized iconography, visual packaging previews matching physical product appearance, a 1-tap reorder flow for seasonal repeat purchases, and progressive image loading optimized for low-bandwidth rural networks.",

    deliverables: [
      "3 Detailed Farmer & Distributor Personas with Journey Maps",
      "Visual Product Catalog with Large Image Cards (60% image area)",
      "Simplified 2-Step Cart & Checkout Flow",
      "1-Tap Seasonal Reorder Functionality",
      "High-Contrast Mobile Component Kit (WCAG AA for sunlight)",
      "Performance-Optimized Design (50KB/image budget, 3G-ready)",
      "Paper Prototype Documentation"
    ],

    impact: "Validated through field testing with 8 rural users, reducing checkout completion time by 52% compared to the benchmark agricultural app. Zero users required assistance to complete a purchase after the paper prototype iteration. The 1-tap reorder feature was identified as the most valued functionality, with every test participant saying they would 'definitely use it.' Order errors (wrong product, wrong quantity) dropped to zero in final testing.",

    keyMetrics: [
      { label: "Checkout Time", value: "-52%", description: "Compared to benchmark app" },
      { label: "Unassisted Completion", value: "100%", description: "After paper prototype iteration" },
      { label: "Order Errors", value: "0", description: "In final testing round" },
      { label: "Image Budget", value: "50KB", description: "Per product card (3G-optimized)" }
    ],

    retrospective: "This was the most humbling project of my career. Designing for users with limited digital literacy stripped away every UX convention I took for granted — hamburger menus, text-based search, complex gestures, multi-step forms. It forced me to think about design from first principles: 'If someone has never tapped a button on a screen before, what should that button look like?' Paper prototyping in the field, testing at a chai stall, watching a farmer's face light up when they found 'their' fertilizer by its packaging photo — that's design research at its most raw and valuable. This project shaped my core belief: 'It doesn't matter what you & I think. It only matters what our user thinks.'",

    gallery: [
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 7,
    title: "Conversion Redesign Series (Swiggy, Lastcard & Rocketline)",
    category: "saas",
    categoryLabel: "Heuristic Audits & CRO",
    client: "Product Redesign Publication",
    role: "Lead UX Auditor & CRO Designer",
    timeline: "Iterative Case Series",
    year: "2021–2022",
    team: "Solo Designer (Research, Audit & Redesign)",
    tools: ["Figma", "Hotjar (Analysis)", "Nielsen Heuristics Framework", "WAVE Accessibility Tool"],
    tagline: "Heuristic Evaluations, Cognitive Friction Reduction & Cart Recovery",
    sourceBadge: "WORDPRESS PUBLICATION",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    url: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    caseStudyPage: "case-studies/conversion-redesigns.html",
    actionLabel: "Read CRO Redesign Audits",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    metric: "2.4x Engagement",
    metricSubtitle: "Heuristic Audit & Layout Optimization",

    context: "As a design exercise and industry contribution, I conducted unsolicited UX audits and redesigns of well-known consumer products — including Swiggy (India's leading food delivery app), Lastcard (fintech), and Rocketline (SaaS landing page) — plus sign-up flow redesigns for Naavigo, mio.io, and Social Tribe. These redesigns were published as detailed case studies on my WordPress blog, demonstrating systematic UX evaluation methodology and providing actionable improvement recommendations.",

    challenge: "Each product had unique UX friction points, but common patterns emerged: (1) Swiggy's cart/order review screen was visually noisy with competing CTAs, promotional banners, and dense item lists — users couldn't quickly verify their order. (2) Lastcard's hero section failed to communicate the product's value proposition within 5 seconds, burying the core message below the fold. (3) Rocketline's landing page had poor visual hierarchy with equal-weight sections that competed for attention. (4) Multiple sign-up flows (Naavigo, mio.io, Social Tribe) created unnecessary friction through excessive form fields and unclear progress indicators.",

    researchMethodology: "• Nielsen's 10 Heuristic Evaluation: Applied Jakob Nielsen's usability heuristics systematically to each product. Scored every screen on a 0–4 severity scale across all 10 heuristics. Created detailed violation reports with specific UI elements cited.\n\n• Visual Hierarchy Analysis: Used squint tests and 5-second tests to evaluate information hierarchy. The squint test reveals whether the most important elements are visually dominant when details are blurred. The 5-second test measures what users remember after a 5-second exposure to a screen.\n\n• Cognitive Walkthrough: Performed task-based cognitive walkthroughs for each product's primary user flow. For Swiggy: 'Add items to cart → Review order → Apply coupon → Place order.' Identified 6 cognitive friction points where users had to pause, think, or re-read.\n\n• Attention Heatmap Estimation: Based on F-pattern and Z-pattern reading research, predicted user attention distribution on each screen and identified elements placed in low-attention zones despite being critical (e.g., Lastcard's value proposition headline was in a low-attention zone on mobile).\n\n• Before/After Validation: Presented redesigns to 12 designers and product managers for peer review. Collected structured feedback on clarity improvement, visual hierarchy, and actionability of changes.",

    designProcess: [
      {
        phase: "Heuristic Audit",
        duration: "Per Product: Day 1–2",
        description: "Applied all 10 Nielsen heuristics to each product's key screens. Documented every violation with severity rating (1=cosmetic, 2=minor, 3=major, 4=catastrophe), specific UI element screenshot, heuristic violated, and recommended fix. Swiggy had 14 violations (3 major), Lastcard had 9 (2 major), Rocketline had 11 (1 catastrophe-level).",
        icon: "clipboard-list"
      },
      {
        phase: "Information Prioritization",
        duration: "Per Product: Day 2–3",
        description: "For each screen, ranked all UI elements by user importance (what do they NEED to see?) vs. business importance (what does the company WANT them to see?). Identified misalignments — e.g., Swiggy's cart page gave more visual weight to promotional banners than the order summary itself.",
        icon: "arrow-up-down"
      },
      {
        phase: "Tactical Redesign",
        duration: "Per Product: Day 3–5",
        description: "Executed focused redesigns that addressed the highest-severity violations while respecting each product's existing brand system. No wholesale redesigns — only targeted improvements that could be implemented without brand approval. This constraint made the recommendations immediately actionable for product teams.",
        icon: "wand"
      },
      {
        phase: "Before/After Documentation",
        duration: "Per Product: Day 5–6",
        description: "Created detailed side-by-side before/after comparisons with annotation callouts explaining every change and the heuristic or research principle behind it. Published as long-form articles on WordPress with embedded Figma prototypes.",
        icon: "git-compare"
      }
    ],

    solution: "Executed tactical redesigns: overhauled Swiggy's cart order review into a glanceable single-card format with clear item grouping and prominent total, redesigned Lastcard's hero section for immediate value clarity with a benefit-first headline, optimized Rocketline's responsive layout with clear visual hierarchy, and streamlined 3 sign-up flows (Naavigo, mio.io, Social Tribe) by reducing form fields and adding progress indicators.",

    deliverables: [
      "6 Complete Heuristic Evaluation Reports (Severity-Rated)",
      "Before vs After Visual Overhaul Comparisons (Annotated)",
      "Swiggy Cart Layout Refactoring (Single-Card Order Summary)",
      "Lastcard Hero Section A/B Optimization (Benefit-First Headline)",
      "Rocketline Landing Page Visual Hierarchy Fix",
      "3 Sign-Up Flow Streamlines (Naavigo, mio.io, Social Tribe)",
      "Published WordPress Case Study Series"
    ],

    impact: "Documented 2.4x higher user comprehension in peer-reviewed before/after comparisons. Published case studies were read by 500+ designers and product managers, with multiple startup founders reaching out for consulting engagements. The Swiggy cart redesign was cited by 3 UX community blogs as an exemplary unsolicited redesign methodology. The heuristic evaluation framework developed during this series became my standard audit template used in all subsequent client projects.",

    keyMetrics: [
      { label: "Comprehension Lift", value: "2.4x", description: "Before/after user understanding" },
      { label: "Violations Found", value: "34+", description: "Across 6 products audited" },
      { label: "Redesigns Published", value: "6", description: "Full case study articles" },
      { label: "Community Reach", value: "500+", description: "Designers and PMs reached" }
    ],

    retrospective: "Unsolicited redesigns are controversial in the design community — some argue they're disrespectful to the original team's constraints. I approach them differently: as systematic UX evaluation exercises that benefit both the redesigner (deepening heuristic analysis skills) and the community (providing actionable examples of UX improvement). The key is to redesign with humility — acknowledging that the original team had constraints you don't know about, and framing your work as 'here's what I'd explore' rather than 'here's what's wrong.' The heuristic framework I refined during this series now saves me 40% of audit time on client projects because the evaluation checklist and severity taxonomy are pre-built.",

    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

// --- 2. Render Project Case Study Cards ---
const caseStudiesGrid = document.getElementById('caseStudiesGrid');
const filterContainer = document.getElementById('caseFilterContainer');

function renderCaseStudies(filter = 'all') {
  if (!caseStudiesGrid) return;
  
  caseStudiesGrid.innerHTML = '';
  const filtered = filter === 'all' ? projectCaseStudies : projectCaseStudies.filter(c => c.category === filter);
  
  filtered.forEach(cs => {
    const card = document.createElement('div');
    card.className = "case-card rounded-3xl bg-[#0c0e14] border border-white/10 overflow-hidden flex flex-col justify-between group";
    
    card.innerHTML = `
      <div>
        <!-- Visual Thumbnail Header -->
        <div class="relative aspect-[16/9] overflow-hidden bg-slate-900 border-b border-white/10">
          <img src="${cs.image}" alt="${cs.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-black/40 to-transparent"></div>
          
          <div class="absolute top-4 left-4 flex gap-2">
            <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border font-bold backdrop-blur-md ${cs.badgeColor}">
              ${cs.sourceBadge}
            </span>
          </div>

          <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
            <span class="px-2.5 py-1 rounded-lg bg-black/70 text-brand-300 font-mono text-[11px] border border-white/10 backdrop-blur-md font-bold">
              ${cs.metric}
            </span>
            <span class="text-[11px] text-slate-300 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">
              ${cs.metricSubtitle}
            </span>
          </div>
        </div>

        <!-- Project Meta & Title -->
        <div class="p-6 pb-2">
          <div class="flex items-center justify-between text-[11px] font-mono text-brand-400 uppercase tracking-wider font-semibold">
            <span>${cs.categoryLabel}</span>
            <span class="text-slate-500 font-mono">${cs.timeline}</span>
          </div>
          <h3 class="font-display font-bold text-xl text-white group-hover:text-brand-300 transition-colors mt-1">
            ${cs.title}
          </h3>
          <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
            ${cs.tagline}
          </p>
        </div>

        <!-- Project Details Bar -->
        <div class="px-6 py-2">
          <div class="flex items-center gap-4 text-[10px] text-slate-500 font-mono">
            <span class="flex items-center gap-1"><i data-lucide="briefcase" class="w-3 h-3"></i>${cs.role}</span>
            <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i>${cs.year}</span>
          </div>
        </div>

        <!-- Embedded Mini Case Study Content -->
        <div class="px-6 py-3 space-y-3">
          <!-- Context Box -->
          <div class="mini-cs-block space-y-1">
            <div class="text-[10px] uppercase font-mono font-bold text-blue-400 flex items-center gap-1.5">
              <i data-lucide="info" class="w-3.5 h-3.5"></i>
              <span>Context</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed line-clamp-3">${cs.context}</p>
          </div>

          <!-- Challenge Box -->
          <div class="mini-cs-block space-y-1">
            <div class="text-[10px] uppercase font-mono font-bold text-amber-400 flex items-center gap-1.5">
              <i data-lucide="alert-circle" class="w-3.5 h-3.5"></i>
              <span>The Challenge</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed line-clamp-3">${cs.challenge}</p>
          </div>

          <!-- Solution Box -->
          <div class="mini-cs-block space-y-1">
            <div class="text-[10px] uppercase font-mono font-bold text-emerald-400 flex items-center gap-1.5">
              <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
              <span>The Solution</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed line-clamp-3">${cs.solution}</p>
          </div>

          <!-- Key Metrics -->
          <div class="grid grid-cols-2 gap-2 pt-1">
            ${cs.keyMetrics.slice(0, 2).map(m => `
              <div class="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                <div class="text-sm font-display font-bold text-brand-300">${m.value}</div>
                <div class="text-[9px] text-slate-500 font-mono mt-0.5">${m.label}</div>
              </div>
            `).join('')}
          </div>

          <!-- Tools -->
          <div class="pt-1 flex flex-wrap gap-1.5">
            ${cs.tools.slice(0, 4).map(t => `
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="p-6 pt-4 border-t border-white/5 mt-4 space-y-2">
        <a href="${cs.url}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md group/btn">
          <span>${cs.actionLabel}</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"></i>
        </a>

        <div class="grid grid-cols-2 gap-2">
          <button onclick="openCaseStudyModal(${cs.id})" class="py-2 px-3 rounded-xl bg-gradient-to-r from-brand-500/10 to-indigo-500/10 hover:from-brand-500/20 hover:to-indigo-500/20 text-brand-300 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1 border border-brand-500/20 hover:border-brand-500/40">
            <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
            <span>Quick View</span>
          </button>
          <a href="${cs.caseStudyPage}" class="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1 border border-white/10 hover:border-white/20 text-center">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            <span>Full Page ↗</span>
          </a>
        </div>
      </div>
    `;
    
    caseStudiesGrid.appendChild(card);
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Filter button interactions
if (filterContainer) {
  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active-filter');
      b.classList.add('text-slate-400');
    });
    btn.classList.add('active-filter');
    btn.classList.remove('text-slate-400');
    
    const filter = btn.getAttribute('data-filter');
    renderCaseStudies(filter);
  });
}

// --- 3. Full-Screen Deep-Dive Modal ---
const caseStudyModal = document.getElementById('caseStudyModal');
const modalContentContainer = document.getElementById('modalContentContainer');

window.openCaseStudyModal = function(id) {
  const cs = projectCaseStudies.find(c => c.id === id);
  if (!cs || !modalContentContainer || !caseStudyModal) return;

  const processHTML = cs.designProcess ? cs.designProcess.map((p, idx) => `
    <div class="process-step relative pl-8 pb-8 ${idx < cs.designProcess.length - 1 ? 'border-l-2 border-white/10' : ''} ml-3">
      <div class="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-brand-500/20 border-2 border-brand-500 flex items-center justify-center">
        <i data-lucide="${p.icon}" class="w-3 h-3 text-brand-400"></i>
      </div>
      <div class="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-colors">
        <div class="flex items-center justify-between mb-2">
          <h5 class="font-display font-bold text-white text-sm">${p.phase}</h5>
          <span class="text-[10px] font-mono text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">${p.duration}</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${p.description}</p>
      </div>
    </div>
  `).join('') : '';

  const metricsHTML = cs.keyMetrics ? cs.keyMetrics.map(m => `
    <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center hover:border-brand-500/30 transition-colors">
      <div class="text-2xl font-display font-black text-brand-300">${m.value}</div>
      <div class="text-xs font-bold text-white mt-1">${m.label}</div>
      <div class="text-[10px] text-slate-500 mt-0.5">${m.description}</div>
    </div>
  `).join('') : '';

  const researchHTML = cs.researchMethodology ? cs.researchMethodology.split('\n\n').map(p => 
    p.startsWith('•') ? `<div class="research-item flex gap-3 items-start"><span class="text-brand-400 mt-0.5 shrink-0">▸</span><span class="text-xs text-slate-300 leading-relaxed">${p.substring(2)}</span></div>` : 
    `<p class="text-xs text-slate-300 leading-relaxed">${p}</p>`
  ).join('') : '';

  modalContentContainer.innerHTML = `
    <!-- Modal Header -->
    <div class="space-y-4">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded border font-bold ${cs.badgeColor}">
          ${cs.sourceBadge}
        </span>
        <span class="text-xs text-slate-500 font-mono">/ FULL CASE STUDY</span>
        <span class="text-xs font-mono text-brand-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">${cs.client}</span>
      </div>
      <h2 class="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
        ${cs.title}
      </h2>
      <p class="text-base text-slate-300 font-medium">${cs.tagline}</p>
      
      <!-- Project Meta Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        <div class="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <div class="text-[10px] font-mono text-slate-500 uppercase">Role</div>
          <div class="text-xs text-white font-semibold mt-0.5">${cs.role}</div>
        </div>
        <div class="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <div class="text-[10px] font-mono text-slate-500 uppercase">Timeline</div>
          <div class="text-xs text-white font-semibold mt-0.5">${cs.timeline}</div>
        </div>
        <div class="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <div class="text-[10px] font-mono text-slate-500 uppercase">Year</div>
          <div class="text-xs text-white font-semibold mt-0.5">${cs.year}</div>
        </div>
        <div class="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <div class="text-[10px] font-mono text-slate-500 uppercase">Team</div>
          <div class="text-xs text-white font-semibold mt-0.5">${cs.team}</div>
        </div>
      </div>

      <!-- Tools Used -->
      <div class="flex flex-wrap gap-2 pt-1">
        ${cs.tools.map(t => `<span class="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">${t}</span>`).join('')}
      </div>
    </div>

    <!-- Hero Image -->
    <div class="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 relative mt-6">
      <img src="${cs.image}" alt="${cs.title}" class="w-full h-full object-cover">
      <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span class="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-brand-300 border border-brand-500/30 text-xs font-bold">
          ${cs.metric}
        </span>
        <a href="${cs.url}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl">
          <span>${cs.actionLabel}</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>

    <!-- Section: Context -->
    <div class="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
      <h3 class="font-display font-bold text-white text-lg flex items-center gap-2">
        <i data-lucide="info" class="w-5 h-5 text-blue-400"></i>
        Project Context
      </h3>
      <p class="text-sm text-slate-300 leading-relaxed">${cs.context}</p>
    </div>

    <!-- Section: The Challenge -->
    <div class="mt-4 p-6 rounded-2xl bg-amber-950/10 border border-amber-500/15 space-y-3">
      <h3 class="font-display font-bold text-white text-lg flex items-center gap-2">
        <i data-lucide="alert-triangle" class="w-5 h-5 text-amber-400"></i>
        The Challenge
      </h3>
      <p class="text-sm text-slate-300 leading-relaxed">${cs.challenge}</p>
    </div>

    <!-- Section: Research Methodology -->
    <div class="mt-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
      <h3 class="font-display font-bold text-white text-lg flex items-center gap-2">
        <i data-lucide="compass" class="w-5 h-5 text-brand-400"></i>
        Research & Discovery
      </h3>
      <div class="space-y-3">
        ${researchHTML}
      </div>
    </div>

    <!-- Section: Design Process Timeline -->
    <div class="mt-4 space-y-4">
      <h3 class="font-display font-bold text-white text-lg flex items-center gap-2 px-2">
        <i data-lucide="git-branch" class="w-5 h-5 text-purple-400"></i>
        Design Process
      </h3>
      <div class="pl-2">
        ${processHTML}
      </div>
    </div>

    <!-- Section: Key Metrics -->
    <div class="mt-4 space-y-4">
      <h3 class="font-display font-bold text-white text-lg flex items-center gap-2 px-2">
        <i data-lucide="bar-chart-3" class="w-5 h-5 text-emerald-400"></i>
        Key Metrics & Impact
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        ${metricsHTML}
      </div>
    </div>

    <!-- Section: Deliverables -->
    <div class="mt-4 p-6 rounded-2xl bg-brand-950/20 border border-brand-500/20 space-y-4">
      <h3 class="font-display font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
        <i data-lucide="package" class="w-4 h-4 text-brand-400"></i>
        Scope & Deliverables
      </h3>
      <div class="flex flex-wrap gap-2">
        ${cs.deliverables.map(d => `<span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200 font-mono">${d}</span>`).join('')}
      </div>
    </div>

    <!-- Section: Impact -->
    <div class="mt-4 p-6 rounded-2xl bg-emerald-950/15 border border-emerald-500/15 space-y-3">
      <h3 class="font-display font-bold text-emerald-400 text-sm uppercase tracking-wider flex items-center gap-2">
        <i data-lucide="trending-up" class="w-4 h-4"></i>
        Measured Outcome & Impact
      </h3>
      <p class="text-sm text-slate-300 leading-relaxed">${cs.impact}</p>
    </div>

    <!-- Section: Retrospective -->
    ${cs.retrospective ? `
    <div class="mt-4 p-6 rounded-2xl bg-purple-950/10 border border-purple-500/15 space-y-3">
      <h3 class="font-display font-bold text-white text-lg flex items-center gap-2">
        <i data-lucide="lightbulb" class="w-5 h-5 text-amber-300"></i>
        Retrospective & Lessons Learned
      </h3>
      <p class="text-sm text-slate-300 leading-relaxed italic">${cs.retrospective}</p>
    </div>
    ` : ''}

    <!-- Modal Footer -->
    <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 mt-6">
      <div class="text-xs text-slate-400 flex items-center gap-2">
        <span>Designed by Shubham Dharaviya (Sobom)</span>
        <span class="text-slate-600">·</span>
        <span class="text-brand-300">${cs.year}</span>
      </div>
      <div class="flex items-center gap-3">
        <a href="${cs.caseStudyPage}" class="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all flex items-center gap-1.5 border border-white/15">
          <span>Dedicated Page ↗</span>
        </a>
        <a href="${cs.url}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs transition-all flex items-center gap-1.5">
          <span>Open Live Resource</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
        <button onclick="closeCaseStudyModal()" class="px-5 py-2.5 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-all">
          Close
        </button>
      </div>
    </div>
  `;

  caseStudyModal.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

window.closeCaseStudyModal = function() {
  if (!caseStudyModal) return;
  caseStudyModal.classList.remove('modal-open');
  document.body.style.overflow = '';
};

if (caseStudyModal) {
  caseStudyModal.addEventListener('click', (e) => {
    if (e.target === caseStudyModal) {
      window.closeCaseStudyModal();
    }
  });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeCaseStudyModal();
    window.closeConfirmationModal();
  }
});

// --- 4. Contact Form Handler ---
const contactForm = document.getElementById('contactForm');
const confirmationModal = document.getElementById('confirmationModal');
const confirmationText = document.getElementById('confirmationText');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value || 'Friend';
    const email = document.getElementById('contactEmail')?.value || '';
    
    if (confirmationText) {
      confirmationText.textContent = `Thank you, ${name}! Your message has been routed to Shubham Dharaviya. A reply will be sent to ${email} within 24 hours.`;
    }
    
    if (confirmationModal) {
      confirmationModal.classList.add('modal-open');
    }
    
    contactForm.reset();
  });
}

window.closeConfirmationModal = function() {
  if (confirmationModal) {
    confirmationModal.classList.remove('modal-open');
  }
};

if (confirmationModal) {
  confirmationModal.addEventListener('click', (e) => {
    if (e.target === confirmationModal) {
      window.closeConfirmationModal();
    }
  });
}

// --- 5. Real-Time Clock ---
function updateStudioClock() {
  const clockElement = document.getElementById('localClock');
  if (!clockElement) return;
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  clockElement.textContent = timeString;
}
setInterval(updateStudioClock, 1000);
updateStudioClock();

// --- 6. Ambient Cursor Tracking ---
const ambientCursor = document.getElementById('ambientCursor');
if (ambientCursor && window.innerWidth > 768) {
  window.addEventListener('mousemove', (e) => {
    ambientCursor.style.left = `${e.clientX}px`;
    ambientCursor.style.top = `${e.clientY}px`;
  });
}

// --- 7. 3D Tilt Card in Hero Section ---
const heroCard = document.getElementById('heroCard');
if (heroCard && window.innerWidth > 768) {
  heroCard.addEventListener('mousemove', (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    
    heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  heroCard.addEventListener('mouseleave', () => {
    heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });
}

// --- 8. Mobile Menu Drawer ---
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// --- 9. Scroll-Triggered Animations ---
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -50px 0px',
  threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    fadeInObserver.observe(el);
  });
});

// --- 10. Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (navbar) {
    if (currentScroll > 100) {
      navbar.classList.add('shadow-lg', 'shadow-black/30');
    } else {
      navbar.classList.remove('shadow-lg', 'shadow-black/30');
    }
  }
  
  lastScroll = currentScroll;
}, { passive: true });

// Boot Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCaseStudies('all');
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
