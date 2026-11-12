// AI Enterprises - Modern Landing Page Controller
// Built strictly to ai-design-skills / landing-page-design specifications
import { renderLucideIcons } from './icons.js';

const servicesData = [
  {
    category: "vrv",
    icon: "air-vent",
    tag: "Modular zoning",
    title: "VRV and VRF systems",
    desc: "Inverter variable refrigerant flow installations for commercial towers, hotels, and offices. Individual room temperature control with up to 30 percent lower power bills.",
    specs: ["Modular outdoor inverter units", "Nitrogen purged copper piping", "Ceiling concealed and cassette indoor units", "BMS central integration"]
  },
  {
    category: "chillers",
    icon: "snowflake",
    tag: "Heavy commercial",
    title: "Central chilled water plants",
    desc: "Water cooled and air cooled chillers with primary and secondary pumping loops for large high occupancy facilities and convention halls.",
    specs: ["Screw and centrifugal chillers", "Cooling towers and condenser piping", "Variable frequency drives on pumps", "Double skin air handling units"]
  },
  {
    category: "ventilation",
    icon: "wind",
    tag: "Air quality and safety",
    title: "Ventilation and smoke exhaust",
    desc: "Basement car park impulse jet fans with carbon monoxide sensors, commercial kitchen scrubbers, and building code staircase pressurization.",
    specs: ["Basement ventilation jet fans", "Kitchen exhaust with wet scrubbers", "Stairwell fire smoke pressurization", "Treated fresh air heat recovery units"]
  },
  {
    category: "cleanroom",
    icon: "shield-check",
    tag: "Medical grade",
    title: "Cleanrooms and hospital surgical rooms",
    desc: "NABH compliant surgical suites, ICUs, and pharmaceutical production cleanrooms with terminal HEPA filtration and differential pressure controls.",
    specs: ["Laminar airflow distribution ceilings", "Terminal H14 99.997 percent HEPA filters", "Positive and negative pressure zoning", "Precision humidity and reheat coils"]
  },
  {
    category: "tab",
    icon: "gauge",
    tag: "Quality verification",
    title: "Testing, adjusting and balancing (TAB)",
    desc: "Independent commissioning checks with electronic flow hoods and digital manometers. We balance airflow and water circulation to match approved design drawings.",
    specs: ["Grille and diffuser CFM balancing", "Chilled water hydronic circuit balancing", "Acoustic and vibration level checks", "Certified signoff dossier before billing"]
  },
  {
    category: "vrv",
    icon: "layers",
    tag: "Precision craft",
    title: "SMACNA sheet metal duct fabrication",
    desc: "Factory fabricated galvanized iron and pre insulated ductwork engineered with minimal static pressure drop and zero air leakage.",
    specs: ["SMACNA gauge galvanized sheet metal", "Pre insulated phenolic ducting", "Motorized fire and smoke dampers", "Acoustically lined supply plenums"]
  }
];

const sectorsData = [
  {
    icon: "sparkles",
    tag: "High density",
    title: "Banquet halls and event centers",
    desc: "Engineered for sudden crowd arrivals during weddings and celebrations. Rapid 25 minute temperature pull down and silent acoustic grilles.",
    capacity: "50 to 350 TR plant capacity"
  },
  {
    icon: "building-2",
    tag: "Zoned efficiency",
    title: "Corporate offices and IT parks",
    desc: "Smart zoning matching active occupancy. Fresh air ventilation with continuous carbon dioxide monitoring to keep teams alert and focused.",
    capacity: "30 to 1,200 TR plant capacity"
  },
  {
    icon: "hospital",
    tag: "Critical environment",
    title: "Hospitals and healthcare clinics",
    desc: "Sterile surgical theaters with laminar ceiling diffusers, cleanroom air handling, and certified positive pressure differential regimes.",
    capacity: "100 to 800 TR plant capacity"
  },
  {
    icon: "hotel",
    tag: "Acoustic comfort",
    title: "Hotels and luxury hospitality",
    desc: "Concealed fan coils operating under NC 25 sound levels. Desuperheaters capture waste compressor heat to supply domestic hot water.",
    capacity: "80 to 600 TR plant capacity"
  },
  {
    icon: "store",
    tag: "Continuous footfall",
    title: "Retail showrooms and malls",
    desc: "Entrance air curtains prevent cooled air loss through main doors. Long throw jet nozzles maintain even temperatures in high atriums.",
    capacity: "50 to 2,000 TR plant capacity"
  },
  {
    icon: "factory",
    tag: "Process ventilation",
    title: "Industrial plants and warehouses",
    desc: "Heavy industrial roof exhausts, high volume circulation fans, and process temperature stabilization for factories and assembly lines.",
    capacity: "10,000 to 100,000 CFM airflow"
  }
];

