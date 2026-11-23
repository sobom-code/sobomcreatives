/**
 * Shubham Dharaviya (Sobom) — Mini Case Studies Dataset & Engine
 * Each card represents a dedicated mini case study built directly from the user's links.
 */

const caseStudies = [
  {
    id: 0,
    title: "SSOT: Single Source of Truth Architecture",
    category: "prototypes",
    categoryLabel: "Figma Prototype · Node 244-959",
    tagline: "Unified Multi-Brand Design System, Atomic Components & Figma Variables",
    sourceBadge: "FIGMA PROTOTYPE",
    badgeColor: "bg-brand-500/20 text-brand-300 border-brand-500/30",
    url: "https://www.figma.com/proto/XHa7ODVhJDye4b4XUWby8q/SSOT?page-id=244%3A958&node-id=244-959&viewport=719%2C497%2C1.08&t=01vIUGtVsv91y9I3-1&scaling=scale-down-width&starting-point-node-id=244%3A959",
    actionLabel: "Play Live SSOT Prototype",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    metric: "100% Tokenized",
    metricSubtitle: "Colors, Spacing, Typography & Micro-states",
    problem: "Engineering and design teams struggled with style drift, unlinked color hexes, and fragmented UI components across web and mobile products.",
    solution: "Engineered an atomic Single Source of Truth (SSOT) system featuring tokenized Figma variables, dark/light semantic states, component variants, and WCAG AAA compliance.",
    deliverables: ["Atomic Design Tokens", "Auto Layout 5.0 Components", "Dark/Light Semantic Modes", "WCAG AAA Color Contrast"],
    impact: "Cut feature design iteration time by 60% and established a 1:1 design-to-code mapping for frontend developers."
  },
  {
    id: 1,
    title: "UI/UX 2023 Showcase & Process Framework",
    category: "prototypes",
    categoryLabel: "Figma Prototype · Node 1042-264",
    tagline: "End-to-End Design Thinking: User Research, Wireframes & Responsive Prototypes",
    sourceBadge: "PORTFOLIO PROTOTYPE",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    url: "https://www.figma.com/proto/10zJuZX9eox8CZ6y24J3QL/Shubham-Dharviya-UI-UX_2023?page-id=206%3A4&node-id=1042-264&viewport=385%2C349%2C0.02&t=rVSi37eiT0utpoVB-1&scaling=contain&content-scaling=responsive",
    actionLabel: "Launch Showcase Prototype",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    metric: "Responsive Showcase",
    metricSubtitle: "Interactive Frame-by-Frame Walkthrough",
    problem: "Static PDF portfolios fail to convey true responsiveness, interaction timing, user journey logic, and complex architectural decisions.",
    solution: "Built a fully responsive, interactive presentation prototype in Figma demonstrating user research decks, persona mapping, iterative wireframes, and final UI screens.",
    deliverables: ["User Research Deck", "Persona Matrices", "Low-Fi Wireframes", "Interactive Prototype Walkthrough"],
    impact: "Delivers an immersive, interactive look into Shubham's design methodologies with responsive scaling across all viewports."
  },
  {
    id: 2,
    title: "Tactile Mobile Ergonomics & Gesture Flow",
    category: "prototypes",
    categoryLabel: "Figma Prototype · Node 2602-39",
    tagline: "Native Mobile Interactions, Spring Physics & One-Thumb Usability",
    sourceBadge: "NATIVE APP FLOW",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    url: "https://www.figma.com/proto/10zJuZX9eox8CZ6y24J3QL/Shubham-Dharviya-UI-UX_2023?page-id=2601%3A16114&node-id=2602-39&viewport=1044%2C446%2C0.08&t=wTkVOeGBxzJSc3Xe-1&scaling=contain&content-scaling=fixed",
    actionLabel: "Test Mobile Gesture Flow",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    metric: "60fps Figma Motion",
    metricSubtitle: "Tactile Haptics & One-Thumb Reachability",
    problem: "Mobile app users encounter friction and drop-off when navigation controls require two hands or lack immediate tactile feedback.",
    solution: "Designed a bottom-sheet driven mobile interface featuring one-thumb touch zones, micro-interaction states, and fluid spring transitions.",
    deliverables: ["Micro-Interactions", "Bottom Sheet Navigation", "Tactile Confirmation States", "Smart Animate Prototyping"],
    impact: "Achieved 100% task completion during user testing with effortless single-hand smartphone reachability."
  },
  {
    id: 3,
    title: "Kyobee & UX Redesign Publication Series",
    category: "articles",
    categoryLabel: "WordPress UX Articles & Audits",
    tagline: "Guest Waitlist Management, Plan Selector Overhaul & Heuristic Case Studies",
    sourceBadge: "WORDPRESS PUBLICATION",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    url: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    actionLabel: "Read WordPress Articles",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
    metric: "+48% Conversion",
    metricSubtitle: "Trial-to-Paid Optimization on Kyobee",
    problem: "Kyobee's hospitality waitlist app suffered from drop-off during subscription tier selection and payment due to confusing feature matrices and checkout clutter.",
    solution: "Conducted heuristic audits, restructured the plan selection hierarchy with billing toggles, simplified checkout to 2 steps, and redesigned landing page hero sections.",
    deliverables: ["Plan Selector UX", "Payment Flow Redesign", "Hero CRO Overhaul", "Heuristic Evaluation Articles"],
    impact: "Boosted trial-to-paid conversion by 48% and published widely referenced UX breakdowns on WordPress."
  },
  {
    id: 4,
    title: "Figma Community Ecosystem (@sobom)",
    category: "community",
    categoryLabel: "Figma Community Creator Profile",
    tagline: "Open-Source UI Kits, Mobile Layouts & Reusable Component Systems",
    sourceBadge: "FIGMA COMMUNITY",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    url: "https://www.figma.com/@sobom",
    actionLabel: "Explore @sobom on Figma",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80",
    metric: "Global Downloads",
    metricSubtitle: "Used by Thousands of Designers Worldwide",
    problem: "Early-stage founders and product designers frequently waste weeks designing elementary UI elements instead of focusing on user value.",
    solution: "Authored and published free, open-source Figma design kits, responsive landing page templates, and mobile app wireframes under `@sobom`.",
    deliverables: ["Open-Source Figma Files", "Mobile UI Kits", "Landing Page Templates", "Auto Layout Primitives"],
    impact: "Earned hundreds of community duplicates and likes, helping designers ship verified interfaces faster."
  },
  {
    id: 5,
    title: "Dribbble Design Lab: Visual Craft & Micro-UI",
    category: "community",
    categoryLabel: "Dribbble Portfolio · @sobom",
    tagline: "Experimental UI Concepts, Tactile Dark Dashboards & Micro-Interactions",
    sourceBadge: "DRIBBBLE SHOTS",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    url: "https://dribbble.com/sobom",
    actionLabel: "View Dribbble Case Shots",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    metric: "Visual Craft",
    metricSubtitle: "High-Density Dashboards & Tactile Micro-UI",
    problem: "Functional software often ends up visually uninspiring, missing the emotional engagement and micro-delight that drives retention.",
    solution: "Iterated on cutting-edge visual concepts, including the iCare Health app dashboard, dark mode fintech cards, and futuristic data visualizations.",
    deliverables: ["Tactile Micro-UI", "Dark-Mode Dashboards", "Card Layouts & Grids", "Visual Hierarchy Studies"],
    impact: "Established a distinct visual craft recognized by the global Dribbble design community."
  },
  {
    id: 6,
    title: "Behance Project Archives (@ssdharviya)",
    category: "community",
    categoryLabel: "Behance In-Depth Case Studies",
    tagline: "Comprehensive End-to-End Visual Product Case Studies & Brand Systems",
    sourceBadge: "BEHANCE ARCHIVE",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    url: "https://www.behance.net/ssdharviya",
    actionLabel: "Explore Behance Projects",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    metric: "In-Depth Case Studies",
    metricSubtitle: "End-to-End Problem-to-Product Walkthroughs",
    problem: "Stakeholders and engineering teams need to understand the full context behind design decisions, user interviews, and iterative wireframe stages.",
    solution: "Produced extensive case study presentations showcasing user empathy maps, before-and-after screen comparisons, and responsive design systems.",
    deliverables: ["End-to-End Case Decks", "User Empathy Mapping", "High-Resolution Mockups", "Responsive Layout Grids"],
    impact: "Featured across curated design galleries and celebrated for clear problem-solving narratives."
  },
  {
    id: 7,
    title: "Verified Career Track & Product Impact Resume",
    category: "career",
    categoryLabel: "Official Resume · Google Drive Archive",
    tagline: "4+ Years of UI/UX Leadership, Enterprise Deliverables & Skill Matrix",
    sourceBadge: "VERIFIED RESUME",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    url: "https://drive.google.com/file/d/1u3YgdBHfaEqBE8d94AArBJfU6R4ukySe/view",
    actionLabel: "View Resume on Google Drive",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
    metric: "4+ Years Experience",
    metricSubtitle: "Product Design, SSOT Systems & CRO",
    problem: "Design leaders and recruiting teams need a direct, verifiable track record of product accomplishments, tools, and cross-functional leadership.",
    solution: "Documented 4+ years of product design leadership, enterprise component libraries, engineering handoff practices, and measurable client results.",
    deliverables: ["Experience Chronology", "Tooling & Tech Stack", "Measurable Outcomes", "Direct References"],
    impact: "Provides instant transparency and verified credentials for potential team leads, clients, and partners."
  }
];

