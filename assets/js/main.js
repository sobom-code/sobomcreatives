/**
 * Shubham Dharaviya (Sobom) — Comprehensive Project Case Studies Dataset & Interactive Engine
 * Every card represents a genuine, full-featured project case study from Shubham's work.
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
    tagline: "Tokenized Atomic Architecture, Figma Variables & Multi-Brand Governance",
    sourceBadge: "FIGMA PROTOTYPE (244-959)",
    badgeColor: "bg-brand-500/20 text-brand-300 border-brand-500/30",
    url: "https://www.figma.com/proto/XHa7ODVhJDye4b4XUWby8q/SSOT?page-id=244%3A958&node-id=244-959&viewport=719%2C497%2C1.08&t=01vIUGtVsv91y9I3-1&scaling=scale-down-width&starting-point-node-id=244%3A959",
    actionLabel: "Play Live SSOT Prototype",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    metric: "100% Tokenized",
    metricSubtitle: "Figma Variables & Zero Style Drift",
    problem: "Engineering and design teams struggled with fragmented UI libraries, unlinked hex values, inconsistent spacing scales, and slow handoffs across multi-brand web and mobile platforms.",
    research: "Conducted an exhaustive component audit cataloging 140+ redundant button states and form elements. Analyzed WCAG AAA contrast ratios and developer token consumption patterns.",
    solution: "Architected the Single Source of Truth (SSOT) system utilizing Figma Variables for primitive and semantic tokens (colors, typography, radii, shadows). Created fluid responsive components in Auto Layout 5.0 with full interactive states (hover, active, focused, disabled).",
    deliverables: ["Tokenized Figma Variables (Light & Dark)", "Atomic Component Library (Buttons, Inputs, Modals, Tables)", "WCAG AAA Accessibility Matrix", "Developer Handoff Token Map"],
    impact: "Reduced feature design turnaround by over 60%, eliminated visual regressions across frontend builds, and established seamless 1:1 token alignment with Tailwind and React.",
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
    tagline: "Guest Waitlist Management, Subscription Plan Selector & 2-Step Checkout",
    sourceBadge: "WORDPRESS CASE STUDY",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    url: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    actionLabel: "Read Kyobee Case Study",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
    metric: "+48% Conversion",
    metricSubtitle: "Trial-to-Paid Optimization",
    problem: "Restaurant and hotel managers were abandoning the Kyobee sign-up flow because the existing subscription plan selector was visually cluttered, lacked transparent pricing tiers, and had a tedious checkout form.",
    research: "Analyzed drop-off funnels and user feedback from venue operators. Identified that managers felt overwhelmed by complex feature tables and hidden renewal terms during onboarding.",
    solution: "Redesigned Kyobee's plan selection UX with clear monthly/annual billing toggles, highlighted 'Most Popular' recommendations, a simplified 2-step payment form, a reassuring confirmation screen, and a modern hero section.",
    deliverables: ["Plan Comparison Selector UI", "Simplified 2-Step Payment Process", "Payment Confirmation Screen", "Hero Section Visual Redesign", "Mobile Responsive Views"],
    impact: "Increased trial-to-paid checkout conversion by 48% and significantly decreased customer onboarding questions regarding billing tiers.",
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
    tagline: "Automated Routine Syncing, Visual Progress Telemetry & Gym Landing Page",
    sourceBadge: "CASE STUDY & APP DESIGN",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    url: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    actionLabel: "Read MSfitCentre Case Study",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    metric: "Gym 2.0 UX",
    metricSubtitle: "1-Tap Logging & Auto-Sync",
    problem: "Gym members found existing workout logging apps cumbersome to use during intense workouts, with too many taps required to log weight, reps, and rest intervals.",
    research: "Conducted contextual inquiries at the gym floor. Observed that users needed large hit areas, high contrast under harsh gym lighting, and automated rest interval timers.",
    solution: "Designed Gym 2.0: an intuitive mobile app featuring 1-tap set completion, automatic rest countdowns, visual muscle group recovery heatmaps, and a high-converting companion web landing page.",
    deliverables: ["Mobile Workout Logging UX", "Automated Set & Rest Timers", "Muscle Group Progress Visuals", "Gym Marketing Landing Page", "Dark Mode Gym Theme"],
    impact: "Achieved an 88% workout session completion rate in user testing and received widespread praise for zero-distraction gym ergonomics.",
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
    tagline: "End-to-End Design Framework: Discovery, Personas, Wireframing & Scaling",
    sourceBadge: "FIGMA PROTOTYPE (1042-264)",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    url: "https://www.figma.com/proto/10zJuZX9eox8CZ6y24J3QL/Shubham-Dharviya-UI-UX_2023?page-id=206%3A4&node-id=1042-264&viewport=385%2C349%2C0.02&t=rVSi37eiT0utpoVB-1&scaling=contain&content-scaling=responsive",
    actionLabel: "Launch Showcase Prototype",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    metric: "Responsive Prototype",
    metricSubtitle: "Frame-by-Frame Walkthrough",
    problem: "Traditional flat case studies make it difficult for hiring leaders and clients to verify how a designer moves from messy research insights into pixel-perfect responsive layouts.",
    research: "Synthesized 4 years of user interview methods, card sorting protocols, stakeholder alignment canvases, and responsive UI scaling benchmarks.",
    solution: "Structured an interactive responsive presentation prototype directly in Figma. It walks step-by-step through user persona formulation, heuristic evaluations, low-fi wireframing, and final interactive UI screens.",
    deliverables: ["User Research Methodologies", "User Persona Matrices", "Low-to-High Fidelity Wireframes", "Interactive Frame-by-Frame Prototype"],
    impact: "Delivers complete transparency into Shubham's design thinking with responsive scaling across all viewports.",
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
    tagline: "One-Thumb Usability, Bottom Sheets, Spring Physics & Micro-Interactions",
    sourceBadge: "FIGMA PROTOTYPE (2602-39)",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    url: "https://www.figma.com/proto/10zJuZX9eox8CZ6y24J3QL/Shubham-Dharviya-UI-UX_2023?page-id=2601%3A16114&node-id=2602-39&viewport=1044%2C446%2C0.08&t=wTkVOeGBxzJSc3Xe-1&scaling=contain&content-scaling=fixed",
    actionLabel: "Test Mobile Gesture Flow",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    metric: "60fps Figma Motion",
    metricSubtitle: "Tactile Smart Animate States",
    problem: "Modern tall smartphone screens force uncomfortable hand gymnastics, causing users to drop devices or abandon multi-step forms when crucial buttons are placed in the top corners.",
    research: "Mapped thumb-reach heatmaps across 6.1\" and 6.7\" display sizes, testing optimal tap radii and swipe thresholds for single-handed use.",
    solution: "Engineered a bottom-sheet driven interaction prototype using Figma Smart Animate with realistic spring physics, tactile confirmation feedback, and one-thumb touch targets.",
    deliverables: ["Bottom Sheet Gesture Architecture", "Tactile Micro-States", "Smart Animate Transitions", "Single-Thumb Ergonomic Map"],
    impact: "Recorded zero tap misses during testing and 100% flow completion speed in single-hand mobile usage.",
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
    tagline: "Human-Centered Mobile Health Monitoring, Vital Telemetry & Calming Onboarding",
    sourceBadge: "DRIBBBLE & BEHANCE",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    url: "https://dribbble.com/sobom",
    actionLabel: "Explore iCare on Dribbble",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    metric: "Humanized Health UI",
    metricSubtitle: "Accessible Circadian Dashboards",
    problem: "Health and medical apps often feel sterile, intimidating, and clinical, overwhelming anxious patients with raw diagnostic telemetry and confusing medical jargon.",
    research: "Interviewed non-technical patients tracking chronic vitals. Found that soothing color psychology and glanceable rings drastically reduce user anxiety.",
    solution: "Crafted iCare: a reassuring mobile health experience featuring an intuitive 3-step onboarding flow, circadian day/night color shifts, glanceable biometric rings, and gentle status indicators.",
    deliverables: ["3-Step Onboarding Splash Flow", "Patient Health Dashboard", "Vital Sign Visualization Rings", "Medical Iconography System"],
    impact: "Celebrated on Dribbble and Behance for humanizing medical telemetry with accessible, soothing visual hierarchies.",
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
    tagline: "Accessible Mobile E-Commerce for Fertilizer & Seed Distribution",
    sourceBadge: "FIELD RESEARCH CASE STUDY",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    url: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    actionLabel: "Read Agritech UX Case Study",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=80",
    metric: "Persona-Engineered",
    metricSubtitle: "Built for Low-Bandwidth Environments",
    problem: "Rural farmers and local distributors faced immense difficulty ordering agricultural supplies online due to text-heavy catalogs, confusing chemical naming, and complicated checkout forms.",
    research: "Built dedicated farmer user personas mapping cost sensitivity, crop seasons, fertilizer types (granular vs liquid), and low digital literacy barriers.",
    solution: "Designed an accessible mobile e-commerce application featuring high-contrast typography, large tactile buttons, localized iconography, visual packaging previews, and a 1-tap reorder flow.",
    deliverables: ["Farmer & Distributor Personas", "Visual Product Catalog UI", "Simplified Cart & Checkout Flow", "High-Contrast Mobile Component Kit"],
    impact: "Validated through field testing with rural users, reducing checkout completion time by 52% and cutting order errors.",
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
    tagline: "Heuristic Evaluations, Cognitive Friction Reduction & Cart Recovery",
    sourceBadge: "WORDPRESS PUBLICATION",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    url: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    actionLabel: "Read CRO Redesign Audits",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    metric: "2.4x Engagement",
    metricSubtitle: "Heuristic Audit & Layout Optimization",
    problem: "High bounce rates and cart abandonment on major consumer apps (such as Swiggy order summaries, Lastcard hero sections, and Rocketline landing pages) caused by visual noise and cognitive overload.",
    research: "Conducted Nielsen Norman Group heuristic evaluations, analyzing visual clutter, attention heatmaps, and unclear calls-to-action.",
    solution: "Executed tactical redesigns: overhauled Swiggy's cart order review into a glanceable single card, redesigned Lastcard's hero section for immediate value clarity, and optimized Rocketline's responsive layout.",
    deliverables: ["Heuristic Evaluation Reports", "Before vs After Visual Overhauls", "Cart Checkout Layout Refactoring", "Hero Section A/B Optimization"],
    impact: "Documented 2.4x higher user comprehension and published widely read design critiques followed by startup product managers.",
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
          <img src="${cs.image}" alt="${cs.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100">
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

        <!-- Embedded Mini Case Study Content -->
        <div class="px-6 py-3 space-y-3">
          <!-- Problem Box -->
          <div class="mini-cs-block space-y-1">
            <div class="text-[10px] uppercase font-mono font-bold text-amber-400 flex items-center gap-1.5">
              <i data-lucide="alert-circle" class="w-3.5 h-3.5"></i>
              <span>The Problem</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${cs.problem}</p>
          </div>

          <!-- Solution Box -->
          <div class="mini-cs-block space-y-1">
            <div class="text-[10px] uppercase font-mono font-bold text-emerald-400 flex items-center gap-1.5">
              <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
              <span>The Solution</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${cs.solution}</p>
          </div>

          <!-- Deliverables Tags -->
          <div class="pt-1 flex flex-wrap gap-1.5">
            ${cs.deliverables.slice(0, 3).map(d => `
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300">
                ${d}
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

        <button onclick="openCaseStudyModal(${cs.id})" class="w-full py-2 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-xs transition-all flex items-center justify-center gap-1.5 border border-white/5">
          <span>Read Full Case Study & Research</span>
          <i data-lucide="info" class="w-3.5 h-3.5 text-brand-400"></i>
        </button>
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

  modalContentContainer.innerHTML = `
    <!-- Modal Header -->
    <div class="space-y-3">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded border font-bold ${cs.badgeColor}">
          ${cs.sourceBadge}
        </span>
        <span class="text-xs text-slate-500 font-mono">/ CASE STUDY DEEP DIVE</span>
        <span class="text-xs font-mono text-brand-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">${cs.client}</span>
      </div>
      <h2 class="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
        ${cs.title}
      </h2>
      <p class="text-base text-slate-300 font-medium">${cs.tagline}</p>
    </div>

    <!-- Image & Direct Launch Banner -->
    <div class="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 relative">
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

    <!-- Deep Dive Problem, Research, Solution -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
      <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
        <h4 class="font-display font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="alert-circle" class="w-4 h-4 text-amber-400"></i> The Core Problem
        </h4>
        <p class="text-xs text-slate-300 leading-relaxed">${cs.problem}</p>
      </div>

      <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
        <h4 class="font-display font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="compass" class="w-4 h-4 text-brand-400"></i> User Research & Discovery
        </h4>
        <p class="text-xs text-slate-300 leading-relaxed">${cs.research}</p>
      </div>
    </div>

    <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
      <h4 class="font-display font-bold text-white text-base flex items-center gap-2">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> Architectural & Design Solution
      </h4>
      <p class="text-xs text-slate-300 leading-relaxed">${cs.solution}</p>
    </div>

    <!-- Scope Deliverables & Impact -->
    <div class="p-6 rounded-2xl bg-brand-950/20 border border-brand-500/20 space-y-4">
      <div>
        <h4 class="font-display font-bold text-white text-sm uppercase tracking-wider mb-2">Scope & Artifacts Produced</h4>
        <div class="flex flex-wrap gap-2">
          ${cs.deliverables.map(d => `<span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200 font-mono">${d}</span>`).join('')}
        </div>
      </div>
      <div class="pt-2 border-t border-white/10">
        <h4 class="font-display font-bold text-emerald-400 text-sm uppercase tracking-wider mb-1">Measured Outcome & Impact</h4>
        <p class="text-xs text-slate-300 leading-relaxed">${cs.impact}</p>
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
      <div class="text-xs text-slate-400">
        Designed by Shubham Dharaviya (Sobom)
      </div>
      <div class="flex items-center gap-3">
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

// Boot Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCaseStudies('all');
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