const projectsData = [
  {
    icon: "building-2",
    title: "Orion Commercial High Rise",
    location: "Sector 62, Noida",
    scope: "Daikin VRV IV turnkey installation across eight floors",
    capacity: "450 TR",
    status: "Commissioned with TAB certification"
  },
  {
    icon: "sparkles",
    title: "Grand Imperial Convention Center",
    location: "Ayodhya Road, Lucknow",
    scope: "Rapid pull down ductable units and kitchen scrubbers",
    capacity: "220 TR",
    status: "Handed over with AMC maintenance"
  },
  {
    icon: "hospital",
    title: "Metro Care Surgical Facility",
    location: "Greater Noida",
    scope: "Four modular surgical rooms with H14 HEPA filtration",
    capacity: "350 TR",
    status: "NABH compliant commissioning"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initTaglineReveal();
  initScrollReveals();
  initNavigation();
  renderServices('all');
  renderSectors();
  renderProjects();
  initEstimator();
  initFaqAccordion();
  initInquiryForm();
  initLegalModal();

  // Render all Lucide icons on page load
  renderLucideIcons();
});

/* ==========================================================================
   B11. Tagline Reveal Section (Mandatory)
   Words activate one at a time on scroll on the base curve
   ========================================================================== */
function initTaglineReveal() {
  const container = document.getElementById('reveal-text');
  if (!container) return;

  const rawText = container.textContent.trim();
  const words = rawText.split(/\s+/);

  // Wrap every word in an individually targetable span
  container.innerHTML = words
    .map(w => `<span class="reveal-word">${w}</span>`)
    .join(' ');

  const wordSpans = container.querySelectorAll('.reveal-word');

  // Check prefers-reduced-motion: show full color immediately without animation (B11)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    wordSpans.forEach(w => w.classList.add('is-revealed'));
    return;
  }

  // Throttled scroll listener using requestAnimationFrame (B11)
  let ticking = false;
  function checkWordPositions() {
    const triggerY = window.innerHeight * 0.75;
    wordSpans.forEach(span => {
      const rect = span.getBoundingClientRect();
      if (rect.top <= triggerY) {
        span.classList.add('is-revealed');
      }
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(checkWordPositions);
      ticking = true;
    }
  }, { passive: true });

  // Initial check on load
  checkWordPositions();
}

/* ==========================================================================
   B7. Scroll Reveals (Rise 32px over 600-800ms with IntersectionObserver)
   ========================================================================== */
function initScrollReveals() {
  const elements = document.querySelectorAll('.scroll-reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Reveal once, do not replay
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   B7. Navigation (Floating Bar & Mobile Panel with Stepped Entrance)
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const panel = document.getElementById('mobile-panel');
  const links = panel?.querySelectorAll('.mobile-link');

  function openPanel() {
    panel?.classList.add('is-open');
    toggleBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Step each link 60ms after previous one, capped at 400ms (B7)
    links?.forEach((link, idx) => {
      link.style.transitionDelay = `${Math.min(idx * 60, 400)}ms`;
    });
  }

  function closePanel() {
    panel?.classList.remove('is-open');
    toggleBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    links?.forEach(link => {
      link.style.transitionDelay = '0ms';
    });
  }

  toggleBtn?.addEventListener('click', openPanel);
  closeBtn?.addEventListener('click', closePanel);

  panel?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closePanel);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel?.classList.contains('is-open')) {
      closePanel();
    }
  });
}

/* ==========================================================================
   Services Tabs & Cards with Animated Lucide Icons
   ========================================================================== */
function renderServices(filter = 'all') {
  const container = document.getElementById('services-container');
  if (!container) return;

  const list = filter === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === filter);

  container.innerHTML = list.map(item => `
    <article class="content-card scroll-reveal is-visible">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="card-tag">${item.tag}</span>
        <div class="card-icon-badge" style="margin-bottom: 0;">
          <i data-lucide="${item.icon}" class="icon-md card-icon-spin"></i>
        </div>
      </div>
      <h3 class="title-1 card-title" style="margin-top: 8px;">${item.title}</h3>
      <p class="card-desc">${item.desc}</p>
      <ul class="card-specs-list">
        ${item.specs.map(spec => `
          <li style="display: flex; align-items: center; gap: 6px;">
            <i data-lucide="check" class="icon-sm" style="color: var(--color-text-primary);"></i>
            <span>${spec}</span>
          </li>
        `).join('')}
      </ul>
    </article>
  `).join('');

  renderLucideIcons();

  const tabs = document.querySelectorAll('[data-service-tab]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      renderServices(tab.getAttribute('data-service-tab') || 'all');
    });
  });
}

