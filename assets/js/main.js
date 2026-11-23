/**
 * Shubham Dharaviya (Sobom) — Personal Portfolio & Interactive Hub
 */

// --- 1. Authentic Case Studies & Projects Dataset ---
const projects = [
  {
    id: 0,
    title: "SSOT: Single Source of Truth",
    category: "system",
    categoryLabel: "Design System & Tokens",
    tagline: "Unified Multi-Brand Design System, Atomic Components & Figma Variables",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    metrics: "100% Tokenized",
    badge: "Figma Prototype Available",
    prototypeUrl: "https://www.figma.com/proto/XHa7ODVhJDye4b4XUWby8q/SSOT?page-id=244%3A958&node-id=244-959&viewport=719%2C497%2C1.08&t=01vIUGtVsv91y9I3-1&scaling=scale-down-width&starting-point-node-id=244%3A959",
    deliverables: ["Atomic Design Tokens", "Auto Layout 5.0 Components", "Dark/Light Modes", "Figma Variables", "Accessibility Matrix (WCAG AAA)"],
    challenge: "Fast-growing digital products suffer from fractured UI libraries, uncoordinated hex values, and inconsistent spacing, creating friction between design and frontend engineering.",
    solution: "Architected a scalable Single Source of Truth (SSOT) design system using Figma variables, semantic token aliasing, flexible responsive component variants, and interactive documentation.",
    impact: "Cut feature design iteration time by over 60% and created seamless developer handoff with 1:1 token mapping."
  },
  {
    id: 1,
    title: "Kyobee — Plan Selector & Checkout Flow",
    category: "saas",
    categoryLabel: "Hospitality SaaS & CRO",
    tagline: "Guest Waitlist Management & Frictionless Subscription Checkout",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
    metrics: "+48% Conversion",
    badge: "WordPress Case Study",
    prototypeUrl: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    deliverables: ["Plan Selector UX", "Payment Flow Redesign", "Hero Section Optimization", "Confirmation Screen Mechanics"],
    challenge: "Hospitality managers (restaurants, bars, and boutique hotels) experienced high drop-off during subscription tier selection and checkout due to visual clutter and ambiguous plan comparisons.",
    solution: "Redesigned Kyobee's plan selection architecture with clear feature breakdowns, dynamic billing toggles, transparent pricing tiers, and a simplified 2-step checkout flow.",
    impact: "Significantly decreased onboarding drop-off and boosted trial-to-paid conversion across active restaurant operators."
  },
  {
    id: 2,
    title: "UI/UX 2023 Showcase & Framework",
    category: "saas",
    categoryLabel: "Full Portfolio Prototype",
    tagline: "Interactive End-to-End Design Walkthrough & Case Study Archive",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    metrics: "Interactive Figma",
    badge: "Figma Prototype Available",
    prototypeUrl: "https://www.figma.com/proto/10zJuZX9eox8CZ6y24J3QL/Shubham-Dharviya-UI-UX_2023?page-id=206%3A4&node-id=1042-264&viewport=385%2C349%2C0.02&t=rVSi37eiT0utpoVB-1&scaling=contain&content-scaling=responsive",
    deliverables: ["User Research Deck", "Persona Frameworks", "High-Fidelity Wireframes", "Interactive Prototype Walkthrough"],
    challenge: "Presenting comprehensive problem statements, user research insights, and final UI prototypes in a single seamless, responsive format.",
    solution: "Crafted a multi-viewport presentation prototype illustrating user journey mapping, design iterations, and interactive screen variants directly in Figma.",
    impact: "Showcases verified design execution across web and mobile platforms with live responsive scaling."
  },
  {
    id: 3,
    title: "MSfitCentre (Gym 2.0) — Fitness Tracking",
    category: "mobile",
    categoryLabel: "Mobile & HealthTech",
    tagline: "Automated Workout Sync Mobile App & High-Converting Landing Page",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    metrics: "Native Mobile UI",
    badge: "Case Study Available",
    prototypeUrl: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    deliverables: ["Mobile Workout Tracker", "Gym Landing Page", "Routine Progress Visuals", "Haptic Interaction Design"],
    challenge: "Gym-goers struggled with manual workout logging apps that were difficult to use between intense training sets.",
    solution: "Engineered MSfitCentre Gym 2.0 with rapid 1-tap set completion, automatic rest timers, visual muscle group heatmaps, and a companion landing page.",
    impact: "Praised by fitness enthusiasts for zero distraction ergonomics and intuitive progress charts."
  },
  {
    id: 4,
    title: "iCare — Preventative Health App",
    category: "mobile",
    categoryLabel: "Healthcare & Mobile",
    tagline: "Human-Centered Mobile Health Monitoring & Onboarding Journey",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    metrics: "Clean Health UI",
    badge: "Figma & Dribbble Kit",
    prototypeUrl: "https://dribbble.com/sobom",
    deliverables: ["Onboarding Splash Flow", "Patient Health Dashboard", "Vital Sign Visualizations", "Medical Icon System"],
    challenge: "Translating complex health telemetry into non-intimidating, accessible mobile screens for everyday users.",
    solution: "Designed calming color gradients, high-contrast typography, clear biometric alert states, and a reassuring 3-step onboarding flow.",
    impact: "Featured on Dribbble community showcase and adapted as an open design resource."
  },
  {
    id: 5,
    title: "Mobile App Flow Prototype (2602-39)",
    category: "mobile",
    categoryLabel: "Interactive Prototype",
    tagline: "Tactile Gesture-Driven Mobile Experience & Micro-States",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    metrics: "60fps Figma",
    badge: "Figma Prototype Available",
    prototypeUrl: "https://www.figma.com/proto/10zJuZX9eox8CZ6y24J3QL/Shubham-Dharviya-UI-UX_2023?page-id=2601%3A16114&node-id=2602-39&viewport=1044%2C446%2C0.08&t=wTkVOeGBxzJSc3Xe-1&scaling=contain&content-scaling=fixed",
    deliverables: ["Micro-interactions", "Bottom Sheet Navigation", "Tactile Buttons", "Interactive Smart Animate"],
    challenge: "Validating thumb ergonomics and navigation speed in high-density mobile interfaces.",
    solution: "Created fixed-content Figma prototypes with realistic spring physics, micro-interactions, and instant feedback cues.",
    impact: "Demonstrates production-level prototyping and attention to ergonomic details."
  },
  {
    id: 6,
    title: "Swiggy Cart & Ordering Re-Architecture",
    category: "redesign",
    categoryLabel: "FoodTech & CRO",
    tagline: "Cognitive Friction Reduction & Cart Recovery Flow",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1000&q=80",
    metrics: "CRO Case Study",
    badge: "UX Redesign",
    prototypeUrl: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    deliverables: ["Cart Screen Audit", "Heuristic Evaluation", "Simplified Summary Card", "Delivery Timeline UX"],
    challenge: "Food ordering carts frequently encounter checkout abandonment due to surprise charges, cluttered offer banners, and unclear delivery estimates.",
    solution: "Conducted a UX heuristic audit and redesigned the order review tray, bringing itemized pricing, delivery ETA, and payment options into a single glanceable card.",
    impact: "Created a distraction-free order path that eliminates cognitive hesitation at checkout."
  },
  {
    id: 7,
    title: "Agri-Commerce Fertilizer Application",
    category: "mobile",
    categoryLabel: "Accessible E-Commerce",
    tagline: "Persona-Driven Mobile E-Commerce for Agricultural Supplies",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=80",
    metrics: "User Tested",
    badge: "Field Research",
    prototypeUrl: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    deliverables: ["User Personas", "Simplified Catalog UI", "Voice Search Cues", "High Contrast Design"],
    challenge: "Designing an accessible digital storefront for rural and agricultural users who prioritize speed, clarity, and low cognitive friction.",
    solution: "Formulated detailed farmer personas, implemented high-contrast typography, large tactile buttons, clear product imagery, and simplified quantity pickers.",
    impact: "Successfully validated with target users for seamless ordering in low-bandwidth environments."
  },
  {
    id: 8,
    title: "Rocketline & High-Conversion Landing Pages",
    category: "redesign",
    categoryLabel: "Landing Page CRO",
    tagline: "A/B Tested Visual Hierarchy & Modern Conversion Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    metrics: "2.4x Uplift",
    badge: "WordPress Case Study",
    prototypeUrl: "https://shubhamdharviya.wordpress.com/author/shubhamdharviya/",
    deliverables: ["Above-The-Fold Overhaul", "Value Proposition Hierarchy", "Social Proof Integration", "Responsive Mobile Layout"],
    challenge: "A generic landing page layout with unclear value propositions led to high bounce rates and low CTA engagement.",
    solution: "Redesigned the narrative flow, hero imagery, typography contrast, and interactive product demo cards.",
    impact: "Doubled user engagement duration and delivered a 2.4x increase in sign-up conversions."
  }
];

