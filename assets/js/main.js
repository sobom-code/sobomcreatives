/**
 * Sobom Creatives — Interactive Engine & Client Portal
 */

// --- 1. Project Showcase Dataset ---
const projects = [
  {
    id: 0,
    title: "Apex AI Enterprise Engine",
    category: "saas",
    categoryLabel: "SaaS & AI Platform",
    tagline: "Autonomous Agent Orchestration Suite & Design Tokens",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    metrics: "+185% Daily Usage",
    funding: "$34M Series B",
    deliverables: ["Product Architecture", "Design System (Figma)", "Interactive Prototypes", "React Component Specs"],
    description: "Apex AI required a high-density, low-latency workspace interface allowing engineers and product managers to train, orchestrate, and audit LLM agents in real-time. We engineered a modular panel architecture that reduced cognitive load and cut user task completion time by 44%.",
    challenge: "The existing client interface struggled with information clutter, complex multi-agent execution graphs, and inconsistent UI patterns across their core product lines.",
    solution: "We designed a multi-pane split layout featuring contextual drill-downs, tokenized color semantic states for agent tasks, and an interactive node canvas that turns complex pipelines into visual diagrams.",
    impact: "Adopted by Fortune 500 data teams, with a 185% increase in user session engagement and zero UX regressions reported after 6 months."
  },
  {
    id: 1,
    title: "Kroma Pay — Neobanking Experience",
    category: "fintech",
    categoryLabel: "Fintech & Mobile",
    tagline: "Zero-Fee Global Multi-Currency Card & Wealth Ecosystem",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
    metrics: "500k+ App Installs",
    funding: "Top 3 App Store",
    deliverables: ["iOS & Android Mobile UX", "Haptic Micro-Interactions", "Dynamic Card Shaders", "Onboarding Flow"],
    description: "Kroma approached Sobom Creatives to craft a tactile, luxurious mobile banking experience that made cross-border transfers and fractional investments feel as effortless as sending an emoji.",
    challenge: "Traditional banking apps feel cold, intimidating, and burdened by compliance forms that cause high drop-off during onboarding.",
    solution: "We engineered a 3-minute frictionless KYC flow with animated micro-rewards, custom metallic physical card 3D preview customizers, and an intuitive swipe-to-split payment mechanic.",
    impact: "Achieved a 94% KYC completion rate (industry benchmark is ~68%) and surpassed half a million active cardholders within the first 60 days of launch."
  },
  {
    id: 2,
    title: "Aetheria — Spatial 3D Experience",
    category: "web",
    categoryLabel: "Web Experience & WebGL",
    tagline: "Architectural Showcase & Interactive Real Estate Portal",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    metrics: "FWA of the Day",
    funding: "+310% Session Time",
    deliverables: ["Creative Art Direction", "WebGL Shaders", "Responsive Micro-Site", "Headless CMS Integration"],
    description: "An immersive, cinematic spatial web journey presenting visionary architectural residences across Europe and Asia with interactive sunlight simulators and spatial sound design.",
    challenge: "Delivering desktop-grade 3D graphics and photorealistic architectural walkthroughs without sacrificing mobile battery life or exceeding 2-second load times.",
    solution: "Developed an optimized Three.js / WebGL pipeline with progressive geometry streaming, custom normal-mapped lighting shaders, and buttery smooth Lenis scroll synchronizations.",
    impact: "Won Site of the Day (Awwwards & FWA nominee), generated $18M in pre-sale residential inquiries, and averaged over 4 minutes of dwell time per visitor."
  },
  {
    id: 3,
    title: "Nexus Cloud — Developer Observability",
    category: "saas",
    categoryLabel: "SaaS & Developer Tools",
    tagline: "Distributed Tracing, Anomaly Detection & Telemetry UI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    metrics: "-40% Onboarding Friction",
    funding: "Y Combinator S24",
    deliverables: ["Telemetry Dashboard UI", "Dark Mode Design System", "Data Visualization Suite", "CLI UI Standards"],
    description: "Transforming high-frequency server logs and distributed microservice traces into crystal-clear visual anomalies that engineering incident commanders can diagnose in seconds.",
    challenge: "Engineers were overwhelmed by noisy log dumps and fragmented monitoring views during critical server outages.",
    solution: "Designed high-contrast heatmap timelines, collapsible trace flamegraphs, and intelligent incident triage cards that surface root causes automatically.",
    impact: "Cut mean time to detection (MTTD) by 32% for client engineering teams and drove their Y Combinator Demo Day customer conversions."
  },
  {
    id: 4,
    title: "Velour Atelier — Luxury E-Commerce",
    category: "web",
    categoryLabel: "Luxury E-Commerce",
    tagline: "Editorial Lookbook, Bespoke Tailoring & Virtual Fitting",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    metrics: "$4.2M Launch GMV",
    funding: "High-Margin D2C",
    deliverables: ["Editorial Layouts", "Virtual Fitting Room UI", "Shopify Plus Custom Theme", "Checkout Optimization"],
    description: "A digital haute couture storefront combining Parisian editorial typography with instantaneous 60fps shopping cart interactions and virtual sizing guides.",
    challenge: "Luxury fashion shoppers abandon high-ticket carts when digital storefronts feel generic, sluggish, or lack visceral product detailing.",
    solution: "Created an editorial layout with video-in-canvas micro-previews, high-resolution zoom loupes, and a 1-click Apple Pay checkout flow.",
    impact: "Cart abandonment dropped by 28%, resulting in over $4.2M in gross merchandise value within the first fiscal quarter."
  },
  {
    id: 5,
    title: "Pulse Health — Predictive Longevity App",
    category: "mobile",
    categoryLabel: "Mobile & HealthTech",
    tagline: "Continuous Biometric Monitoring & AI Health Guidance",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    metrics: "Apple Design Nominee",
    funding: "4.9★ App Store Rating",
    deliverables: ["iOS Native Design", "Apple Watch Complications", "Biometric Visualizations", "Medical Token Set"],
    description: "A companion application syncing with continuous glucose monitors, Oura rings, and Apple Watch metrics to deliver real-time metabolic insights and personalized recovery plans.",
    challenge: "Translating dense clinical health biometrics into empowering, non-alarming insights for non-medical users.",
    solution: "Developed humanized circadian color shifts that match the user's biological clock, alongside visual biometric rings and actionable micro-habits.",
    impact: "Ranked #1 in the Medical & Longevity category in 14 countries and nominated for the Apple Design Award in Interaction Craft."
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
        <!-- Image Preview Thumbnail -->
        <div class="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-85 group-hover:opacity-100">
          <div class="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-90"></div>
          
          <div class="absolute top-4 left-4 flex gap-2">
            <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-brand-300 border border-white/10 font-semibold">
              ${project.categoryLabel}
            </span>
          </div>

          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
            <span class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold backdrop-blur-sm">
              ${project.metrics}
            </span>
            <span class="text-slate-300 font-mono text-[11px] bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
              ${project.funding}
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

      <!-- Footer Pills -->
      <div class="px-6 pb-6 pt-0 border-t border-white/5 mt-2 flex items-center justify-between text-[11px] text-slate-400">
        <span class="text-brand-400 font-semibold flex items-center gap-1 group-hover:underline">
          Read Case Study <i data-lucide="arrow-right" class="w-3 h-3"></i>
        </span>
        <span class="text-slate-500 font-mono">Figma · Tokens</span>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Setup Filter Buttons
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
    playClickSound();
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
        <span class="text-xs text-slate-500 font-mono">/ CASE ARCHIVE</span>
      </div>
      <h2 class="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
        ${project.title}
      </h2>
      <p class="text-base text-slate-300 font-medium">${project.tagline}</p>
    </div>

    <!-- Hero Image inside Modal -->
    <div class="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 relative">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
      <div class="absolute bottom-4 left-4 flex gap-3">
        <span class="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-xs font-bold">
          Impact: ${project.metrics}
        </span>
        <span class="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white border border-white/20 text-xs font-bold">
          Milestone: ${project.funding}
        </span>
      </div>
    </div>

    <!-- Breakdown Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
      <div class="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
        <h4 class="font-display font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="alert-circle" class="w-4 h-4 text-amber-400"></i> The Challenge
        </h4>
        <p class="text-xs text-slate-300 leading-relaxed">${project.challenge}</p>
      </div>

      <div class="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
        <h4 class="font-display font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> The Sobom Solution
        </h4>
        <p class="text-xs text-slate-300 leading-relaxed">${project.solution}</p>
      </div>
    </div>

    <!-- Project Scope & Deliverables -->
    <div class="p-6 rounded-2xl bg-brand-950/20 border border-brand-500/20 space-y-3">
      <h4 class="font-display font-bold text-white text-sm uppercase tracking-wider">Production Deliverables</h4>
      <div class="flex flex-wrap gap-2">
        ${project.deliverables.map(d => `<span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200">${d}</span>`).join('')}
      </div>
    </div>

    <!-- Modal CTA -->
    <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
      <div class="text-xs text-slate-400">
        Interested in achieving similar growth metrics for your product?
      </div>
      <a href="#contact" onclick="closeCaseStudy()" class="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all text-center">
        Request Scope Consultation
      </a>
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

// Close modal when clicking on backdrop
if (caseStudyModal) {
  caseStudyModal.addEventListener('click', (e) => {
    if (e.target === caseStudyModal) {
      window.closeCaseStudy();
    }
  });
}

// --- 4. Interactive Project Cost & Timeline Estimator ---
let selectedCost = 4500;
let selectedWeeks = 3;
let selectedMultiplier = 1;
let selectedAddonTotal = 0;

const costDisplay = document.getElementById('estimateCostDisplay');
const weeksDisplay = document.getElementById('estimateWeeksDisplay');

function recalculateEstimate() {
  const total = Math.round((selectedCost * selectedMultiplier) + selectedAddonTotal);
  const totalWeeks = Math.max(2, Math.round(selectedWeeks * (selectedMultiplier > 1.5 ? 1.5 : 1)));
  
  if (costDisplay) {
    costDisplay.textContent = `$${total.toLocaleString()}`;
  }
  if (weeksDisplay) {
    weeksDisplay.textContent = `~ ${totalWeeks} Weeks Turnaround`;
  }
}

// Project Type selection
const projectTypeButtons = document.querySelectorAll('.estimator-option');
projectTypeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    projectTypeButtons.forEach(b => b.classList.remove('active-est'));
    btn.classList.add('active-est');
    selectedCost = parseInt(btn.getAttribute('data-cost'), 10) || 4500;
    selectedWeeks = parseInt(btn.getAttribute('data-weeks'), 10) || 3;
    playClickSound();
    recalculateEstimate();
  });
});

