document.addEventListener('DOMContentLoaded', () => {
  // ========== ELEMENTS ==========
  const mainNav = document.getElementById('mainNav');
  const subNavVeolia = document.getElementById('subNavVeolia');
  const subNavUI = document.getElementById('subNavUI');
  const subNavNhco = document.getElementById('subNavNhco');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const subLinksVeolia = document.querySelectorAll('.sub-nav-veolia .sub-link');
  const subLinksUI = document.querySelectorAll('.sub-nav-ui .sub-link');
  const subLinksNhco = document.querySelectorAll('.sub-nav-nhco .sub-link');

  const veoliaSection = document.getElementById('projets-veolia');
  const uiSection = document.getElementById('projets-ui');
  const garriceSectionEl = document.getElementById('projets-garrice');
  const nhcoSection = document.getElementById('projets-nhco');

  // All projet pages within Veolia, UI and NHCO sections
  const veoliaPages = document.querySelectorAll('#projets-veolia .projet-page');
  const uiPages = document.querySelectorAll('#projets-ui .projet-page');
  const nhcoPages = document.querySelectorAll('#projets-nhco .projet-page');

  // Sections accessibles au scroll (accueil + ses sous-sections)
  const scrollSections = document.querySelectorAll('#accueil, #formations, #experiences');

  // Side nav — Accueil
  const sideNav = document.getElementById('sideNav');
  const sideLinks = document.querySelectorAll('.side-link[data-anchor]');

  // Side nav — Grand Compte
  const sideNavGC = document.getElementById('sideNavGC');
  const gcSideLinks = document.querySelectorAll('.gc-side-link[data-gc-anchor]');
  const gcSections = document.querySelectorAll(
    '#gc-etapes, #gc-etude-qual, #gc-analyse-qual, #gc-etude-quant, #gc-ateliers, #gc-parcours, #gc-maquettes, #gc-tests'
  );

  // Side nav — Application Mobile
  const sideNavAM = document.getElementById('sideNavAM');
  const amSideLinks = document.querySelectorAll('.am-side-link[data-am-anchor]');
  const amSections = document.querySelectorAll('#am-etapes, #am-maquettes, #am-tests');

  // Side nav — Applications internes
  const sideNavInternes = document.getElementById('sideNavInternes');
  const internesSideLinks = document.querySelectorAll('.internes-side-link[data-internes-anchor]');
  const internesSections = document.querySelectorAll('#internes-mercure, #internes-observatoire, #internes-iris');

  // Side nav — Portail consommateurs
  const sideNavPortail = document.getElementById('sideNavPortail');
  const portailSideLinks = document.querySelectorAll('.portail-side-link[data-portail-anchor]');
  const portailSections = document.querySelectorAll('#portail-maquettes, #portail-marques');


  // Side nav — NHCO Aminobot
  const sideNavNhco = document.getElementById('sideNavNhco');
  const nhcoSideLinks = document.querySelectorAll('.nhco-side-link[data-nhco-anchor]');
  const nhcoSideNavSections = document.querySelectorAll(
    '#nhco-assistant-v1, #nhco-assistant-cadrage, #nhco-assistant-recherche, #nhco-assistant-benchmark, #nhco-conclusion'
  );

  // Side nav — NHCO Back-office
  const sideNavBO = document.getElementById('sideNavBO');
  const boSideLinks = document.querySelectorAll('.nhco-bo-side-link[data-bo-anchor]');
  const nhcoBoSections = ['nhco-bo-analyse', 'nhco-bo-cadrage', 'nhco-bo-structure', 'nhco-bo-conception', 'nhco-bo-conclusion'];

  // Side nav — NHCO XP Client & Fidélisation
  const sideNavXP = document.getElementById('sideNavXP');
  const xpSideLinks = document.querySelectorAll('.nhco-xp-side-link[data-xp-anchor]');
  const nhcoXpSections = ['nhco-xp-recadrage', 'nhco-xp-analyse', 'nhco-xp-profils', 'nhco-xp-benchmark', 'nhco-xp-ateliers', 'nhco-xp-structuration', 'nhco-xp-conclusion'];

  // Side nav — Garrice
  const sideNavGarrice = document.getElementById('sideNavGarrice');
  const garriceSideLinks = document.querySelectorAll('.garrice-side-link[data-garrice-anchor]');
  const garriceSideNavSections = document.querySelectorAll(
    '#garrice-justine, #garrice-objectif, #garrice-etapes, #garrice-cadrage, #garrice-audit, #garrice-exploration, #garrice-conception, #garrice-composants, #garrice-suivi, #garrice-resultat, #garrice-pratique'
  );

  // ========== SHOW / HIDE PROJECT SECTIONS ==========
  function showProjectSection(section) {
    scrollSections.forEach(s => s.style.display = 'none');
    if (sideNav) sideNav.classList.remove('visible');
    if (sideNavGC) sideNavGC.classList.remove('visible');
    if (sideNavAM) sideNavAM.classList.remove('visible');
    if (sideNavPortail) sideNavPortail.classList.remove('visible');
    if (sideNavInternes) sideNavInternes.classList.remove('visible');
    if (sideNavGarrice) sideNavGarrice.classList.remove('visible');
    if (sideNavNhco) sideNavNhco.classList.remove('visible');
    if (sideNavBO) sideNavBO.classList.remove('visible');
    if (sideNavXP) sideNavXP.classList.remove('visible');
    if (section === 'projets-veolia') {
      veoliaSection.style.display = '';
      uiSection.style.display = 'none';
      if (garriceSectionEl) garriceSectionEl.style.display = 'none';
      if (nhcoSection) nhcoSection.style.display = 'none';
      subNavVeolia.classList.add('visible');
      subNavUI.classList.remove('visible');
      subNavNhco.classList.remove('visible');
      veoliaPages.forEach((page, i) => page.style.display = i === 0 ? 'block' : 'none');
      subLinksVeolia.forEach((l, i) => l.classList.toggle('active', i === 0));
    } else if (section === 'projets-ui') {
      uiSection.style.display = '';
      veoliaSection.style.display = 'none';
      if (garriceSectionEl) garriceSectionEl.style.display = 'none';
      if (nhcoSection) nhcoSection.style.display = 'none';
      subNavUI.classList.add('visible');
      subNavVeolia.classList.remove('visible');
      subNavNhco.classList.remove('visible');
      uiPages.forEach((page, i) => page.style.display = i === 0 ? 'block' : 'none');
      subLinksUI.forEach((l, i) => l.classList.toggle('active', i === 0));
    } else if (section === 'projets-garrice') {
      if (garriceSectionEl) garriceSectionEl.style.display = '';
      veoliaSection.style.display = 'none';
      uiSection.style.display = 'none';
      if (nhcoSection) nhcoSection.style.display = 'none';
      subNavVeolia.classList.remove('visible');
      subNavUI.classList.remove('visible');
      subNavNhco.classList.remove('visible');
      if (sideNavGarrice) {
        sideNavGarrice.classList.add('visible');
        garriceSideLinks.forEach((l, i) => l.classList.toggle('active', i === 0));
      }
      initGarriceVideos();
      initGarriceCarousel();
    } else if (section === 'projets-nhco') {
      if (nhcoSection) nhcoSection.style.display = '';
      veoliaSection.style.display = 'none';
      uiSection.style.display = 'none';
      if (garriceSectionEl) garriceSectionEl.style.display = 'none';
      subNavNhco.classList.add('visible');
      subNavVeolia.classList.remove('visible');
      subNavUI.classList.remove('visible');
      // Affiche Contexte de Mission (première et seule sous-page visible)
      nhcoPages.forEach(page => {
        page.style.display = page.id === 'nhco-contexte' ? 'block' : 'none';
      });
      subLinksNhco.forEach((l, i) => l.classList.toggle('active', i === 0));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function hideProjectSections() {
    veoliaSection.style.display = 'none';
    uiSection.style.display = 'none';
    if (garriceSectionEl) garriceSectionEl.style.display = 'none';
    if (nhcoSection) nhcoSection.style.display = 'none';
    subNavVeolia.classList.remove('visible');
    subNavUI.classList.remove('visible');
    subNavNhco.classList.remove('visible');
    scrollSections.forEach(s => s.style.display = '');
    if (sideNav) sideNav.classList.add('visible');
    if (sideNavGC) sideNavGC.classList.remove('visible');
    if (sideNavAM) sideNavAM.classList.remove('visible');
    if (sideNavPortail) sideNavPortail.classList.remove('visible');
    if (sideNavInternes) sideNavInternes.classList.remove('visible');
    if (sideNavGarrice) sideNavGarrice.classList.remove('visible');
    if (sideNavNhco) sideNavNhco.classList.remove('visible');
    if (sideNavBO) sideNavBO.classList.remove('visible');
    if (sideNavXP) sideNavXP.classList.remove('visible');
  }

  // ========== MAIN NAV CLICK ==========
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      if (section === 'projets-veolia' || section === 'projets-ui' || section === 'projets-garrice' || section === 'projets-nhco') {
        showProjectSection(section);
      } else if (section === 'accueil') {
        hideProjectSections();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        hideProjectSections();
        const target = document.getElementById(section);
        if (target) {
          const top = target.offsetTop - mainNav.offsetHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // ========== SIDE NAV CLICK ==========
  sideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = link.dataset.anchor;
      const target = document.getElementById(anchor);
      if (target) {
        const top = target.offsetTop - mainNav.offsetHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ========== SIDE NAV NHCO CLICK ==========
  nhcoSideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = link.dataset.nhcoAnchor;
      const target = document.getElementById(anchor);
      if (target) {
        const offset = mainNav.offsetHeight + subNavNhco.offsetHeight + 20;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ========== SUB NAV - NHCO ==========
  subLinksNhco.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sub = link.dataset.subNhco;

      subLinksNhco.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      nhcoPages.forEach(page => {
        page.style.display = page.id === sub ? 'block' : 'none';
      });

      // Side nav NHCO : visible selon la sous-page active
      if (sub === 'nhco-aminobot') {
        if (sideNavNhco) {
          sideNavNhco.classList.add('visible');
          nhcoSideLinks.forEach((l, i) => l.classList.toggle('active', i === 0));
        }
        if (sideNavBO) sideNavBO.classList.remove('visible');
      } else if (sub === 'nhco-backoffice') {
        if (sideNavBO) {
          sideNavBO.classList.add('visible');
          boSideLinks.forEach((l, i) => l.classList.toggle('active', i === 0));
        }
        if (sideNavNhco) sideNavNhco.classList.remove('visible');
        if (sideNavXP) sideNavXP.classList.remove('visible');
      } else if (sub === 'nhco-xp') {
        if (sideNavXP) {
          sideNavXP.classList.add('visible');
          xpSideLinks.forEach((l, i) => l.classList.toggle('active', i === 0));
        }
        if (sideNavNhco) sideNavNhco.classList.remove('visible');
        if (sideNavBO) sideNavBO.classList.remove('visible');
      } else {
        if (sideNavNhco) sideNavNhco.classList.remove('visible');
        if (sideNavBO) sideNavBO.classList.remove('visible');
        if (sideNavXP) sideNavXP.classList.remove('visible');
      }

      const offset = mainNav.offsetHeight + 44 + 10;
      window.scrollTo({ top: nhcoSection.offsetTop - offset, behavior: 'smooth' });
    });
  });

  // ========== SIDE NAV BACK-OFFICE CLICK ==========
  boSideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = link.dataset.boAnchor;
      const target = document.getElementById(anchor);
      if (target) {
        const offset = mainNav.offsetHeight + subNavNhco.offsetHeight + 20;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ========== SIDE NAV XP CLICK ==========
  xpSideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = link.dataset.xpAnchor;
      const target = document.getElementById(anchor);
      if (target) {
        const offset = mainNav.offsetHeight + subNavNhco.offsetHeight + 20;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ========== SIDE NAV GARRICE CLICK ==========
  garriceSideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = link.dataset.garriceAnchor;
      const target = document.getElementById(anchor);
      if (target) {
        const offset = mainNav.offsetHeight + 20;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ========== SIDE NAV INTERNES CLICK ==========
  internesSideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = link.dataset.internesAnchor;
      const target = document.getElementById(anchor);
      if (target) {
        const offset = mainNav.offsetHeight + subNavVeolia.offsetHeight + 20;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ========== SIDE NAV PORTAIL CLICK ==========
  portailSideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = link.dataset.portailAnchor;
      const target = document.getElementById(anchor);
      if (target) {
        const offset = mainNav.offsetHeight + subNavVeolia.offsetHeight + 20;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ========== SIDE NAV AM CLICK ==========
  amSideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = link.dataset.amAnchor;
      const target = document.getElementById(anchor);
      if (target) {
        const offset = mainNav.offsetHeight + subNavVeolia.offsetHeight + 20;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ========== SIDE NAV GC CLICK ==========
  gcSideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = link.dataset.gcAnchor;
      const target = document.getElementById(anchor);
      if (target) {
        const offset = mainNav.offsetHeight + subNavVeolia.offsetHeight + 20;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ========== SUB NAV - VEOLIA ==========
  subLinksVeolia.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sub = link.dataset.sub;

      subLinksVeolia.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      veoliaPages.forEach(page => {
        page.style.display = page.id === sub ? 'block' : 'none';
      });

      // Side nav GC : visible uniquement sur Grand Compte
      if (sideNavGC) {
        if (sub === 'veolia-grand-compte') {
          sideNavGC.classList.add('visible');
          gcSideLinks.forEach((l, i) => l.classList.toggle('active', i === 0));
        } else {
          sideNavGC.classList.remove('visible');
        }
      }

      // Side nav AM : visible uniquement sur Application Mobile
      if (sideNavAM) {
        if (sub === 'veolia-app-mobile') {
          sideNavAM.classList.add('visible');
          amSideLinks.forEach((l, i) => l.classList.toggle('active', i === 0));
        } else {
          sideNavAM.classList.remove('visible');
        }
      }

      // Side nav Internes : visible uniquement sur Applications internes
      if (sideNavInternes) {
        if (sub === 'veolia-internes') {
          sideNavInternes.classList.add('visible');
          internesSideLinks.forEach((l, i) => l.classList.toggle('active', i === 0));
        } else {
          sideNavInternes.classList.remove('visible');
        }
      }

      // Side nav Portail : visible uniquement sur Portail consommateurs
      if (sideNavPortail) {
        if (sub === 'veolia-portail') {
          sideNavPortail.classList.add('visible');
          portailSideLinks.forEach((l, i) => l.classList.toggle('active', i === 0));
        } else {
          sideNavPortail.classList.remove('visible');
        }
      }

      const offset = mainNav.offsetHeight + 44 + 10;
      window.scrollTo({ top: veoliaSection.offsetTop - offset, behavior: 'smooth' });
    });
  });

  // ========== SUB NAV - UI ==========
  subLinksUI.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sub = link.dataset.sub;

      subLinksUI.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      uiPages.forEach(page => {
        page.style.display = page.id === sub ? 'block' : 'none';
      });

      const offset = mainNav.offsetHeight + 44 + 10;
      window.scrollTo({ top: uiSection.offsetTop - offset, behavior: 'smooth' });
    });
  });

  // ========== SITEMAP LINKS ==========
  document.querySelectorAll('[data-navigate]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.navigate;

      if (target.startsWith('veolia-')) {
        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelector('[data-section="projets-veolia"]').classList.add('active');
        showProjectSection('projets-veolia');

        subLinksVeolia.forEach(l => l.classList.remove('active'));
        document.querySelector(`.sub-nav-veolia [data-sub="${target}"]`)?.classList.add('active');

        veoliaPages.forEach(page => {
          page.style.display = page.id === target ? 'block' : 'none';
        });

        setTimeout(() => {
          window.scrollTo({ top: veoliaSection.offsetTop - mainNav.offsetHeight - 54, behavior: 'smooth' });
        }, 100);

      } else if (target.startsWith('ui-')) {
        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelector('[data-section="projets-ui"]').classList.add('active');
        showProjectSection('projets-ui');

        subLinksUI.forEach(l => l.classList.remove('active'));
        document.querySelector(`.sub-nav-ui [data-sub="${target}"]`)?.classList.add('active');

        uiPages.forEach(page => {
          page.style.display = page.id === target ? 'block' : 'none';
        });

        setTimeout(() => {
          window.scrollTo({ top: uiSection.offsetTop - mainNav.offsetHeight - 54, behavior: 'smooth' });
        }, 100);
      }
    });
  });

  // ========== SCROLL SPY ==========
  function onScroll() {
    // ---- Scroll spy NHCO Aminobot ----
    if (sideNavNhco && sideNavNhco.classList.contains('visible') && nhcoSideNavSections.length) {
      const scrollY = window.scrollY + mainNav.offsetHeight + subNavNhco.offsetHeight + 60;
      let currentNhco = nhcoSideNavSections[0].id;
      nhcoSideNavSections.forEach(section => {
        if (scrollY >= section.offsetTop) currentNhco = section.id;
      });
      nhcoSideLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.nhcoAnchor === currentNhco);
      });
    }

    // ---- Scroll spy NHCO Back-office ----
    if (sideNavBO && sideNavBO.classList.contains('visible')) {
      const scrollY = window.scrollY + mainNav.offsetHeight + subNavNhco.offsetHeight + 60;
      let activeBO = nhcoBoSections[0];
      nhcoBoSections.forEach(id => {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) activeBO = id;
      });
      boSideLinks.forEach(l => l.classList.toggle('active', l.dataset.boAnchor === activeBO));
    }

    // ---- Scroll spy NHCO XP Client & Fidélisation ----
    if (sideNavXP && sideNavXP.classList.contains('visible')) {
      const scrollY = window.scrollY + mainNav.offsetHeight + subNavNhco.offsetHeight + 60;
      let activeXP = nhcoXpSections[0];
      nhcoXpSections.forEach(id => {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) activeXP = id;
      });
      xpSideLinks.forEach(l => l.classList.toggle('active', l.dataset.xpAnchor === activeXP));
    }

    // ---- Scroll spy Garrice ----
    if (sideNavGarrice && sideNavGarrice.classList.contains('visible') && garriceSideNavSections.length) {
      const scrollY = window.scrollY + mainNav.offsetHeight + 60;
      let currentGarrice = garriceSideNavSections[0].id;
      garriceSideNavSections.forEach(section => {
        if (scrollY >= section.offsetTop) currentGarrice = section.id;
      });
      garriceSideLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.garriceAnchor === currentGarrice);
      });
    }

    // ---- Scroll spy Applications internes ----
    if (sideNavInternes && sideNavInternes.classList.contains('visible') && internesSections.length) {
      const scrollY = window.scrollY + mainNav.offsetHeight + subNavVeolia.offsetHeight + 60;
      let currentInternes = internesSections[0].id;
      internesSections.forEach(section => {
        if (scrollY >= section.offsetTop) currentInternes = section.id;
      });
      internesSideLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.internesAnchor === currentInternes);
      });
    }

    // ---- Scroll spy Portail consommateurs ----
    if (sideNavPortail && sideNavPortail.classList.contains('visible') && portailSections.length) {
      const scrollY = window.scrollY + mainNav.offsetHeight + subNavVeolia.offsetHeight + 60;
      let currentPortail = portailSections[0].id;
      portailSections.forEach(section => {
        if (scrollY >= section.offsetTop) currentPortail = section.id;
      });
      portailSideLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.portailAnchor === currentPortail);
      });
    }

    // ---- Scroll spy Application Mobile ----
    if (sideNavAM && sideNavAM.classList.contains('visible') && amSections.length) {
      const scrollY = window.scrollY + mainNav.offsetHeight + subNavVeolia.offsetHeight + 60;
      let currentAM = amSections[0].id;
      amSections.forEach(section => {
        if (scrollY >= section.offsetTop) currentAM = section.id;
      });
      amSideLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.amAnchor === currentAM);
      });
    }

    // ---- Scroll spy Grand Compte ----
    if (sideNavGC && sideNavGC.classList.contains('visible') && gcSections.length) {
      const scrollY = window.scrollY + mainNav.offsetHeight + subNavVeolia.offsetHeight + 60;
      let currentGC = gcSections[0].id;
      gcSections.forEach(section => {
        if (scrollY >= section.offsetTop) currentGC = section.id;
      });
      gcSideLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.gcAnchor === currentGC);
      });
    }

    // Ne pas modifier l'état actif si une section projet est visible
    if (veoliaSection.style.display !== 'none' || uiSection.style.display !== 'none' || (garriceSectionEl && garriceSectionEl.style.display !== 'none') || (nhcoSection && nhcoSection.style.display !== 'none')) return;

    const scrollY = window.scrollY + mainNav.offsetHeight + 60;

    // ---- Main nav : "Accueil" reste actif pendant le scroll ----
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.section === 'accueil') {
        link.classList.add('active');
      }
    });

    // ---- Side nav : visible pendant le scroll principal ----
    if (sideNav) sideNav.classList.add('visible');

    // ---- Side nav scroll spy ----
    let currentAnchor = 'accueil';
    scrollSections.forEach(section => {
      if (scrollY >= section.offsetTop) {
        currentAnchor = section.id;
      }
    });

    sideLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.anchor === currentAnchor);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initialise la side nav et le scroll spy au chargement

  // ========== SCROLL REVEAL — Intersection Observer ==========
  const revealEls = document.querySelectorAll('.reveal, .reveal-hero, .reveal-stagger');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });
  revealEls.forEach(el => revealObserver.observe(el));

  // Trigger hero elements visible on load immediately
  document.querySelectorAll('.reveal-hero').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('is-visible');
      revealObserver.unobserve(el);
    }
  });

  // ========== FOOTER NAV LINKS ==========
  document.querySelectorAll('.footer-nav-link[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      if (section === 'projets-veolia' || section === 'projets-ui' || section === 'projets-garrice' || section === 'projets-nhco') {
        showProjectSection(section);
      } else if (section === 'accueil') {
        hideProjectSections();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        hideProjectSections();
        const target = document.getElementById(section);
        if (target) {
          const top = target.offsetTop - mainNav.offsetHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // ========== GARRICE VIDEO PLAYERS ==========
  const SVG_PLAY  = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="6,3 20,12 6,21"/></svg>`;
  const SVG_PAUSE = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="3" width="4" height="18" rx="1"/><rect x="15" y="3" width="4" height="18" rx="1"/></svg>`;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initGarriceVideos() {
    document.querySelectorAll('.garrice-video-wrapper:not([data-gc-init])').forEach(wrapper => {
      const video   = wrapper.querySelector('.garrice-video');
      const playBtn = wrapper.querySelector('.garrice-play-btn');
      const bar     = wrapper.querySelector('.garrice-progress-bar');
      const fill    = wrapper.querySelector('.garrice-progress-fill');
      const thumb   = wrapper.querySelector('.garrice-progress-thumb');
      if (!video) return;

      wrapper.setAttribute('data-gc-init', '1');

      // Reduced motion: ne pas lancer l'autoplay
      if (prefersReducedMotion) video.pause();

      function updateIcon() {
        playBtn.innerHTML = video.paused ? SVG_PLAY : SVG_PAUSE;
        wrapper.classList.toggle('gc-paused', video.paused);
      }

      function togglePlay() {
        video.paused ? video.play() : video.pause();
      }

      let hideTimer = null;
      function scheduleHide() {
        clearTimeout(hideTimer);
        if (!video.paused) {
          hideTimer = setTimeout(() => {
            wrapper.style.setProperty('--ctrl-opacity', '0');
          }, 2500);
        }
      }

      video.addEventListener('play',  updateIcon);
      video.addEventListener('pause', updateIcon);
      updateIcon();

      // Click vidéo = toggle
      video.addEventListener('click', togglePlay);
      playBtn.addEventListener('click', e => { e.stopPropagation(); togglePlay(); });

      // Hover show/hide
      wrapper.addEventListener('mouseenter', () => { clearTimeout(hideTimer); scheduleHide(); });
      wrapper.addEventListener('mousemove',  () => { clearTimeout(hideTimer); scheduleHide(); });
      wrapper.addEventListener('mouseleave', () => { clearTimeout(hideTimer); });

      // Progression
      video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        const pct = (video.currentTime / video.duration) * 100;
        fill.style.width = pct + '%';
        thumb.style.left = pct + '%';
        bar.setAttribute('aria-valuenow', Math.round(pct));
      });

      // Seek (click + drag)
      function getSeekPct(e) {
        const rect = bar.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      }

      let dragging = false;
      bar.addEventListener('mousedown', e => {
        dragging = true;
        bar.classList.add('gc-dragging');
        if (video.duration) video.currentTime = getSeekPct(e) * video.duration;
      });
      bar.addEventListener('touchstart', e => {
        dragging = true;
        bar.classList.add('gc-dragging');
        if (video.duration) video.currentTime = getSeekPct(e) * video.duration;
      }, { passive: true });

      document.addEventListener('mousemove', e => {
        if (dragging && video.duration) video.currentTime = getSeekPct(e) * video.duration;
      });
      document.addEventListener('touchmove', e => {
        if (dragging && video.duration) video.currentTime = getSeekPct(e) * video.duration;
      }, { passive: true });
      document.addEventListener('mouseup',  () => { if (dragging) { dragging = false; bar.classList.remove('gc-dragging'); } });
      document.addEventListener('touchend', () => { if (dragging) { dragging = false; bar.classList.remove('gc-dragging'); } });

      // Navigation clavier
      wrapper.addEventListener('keydown', e => {
        if (e.code === 'Space')      { e.preventDefault(); togglePlay(); }
        if (e.code === 'ArrowLeft')  { video.currentTime = Math.max(0, video.currentTime - 5); }
        if (e.code === 'ArrowRight') { video.currentTime = Math.min(video.duration || 0, video.currentTime + 5); }
      });
    });
  }

  // ========== GARRICE PARCOURS CAROUSEL ==========
  function initGarriceCarousel() {
    const track = document.getElementById('garrice-parcours-track');
    if (!track || track.dataset.gcCarousel) return;
    track.dataset.gcCarousel = '1';

    const steps   = Array.from(track.querySelectorAll('.garrice-parcours-step'));
    const dots    = Array.from(document.querySelectorAll('#garrice-parcours .garrice-dot'));
    const prevBtn = document.querySelector('#garrice-parcours .garrice-parcours-prev');
    const nextBtn = document.querySelector('#garrice-parcours .garrice-parcours-next');

    let activeIndex = 0;

    function setActive(index) {
      activeIndex = Math.max(0, Math.min(steps.length - 1, index));
      dots.forEach((d, i) => d.setAttribute('aria-selected', i === activeIndex ? 'true' : 'false'));
      if (prevBtn) prevBtn.disabled = activeIndex === 0;
      if (nextBtn) nextBtn.disabled = activeIndex === steps.length - 1;
    }

    function scrollToStep(index) {
      const step = steps[index];
      if (!step) return;
      const trackRect = track.getBoundingClientRect();
      const stepRect  = step.getBoundingClientRect();
      const offset = step.offsetLeft - track.offsetLeft - (trackRect.width - stepRect.width) / 2;
      track.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' });
      setActive(index);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => scrollToStep(activeIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollToStep(activeIndex + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => scrollToStep(i)));

    const section = document.getElementById('garrice-parcours');
    if (section) {
      section.setAttribute('tabindex', '0');
      section.addEventListener('keydown', e => {
        if (e.code === 'ArrowLeft')  { e.preventDefault(); scrollToStep(activeIndex - 1); }
        if (e.code === 'ArrowRight') { e.preventDefault(); scrollToStep(activeIndex + 1); }
      });
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const i = steps.indexOf(entry.target);
          if (i !== -1) setActive(i);
        }
      });
    }, { root: track, threshold: 0.5 });

    steps.forEach(s => observer.observe(s));
    setActive(0);
  }

  // ========== NAV PROGRESS BAR ==========
  const navProgress = document.querySelector('.nav-progress');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (navProgress && docHeight > 0) {
      navProgress.style.width = (scrollTop / docHeight * 100) + '%';
    }
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
});
