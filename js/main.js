/* Madhab website — shared behaviour */
(function () {
  const WA_NUMBER = "919454019163";
  const PHONES = ["9454019163", "9315231914"];
  const EMAIL = "madhabmilkpvtltd@gmail.com";

  const ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" opacity=".25"/><path d="M7.5 12.5l3 3 6-6.5"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.3-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.9 1.9 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2C18.1 1.3 15.1 0 12 0 5.5 0 .2 5.3.2 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7c1.7.9 3.7 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15V9l5.7 3-5.7 3z"/></svg>'
  };
  ICON.cart = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>';
  window.MADHAB_ICON = ICON;

  let io; // reveal observer, created lazily
  const page = document.body.dataset.page || "";
  const nav = [
    ["index.html", "Home", "home"],
    ["about.html", "About Us", "about"],
    ["products.html", "Products", "products"],
    ["quality.html", "Quality", "quality"],
    ["distributor.html", "Distributors", "distributor"],
    ["contact.html", "Contact", "contact"]
  ];

  /* ---------- Header ---------- */
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="container nav">
      <a class="brand" href="index.html" aria-label="Madhab home">
        <img src="assets/img/brand/emblem.png" alt="Madhab logo">
        <span class="brand-text"><strong>Madhab</strong><small>100% Eggless Bakery</small></span>
      </a>
      <div class="nav-drawer" id="nav-drawer">
        <div class="nav-drawer-head">
          <a class="brand" href="index.html" aria-label="Madhab home">
            <img src="assets/img/brand/emblem.png" alt="Madhab logo">
            <span class="brand-text"><strong>Madhab</strong><small>100% Eggless Bakery</small></span>
          </a>
          <button class="drawer-close" aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <ul class="nav-links">
          ${nav.map(([h, l, k]) => `<li><a href="${h}" class="${k === page ? "active" : ""}">${l}</a></li>`).join("")}
        </ul>
      </div>
      <div class="nav-cta">
        <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span></button>
      </div>
    </div>`;
  document.body.prepend(header);

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", isOpen);
    const toggleBtn = header.querySelector(".menu-toggle");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", isOpen);
  };

  header.querySelector(".menu-toggle").addEventListener("click", () => toggleMenu());
  const closeBtn = header.querySelector(".drawer-close");
  if (closeBtn) closeBtn.addEventListener("click", () => toggleMenu(false));
  const backdrop = header.querySelector(".nav-backdrop");
  if (backdrop) backdrop.addEventListener("click", () => toggleMenu(false));
  header.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => toggleMenu(false)));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      toggleMenu(false);
    }
  });

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Footer ---------- */
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="assets/img/brand/emblem.png" alt="Madhab">
          <p>Wholesome Goodness, Delicious 100% Vegetarian. Premium eggless breads, rusk, buns and more — baked fresh in Sultanpur, Uttar Pradesh since 2020.</p>
          <div class="socials">
            <a href="#" aria-label="Facebook">${ICON.fb}</a>
            <a href="#" aria-label="Instagram">${ICON.ig}</a>
            <a href="#" aria-label="YouTube">${ICON.yt}</a>
            <a href="https://wa.me/${WA_NUMBER}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>${nav.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Our Range</h4>
          <ul>${(window.MADHAB_CATEGORIES || []).map(c => `<li><a href="products.html#${c.id}">${c.name}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <ul>
            <li>Village and Post-Safipur, Tehsil-Lambhua, District-Sultanpur, Uttar Pradesh</li>
            <li>${PHONES.map(p => `<a href="tel:+91${p}">+91 ${p}</a>`).join("<br>")}</li>
            <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© ${new Date().getFullYear()} Madhab Milk and Dairy House Agro Business Pvt. Ltd. All rights reserved.</div>
        <div class="legal"><span>GSTIN: 09AACM7773N1ZE</span><span>CIN: U01110UP2020PTC134177</span></div>
      </div>
    </div>`;
  document.body.appendChild(footer);

  const wa = document.createElement("a");
  wa.className = "wa-float";
  wa.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello Madhab! I would like to know more about your products.")}`;
  wa.target = "_blank"; wa.rel = "noopener"; wa.setAttribute("aria-label", "Chat on WhatsApp");
  wa.innerHTML = ICON.wa;
  document.body.appendChild(wa);

  /* ---------- Product card helper ---------- */
  const catById = id => (window.MADHAB_CATEGORIES || []).find(c => c.id === id) || {};
  window.madhabCard = function (p, delay) {
    const c = catById(p.cat);
    return `
      <a class="product-card reveal" data-delay="${delay || 0}" href="product.html?id=${p.id}" style="--tint:${c.tint}">
        <div class="product-media">
          <span class="product-tag">${c.name}</span>
          <span class="veg-mark" title="100% Vegetarian"></span>
          <img src="assets/img/products/${p.img}" alt="Madhab ${p.name} ${p.size}" loading="lazy">
        </div>
        <div class="product-body">
          <h3>${p.name}</h3>
          <div class="product-size">Available in – <b>${p.size}</b></div>
          <div class="product-foot">
            <span class="link-arrow">View details ${ICON.arrow}</span>
            <span class="eggless-chip">Eggless</span>
          </div>
        </div>
      </a>`;
  };

  /* ---------- Featured (home) ---------- */
  const featured = document.getElementById("featured-grid");
  if (featured) {
    featured.innerHTML = MADHAB_PRODUCTS.filter(p => p.featured).slice(0, 8).map((p, i) => madhabCard(p, i % 4)).join("");
  }

  /* ---------- Products page ---------- */
  const catalog = document.getElementById("catalog");
  if (catalog) {
    const chips = document.getElementById("chips");
    const search = document.getElementById("search");
    const empty = document.getElementById("empty");
    let active = (location.hash || "").replace("#", "") || "all";
    if (active !== "all" && !catById(active).id) active = "all";

    chips.innerHTML = [`<button class="chip" data-cat="all">All <span class="count">${MADHAB_PRODUCTS.length}</span></button>`]
      .concat(MADHAB_CATEGORIES.map(c => `<button class="chip" data-cat="${c.id}">${c.name} <span class="count">${MADHAB_PRODUCTS.filter(p => p.cat === c.id).length}</span></button>`))
      .join("");

    const render = () => {
      const q = search.value.trim().toLowerCase();
      chips.querySelectorAll(".chip").forEach(b => b.classList.toggle("active", b.dataset.cat === active));
      let total = 0;
      catalog.innerHTML = MADHAB_CATEGORIES.filter(c => active === "all" || c.id === active).map(c => {
        const items = MADHAB_PRODUCTS.filter(p => p.cat === c.id && (!q || (p.name + " " + p.size + " " + c.name).toLowerCase().includes(q)));
        total += items.length;
        if (!items.length) return "";
        return `
          <section class="cat-section" id="sec-${c.id}">
            <div class="cat-section-head">
              <div><span class="hindi">${c.hindi}</span><h2>${c.name}</h2></div>
              <p>${c.blurb}</p>
            </div>
            <div class="product-grid">${items.map((p, i) => madhabCard(p, i % 4)).join("")}</div>
          </section>`;
      }).join("");
      empty.style.display = total ? "none" : "block";
      observeReveals();
    };
    chips.addEventListener("click", e => {
      const b = e.target.closest(".chip");
      if (!b) return;
      active = b.dataset.cat;
      history.replaceState(null, "", active === "all" ? "products.html" : "#" + active);
      render();
    });
    search.addEventListener("input", render);
    render();
  }

  /* ---------- Product detail ---------- */
  const pd = document.getElementById("product-detail");
  if (pd) {
    const id = new URLSearchParams(location.search).get("id");
    const p = MADHAB_PRODUCTS.find(x => x.id === id) || MADHAB_PRODUCTS[0];
    const c = catById(p.cat);
    document.title = `${p.name} ${p.size} | Madhab`;
    const msg = `Hello Madhab! I am interested in "${p.name}" (${p.size}). Please share price and availability.`;
    pd.innerHTML = `
      <div class="pd-media reveal" style="--tint:${c.tint}">
        <div class="ring"></div>
        <img src="assets/img/products/${p.img}" alt="Madhab ${p.name} ${p.size}">
      </div>
      <div class="pd-info reveal" data-delay="1">
        <div class="crumbs" style="color:var(--muted)"><a href="products.html">Products</a> / <a href="products.html#${c.id}">${c.name}</a></div>
        <span class="eyebrow">${c.name} · <span class="hindi" style="letter-spacing:0">${c.hindi}</span></span>
        <h1>${p.name}</h1>
        <div class="pd-size"><small>Available in</small><b>${p.size}</b></div>
        <p class="desc">${p.desc}</p>
        <ul class="pd-points">
          <li>${ICON.check} 100% Eggless</li>
          <li>${ICON.check} 100% Vegetarian</li>
          <li>${ICON.check} FSSAI certified unit</li>
          <li>${ICON.check} Hygienically packed</li>
        </ul>
        <div class="pd-actions">
          <a class="btn btn-wa" target="_blank" rel="noopener" href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}">${ICON.wa} Enquire on WhatsApp</a>
          <a class="btn btn-ghost" href="distributor.html">Stock this product ${ICON.arrow}</a>
        </div>
      </div>`;
    const related = MADHAB_PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id);
    const fill = related.length >= 4 ? related : related.concat(MADHAB_PRODUCTS.filter(x => x.cat !== p.cat && x.featured));
    document.getElementById("related-grid").innerHTML = fill.slice(0, 4).map((x, i) => madhabCard(x, i)).join("");
  }

  /* ---------- Forms → WhatsApp ---------- */
  document.querySelectorAll("form[data-wa]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(form);
      const lines = [form.dataset.wa];
      for (const [k, v] of data.entries()) if (String(v).trim()) lines.push(`${k}: ${v}`);
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
      form.reset();
      const note = form.querySelector(".form-note");
      if (note) note.textContent = "Thank you! WhatsApp has opened with your details — just press send and our team will get back to you.";
    });
  });

  /* ---------- Reveal on scroll ---------- */
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
      return;
    }
    io = io || new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  }
  observeReveals();

  /* ---------- Count-up ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target, end = +el.dataset.count, suffix = el.dataset.suffix || "";
        const t0 = performance.now(), dur = 1600;
        const tick = t => {
          const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
          el.textContent = v + suffix;
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => co.observe(c));
  }

  /* ---------- Subtle parallax on hero floats ---------- */
  const visual = document.querySelector(".hero-visual");
  if (visual && matchMedia("(pointer:fine)").matches) {
    visual.addEventListener("mousemove", e => {
      const r = visual.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      visual.querySelectorAll(".float").forEach((f, i) => {
        const d = (i + 1) * 12;
        f.style.transform = `translate(${x * d}px, ${y * d}px)`;
      });
    });
  }
})();