// Scale selection
const scaleButtons = document.querySelectorAll('.estimator-scale');
scaleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    scaleButtons.forEach(b => b.classList.remove('active-scale'));
    btn.classList.add('active-scale');
    selectedMultiplier = parseFloat(btn.getAttribute('data-multiplier')) || 1;
    playClickSound();
    recalculateEstimate();
  });
});

// Addons Checkboxes
const addonCheckboxes = document.querySelectorAll('.addon-checkbox');
addonCheckboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    let sum = 0;
    addonCheckboxes.forEach(box => {
      if (box.checked) {
        sum += parseInt(box.getAttribute('data-addon-cost'), 10) || 0;
      }
    });
    selectedAddonTotal = sum;
    playClickSound();
    recalculateEstimate();
  });
});

// "Lock In This Scope" button click: auto-fill contact form brief and scroll down
const bookEstimatedScopeBtn = document.getElementById('bookEstimatedScopeBtn');
if (bookEstimatedScopeBtn) {
  bookEstimatedScopeBtn.addEventListener('click', () => {
    const activeType = document.querySelector('.estimator-option.active-est .font-bold')?.textContent || 'Custom Product';
    const activeScale = document.querySelector('.estimator-scale.active-scale .font-bold')?.textContent || 'MVP Scale';
    const totalCost = costDisplay ? costDisplay.textContent : '$4,500';
    const totalWeeks = weeksDisplay ? weeksDisplay.textContent : '3 Weeks';
    
    const briefArea = document.getElementById('formBrief');
    if (briefArea) {
      briefArea.value = `Hi Sobom Creatives! I calculated an estimate through your website for a [${activeType}] at [${activeScale}] scale (Estimate: ${totalCost}, Timeline: ${totalWeeks}). We are looking to discuss our requirements and kick off soon.`;
    }
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    playClickSound();
  });
}