/* ==========================================================================
   Sectors Rendering with Animated Lucide Icons
   ========================================================================== */
function renderSectors() {
  const container = document.getElementById('sectors-container');
  if (!container) return;

  container.innerHTML = sectorsData.map(item => `
    <article class="content-card scroll-reveal">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="card-tag">${item.tag}</span>
        <div class="card-icon-badge" style="margin-bottom: 0;">
          <i data-lucide="${item.icon}" class="icon-md card-icon-scale"></i>
        </div>
      </div>
      <h3 class="title-1 card-title" style="margin-top: 8px;">${item.title}</h3>
      <p class="card-desc">${item.desc}</p>
      <div style="margin-top: auto; padding-top: 12px; font-size: 13px; color: var(--color-text-muted); display: flex; align-items: center; gap: 6px;">
        <i data-lucide="activity" class="icon-sm"></i>
        <span>${item.capacity}</span>
      </div>
    </article>
  `).join('');

  renderLucideIcons();
}

/* ==========================================================================
   Projects Rendering with Animated Lucide Icons
   ========================================================================== */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projectsData.map(item => `
    <article class="content-card scroll-reveal">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="card-tag" style="display: flex; align-items: center; gap: 4px;">
          <i data-lucide="map-pin" class="icon-sm"></i>
          <span>${item.location}</span>
        </span>
        <div class="card-icon-badge" style="margin-bottom: 0;">
          <i data-lucide="${item.icon}" class="icon-md card-icon-bounce"></i>
        </div>
      </div>
      <h3 class="title-1 card-title" style="margin-top: 8px;">${item.title}</h3>
      <p class="card-desc">${item.scope}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--color-border); font-size: 13px;">
        <strong style="color: var(--color-text-primary); display: flex; align-items: center; gap: 4px;">
          <i data-lucide="snowflake" class="icon-sm icon-ambient-pulse"></i>
          <span>${item.capacity}</span>
        </strong>
        <span style="color: var(--color-text-muted); display: flex; align-items: center; gap: 4px;">
          <i data-lucide="check-circle-2" class="icon-sm"></i>
          <span>${item.status}</span>
        </span>
      </div>
    </article>
  `).join('');

  renderLucideIcons();
}

/* ==========================================================================
   Real-Time HVAC Estimator
   ========================================================================== */