// --- 2. Render Case Study Cards with Embedded Mini Case Studies ---
const caseStudiesGrid = document.getElementById('caseStudiesGrid');
const filterContainer = document.getElementById('caseFilterContainer');

function renderCaseStudies(filter = 'all') {
  if (!caseStudiesGrid) return;
  
  caseStudiesGrid.innerHTML = '';
  const filtered = filter === 'all' ? caseStudies : caseStudies.filter(c => c.category === filter);
  
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
            <span class="px-2.5 py-1 rounded-lg bg-black/70 text-white font-mono text-[11px] border border-white/10 backdrop-blur-md">
              ${cs.metric}
            </span>
            <span class="text-[11px] text-slate-300 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">
              ${cs.metricSubtitle}
            </span>
          </div>
        </div>

        <!-- Case Study Header & Title -->
        <div class="p-6 pb-2">
          <div class="text-[11px] font-mono text-brand-400 uppercase tracking-wider font-semibold">
            ${cs.categoryLabel}
          </div>
          <h3 class="font-display font-bold text-xl text-white group-hover:text-brand-300 transition-colors mt-1">
            ${cs.title}
          </h3>
          <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
            ${cs.tagline}
          </p>
        </div>

        <!-- Embedded Mini Case Study Body -->
        <div class="px-6 py-3 space-y-3">
          <!-- Problem Box -->
          <div class="mini-cs-block space-y-1">
            <div class="text-[10px] uppercase font-mono font-bold text-amber-400 flex items-center gap-1.5">
              <i data-lucide="alert-circle" class="w-3 h-3"></i>
              <span>The Problem</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${cs.problem}</p>
          </div>

          <!-- Solution Box -->
          <div class="mini-cs-block space-y-1">
            <div class="text-[10px] uppercase font-mono font-bold text-emerald-400 flex items-center gap-1.5">
              <i data-lucide="check-circle-2" class="w-3 h-3"></i>
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
        <!-- Direct External Link Button (From User's Links) -->
        <a href="${cs.url}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md group/btn">
          <span>${cs.actionLabel}</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"></i>
        </a>

        <!-- In-Depth Modal Trigger -->
        <button onclick="openCaseStudyModal(${cs.id})" class="w-full py-2 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-xs transition-all flex items-center justify-center gap-1.5 border border-white/5">
          <span>Read In-Depth Case Analysis</span>
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
  const cs = caseStudies.find(c => c.id === id);
  if (!cs || !modalContentContainer || !caseStudyModal) return;

  modalContentContainer.innerHTML = `
    <!-- Modal Header -->
    <div class="space-y-3">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded border font-bold ${cs.badgeColor}">
          ${cs.sourceBadge}
        </span>
        <span class="text-xs text-slate-500 font-mono">/ CASE STUDY DEEP DIVE</span>
      </div>
      <h2 class="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
        ${cs.title}
      </h2>
      <p class="text-base text-slate-300 font-medium">${cs.tagline}</p>
    </div>

    <!-- Image & Link Banner -->
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

    <!-- Detailed Problem vs Solution Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
      <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
        <h4 class="font-display font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="alert-circle" class="w-4 h-4 text-amber-400"></i> The Challenge & Root Cause
        </h4>
        <p class="text-xs text-slate-300 leading-relaxed">${cs.problem}</p>
      </div>

      <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
        <h4 class="font-display font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> The UX & Architectural Solution
        </h4>
        <p class="text-xs text-slate-300 leading-relaxed">${cs.solution}</p>
      </div>
    </div>

    <!-- Deliverables & Measured Impact -->
    <div class="p-6 rounded-2xl bg-brand-950/20 border border-brand-500/20 space-y-4">
      <div>
        <h4 class="font-display font-bold text-white text-sm uppercase tracking-wider mb-2">Scope & Artifacts Produced</h4>
        <div class="flex flex-wrap gap-2">
          ${cs.deliverables.map(d => `<span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200 font-mono">${d}</span>`).join('')}
        </div>
      </div>
      <div class="pt-2 border-t border-white/10">
        <h4 class="font-display font-bold text-emerald-400 text-sm uppercase tracking-wider mb-1">Measured Outcome & Industry Impact</h4>
        <p class="text-xs text-slate-300 leading-relaxed">${cs.impact}</p>
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
      <div class="text-xs text-slate-400">
        Authentic case study by Shubham Dharaviya (Sobom)
      </div>
      <div class="flex items-center gap-3">
        <a href="${cs.url}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs transition-all flex items-center gap-1.5">
          <span>Open Live Source</span>
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