// --- 5. Interactive Contact Inquiry Form ---
const inquiryForm = document.getElementById('projectInquiryForm');
const confirmationModal = document.getElementById('confirmationModal');
const confirmationText = document.getElementById('confirmationText');

if (inquiryForm) {
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('formName')?.value || 'Friend';
    const email = document.getElementById('formEmail')?.value || '';
    const company = document.getElementById('formCompany')?.value || 'Your company';
    
    if (confirmationText) {
      confirmationText.textContent = `Thank you, ${name}! We've received your project brief for ${company}. Our creative director will review your details and send a tailored proposal to ${email} within 24 hours.`;
    }
    
    if (confirmationModal) {
      confirmationModal.classList.add('modal-open');
    }
    
    inquiryForm.reset();
    playSuccessSound();
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

// --- 6. FAQ Accordion ---
const faqButtons = document.querySelectorAll('.faq-btn');
faqButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const chevron = btn.querySelector('[data-lucide="chevron-down"]');
    const isHidden = content.classList.contains('hidden');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.faq-btn [data-lucide="chevron-down"]').forEach(ch => ch.classList.remove('rotate-180'));
    
    if (isHidden) {
      content.classList.remove('hidden');
      if (chevron) chevron.classList.add('rotate-180');
      playClickSound();
    }
  });
});