function initEstimator() {
  const facility = document.getElementById('calc-facility');
  const areaRange = document.getElementById('calc-area');
  const areaVal = document.getElementById('calc-area-val');
  const roof = document.getElementById('calc-roof');

  const outTr = document.getElementById('out-tr');
  const outCfm = document.getElementById('out-cfm');
  const outSystem = document.getElementById('out-system');
  const outNotes = document.getElementById('out-notes');
  const applyBtn = document.getElementById('use-calc-estimate');

  if (!facility || !areaRange) return;

  const loadFactors = {
    office: { sqFtPerTr: 130, cfmPerTr: 400 },
    banquet: { sqFtPerTr: 55, cfmPerTr: 450 },
    hotel: { sqFtPerTr: 140, cfmPerTr: 380 },
    hospital: { sqFtPerTr: 80, cfmPerTr: 480 },
    retail: { sqFtPerTr: 95, cfmPerTr: 420 },
    industrial: { sqFtPerTr: 180, cfmPerTr: 500 }
  };

  function update() {
    const fKey = facility.value;
    const sqFt = parseInt(areaRange.value, 10);
    const rType = roof?.value || 'intermediate';

    areaVal.textContent = `${sqFt.toLocaleString()} sq.ft`;

    const base = loadFactors[fKey] || loadFactors.office;
    let roofMult = 1.0;
    if (rType === 'top') roofMult = 1.25;
    if (rType === 'glass') roofMult = 1.35;

    const tr = Math.max(2, Math.round((sqFt / base.sqFtPerTr) * roofMult));
    const cfm = Math.round(tr * base.cfmPerTr);

    outTr.textContent = tr;
    outCfm.textContent = cfm.toLocaleString();

    if (fKey === 'banquet') {
      outSystem.textContent = 'High capacity packaged ductable units with kitchen wet scrubbers';
      outNotes.textContent = 'Engineered for rapid 25 minute temperature pull down when guests arrive, with acoustic duct insulation for speech clarity.';
    } else if (fKey === 'hospital') {
      outSystem.textContent = 'Cleanroom air handling units with H14 HEPA filtration';
      outNotes.textContent = 'Maintains positive differential pressure regimes and strict 25 plus air changes per hour for medical sterile suites.';
    } else if (fKey === 'hotel') {
      outSystem.textContent = 'Low sound ceiling concealed fan coils with heat recovery';
      outNotes.textContent = 'Whisper quiet NC 25 sound levels in rooms. Condenser heat is captured to preheat domestic bathroom water.';
    } else if (tr >= 200) {
      outSystem.textContent = 'Central water cooled screw chillers with primary and secondary pumping';
      outNotes.textContent = 'Maximum seasonal energy efficiency with automated building management control across multiple floors.';
    } else {
      outSystem.textContent = 'Inverter VRV or VRF with ceiling concealed indoor units';
      outNotes.textContent = 'Provides independent zone temperature controls and reduces electrical consumption by matching compressor speed to active room occupancy.';
    }
  }

  [facility, areaRange, roof].forEach(el => {
    el?.addEventListener('input', update);
    el?.addEventListener('change', update);
  });

  update();

  applyBtn?.addEventListener('click', () => {
    const formSection = document.getElementById('contact');
    const detailsField = document.getElementById('form-details');
    formSection?.scrollIntoView({ behavior: 'smooth' });

    if (detailsField) {
      detailsField.value = `Estimated cooling load: ${outTr.textContent} TR (${outCfm.textContent} CFM) for ${areaRange.value} sq.ft ${facility.options[facility.selectedIndex].text}. System recommendation: ${outSystem.textContent}.`;
      detailsField.focus();
    }
  });
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      items.forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq-question-btn')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   Inquiry Form with Calm, Specific Feedback (B8, B9)
   ========================================================================== */
function initInquiryForm() {
  const form = document.getElementById('inquiry-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const city = document.getElementById('form-location')?.value.trim();

    let valid = true;

    document.querySelectorAll('.field-error').forEach(el => el.textContent = '');

    if (!name) {
      document.getElementById('err-name').textContent = 'Enter your name';
      valid = false;
    }
    if (!phone || phone.length < 8) {
      document.getElementById('err-phone').textContent = 'Enter a valid telephone number';
      valid = false;
    }
    if (!email || !email.includes('@')) {
      document.getElementById('err-email').textContent = 'Enter a valid email address';
      valid = false;
    }
    if (!city) {
      document.getElementById('err-location').textContent = 'Specify your project city';
      valid = false;
    }

    if (!valid) return;

    const btn = document.getElementById('form-submit-btn');
    if (btn) btn.textContent = 'Submitting request...';

    setTimeout(() => {
      if (btn) btn.textContent = 'Request submitted';
      if (status) {
        status.style.display = 'block';
        status.style.background = '#181818';
        status.style.border = '1px solid var(--color-border)';
        status.style.color = '#FFFFFF';
        // Calm and specific system message (B8)
        status.textContent = `Survey request received for ${city}. An AI Enterprises engineering lead will contact ${phone} within two business hours.`;
      }
      form.reset();
    }, 500);
  });
}

/* ==========================================================================
   B10. Legal, Privacy, and 404 Modal
   ========================================================================== */
function initLegalModal() {
  const modal = document.getElementById('legal-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  const close = document.getElementById('modal-close');

  close?.addEventListener('click', () => modal?.close());
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  document.getElementById('privacy-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (title && body && modal) {
      title.textContent = 'Privacy policy';
      body.textContent = 'AI Enterprises collects client contact and project specifications solely to prepare engineering proposals and service agreements. We never sell, share, or transfer customer information to third parties.';
      modal.showModal();
    }
  });

  document.getElementById('terms-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (title && body && modal) {
      title.textContent = 'Terms of contracting';
      body.textContent = 'All HVAC contracting and equipment supply contracts are governed by written scope of work schedules, agreed milestone billing, 24 hour nitrogen pressure hold test protocols, and certified testing adjusting and balancing procedures.';
      modal.showModal();
    }
  });

  document.getElementById('404-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (title && body && modal) {
      title.textContent = 'Page not found (404)';
      body.innerHTML = 'The requested drawing or project dossier could not be located. <br/><br/><a href="#home" class="btn btn-primary" onclick="document.getElementById(\'legal-modal\').close()">Return to home</a>';
      modal.showModal();
    }
  });
}