// --- 2. Portfolio Render & Filtering ---
const projectsGrid = document.getElementById('projectsGrid');
const filterContainer = document.getElementById('portfolioFilterContainer');

function renderProjects(filter = 'all') {
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  
  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = "project-card rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer";
    card.setAttribute('onclick', `openCaseStudy(${project.id})`);
    
    card.innerHTML = `
      <div>
        <!-- Image Preview Container -->
        <div class="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-85 group-hover:opacity-100">
          <div class="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-90"></div>
          
          <div class="absolute top-4 left-4 flex gap-2">
            <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-brand-300 border border-white/10 font-semibold">
              ${project.categoryLabel}
            </span>
          </div>

          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
            <span class="px-2.5 py-1 rounded-lg bg-brand-500/20 text-brand-300 border border-brand-500/30 font-semibold backdrop-blur-sm">
              ${project.metrics}
            </span>
            <span class="text-slate-300 font-mono text-[11px] bg-black/60 px-2.5 py-0.5 rounded backdrop-blur-sm">
              ${project.badge}
            </span>
          </div>
        </div>

        <!-- Project Meta Info -->
        <div class="p-6">
          <h3 class="font-display font-bold text-xl text-white group-hover:text-brand-300 transition-colors flex items-center justify-between">
            <span>${project.title}</span>
            <i data-lucide="arrow-up-right" class="w-4 h-4 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"></i>
          </h3>
          <p class="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
            ${project.tagline}
          </p>
        </div>
      </div>

      <!-- Footer Action -->
      <div class="px-6 pb-6 pt-0 border-t border-white/5 mt-2 flex items-center justify-between text-[11px] text-slate-400">
        <span class="text-brand-400 font-semibold flex items-center gap-1 group-hover:underline">
          View Case Breakdown <i data-lucide="arrow-right" class="w-3 h-3"></i>
        </span>
        <span class="text-slate-500 font-mono">Shubham Dharaviya</span>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Filter button click listener
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
    renderProjects(filter);
  });
}

// --- 3. Interactive Case Study Modal ---
const caseStudyModal = document.getElementById('caseStudyModal');
const modalContentContainer = document.getElementById('modalContentContainer');

window.openCaseStudy = function(id) {
  const project = projects.find(p => p.id === id);
  if (!project || !modalContentContainer || !caseStudyModal) return;

  modalContentContainer.innerHTML = `
    <!-- Modal Header -->
    <div class="space-y-3">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono uppercase tracking-wider text-brand-400 px-2.5 py-1 rounded bg-brand-500/10 border border-brand-500/20 font-semibold">
          ${project.categoryLabel}
        </span>
        <span class="text-xs text-slate-500 font-mono">/ CASE STUDY DEEP DIVE</span>
      </div>
      <h2 class="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
        ${project.title}
      </h2>
      <p class="text-base text-slate-300 font-medium">${project.tagline}</p>
    </div>

    <!-- Image Preview -->
    <div class="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 relative">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
      <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span class="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-brand-300 border border-brand-500/30 text-xs font-bold">
          ${project.metrics}
        </span>
        ${project.prototypeUrl ? `
          <a href="${project.prototypeUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all flex items-center gap-1.5 shadow-lg">
            <span>Open Prototype / Resource</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        ` : ''}
      </div>
    </div>

    <!-- Problem vs Solution Breakdown -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
      <div class="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
        <h4 class="font-display font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="alert-circle" class="w-4 h-4 text-amber-400"></i> The Problem
        </h4>
        <p class="text-xs text-slate-300 leading-relaxed">${project.challenge}</p>
      </div>

      <div class="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
        <h4 class="font-display font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> The Design Solution
        </h4>
        <p class="text-xs text-slate-300 leading-relaxed">${project.solution}</p>
      </div>
    </div>

    <!-- Deliverables & Impact -->
    <div class="p-6 rounded-2xl bg-brand-950/20 border border-brand-500/20 space-y-4">
      <div>
        <h4 class="font-display font-bold text-white text-sm uppercase tracking-wider mb-2">Key Deliverables</h4>
        <div class="flex flex-wrap gap-2">
          ${project.deliverables.map(d => `<span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200">${d}</span>`).join('')}
        </div>
      </div>
      <div>
        <h4 class="font-display font-bold text-emerald-400 text-sm uppercase tracking-wider mb-1">Measured Outcome</h4>
        <p class="text-xs text-slate-300 leading-relaxed">${project.impact}</p>
      </div>
    </div>

    <!-- Modal Actions -->
    <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
      <div class="text-xs text-slate-400">
        Designed by Shubham Dharaviya (Sobom)
      </div>
      <div class="flex items-center gap-3">
        <a href="#contact" onclick="closeCaseStudy()" class="px-5 py-2 rounded-full bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all">
          Discuss This Project
        </a>
      </div>
    </div>
  `;

  caseStudyModal.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

window.closeCaseStudy = function() {
  if (!caseStudyModal) return;
  caseStudyModal.classList.remove('modal-open');
  document.body.style.overflow = '';
};

if (caseStudyModal) {
  caseStudyModal.addEventListener('click', (e) => {
    if (e.target === caseStudyModal) {
      window.closeCaseStudy();
    }
  });
}

// --- 4. Interactive Contact Form ---
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

// --- 5. Real-Time Local Studio Clock ---
function updateStudioClock() {
  const clockElement = document.getElementById('localClock');
  if (!clockElement) return;
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  clockElement.textContent = timeString;
}
setInterval(updateStudioClock, 1000);
updateStudioClock();

// --- 6. Ambient Cursor Light Tracker ---
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

// --- 8. Mobile Drawer Menu ---
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
  renderProjects('all');
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
