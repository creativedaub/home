// ==========================================================================
// Daniel Ubachi - Portfolio Application Engine
// Pure Vanilla JavaScript (Zero Dependencies, Zero Build Tools Required)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentView: 'home',
    theme: localStorage.getItem('theme') || 'dark',
    homeCategory: 'all',
    projectsCategory: 'all',
    projectsSearch: '',
    selectedProject: null
  };

  // DOM Elements Cache
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle-btn');
  const mobileMenuToggleBtn = document.getElementById('mobile-menu-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // SVG Icons Helper for Pure Vanilla Rendering
  const ICONS = {
    arrowUpRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`,
    sun: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    moon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    menu: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`
  };

  // 1. Theme Management
  function applyTheme(theme) {
    state.theme = theme;
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = theme === 'dark' ? ICONS.sun : ICONS.moon;
    if (themeToggleBtn) themeToggleBtn.innerHTML = icon;
    if (mobileThemeToggleBtn) mobileThemeToggleBtn.innerHTML = icon;
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);
  applyTheme(state.theme);

  // 2. Navigation / Page Routing
  function navigateTo(viewName) {
    state.currentView = viewName;

    // Update active view visibility
    document.querySelectorAll('.page-view').forEach(view => {
      view.classList.remove('active');
    });
    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
      targetView.classList.add('active');
    }

    // Sync URL hash for direct links and browser history
    if (window.location.hash !== `#${viewName}`) {
      try {
        history.replaceState(null, '', `#${viewName}`);
      } catch (e) {}
    }

    // Update nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      if (link.getAttribute('data-view') === viewName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile drawer if open
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileMenuToggleBtn) mobileMenuToggleBtn.innerHTML = ICONS.menu;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-render view-specific components if needed
    if (viewName === 'home') {
      renderHomeProjects();
    } else if (viewName === 'projects') {
      renderProjectsPage();
    }
  }

  // Bind navigation links
  document.querySelectorAll('[data-view]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const view = elem.getAttribute('data-view');
      navigateTo(view);
    });
  });

  // Mobile Menu Toggle
  if (mobileMenuToggleBtn && mobileDrawer) {
    mobileMenuToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuToggleBtn.innerHTML = isOpen ? ICONS.close : ICONS.menu;
    });
  }

  // 3. Homepage: "What you can expect from me"
  // Constraint: 16:9 Landscape aspect ratio cards, 2 cards per row (half full width each)
  function renderHomeProjects() {
    const container = document.getElementById('home-projects-container');
    if (!container) return;

    let filtered = PROJECTS;
    if (state.homeCategory !== 'all') {
      filtered = PROJECTS.filter(p => p.category === state.homeCategory);
    }
    const displayList = filtered;

    container.innerHTML = displayList.map((project, idx) => `
      <article class="project-card" data-project-id="${project.id}">
        <!-- 16:9 Landscape Aspect Ratio Preview -->
        <div class="project-media-16-9">
          <img src="${project.image}" alt="${project.title}" width="720" height="403" decoding="async" ${idx < 2 ? 'fetchpriority="high"' : 'loading="lazy"'} onerror="this.onerror=null;this.src=this.src.replace('.webp','.jpg');">
          <span class="project-category-tag">${project.categoryTag}</span>
          <span class="project-date-tag">${project.date}</span>
        </div>
        
        <!-- Project Information -->
        <div class="project-body">
          <div>
            <h3 class="project-title">
              <span>${project.title}</span>
              ${ICONS.arrowUpRight}
            </h3>
            <p class="project-desc">${project.shortDescription}</p>
          </div>

          <div class="project-tags">
            ${project.technologies.slice(0, 4).map(tech => `
              <span class="tag-badge">${tech}</span>
            `).join('')}
            ${project.technologies.length > 4 ? `
              <span class="tag-badge">+${project.technologies.length - 4}</span>
            ` : ''}
          </div>
        </div>
      </article>
    `).join('');

    // Attach click handlers to cards
    container.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        openProjectModal(id);
      });
    });
  }

  // Filter chips on Homepage
  document.querySelectorAll('#home-filter-bar .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#home-filter-bar .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.homeCategory = chip.getAttribute('data-category');
      renderHomeProjects();
    });
  });

  // 4. Projects Page
  function renderProjectsPage() {
    const container = document.getElementById('projects-page-container');
    if (!container) return;

    let filtered = PROJECTS;
    if (state.projectsCategory !== 'all') {
      filtered = filtered.filter(p => p.category === state.projectsCategory);
    }
    if (state.projectsSearch.trim()) {
      const q = state.projectsSearch.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.technologies.some(t => t.toLowerCase().includes(q))
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <p style="color: var(--text-muted); font-size: 1.125rem;">No projects match your current filter or search criteria.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((project, idx) => `
      <article class="project-card" data-project-id="${project.id}">
        <div class="project-media-16-9">
          <img src="${project.image}" alt="${project.title}" width="720" height="403" decoding="async" ${idx < 4 ? 'fetchpriority="high"' : 'loading="lazy"'} onerror="this.onerror=null;this.src=this.src.replace('.webp','.jpg');">
          <span class="project-category-tag">${project.categoryTag}</span>
          <span class="project-date-tag">${project.date}</span>
        </div>
        <div class="project-body">
          <div>
            <h3 class="project-title">
              <span>${project.title}</span>
              ${ICONS.arrowUpRight}
            </h3>
            <p class="project-desc">${project.shortDescription}</p>
          </div>
          <div class="project-tags">
            ${project.technologies.map(tech => `
              <span class="tag-badge">${tech}</span>
            `).join('')}
          </div>
        </div>
      </article>
    `).join('');

    container.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        openProjectModal(id);
      });
    });
  }

  // Filter chips on Projects Page
  document.querySelectorAll('#projects-filter-bar .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#projects-filter-bar .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.projectsCategory = chip.getAttribute('data-category');
      renderProjectsPage();
    });
  });

  // Search input on Projects Page
  const projectsSearchInput = document.getElementById('projects-search-input');
  if (projectsSearchInput) {
    projectsSearchInput.addEventListener('input', (e) => {
      state.projectsSearch = e.target.value;
      renderProjectsPage();
    });
  }

  // 5. Project Detail Modal
  function openProjectModal(projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    state.selectedProject = project;

    const modalImage = document.getElementById('modal-project-img');
    const modalTitle = document.getElementById('modal-project-title');
    const modalTag = document.getElementById('modal-project-tag');
    const modalDesc = document.getElementById('modal-project-desc');
    const modalClient = document.getElementById('modal-project-client');
    const modalDuration = document.getElementById('modal-project-duration');
    const modalMetrics = document.getElementById('modal-project-metrics');
    const modalHighlights = document.getElementById('modal-project-highlights');
    const modalTech = document.getElementById('modal-project-tech');

    if (modalImage) {
      modalImage.src = project.image;
      modalImage.onerror = function() {
        this.onerror = null;
        this.src = this.src.replace('.webp', '.jpg');
      };
    }
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalTag) modalTag.textContent = project.categoryTag;
    if (modalDesc) modalDesc.textContent = project.fullDescription;
    if (modalClient) modalClient.textContent = project.client;
    if (modalDuration) modalDuration.textContent = project.duration;
    if (modalMetrics) modalMetrics.textContent = project.metrics;

    if (modalHighlights) {
      modalHighlights.innerHTML = project.architectureHighlights.map(h => `
        <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;">
          <span style="color: var(--red-500); margin-top: 0.2rem;">${ICONS.check}</span>
          <span>${h}</span>
        </li>
      `).join('');
    }

    if (modalTech) {
      modalTech.innerHTML = project.technologies.map(t => `
        <span class="tag-badge">${t}</span>
      `).join('');
    }

    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  // 6. Copy Email Button Action
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(DEVELOPER_INFO.email).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `${ICONS.check} <span>Email Copied!</span>`;
        btn.style.borderColor = 'var(--emerald-500)';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.borderColor = '';
        }, 2500);
      }).catch(() => {
        alert('Email: ' + DEVELOPER_INFO.email);
      });
    });
  });

  // 7. Asynchronous Project Brief Form Submission
  const briefForms = document.querySelectorAll('.project-brief-form');
  briefForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const nameInput = form.querySelector('input[name="name"]');
      const emailInput = form.querySelector('input[name="email"]');

      if (!nameInput.value || !emailInput.value) return;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Dispatching Brief...';
      }

      setTimeout(() => {
        form.innerHTML = `
          <div class="alert-success" style="flex-direction: column; align-items: center; text-align: center; padding: 2.5rem 1.5rem;">
            <div style="width: 3rem; height: 3rem; border-radius: 50%; background-color: var(--emerald-bg); color: var(--emerald-500); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              ${ICONS.check}
            </div>
            <h4 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-primary);">Project Brief Received!</h4>
            <p style="font-size: 0.875rem; color: var(--text-secondary); max-width: 24rem; margin-bottom: 1.5rem;">
              Thank you, <strong style="color: var(--red-500);">${nameInput.value}</strong>. Your project specification has been queued for architectural assessment. Expect an outline within 24–48 hours.
            </p>
            <button type="button" class="btn btn-secondary" onclick="location.reload()">Submit Another Inquiry</button>
          </div>
        `;
      }, 700);
    });
  });

  // 8. FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // 9. Initial Route from URL Hash
  function handleHashRoute() {
    const rawHash = window.location.hash.replace('#', '').trim();
    if (['home', 'about', 'projects', 'services', 'contact'].includes(rawHash)) {
      navigateTo(rawHash);
    }
  }
  window.addEventListener('hashchange', handleHashRoute);
  if (window.location.hash) {
    handleHashRoute();
  }

  // 10. Intelligent Background Image Prefetcher for Ultra-Fast Instant Loading
  function prefetchImages() {
    const imagesToPrefetch = PROJECTS.map(p => p.image);
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        imagesToPrefetch.forEach(src => {
          const img = new Image();
          img.decoding = 'async';
          img.src = src;
        });
      });
    } else {
      setTimeout(() => {
        imagesToPrefetch.forEach(src => {
          const img = new Image();
          img.decoding = 'async';
          img.src = src;
        });
      }, 150);
    }
  }
  prefetchImages();

  // Initialize Homepage Projects
  renderHomeProjects();
});