// --- 7. Live Studio Clock (UTC) ---
function updateStudioClock() {
  const clockElement = document.getElementById('studioClock');
  if (!clockElement) return;
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' }) + ' UTC';
  clockElement.textContent = timeString;
}
setInterval(updateStudioClock, 1000);
updateStudioClock();

// --- 8. Ambient Cursor Light Tracking ---
const ambientCursor = document.getElementById('ambientCursor');
if (ambientCursor && window.innerWidth > 768) {
  window.addEventListener('mousemove', (e) => {
    ambientCursor.style.left = `${e.clientX}px`;
    ambientCursor.style.top = `${e.clientY}px`;
  });
}

// --- 9. 3D Card Tilt Effect in Hero ---
const heroCard = document.getElementById('heroCard');
if (heroCard && window.innerWidth > 768) {
  heroCard.addEventListener('mousemove', (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    
    heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  heroCard.addEventListener('mouseleave', () => {
    heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });
}

// --- 10. Synthesized Web Audio Sound Effects (Optional Audio Toggle) ---
let soundEnabled = false;
let audioCtx = null;

const soundToggleBtn = document.getElementById('soundToggleBtn');
if (soundToggleBtn) {
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled && !audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    soundToggleBtn.classList.toggle('text-brand-400', soundEnabled);
    soundToggleBtn.classList.toggle('border-brand-500/40', soundEnabled);
    
    if (soundEnabled) {
      playSuccessSound();
    }
  });
}

function playClickSound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  } catch (err) {}
}

function playSuccessSound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, audioCtx.currentTime);
    osc.frequency.setValueAtTime(660, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
  } catch (err) {}
}

// --- 11. Mobile Drawer Menu ---
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    playClickSound();
  });
  
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
