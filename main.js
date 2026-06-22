/* =========================================================================
   Mohammad Osman — Executive Pastry Chef Portfolio
   Lenis smooth scroll · GSAP reveals · marquee · counters · timeline draw ·
   filterable gallery + lightbox · custom cursor · magnetic CTAs.
   All motion gated by prefers-reduced-motion.
   ========================================================================= */

(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------------------------------------------------------------- DATA */
  const BRANDS = ["Marriott", "Hyatt", "Oberoi", "Kempinski", "Ritz-Carlton", "Hilton", "Jumeirah", "Alila"];

  const NUMBERS = [
    { icon: "years", value: 20, suffix: "+", label: "Years of Culinary Excellence" },
    { icon: "brand", value: 8, suffix: "", label: "Iconic Global Brands" },
    { icon: "hotel", value: 3, suffix: "", label: "Pre-Opening Hotels Led" },
    { icon: "team", value: 45, suffix: "", label: "Chef Brigade at Kempinski" },
  ];

  const ICONS = {
    years: '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 10h.01M15 10h.01M9 13h.01M15 13h.01"/>',
    brand: '<path d="M4 21V8l8-5 8 5v13M4 21h16M9 21v-6h6v6M12 3v2"/><circle cx="12" cy="11" r="1.4"/>',
    hotel: '<path d="M3 21h18M5 21V5a2 2 0 012-2h6a2 2 0 012 2v16M15 9h3a2 2 0 012 2v10M8 7h2M8 11h2M8 15h2"/>',
    team: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 20c0-2 .7-3.6 1.8-4.6 1.6.4 3.2 1.9 3.2 4.6"/>',
  };

  const EXPERTISE = [
    { index: "01", title: "Fine Dining & Modern Cuisine", desc: "International menus & Michelin-caliber plated dessert experiences." },
    { index: "02", title: "Pastry, Bakery & Viennoiserie", desc: "Full-scale artisanal production for multi-outlet luxury hotels." },
    { index: "03", title: "VVIP Banqueting & Wedding Cakes", desc: "Bespoke confectionery and large-scale event dessert operations." },
    { index: "04", title: "Pre-Opening Hotel Setup", desc: "SOP development, brigade recruitment, and operational readiness." },
    { index: "05", title: "Food Cost & Kitchen Management", desc: "Achieved 12% food cost reduction while upholding luxury standards." },
    { index: "06", title: "HACCP & Wellness Menus", desc: "Allergen-sensitive, vegan, GF, and plant-forward menu expertise." },
  ];

  const CAREER = [
    { years: "2022–Present", role: "Executive Pastry Chef", property: "The Ashok Hotel D'MONDE", location: "New Delhi, India" },
    { years: "2018–2021", role: "Executive Pastry Chef", property: "Hyatt Hotels Corporation", location: "Jordan" },
    { years: "2017–2018", role: "Pastry Chef", property: "Alila Hotels — Fort Bishangarh", location: "Jaipur, India" },
    { years: "2013–2016", role: "Pastry Chef", property: "Kempinski Hotels", location: "Bahrain" },
    { years: "2009–2013", role: "Pastry Chef", property: "Hilton Abu Dhabi", location: "UAE" },
    { years: "2006–2009", role: "Assistant Pastry Chef", property: "The Ritz-Carlton", location: "Jamaica" },
    { years: "2003–2006", role: "", property: "Jumeirah", location: "" },
    { years: "2000–2003", role: "", property: "Oberoi Hotels", location: "" },
  ];

  const ACHIEVEMENTS = [
    "Led 45-chef pre-opening pastry brigade at Kempinski Bahrain across 7 F&B outlets.",
    "Pre-opening core team member for Hyatt Jordan flagship resort (286 rooms, golf course).",
    "Achieved 12% food cost reduction at D'MONDE while maintaining Michelin-caliber quality.",
    "VVIP & wedding cake specialist across 7 international luxury properties in 6 countries.",
    "Built and trained pastry brigades from scratch across 3 pre-opening hotel launches.",
    "Allergen & wellness expertise: vegan, gluten-free, sugar-free, and plant-forward menus.",
  ];

  /* Gallery — curated from the studio image library, categorized by discipline */
  const GALLERY = [
    { f: "17", cat: "plated", alt: "Glossy red ring entremet plated with garnishes on slate." },
    { f: "06", cat: "entremets", alt: "Glazed individual entremets on a wooden serving board." },
    { f: "011", cat: "chocolate", alt: "Burgundy chocolate heart showpiece with a sculpted rose." },
    { f: "02", cat: "entremets", alt: "Raspberry-glazed laminated pastry gâteau with cream filling." },
    { f: "12", cat: "wedding", alt: "Celebration macaron tower in graduated tiers." },
    { f: "16", cat: "plated", alt: "Composed plated dessert with citrus gel and chocolate quenelle." },
    { f: "21", cat: "wedding", alt: "Tall white wedding cake with cascading sugar flowers." },
    { f: "08", cat: "viennoiserie", alt: "Bi-color glazed croissants lined on a rack." },
    { f: "14", cat: "entremets", alt: "Trompe-l'œil lemon entremet with sugar blossoms." },
    { f: "19", cat: "chocolate", alt: "Sculptural red rose showpiece above a dessert buffet." },
    { f: "010", cat: "plated", alt: "Plated trio of individual desserts and verrines on slate." },
    { f: "04", cat: "viennoiserie", alt: "Swirled artisan sourdough loaf on a wood round." },
    { f: "18", cat: "plated", alt: "Chocolate soufflé served in a porcelain cup." },
    { f: "24", cat: "entremets", alt: "Assortment of fruit tartlets and individual gâteaux." },
    { f: "13", cat: "chocolate", alt: "Whimsical chocolate showpiece with panda and pine tree." },
    { f: "03", cat: "wedding", alt: "Celebration afternoon-tea spread of assorted petits fours." },
    { f: "22", cat: "wedding", alt: "Semi-naked tiered celebration cake in white and burgundy." },
    { f: "07", cat: "viennoiserie", alt: "Cluster of laminated pain au chocolat pastries." },
    { f: "15", cat: "chocolate", alt: "White sugar showpiece with a crimson flower." },
    { f: "23", cat: "plated", alt: "Strawberry-crowned dessert tart with meringue kisses." },
    { f: "20", cat: "wedding", alt: "Three-tier celebration tea stand with petits fours." },
    { f: "01", cat: "viennoiserie", alt: "Artisan bakery buffet of breads, pretzels and rolls." },
    { f: "09", cat: "viennoiserie", alt: "Luxury hotel viennoiserie and pastry display with florals." },
    { f: "05", cat: "viennoiserie", alt: "Pair of rustic baguettes wrapped in paper and twine." },
  ].map((g) => ({ src: `assets/opt/cheffood${g.f}.jpg`, cat: g.cat, alt: g.alt }));

  const catLabel = (id) => (FILTERS.find((f) => f.id === id) || {}).label || "";

  const FILTERS = [
    { id: "all", label: "All", blurb: "A curated selection across five signature disciplines." },
    { id: "plated", label: "Plated Desserts", blurb: "Michelin-caliber plated dessert experiences." },
    { id: "entremets", label: "Entremets & Gâteaux", blurb: "Individual entremets, tarts and refined gâteaux." },
    { id: "chocolate", label: "Chocolate & Showpieces", blurb: "Sculptural chocolate and sugar centerpieces." },
    { id: "viennoiserie", label: "Viennoiserie & Bakery", blurb: "Laminated pastry and artisanal bread production." },
    { id: "wedding", label: "Wedding & Celebration", blurb: "Bespoke wedding cakes, towers and celebration centrepieces." },
  ];

  let currentFilter = "all";
  let activeList = GALLERY;

  /* ------------------------------------------------------------- RENDER */
  function renderMarquee() {
    const t = $("#marqueeTrack");
    if (!t) return;
    t.innerHTML = [...BRANDS, ...BRANDS].map((b) => `<span class="marquee__item">${b}</span>`).join("");
  }

  function renderNumbers() {
    const g = $("#numbersGrid");
    if (!g) return;
    g.innerHTML = NUMBERS.map((n) => `
      <div class="stat reveal">
        <span class="stat__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${ICONS[n.icon]}</svg>
        </span>
        <span class="stat__num" data-count="${n.value}" data-suffix="${n.suffix}">0</span>
        <span class="stat__underline"></span>
        <span class="stat__label">${n.label}</span>
      </div>`).join("");
  }

  function renderExpertise() {
    const g = $("#expertiseGrid");
    if (!g) return;
    g.innerHTML = EXPERTISE.map((e) => `
      <article class="exp-card reveal">
        <span class="exp-card__index">${e.index}</span>
        <h3 class="exp-card__title">${e.title}</h3>
        <p class="exp-card__desc">${e.desc}</p>
      </article>`).join("");
  }

  function renderTimeline() {
    const tl = $("#timeline");
    if (!tl) return;
    const items = CAREER.map((c) => {
      const role = c.role ? `<p class="tl-item__role">${c.role}</p>` : "";
      const place = c.location ? `<p class="tl-item__place">${c.property} · ${c.location}</p>` : `<p class="tl-item__place">${c.property}</p>`;
      return `<div class="tl-item reveal"><span class="tl-item__dot"></span><p class="tl-item__year">${c.years}</p>${role}${place}</div>`;
    }).join("");
    tl.insertAdjacentHTML("beforeend", items);
  }

  function renderAchievements() {
    const ul = $("#achievements");
    if (!ul) return;
    ul.innerHTML = ACHIEVEMENTS.map((a, i) => `
      <li class="ach-item reveal">
        <span class="ach-item__no">${String(i + 1).padStart(2, "0")}</span>
        <span class="ach-item__mark">✦</span>
        <span class="ach-item__text">${a}</span>
      </li>`).join("");
  }

  function renderFilters() {
    const wrap = $("#filters");
    if (!wrap) return;
    wrap.innerHTML = FILTERS.map((f) => `<button class="filter${f.id === "all" ? " is-active" : ""}" data-filter="${f.id}">${f.label}</button>`).join("");
    wrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn || btn.dataset.filter === currentFilter) return;
      currentFilter = btn.dataset.filter;
      $$(".filter", wrap).forEach((b) => b.classList.toggle("is-active", b === btn));
      applyFilter(currentFilter);
    });
  }

  function renderGallery(list) {
    const g = $("#gallery");
    if (!g) return;
    g.innerHTML = list.map((img, i) => `
      <button class="card reveal" data-index="${i}" aria-label="Open: ${img.alt}">
        <span class="card__media">
          <img src="${img.src}" alt="${img.alt}" loading="${i < 3 ? "eager" : "lazy"}" decoding="async" draggable="false" />
          <span class="card__view" aria-hidden="true">↗</span>
          <span class="card__overlay">
            <span class="card__cat">${catLabel(img.cat)}</span>
            <span class="card__title">${img.alt}</span>
          </span>
        </span>
      </button>`).join("");
    armReveals($$(".card", g));
    g.scrollLeft = 0;
    if (g._carUpdate) g._carUpdate();
  }

  function applyFilter(id) {
    activeList = id === "all" ? GALLERY : GALLERY.filter((i) => i.cat === id);
    renderGallery(activeList);
  }

  /* Premium carousel: arrow nav + pointer drag + touch swipe (snap) */
  function wireCarousel() {
    const track = $("#gallery");
    if (!track) return;
    const prev = $("#carPrev"), next = $("#carNext"), shell = track.closest(".carousel");
    const stepBy = () => {
      const card = track.querySelector(".card");
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "20") || 20;
      const w = card ? card.offsetWidth + gap : track.clientWidth * 0.8;
      return Math.max(w, w * Math.max(1, Math.floor((track.clientWidth - gap) / w) - 0));
    };
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      const atStart = track.scrollLeft <= 2;
      const atEnd = track.scrollLeft >= max;
      if (prev) prev.disabled = atStart;
      if (next) next.disabled = atEnd;
      if (shell) { shell.classList.toggle("has-prev", !atStart); shell.classList.toggle("has-next", !atEnd && max > 2); }
    };
    track._carUpdate = update;
    const go = (dir) => track.scrollBy({ left: dir * stepBy(), behavior: reduceMotion ? "auto" : "smooth" });
    if (prev) prev.addEventListener("click", () => go(-1));
    if (next) next.addEventListener("click", () => go(1));
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    // Pointer drag (desktop click-drag) — distinguish from a click on a card
    let down = false, sx = 0, sl = 0, moved = 0;
    track.addEventListener("pointerdown", (e) => { if (e.pointerType === "mouse") { down = true; sx = e.clientX; sl = track.scrollLeft; moved = 0; track.classList.add("is-dragging"); } });
    window.addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx)); track.scrollLeft = sl - dx; });
    const end = () => { if (down) { down = false; track.classList.remove("is-dragging"); } };
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    track.addEventListener("click", (e) => { if (moved > 6) { e.preventDefault(); e.stopPropagation(); moved = 0; } }, true);

    // Keyboard support when the rail is focused
    track.setAttribute("tabindex", "0");
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    });
    update();
  }

  /* ----------------------------------------------------------- LIGHTBOX */
  const CAT_DETAIL = {
    plated: "Composed à la minute — a Michelin-caliber plated dessert balancing texture, temperature and acidity, finished tableside.",
    entremets: "An individual entremet — layered mousse, crémeux, biscuit and mirror glaze brought into precise harmony.",
    chocolate: "Hand-sculpted chocolate & sugar showpiece work — pure craft, tempering and patience as centerpiece art.",
    viennoiserie: "Laminated viennoiserie & artisanal bakery — butter, time and technique across a multi-outlet operation.",
    wedding: "A bespoke celebration centerpiece, designed around the occasion, the venue and the guest experience.",
  };

  const lb = {
    el: $("#lightbox"), img: $("#lbImg"),
    cat: $("#lbCat"), title: $("#lbTitle"), detail: $("#lbDetail"), count: $("#lbCount"), index: 0,
    open(i) { this.index = i; this.update(); this.el.classList.add("is-open"); this.el.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; $("#lbClose").focus(); },
    close() { this.el.classList.remove("is-open"); this.el.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; },
    update() {
      const it = activeList[this.index];
      if (!it) return;
      this.img.src = it.src; this.img.alt = it.alt;
      this.cat.textContent = catLabel(it.cat);
      this.title.textContent = it.alt;
      this.detail.textContent = CAT_DETAIL[it.cat] || "";
      this.count.textContent = `${String(this.index + 1).padStart(2, "0")} / ${String(activeList.length).padStart(2, "0")}`;
    },
    next() { this.index = (this.index + 1) % activeList.length; this.update(); },
    prev() { this.index = (this.index - 1 + activeList.length) % activeList.length; this.update(); },
  };
  function wireLightbox() {
    if (!lb.el) return;
    $("#gallery").addEventListener("click", (e) => { const it = e.target.closest(".card"); if (it) lb.open(Number(it.dataset.index)); });
    $("#lbClose").addEventListener("click", () => lb.close());
    $("#lbNext").addEventListener("click", () => lb.next());
    $("#lbPrev").addEventListener("click", () => lb.prev());
    lb.el.addEventListener("click", (e) => { if (e.target === lb.el) lb.close(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.el.classList.contains("is-open")) return;
      if (e.key === "Escape") lb.close();
      if (e.key === "ArrowRight") lb.next();
      if (e.key === "ArrowLeft") lb.prev();
    });
    let startX = 0;
    lb.el.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
    lb.el.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - startX; if (Math.abs(dx) > 50) (dx < 0 ? lb.next() : lb.prev()); }, { passive: true });
  }

  /* ------------------------------------------------------------ REVEALS */
  let io;
  function armReveals(nodes) {
    if (reduceMotion) { nodes.forEach((n) => n.classList.add("is-revealed")); return; }
    if (hasGSAP && window.ScrollTrigger) {
      nodes.forEach((n) => {
        window.gsap.fromTo(n, { autoAlpha: 0, y: 28 }, {
          autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: n, start: "top 90%" },
          onStart: () => n.classList.add("is-revealed"),
        });
      });
      return;
    }
    if (!io) {
      io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-revealed"); io.unobserve(en.target); } }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    }
    nodes.forEach((n) => io.observe(n));
  }

  /* ----------------------------------------------------------- COUNTERS */
  function wireCounters() {
    $$(".stat__num").forEach((el) => {
      const target = Number(el.dataset.count || 0);
      const suffix = el.dataset.suffix || "";
      if (reduceMotion) { el.textContent = target + suffix; const u = el.parentElement.querySelector(".stat__underline"); if (u) u.style.width = "44px"; return; }
      const underline = el.parentElement.querySelector(".stat__underline");
      const run = () => {
        const obj = { v: 0 };
        const set = () => (el.textContent = Math.round(obj.v) + suffix);
        if (hasGSAP) window.gsap.to(obj, { v: target, duration: 1.6, ease: "power2.out", onUpdate: set });
        else { const s = performance.now(); const step = (t) => { const p = Math.min((t - s) / 1600, 1); obj.v = target * (1 - Math.pow(1 - p, 3)); set(); if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }
        if (underline) { if (hasGSAP) window.gsap.to(underline, { width: 44, duration: 1, ease: "power2.out" }); else underline.style.width = "44px"; }
      };
      if (hasGSAP && window.ScrollTrigger) window.ScrollTrigger.create({ trigger: el, start: "top 88%", once: true, onEnter: run });
      else { const ob = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { run(); ob.disconnect(); } }), { threshold: 0.4 }); ob.observe(el); }
    });
  }

  /* --------------------------------------------------------------- HERO */
  function wireHero() {
    const lines = $$(".hero__name .mask__line");
    const fades = $$(".hero .reveal-fade");
    if (reduceMotion || !hasGSAP) { lines.forEach((l) => (l.style.transform = "none")); fades.forEach((f) => (f.style.opacity = "1")); return; }
    const tl = window.gsap.timeline({ delay: 0.2 });
    window.gsap.set(lines, { yPercent: 110 });
    window.gsap.set(fades, { autoAlpha: 0, y: 16 });
    tl.to(lines, { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.12 })
      .to(fades, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 }, "-=0.6");
    const img = $(".hero__img");
    if (img) {
      window.gsap.fromTo(img, { scale: 1.12 }, { scale: 1.0, duration: 9, ease: "none" });
      if (window.ScrollTrigger) window.gsap.to(img, { yPercent: 8, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
    }
  }

  /* --------------------------------------------------------- TIMELINE DRAW */
  function wireTimelineDraw() {
    const line = $(".timeline__line i");
    if (!line) return;
    if (reduceMotion) { line.style.height = "100%"; return; }
    if (hasGSAP && window.ScrollTrigger) window.gsap.to(line, { height: "100%", ease: "none", scrollTrigger: { trigger: "#timeline", start: "top 72%", end: "bottom 82%", scrub: true } });
    else line.style.height = "100%";
  }

  /* ------------------------------------------------------- NAV / PROGRESS */
  function wireNav() {
    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const burger = $("#burger"), menu = $("#mobileMenu");
    const toggle = (open) => { menu.classList.toggle("is-open", open); menu.setAttribute("aria-hidden", String(!open)); burger.setAttribute("aria-expanded", String(open)); document.body.style.overflow = open ? "hidden" : ""; };
    burger.addEventListener("click", () => toggle(!menu.classList.contains("is-open")));
    $$("a", menu).forEach((a) => a.addEventListener("click", () => toggle(false)));
  }

  /* Scroll-spy — highlight the nav link for the section currently in view.
     Uses a scroll handler (fires reliably regardless of tab visibility). */
  function wireScrollSpy() {
    const links = $$(".nav__links a");
    if (!links.length) return;
    const targets = links
      .map((a) => ({ a, el: document.querySelector(a.getAttribute("href")) }))
      .filter((t) => t.el);
    if (!targets.length) return;
    const onScroll = () => {
      const mid = window.innerHeight * 0.42;
      let current = targets[0];
      for (const t of targets) { if (t.el.getBoundingClientRect().top <= mid) current = t; }
      links.forEach((a) => a.classList.toggle("is-active", a === current.a));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function wireScrollProgress() {
    const bar = $(".scroll-progress");
    if (!bar) return;
    const onScroll = () => { const h = document.documentElement.scrollHeight - window.innerHeight; bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%"; };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------ CURSOR / MAGNET */
  function wireCursor() {
    if (isTouch) return;
    const dot = $(".cursor-dot"), ring = $(".cursor-ring"), label = $(".cursor-label");
    if (!dot || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; });
    const loop = () => { rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18; ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(loop); };
    loop();
    const sel = "a, button, .card";
    document.addEventListener("mouseover", (e) => { if (e.target.closest(sel)) ring.classList.add("is-active"); });
    document.addEventListener("mouseout", (e) => { if (e.target.closest(sel)) ring.classList.remove("is-active"); });
  }

  function wireMagnetic() {
    if (isTouch || reduceMotion) return;
    $$("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.25}px, ${(e.clientY - (r.top + r.height / 2)) * 0.3}px)`; });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }

  /* -------------------------------------------------------- SMOOTH SCROLL */
  let lenis = null;
  function wireSmoothScroll() {
    if (reduceMotion || typeof window.Lenis === "undefined") return;
    lenis = new window.Lenis({ lerp: 0.08, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    if (hasGSAP && window.ScrollTrigger) lenis.on("scroll", window.ScrollTrigger.update);
  }
  function wireAnchors() {
    $$('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (id === "#" || id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(target, { offset: 0 });
        else target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      });
    });
  }

  /* ----------------------------------------------------------- PRELOADER */
  function runPreloader(done) {
    const pre = $("#preloader");
    let finished = false;
    const finish = () => { if (finished) return; finished = true; if (pre) pre.style.display = "none"; done(); };
    if (!pre || reduceMotion || !hasGSAP) { finish(); return; }
    const mo = $(".preloader__mo"), curtains = $$(".preloader__curtain");
    if (mo) { try { const len = mo.getComputedTextLength ? mo.getComputedTextLength() * 2 : 220; window.gsap.set(mo, { strokeDasharray: len, strokeDashoffset: len, fillOpacity: 0 }); window.gsap.timeline().to(mo, { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut" }).to(mo, { fillOpacity: 1, duration: 0.4 }, "-=0.2"); } catch (_) {} }
    window.gsap.timeline({ delay: 1.0 })
      .to(curtains, { scaleX: 0, transformOrigin: (i) => (i === 0 ? "left" : "right"), duration: 0.8, ease: "power3.inOut" })
      .to(pre, { autoAlpha: 0, duration: 0.3, onComplete: finish }, "-=0.3");
    setTimeout(finish, 2600); // robust fallback for backgrounded tabs (rAF throttled)
  }

  /* ---------------------------------------------------------------- INIT */
  function init() {
    if (hasGSAP && window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);
    renderMarquee();
    renderNumbers();
    renderExpertise();
    renderTimeline();
    renderAchievements();
    renderFilters();
    wireCarousel();
    applyFilter("all");
    wireLightbox();
    armReveals($$(".reveal"));
    wireNav();
    wireScrollSpy();
    wireScrollProgress();
    wireSmoothScroll();
    wireAnchors();
    wireCounters();
    wireTimelineDraw();
    wireCursor();
    wireMagnetic();
    runPreloader(() => { wireHero(); if (hasGSAP && window.ScrollTrigger) window.ScrollTrigger.refresh(); });
    window.addEventListener("load", () => { if (hasGSAP && window.ScrollTrigger) window.ScrollTrigger.refresh(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
