const fs = require('fs');
const path = require('path');

// Read main.js to extract projectCaseStudies
const mainJsContent = fs.readFileSync(path.join(__dirname, '../assets/js/main.js'), 'utf8');

// Evaluate the projectCaseStudies array in a sandbox or via Function
const match = mainJsContent.match(/const projectCaseStudies = (\[[\s\S]*?\n\]);/);
if (!match) {
  console.error("Could not find projectCaseStudies in main.js");
  process.exit(1);
}

const projectCaseStudies = eval(match[1]);

const caseStudiesDir = path.join(__dirname, '../case-studies');
if (!fs.existsSync(caseStudiesDir)) {
  fs.mkdirSync(caseStudiesDir, { recursive: true });
}

function generateCaseStudyHtml(cs, prevCs, nextCs) {
  const processHtml = (cs.designProcess || []).map((p, idx) => `
    <div class="relative pl-8 pb-8 ${idx < cs.designProcess.length - 1 ? 'border-l-2 border-white/10' : ''} ml-3">
      <div class="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-brand-500/20 border-2 border-brand-500 flex items-center justify-center">
        <i data-lucide="${p.icon || 'check'}" class="w-3 h-3 text-brand-400"></i>
      </div>
      <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-all">
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-display font-bold text-white text-base">${p.phase}</h4>
          <span class="text-xs font-mono text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded-full">${p.duration}</span>
        </div>
        <p class="text-sm text-slate-300 leading-relaxed">${p.description}</p>
      </div>
    </div>
  `).join('');

  const metricsHtml = (cs.keyMetrics || []).map(m => `
    <div class="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center hover:border-brand-500/30 transition-all">
      <div class="text-3xl font-display font-black text-brand-300">${m.value}</div>
      <div class="text-xs font-bold text-white mt-1">${m.label}</div>
      <div class="text-[11px] text-slate-500 mt-0.5 font-mono">${m.description}</div>
    </div>
  `).join('');

  const researchHtml = (cs.researchMethodology || '').split('\n\n').map(p => {
    if (p.startsWith('•')) {
      return `<div class="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex gap-3 items-start"><span class="text-brand-400 font-bold mt-0.5 shrink-0">▸</span><span class="text-sm text-slate-300 leading-relaxed">${p.substring(2)}</span></div>`;
    }
    return `<p class="text-sm text-slate-300 leading-relaxed">${p}</p>`;
  }).join('');

  const deliverablesHtml = (cs.deliverables || []).map(d => `
    <div class="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-200">
      <i data-lucide="check" class="w-4 h-4 text-emerald-400 shrink-0"></i>
      <span>${d}</span>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cs.title} — Case Study by Shubham Dharaviya (Sobom)</title>
  <meta name="description" content="${cs.tagline}. Detailed product design case study examining research, architecture, and measurable outcomes.">
  
  <!-- OpenGraph -->
  <meta property="og:title" content="${cs.title} — Case Study">
  <meta property="og:description" content="${cs.tagline}">
  <meta property="og:image" content="${cs.image}">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            display: ['"Syne"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            brand: {
              300: '#7eb1ff',
              400: '#3c86ff',
              500: '#145bff',
              accent: '#00F0FF',
            }
          }
        }
      }
    }
  </script>
  
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body class="bg-[#07080B] text-slate-100 font-sans antialiased selection:bg-brand-500 selection:text-white">

  <!-- Background Orbs -->
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div class="glow-orb glow-orb-1"></div>
    <div class="glow-orb glow-orb-2"></div>
    <div class="noise-overlay"></div>
  </div>

  <!-- Ambient Cursor Follower -->
  <div id="ambientCursor" class="ambient-cursor pointer-events-none hidden md:block"></div>

  <!-- Top Bar -->
  <div class="relative z-50 bg-[#090b11]/80 border-b border-white/5 py-2.5 px-4 backdrop-blur-md">
    <div class="max-w-6xl mx-auto flex items-center justify-between text-xs">
      <a href="../index.html" class="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
        <i data-lucide="arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform"></i>
        <span class="font-medium">Back to Portfolio</span>
      </a>
      <div class="flex items-center gap-4 text-slate-400">
        <span class="font-mono text-brand-300">${cs.categoryLabel}</span>
        <span class="text-slate-600">|</span>
        <a href="https://drive.google.com/file/d/1u3YgdBHfaEqBE8d94AArBJfU6R4ukySe/view" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1">
          <span>Resume PDF</span>
          <i data-lucide="external-link" class="w-3 h-3"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#07080B]/90 border-b border-white/5">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-4">
      <a href="../index.html" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-500 to-indigo-500 p-[1px]">
          <div class="w-full h-full bg-[#090b11] rounded-[11px] flex items-center justify-center font-display font-black text-white group-hover:scale-105 transition-transform">
            S
          </div>
        </div>
        <div>
          <span class="font-display font-bold text-white text-base group-hover:text-brand-300 transition-colors">Shubham Dharaviya</span>
          <span class="block text-[11px] text-slate-400 font-mono">Product & UI/UX Designer</span>
        </div>
      </a>
      <div class="flex items-center gap-3">
        <a href="${cs.url}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all flex items-center gap-1.5 shadow-md">
          <span>${cs.actionLabel}</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">

    <!-- Breadcrumb & Header Hero -->
    <div class="space-y-6">
      <div class="flex items-center gap-2 flex-wrap text-xs font-mono">
        <a href="../index.html" class="text-slate-400 hover:text-white">Home</a>
        <span class="text-slate-600">/</span>
        <a href="../index.html#case-studies" class="text-slate-400 hover:text-white">Case Studies</a>
        <span class="text-slate-600">/</span>
        <span class="text-brand-300">${cs.title}</span>
      </div>

      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-bold ${cs.badgeColor}">
        <i data-lucide="layers" class="w-3.5 h-3.5"></i>
        <span>${cs.sourceBadge}</span>
      </div>

      <h1 class="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
        ${cs.title}
      </h1>

      <p class="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
        ${cs.tagline}
      </p>

      <!-- Project Metadata Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/10">
        <div>
          <div class="text-[11px] font-mono text-slate-500 uppercase">Role</div>
          <div class="text-sm text-white font-semibold mt-1">${cs.role}</div>
        </div>
        <div>
          <div class="text-[11px] font-mono text-slate-500 uppercase">Timeline</div>
          <div class="text-sm text-white font-semibold mt-1">${cs.timeline} (${cs.year})</div>
        </div>
        <div>
          <div class="text-[11px] font-mono text-slate-500 uppercase">Client / Domain</div>
          <div class="text-sm text-white font-semibold mt-1">${cs.client}</div>
        </div>
        <div>
          <div class="text-[11px] font-mono text-slate-500 uppercase">Team</div>
          <div class="text-sm text-white font-semibold mt-1">${cs.team}</div>
        </div>
      </div>

      <!-- Tools Used -->
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-xs font-mono text-slate-500 uppercase mr-2">Tools:</span>
        ${cs.tools.map(t => `<span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">${t}</span>`).join('')}
      </div>
    </div>

    <!-- Hero Image Banner with Direct Action -->
    <div class="relative rounded-3xl overflow-hidden aspect-[16/9] border border-white/10 bg-slate-900 shadow-2xl">
      <img src="${cs.image}" alt="${cs.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-brand-300 font-bold bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-brand-500/30">
            ${cs.metric} — ${cs.metricSubtitle}
          </span>
        </div>
        <a href="${cs.url}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-2xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all flex items-center gap-2 shadow-2xl">
          <span>${cs.actionLabel}</span>
          <i data-lucide="external-link" class="w-4 h-4"></i>
        </a>
      </div>
    </div>

    <!-- Key Metrics Grid -->
    <div class="space-y-4">
      <h2 class="font-display font-bold text-xl text-white flex items-center gap-2">
        <i data-lucide="bar-chart-3" class="w-5 h-5 text-emerald-400"></i>
        Measurable Impact & Key Results
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        ${metricsHtml}
      </div>
    </div>

    <!-- Section: Context & Background -->
    <section class="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
      <div class="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-wider font-bold">
        <i data-lucide="info" class="w-4 h-4"></i>
        <span>Project Context & Background</span>
      </div>
      <h2 class="font-display font-extrabold text-2xl text-white">Why This Project Existed</h2>
      <p class="text-base text-slate-300 leading-relaxed">${cs.context}</p>
    </section>

    <!-- Section: The Challenge -->
    <section class="p-8 rounded-3xl bg-amber-950/10 border border-amber-500/20 space-y-4">
      <div class="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider font-bold">
        <i data-lucide="alert-triangle" class="w-4 h-4"></i>
        <span>The Problem Statement</span>
      </div>
      <h2 class="font-display font-extrabold text-2xl text-white">Friction & Roadblocks Faced by Users</h2>
      <p class="text-base text-slate-300 leading-relaxed">${cs.challenge}</p>
    </section>

    <!-- Section: Research Methodology -->
    <section class="space-y-6">
      <div class="flex items-center gap-2 text-brand-400 text-xs font-mono uppercase tracking-wider font-bold">
        <i data-lucide="compass" class="w-4 h-4"></i>
        <span>Research & Discovery</span>
      </div>
      <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-white">How We Listened to the User</h2>
      <div class="space-y-4">
        ${researchHtml}
      </div>
    </section>

    <!-- Section: Design Process Timeline -->
    <section class="space-y-6">
      <div class="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-wider font-bold">
        <i data-lucide="git-branch" class="w-4 h-4"></i>
        <span>Step-by-Step Architecture</span>
      </div>
      <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-white">The Design & Iteration Process</h2>
      <div class="pt-2">
        ${processHtml}
      </div>
    </section>

    <!-- Section: Solution & Architectural Decisions -->
    <section class="p-8 rounded-3xl bg-gradient-to-tr from-brand-950/30 to-[#0e121c] border border-brand-500/30 space-y-4">
      <div class="flex items-center gap-2 text-brand-300 text-xs font-mono uppercase tracking-wider font-bold">
        <i data-lucide="check-circle-2" class="w-4 h-4"></i>
        <span>Architectural Solution</span>
      </div>
      <h2 class="font-display font-extrabold text-2xl text-white">Engineered for Usability & Precision</h2>
      <p class="text-base text-slate-300 leading-relaxed">${cs.solution}</p>
    </section>

    <!-- Section: Deliverables -->
    <section class="space-y-4">
      <div class="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-bold">
        <i data-lucide="package" class="w-4 h-4"></i>
        <span>Scope & Deliverables</span>
      </div>
      <h2 class="font-display font-extrabold text-2xl text-white">Artifacts Handed Over</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${deliverablesHtml}
      </div>
    </section>

    <!-- Section: Measured Outcome & Impact -->
    <section class="p-8 rounded-3xl bg-emerald-950/15 border border-emerald-500/20 space-y-4">
      <div class="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-bold">
        <i data-lucide="trending-up" class="w-4 h-4"></i>
        <span>Measured Outcome & Business Value</span>
      </div>
      <h2 class="font-display font-extrabold text-2xl text-white">Quantitative & Qualitative Results</h2>
      <p class="text-base text-slate-300 leading-relaxed">${cs.impact}</p>
    </section>

    <!-- Section: Retrospective -->
    ${cs.retrospective ? `
    <section class="p-8 rounded-3xl bg-purple-950/10 border border-purple-500/20 space-y-4">
      <div class="flex items-center gap-2 text-amber-300 text-xs font-mono uppercase tracking-wider font-bold">
        <i data-lucide="lightbulb" class="w-4 h-4"></i>
        <span>Retrospective & Honest Takeaways</span>
      </div>
      <h2 class="font-display font-extrabold text-2xl text-white">What I Learned & What I'd Do Next</h2>
      <p class="text-base text-slate-300 leading-relaxed italic">${cs.retrospective}</p>
    </section>
    ` : ''}

    <!-- Next / Previous Case Study Navigation -->
    <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
      ${prevCs ? `
      <a href="${path.basename(prevCs.caseStudyPage)}" class="w-full sm:w-auto p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 transition-all flex items-center gap-3 group">
        <i data-lucide="arrow-left" class="w-5 h-5 text-slate-400 group-hover:-translate-x-1 transition-transform"></i>
        <div>
          <div class="text-[10px] font-mono text-slate-500 uppercase">Previous Study</div>
          <div class="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">${prevCs.title}</div>
        </div>
      </a>
      ` : '<div class="hidden sm:block"></div>'}

      <a href="../index.html#case-studies" class="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-all">
        View All Case Studies
      </a>

      ${nextCs ? `
      <a href="${path.basename(nextCs.caseStudyPage)}" class="w-full sm:w-auto p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 transition-all flex items-center justify-end gap-3 text-right group">
        <div>
          <div class="text-[10px] font-mono text-slate-500 uppercase">Next Study</div>
          <div class="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">${nextCs.title}</div>
        </div>
        <i data-lucide="arrow-right" class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform"></i>
      </a>
      ` : '<div class="hidden sm:block"></div>'}
    </div>

    <!-- Contact CTA -->
    <div class="rounded-3xl bg-gradient-to-tr from-brand-950/80 via-[#0d1017] to-purple-950/40 border border-white/15 p-8 sm:p-12 text-center space-y-6">
      <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white">Have a product challenge in mind?</h2>
      <p class="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
        Let's discuss how user research, design token architecture, and high-fidelity prototyping can transform your product metrics.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <a href="mailto:dharaviyashubham2000@gmail.com" class="px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all shadow-xl">
          Email Shubham Directly
        </a>
        <a href="../index.html#contact" class="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/10">
          Leave a Project Brief
        </a>
      </div>
    </div>

  </main>

  <!-- Footer -->
  <footer class="border-t border-white/10 bg-[#06070a] py-12 relative z-10 text-xs text-slate-500">
    <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        © 2026 Shubham Dharaviya (Sobom). "It doesn't matter what you & I think. It only matters what our user thinks."
      </div>
      <div class="flex items-center space-x-5">
        <a href="https://www.figma.com/@sobom" target="_blank" class="hover:text-white transition-colors">Figma</a>
        <a href="https://dribbble.com/sobom" target="_blank" class="hover:text-white transition-colors">Dribbble</a>
        <a href="https://www.behance.net/ssdharviya" target="_blank" class="hover:text-white transition-colors">Behance</a>
        <a href="https://shubhamdharviya.wordpress.com/author/shubhamdharviya/" target="_blank" class="hover:text-white transition-colors">WordPress</a>
      </div>
    </div>
  </footer>

  <script>
    if (window.lucide) {
      window.lucide.createIcons();
    }
    const ambientCursor = document.getElementById('ambientCursor');
    if (ambientCursor && window.innerWidth > 768) {
      window.addEventListener('mousemove', (e) => {
        ambientCursor.style.left = e.clientX + 'px';
        ambientCursor.style.top = e.clientY + 'px';
      });
    }
  </script>
</body>
</html>`;
}

// Generate each HTML file
projectCaseStudies.forEach((cs, idx) => {
  const prevCs = idx > 0 ? projectCaseStudies[idx - 1] : null;
  const nextCs = idx < projectCaseStudies.length - 1 ? projectCaseStudies[idx + 1] : null;
  const fileName = path.basename(cs.caseStudyPage);
  const filePath = path.join(caseStudiesDir, fileName);
  const html = generateCaseStudyHtml(cs, prevCs, nextCs);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: case-studies/${fileName}`);
});

console.log('All 8 case studies generated successfully!');
