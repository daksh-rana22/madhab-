/* Madhab website — shared behaviour & product catalogue controller */
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

  let io; // reveal observer
  const page = document.body.dataset.page || "";
  const nav = [
    ["index.html", "Home", "home"],
    ["about.html", "About Us", "about"],
    ["products.html", "Products", "products"],
    ["quality.html", "Quality", "quality"],
    ["distributor.html", "Partner with us", "distributor"],
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

  /* ---------- Product helper functions ---------- */
  const catById = id => (window.MADHAB_CATEGORIES || []).find(c => c.id === id) || { name: "Bakery", sub: "", tint: "#FCE3C7" };

  window.madhabCard = function (p, delay) {
    const c = catById(p.cat);
    const szText = (p.variants && p.variants.length > 1)
      ? p.variants.map(v => v.size).join(" · ")
      : p.size;
    const hiBadge = p.hindi ? `<span class="hindi" style="display:block;font-size:.85rem;color:var(--brown-2);margin-top:2px">${p.hindi}</span>` : "";
    return `
      <a class="product-card reveal" data-delay="${delay || 0}" href="product.html?id=${p.id}" data-open="${p.id}" style="--tint:${c.tint}">
        <div class="product-media">
          <span class="product-tag">${c.name} · ${p.sub || "Fresh"}</span>
          <span class="veg-mark" title="100% Vegetarian"></span>
          <img src="${p.img}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-body">
          <h3>${p.name}</h3>
          ${hiBadge}
          <div class="product-size">Available in – <b>${szText}</b></div>
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
    featured.innerHTML = (window.MADHAB_PRODUCTS || [])
      .filter(p => p.featured)
      .slice(0, 8)
      .map((p, i) => madhabCard(p, i % 4))
      .join("");
  }

  /* ---------- Product Sheet Modal Controller (Image 2 style) ---------- */
  const sheetDialog = document.getElementById("sheet");
  let currentSheetIdx = -1;

  window.openProductSheet = function (id, pushState = true) {
    const prods = window.MADHAB_PRODUCTS || [];
    const idx = prods.findIndex(p => p.id === id);
    if (idx < 0) {
      window.location.href = `product.html?id=${id}`;
      return;
    }
    if (!sheetDialog) {
      window.location.href = `product.html?id=${id}`;
      return;
    }
    currentSheetIdx = idx;
    const p = prods[idx];
    const c = catById(p.cat);

    const sCat = document.getElementById("sCat");
    const sName = document.getElementById("sName");
    const sHi = document.getElementById("sHi");
    const sDesc = document.getElementById("sDesc");
    const sImg = document.getElementById("sImg");
    const sSizes = document.getElementById("sSizes");
    const sGlance = document.getElementById("sGlance");
    const sPrevName = document.getElementById("sPrevName");
    const sNextName = document.getElementById("sNextName");

    if (sCat) sCat.textContent = `${c.name.toUpperCase()} · ${(p.sub || "FRESH").toUpperCase()}`;
    if (sName) sName.textContent = p.name;
    if (sHi) {
      sHi.textContent = p.hindi || "";
      sHi.style.display = p.hindi ? "block" : "none";
    }
    if (sDesc) sDesc.textContent = p.desc;

    // Variants chips
    const variants = p.variants && p.variants.length ? p.variants : [{ size: p.size, img: p.img }];
    if (sSizes) {
      sSizes.innerHTML = variants.map((v, i) => `
        <button type="button" class="size-chip ${i === 0 ? "active" : ""}" aria-pressed="${i === 0 ? "true" : "false"}" data-variant-idx="${i}">
          ${v.size}
        </button>
      `).join("");

      sSizes.querySelectorAll(".size-chip").forEach(btn => {
        btn.addEventListener("click", () => {
          sSizes.querySelectorAll(".size-chip").forEach(b => {
            b.classList.remove("active");
            b.setAttribute("aria-pressed", "false");
          });
          btn.classList.add("active");
          btn.setAttribute("aria-pressed", "true");
          const vIdx = +btn.dataset.variantIdx;
          if (sImg && variants[vIdx]) {
            sImg.src = variants[vIdx].img;
            sImg.alt = `${p.name} - ${variants[vIdx].size}`;
          }
        });
      });
    }

    if (sImg) {
      sImg.src = variants[0].img;
      sImg.alt = `${p.name} - ${variants[0].size}`;
    }

    // Glance info
    if (sGlance) {
      sGlance.innerHTML = `
        <p><strong>Category:</strong> ${c.name} (${p.sub || "Bakery"})</p>
        <p><strong>Available pack sizes:</strong> ${variants.map(v => v.size).join(", ")}</p>
        <p><strong>Dietary:</strong> 100% Eggless · 100% Pure Vegetarian</p>
        <p><strong>Origin:</strong> Baked fresh at Madhab Factory, Sultanpur, UP</p>
      `;
    }

    // Reset all details accordions to closed when opening a product
    sheetDialog.querySelectorAll("details").forEach(d => d.open = false);
    const infoPane = sheetDialog.querySelector(".info");
    if (infoPane) infoPane.scrollTop = 0;

    // Pager
    const prevProduct = prods[(idx - 1 + prods.length) % prods.length];
    const nextProduct = prods[(idx + 1) % prods.length];
    if (sPrevName) sPrevName.textContent = prevProduct.name;
    if (sNextName) sNextName.textContent = nextProduct.name;

    if (!sheetDialog.open) {
      sheetDialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }

    if (pushState && page === "products") {
      history.replaceState(null, "", `#product/${p.id}`);
    }
  };

  if (sheetDialog) {
    const sClose = document.getElementById("sClose");
    if (sClose) {
      sClose.addEventListener("click", () => {
        sheetDialog.close();
      });
    }
    sheetDialog.addEventListener("close", () => {
      document.documentElement.style.overflow = "";
      if (page === "products" && location.hash.startsWith("#product/")) {
        history.replaceState(null, "", "products.html");
      }
    });
    sheetDialog.addEventListener("click", (e) => {
      if (e.target === sheetDialog) sheetDialog.close();
    });

    const sPrev = document.getElementById("sPrev");
    const sNext = document.getElementById("sNext");
    if (sPrev) {
      sPrev.addEventListener("click", () => {
        const prods = window.MADHAB_PRODUCTS || [];
        const prevIdx = (currentSheetIdx - 1 + prods.length) % prods.length;
        openProductSheet(prods[prevIdx].id);
      });
    }
    if (sNext) {
      sNext.addEventListener("click", () => {
        const prods = window.MADHAB_PRODUCTS || [];
        const nextIdx = (currentSheetIdx + 1) % prods.length;
        openProductSheet(prods[nextIdx].id);
      });
    }
  }

  // Intercept click on product cards if sheetDialog is available
  document.addEventListener("click", (e) => {
    const openTrigger = e.target.closest("[data-open]");
    if (openTrigger && sheetDialog) {
      e.preventDefault();
      openProductSheet(openTrigger.dataset.open);
    }
  });

  /* ---------- Products Page (Catalogue & Tabs) ---------- */
  const catalog = document.getElementById("catalog");
  if (catalog) {
    const tabsContainer = document.getElementById("tabs");
    const tabbar = document.getElementById("tabbar");
    const search = document.getElementById("search");
    const empty = document.getElementById("empty");
    const allProds = window.MADHAB_PRODUCTS || [];
    const allCats = window.MADHAB_CATEGORIES || [];

    let activeCat = "all";
    const hash = (location.hash || "").replace("#", "");
    if (hash.startsWith("product/")) {
      const pId = hash.replace("product/", "");
      setTimeout(() => openProductSheet(pId, false), 150);
    } else if (hash && allCats.some(c => c.id === hash)) {
      activeCat = hash;
    }

    const tabList = [
      { id: "all", name: "All", count: allProds.length }
    ].concat(allCats.map(c => ({
      id: c.id,
      name: c.name,
      count: allProds.filter(p => p.cat === c.id).length
    })));

    if (tabsContainer) {
      tabsContainer.innerHTML = tabList.map(t => `
        <button type="button" class="tab ${t.id === activeCat ? "active" : ""}" role="tab" data-cat="${t.id}" aria-selected="${t.id === activeCat ? "true" : "false"}">
          ${t.name}<sup>${t.count}</sup>
        </button>
      `).join("");
    }

    function moveTabbar() {
      if (!tabsContainer || !tabbar) return;
      const activeTab = tabsContainer.querySelector(`.tab[data-cat="${activeCat}"]`) || tabsContainer.querySelector(".tab");
      if (activeTab) {
        tabbar.style.left = `${activeTab.offsetLeft}px`;
        tabbar.style.width = `${activeTab.offsetWidth}px`;
      }
    }

    const renderCatalog = () => {
      const q = search ? search.value.trim().toLowerCase() : "";
      if (tabsContainer) {
        tabsContainer.querySelectorAll(".tab").forEach(b => {
          const isAct = b.dataset.cat === activeCat;
          b.classList.toggle("active", isAct);
          b.setAttribute("aria-selected", isAct ? "true" : "false");
        });
        moveTabbar();
      }

      let totalCount = 0;
      const filteredCats = allCats.filter(c => activeCat === "all" || c.id === activeCat);

      catalog.innerHTML = filteredCats.map(c => {
        const items = allProds.filter(p => p.cat === c.id && (!q || (p.name + " " + (p.hindi || "") + " " + p.size + " " + p.desc + " " + c.name).toLowerCase().includes(q)));
        totalCount += items.length;
        if (!items.length) return "";
        return `
          <section class="cat-section" id="sec-${c.id}">
            <div class="cat-section-head">
              <div>
                <span class="hindi">${c.hindi}</span>
                <h2>${c.name}</h2>
              </div>
              <p>${c.blurb}</p>
            </div>
            <div class="product-grid">
              ${items.map((p, i) => madhabCard(p, i % 4)).join("")}
            </div>
          </section>`;
      }).join("");

      if (empty) empty.style.display = totalCount ? "none" : "block";
      observeReveals();
    };

    if (tabsContainer) {
      tabsContainer.addEventListener("click", e => {
        const btn = e.target.closest(".tab");
        if (!btn) return;
        activeCat = btn.dataset.cat;
        history.replaceState(null, "", activeCat === "all" ? "products.html" : "#" + activeCat);
        renderCatalog();
      });
    }

    if (search) search.addEventListener("input", renderCatalog);
    window.addEventListener("resize", moveTabbar);
    setTimeout(moveTabbar, 100);
    renderCatalog();
  }

  /* ---------- Product Detail Standalone Page (product.html) ---------- */
  const pd = document.getElementById("product-detail");
  if (pd) {
    const id = new URLSearchParams(location.search).get("id");
    const allProds = window.MADHAB_PRODUCTS || [];
    const p = allProds.find(x => x.id === id) || allProds[0];
    const c = catById(p.cat);
    document.title = `${p.name} | Madhab 100% Eggless`;

    const variants = p.variants && p.variants.length ? p.variants : [{ size: p.size, img: p.img }];
    const msg = `Hello Madhab! I would like to inquire about "${p.name}" (${variants[0].size}). Please share availability and distributor pricing.`;

    pd.innerHTML = `
      <div class="pd-media reveal" style="--tint:${c.tint}">
        <img id="mainPdImg" src="${variants[0].img}" alt="${p.name}">
      </div>
      <div class="pd-info reveal" data-delay="1">
        <span class="eyebrow">${c.name.toUpperCase()} · ${(p.sub || "FRESH").toUpperCase()}</span>
        <h1>${p.name}</h1>
        ${p.hindi ? `<p class="hi-title">${p.hindi}</p>` : ""}
        <p class="desc">${p.desc}</p>
        
        <div class="lbl-avail">AVAILABLE IN</div>
        <div class="size-chips" id="pdSizes">
          ${variants.map((v, i) => `
            <button type="button" class="size-chip ${i === 0 ? "active" : ""}" aria-pressed="${i === 0 ? "true" : "false"}" data-vidx="${i}">
              ${v.size}
            </button>
          `).join("")}
        </div>

        <div class="specs">
          <details>
            <summary>
              <span>At a glance</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>
            </summary>
            <div class="dd">
              <p><strong>Category:</strong> ${c.name} (${p.sub || "Bakery"})</p>
              <p><strong>Available pack sizes:</strong> ${variants.map(v => v.size).join(", ")}</p>
              <p><strong>Dietary:</strong> 100% Eggless · 100% Pure Vegetarian</p>
              <p><strong>Origin:</strong> Baked fresh in Sultanpur, Uttar Pradesh</p>
            </div>
          </details>
          <details>
            <summary>
              <span>Ingredients &amp; allergens</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>
            </summary>
            <div class="dd">
              <p>100% vegetarian &amp; eggless formulation. Full ingredient and allergen details are printed on every retail pack.</p>
            </div>
          </details>
          <details>
            <summary>
              <span>Nutrition</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>
            </summary>
            <div class="dd">
              <p>Nutrition values per 100g (Energy, Carbohydrates, Dietary Fibre, Protein, Fats) are certified and clearly printed on every package label.</p>
            </div>
          </details>
          <details>
            <summary>
              <span>Shelf life &amp; storage</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>
            </summary>
            <div class="dd">
              <p>Please check the best-before date printed on the seal. Store in a clean, cool, dry and hygienic place away from direct sunlight and strong odours.</p>
            </div>
          </details>
        </div>

        <div class="pd-actions">
          <a class="btn btn-red" href="contact.html">Where to buy</a>
          <a class="btn btn-line" href="distributor.html">Bulk / trade enquiry</a>
          <a class="btn btn-wa" target="_blank" rel="noopener" href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}">
            ${ICON.wa} Enquire on WhatsApp
          </a>
        </div>
      </div>`;

    const pdSizes = document.getElementById("pdSizes");
    const mainPdImg = document.getElementById("mainPdImg");
    if (pdSizes && mainPdImg) {
      pdSizes.querySelectorAll(".size-chip").forEach(btn => {
        btn.addEventListener("click", () => {
          pdSizes.querySelectorAll(".size-chip").forEach(b => {
            b.classList.remove("active");
            b.setAttribute("aria-pressed", "false");
          });
          btn.classList.add("active");
          btn.setAttribute("aria-pressed", "true");
          const vIdx = +btn.dataset.vidx;
          if (variants[vIdx]) {
            mainPdImg.src = variants[vIdx].img;
            mainPdImg.alt = `${p.name} - ${variants[vIdx].size}`;
          }
        });
      });
    }

    const relatedGrid = document.getElementById("related-grid");
    if (relatedGrid) {
      const sameCat = allProds.filter(x => x.cat === p.cat && x.id !== p.id);
      const otherFeatured = allProds.filter(x => x.cat !== p.cat && x.featured);
      const combined = sameCat.concat(otherFeatured).slice(0, 4);
      relatedGrid.innerHTML = combined.map((x, i) => madhabCard(x, i)).join("");
    }
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
        const isIndian = el.dataset.indian === "true";
        const t0 = performance.now(), dur = 1600;
        const tick = t => {
          const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
          el.textContent = (isIndian ? v.toLocaleString("en-IN") : v) + suffix;
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        co.unobserve(el);
      });
    }, { threshold: 0.3 });
    counters.forEach(c => co.observe(c));
  }

  /* ---------- HERO SHOWCASE: turntable + rotating word sync ---------- */
  const SHOWCASE_ITEMS = [
    { word: "loaf.", id: "makkhan-malai-bread", name: "Makkhan Malai Bread", size: "350g · 440g", img: "assets/img/products/makkhan-malai-bread.png" },
    { word: "bun.", id: "cream-bun", name: "Madhab Cream Bun", size: "250g · 6 pcs", img: "assets/img/products/cream-bun.png" },
    { word: "rusk.", id: "rusk", name: "Madhab Rusk", size: "150g · 75g", img: "assets/img/products/rusk-150g.png" },
    { word: "roll.", id: "cream-roll", name: "Madhab Cream Roll", size: "500g · 12 pcs", img: "assets/img/products/cream-roll.png" },
    { word: "khari.", id: "ajwain-khari", name: "Crispy Ajwain Khari", size: "130g box", img: "assets/img/products/ajwain-khari.png" },
    { word: "slice.", id: "sandwich-bread", name: "Sandwich Bread", size: "250g pack", img: "assets/img/products/sandwich-bread.png" }
  ];

  const prodsEl = document.getElementById("prods");
  const barsEl = document.getElementById("bars");
  const rotWordEl = document.getElementById("rotWord");
  const showNameEl = document.getElementById("showName");
  const showSizeEl = document.getElementById("showSize");
  const showLinkEl = document.getElementById("showLink");

  if (prodsEl && barsEl && rotWordEl) {
    prodsEl.innerHTML = SHOWCASE_ITEMS.map(item => `<img src="${item.img}" alt="${item.name}">`).join("");
    barsEl.innerHTML = SHOWCASE_ITEMS.map((item, i) => `<button type="button" aria-label="Show ${item.name}" data-idx="${i}"><i></i></button>`).join("");

    const pImgs = prodsEl.querySelectorAll("img");
    const bBtns = barsEl.querySelectorAll("button");
    let currentIdx = -1;
    let timer = null;
    const DURATION = 3200;

    function showSlide(idx) {
      if (idx === currentIdx) return;
      const prevIdx = currentIdx;
      currentIdx = idx;
      const item = SHOWCASE_ITEMS[idx];

      pImgs.forEach((img, n) => {
        img.classList.toggle("on", n === idx);
        img.classList.toggle("off", n === prevIdx);
        if (n !== idx && n !== prevIdx) img.classList.remove("off");
      });

      bBtns.forEach((btn, n) => {
        btn.classList.remove("on");
        btn.classList.toggle("done", n < idx);
        btn.setAttribute("aria-current", n === idx ? "true" : "false");
      });

      void bBtns[idx].offsetWidth;
      bBtns[idx].classList.add("on");

      if (showNameEl) showNameEl.textContent = item.name;
      if (showSizeEl) showSizeEl.textContent = item.size;
      if (showLinkEl) showLinkEl.href = `product.html?id=${item.id}`;

      rotWordEl.classList.add("swap");
      setTimeout(() => {
        rotWordEl.textContent = item.word;
        rotWordEl.classList.remove("swap");
      }, prevIdx < 0 ? 0 : 220);

      clearTimeout(timer);
      timer = setTimeout(() => {
        showSlide((currentIdx + 1) % SHOWCASE_ITEMS.length);
      }, DURATION);
    }

    bBtns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        showSlide(i);
      });
    });

    const showContainer = document.getElementById("show");
    if (showContainer) {
      showContainer.addEventListener("mouseenter", () => clearTimeout(timer));
      showContainer.addEventListener("mouseleave", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          showSlide((currentIdx + 1) % SHOWCASE_ITEMS.length);
        }, 1800);
      });
    }

    showSlide(0);
  }

  /* ---------- RECIPES CONTROLLER (Cook with Madhab) ---------- */
  const RECIPES = [
    {
      id: "chai-and-rusk",
      t: "Chai & Rusk",
      tag: "The classic morning pairing.",
      pId: "rusk",
      pN: "Madhab Rusk",
      pImg: "assets/img/products/rusk-150g.png",
      photo: "assets/img/photos/chai.jpg",
      prep: "2 min",
      cook: "6 min",
      serves: "2",
      total: "8 min",
      ing: [
        ["", [
          ["Madhab Rusk", "4–6 pieces"],
          ["Milk", "1 cup"],
          ["Water", "½ cup"],
          ["Tea leaves", "1–1½ tsp"],
          ["Sugar", "1–2 tsp, or to taste"],
          ["Cardamom", "1–2 pods, optional"]
        ]]
      ],
      steps: [
        "Bring water and crushed cardamom to a gentle boil in a saucepan.",
        "Add premium tea leaves and simmer for 1–2 minutes to extract full aroma.",
        "Add milk and sugar and bring to a rich rolling boil.",
        "Strain hot tea into your favourite cups.",
        "Dip crispy golden Madhab Rusk into your tea and enjoy the authentic flavour."
      ],
      tip: ["Crunch Tip", "For the best experience, enjoy the crisp rusk alongside the hot chai rather than over-soaking it."]
    },
    {
      id: "pav-bhaji",
      t: "Pav Bhaji",
      tag: "Soft pav, toasted with butter.",
      pId: "ladi-pav-250g",
      pN: "Madhab Ladi Pav",
      pImg: "assets/img/products/ladi-pav-250g.png",
      photo: "assets/img/photos/pav-bhaji.jpg",
      prep: "15 min",
      cook: "30 min",
      serves: "3–4",
      total: "45 min",
      ing: [
        ["For the bhaji", [
          ["Potatoes", "2 medium, boiled"],
          ["Cauliflower", "½ cup, chopped"],
          ["Green peas", "½ cup"],
          ["Capsicum", "½, finely chopped"],
          ["Onion", "1, finely chopped"],
          ["Tomatoes", "2, finely chopped"],
          ["Ginger-garlic paste", "1 tsp"],
          ["Pav bhaji masala", "1½–2 tsp"],
          ["Red chili powder", "½ tsp"],
          ["Turmeric", "¼ tsp"],
          ["Butter", "2 tbsp"],
          ["Salt", "to taste"],
          ["Lemon juice", "1 tsp"],
          ["Fresh coriander", "for garnish"]
        ]],
        ["For serving", [
          ["Madhab Ladi Pav", "4–6 pav"],
          ["Butter", "2 tbsp"],
          ["Chopped onion & lemon", "for garnish"]
        ]]
      ],
      steps: [
        "Boil the potatoes, cauliflower and green peas until completely tender.",
        "Melt butter in a pan. Add chopped onions and sauté until translucent.",
        "Add ginger-garlic paste, tomatoes, turmeric, chili powder and pav bhaji masala. Cook until soft.",
        "Add the boiled vegetables and mash thoroughly with a potato masher.",
        "Simmer with a splash of water for 8–10 minutes, then finish with lemon juice and coriander.",
        "Slice Madhab Ladi Pav horizontally and butter-toast both sides on a hot tawa.",
        "Serve steaming hot bhaji with soft buttery pav, chopped onions and fresh lemon."
      ],
      tip: ["Chef Tip", "Sprinkle a pinch of pav bhaji masala directly on the butter while toasting the pav for street-style flavour."]
    },
    {
      id: "tiffin-sandwich",
      t: "Tiffin Sandwiches",
      sub: "Easy Veg Cheese Sandwich",
      tag: "Even slices for the lunch box.",
      pId: "sandwich-bread",
      pN: "Madhab Sandwich Bread",
      pImg: "assets/img/products/sandwich-bread.png",
      photo: "assets/img/photos/sandwich.jpg",
      prep: "10 min",
      cook: "None",
      serves: "2",
      total: "10 min",
      ing: [
        ["", [
          ["Madhab Sandwich Bread", "4 slices"],
          ["Butter", "1–2 tbsp"],
          ["Green chutney", "2 tbsp"],
          ["Cucumber", "thinly sliced"],
          ["Tomato", "thinly sliced"],
          ["Onion", "thinly sliced"],
          ["Cheese", "2 slices or grated"],
          ["Chaat masala", "a pinch"],
          ["Salt", "to taste"]
        ]]
      ],
      steps: [
        "Spread creamy butter evenly on soft Madhab Sandwich Bread slices.",
        "Layer green coriander-mint chutney over the buttered slices.",
        "Arrange thin slices of cucumber, tomato, onion and cheese.",
        "Sprinkle a pinch of chaat masala and salt.",
        "Close the sandwich and slice into diagonal halves.",
        "Pack into school or office tiffins for a wholesome homemade snack."
      ],
      tip: ["Tiffin Tip", "Pat dry sliced tomatoes and cucumbers before assembling so the bread stays soft without getting soggy."]
    },
    {
      id: "aloo-tikki-burger",
      t: "Aloo Tikki Burger",
      tag: "Crispy aloo tikki, soft bun, homemade burger.",
      pId: "burger-bun",
      pN: "Madhab Burger Bun",
      pImg: "assets/img/products/burger-bun.png",
      photo: "assets/img/photos/burger.jpg",
      prep: "15 min",
      cook: "15 min",
      serves: "2",
      total: "30 min",
      ing: [
        ["For the tikki", [
          ["Madhab Burger Buns", "2 buns"],
          ["Potatoes", "2 medium, boiled"],
          ["Bread crumbs", "¼ cup"],
          ["Green chili & coriander", "1 tbsp"],
          ["Chaat masala & chili powder", "½ tsp"],
          ["Salt", "to taste"],
          ["Oil & Butter", "for shallow fry & toast"]
        ]],
        ["For assembling", [
          ["Eggless mayonnaise & green chutney", "2 tbsp"],
          ["Onion & Tomato slices", "4–6 slices"],
          ["Lettuce & Cheese slice", "optional"]
        ]]
      ],
      steps: [
        "Mash boiled potatoes with bread crumbs, spices, green chili and fresh coriander.",
        "Shape into burger patties and shallow-fry until golden and crispy.",
        "Slice Madhab Burger Buns and lightly toast cut sides on a pan with butter.",
        "Spread mayonnaise and green chutney on both bun halves.",
        "Layer lettuce, hot aloo tikki, onion and tomato slices.",
        "Close the burger and serve fresh and warm."
      ],
      tip: ["Burger Tip", "Toasting the bun cut-side keeps the crumb fluffy and prevents excess sauce absorption."]
    }
  ];

  const kgrid = document.getElementById("kgrid");
  const rsheet = document.getElementById("rsheet");
  let currentRecipeIdx = -1;

  if (kgrid) {
    kgrid.innerHTML = RECIPES.map((r, i) => `
      <a class="kcard reveal" data-delay="${i}" href="#recipe/${r.id}" data-recipe="${r.id}">
        <div class="ph photo">
          <span class="tag">${r.pN}</span>
          <img class="dish" src="${r.photo}" alt="${r.t}" loading="lazy">
          <span class="pack" aria-hidden="true"><img src="${r.pImg}" alt=""></span>
        </div>
        <span class="meta">${r.total} · Easy</span>
        <h3>${r.t}</h3>
        <p>${r.tag}</p>
        <span class="arrow-link">View recipe <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
      </a>
    `).join("");
  }

  // Intercept clicks on recipe cards anywhere
  document.addEventListener("click", (e) => {
    const rCard = e.target.closest("[data-recipe]");
    if (rCard && rsheet) {
      e.preventDefault();
      openRecipeSheet(rCard.dataset.recipe);
    }
  });

  window.openRecipeSheet = function(id, pushState = true) {
    const idx = RECIPES.findIndex(r => r.id === id);
    if (idx < 0 || !rsheet) return;
    currentRecipeIdx = idx;
    const r = RECIPES[idx];

    const rImg = document.getElementById("rImg");
    const rProd = document.getElementById("rProd");
    const rName = document.getElementById("rName");
    const rSub = document.getElementById("rSub");
    const rTag = document.getElementById("rTag");
    const rMeta = document.getElementById("rMeta");
    const rMade = document.getElementById("rMade");
    const rIng = document.getElementById("rIng");
    const rSteps = document.getElementById("rSteps");
    const rTip = document.getElementById("rTip");
    const rPrevName = document.getElementById("rPrevName");
    const rNextName = document.getElementById("rNextName");

    if (rImg) { rImg.src = r.photo; rImg.alt = r.t; }
    if (rProd) rProd.textContent = r.pN;
    if (rName) rName.textContent = r.t;
    if (rSub) { rSub.textContent = r.sub || ""; rSub.style.display = r.sub ? "block" : "none"; }
    if (rTag) rTag.textContent = r.tag;

    if (rMeta) {
      rMeta.innerHTML = `
        <div><small>Prep</small><b>${r.prep}</b></div>
        <div><small>Cook</small><b>${r.cook}</b></div>
        <div><small>Serves</small><b>${r.serves}</b></div>
        <div><small>Level</small><b>Easy</b></div>
      `;
    }

    if (rMade) {
      rMade.innerHTML = `
        <img src="${r.pImg}" alt="${r.pN}">
        <div><small>Made with Madhab</small><b>${r.pN}</b></div>
        <button class="btn-line" type="button" id="rToProd">View product <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M5 12h14M13 5l7 7-7 7"/></svg></button>
      `;
      const btn = rMade.querySelector("#rToProd");
      if (btn) {
        btn.addEventListener("click", () => {
          rsheet.close();
          if (typeof openProductSheet === "function") {
            openProductSheet(r.pId);
          } else {
            location.href = `product.html?id=${r.pId}`;
          }
        });
      }
    }

    if (rIng) {
      rIng.innerHTML = r.ing.map(([h, items]) => `
        ${h ? `<h3>${h}</h3>` : ""}
        <ul>
          ${items.map(([name, qty]) => `
            <li>
              <label>
                <input type="checkbox">
                <span class="it"><span>${name}</span><em>${qty}</em></span>
              </label>
            </li>
          `).join("")}
        </ul>
      `).join("");
    }

    if (rSteps) {
      rSteps.innerHTML = r.steps.map(s => `<li><span>${s}</span></li>`).join("");
    }

    if (rTip) {
      if (r.tip) {
        rTip.innerHTML = `<b>${r.tip[0]}:</b> ${r.tip[1]}`;
        rTip.style.display = "block";
      } else {
        rTip.style.display = "none";
      }
    }

    const prevR = RECIPES[(idx - 1 + RECIPES.length) % RECIPES.length];
    const nextR = RECIPES[(idx + 1) % RECIPES.length];
    if (rPrevName) rPrevName.textContent = prevR.t;
    if (rNextName) rNextName.textContent = nextR.t;

    if (!rsheet.open) {
      rsheet.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (pushState) {
      history.replaceState(null, "", "#recipe/" + r.id);
    }
    const infoPane = rsheet.querySelector(".info");
    if (infoPane) infoPane.scrollTop = 0;
  };

  if (rsheet) {
    const rClose = document.getElementById("rClose");
    if (rClose) rClose.addEventListener("click", () => rsheet.close());
    rsheet.addEventListener("close", () => {
      document.documentElement.style.overflow = "";
      if (location.hash.startsWith("#recipe/")) {
        history.replaceState(null, "", "#kitchen");
      }
    });
    rsheet.addEventListener("click", (e) => {
      if (e.target === rsheet) rsheet.close();
    });

    const rPrev = document.getElementById("rPrev");
    const rNext = document.getElementById("rNext");
    if (rPrev) {
      rPrev.addEventListener("click", () => {
        const prevIdx = (currentRecipeIdx - 1 + RECIPES.length) % RECIPES.length;
        openRecipeSheet(RECIPES[prevIdx].id);
      });
    }
    if (rNext) {
      rNext.addEventListener("click", () => {
        const nextIdx = (currentRecipeIdx + 1) % RECIPES.length;
        openRecipeSheet(RECIPES[nextIdx].id);
      });
    }
  }

  // Hash check on load
  const curHash = (location.hash || "").replace("#", "");
  if (curHash.startsWith("recipe/")) {
    const rId = curHash.replace("recipe/", "");
    setTimeout(() => openRecipeSheet(rId, false), 150);
  }

  /* ---------- DISTRIBUTION NETWORK MAP & FINDER (Where to find us) ---------- */
  const netsvg = document.getElementById("netsvg");
  if (netsvg) {
    const HUB = { lat: 26.26, lon: 82.07 };
    const DIST = [
      { n: "Sultanpur", div: "Ayodhya", lat: 26.26, lon: 82.07, home: 1 },
      { n: "Amethi", div: "Ayodhya", lat: 26.15, lon: 81.81 },
      { n: "Ayodhya (Faizabad)", div: "Ayodhya", lat: 26.79, lon: 82.18 },
      { n: "Ambedkar Nagar", div: "Ayodhya", lat: 26.43, lon: 82.54 },
      { n: "Barabanki", div: "Ayodhya", lat: 26.93, lon: 81.19 },
      { n: "Lucknow", div: "Lucknow", lat: 26.85, lon: 80.95 },
      { n: "Rae Bareli", div: "Lucknow", lat: 26.23, lon: 81.23 },
      { n: "Unnao", div: "Lucknow", lat: 26.55, lon: 80.49 },
      { n: "Sitapur", div: "Lucknow", lat: 27.57, lon: 80.68 },
      { n: "Hardoi", div: "Lucknow", lat: 27.40, lon: 80.13 },
      { n: "Gonda", div: "Devipatan", lat: 27.13, lon: 81.96 },
      { n: "Bahraich", div: "Devipatan", lat: 27.57, lon: 81.60 },
      { n: "Basti", div: "Basti", lat: 26.80, lon: 82.73 },
      { n: "Siddharthnagar", div: "Basti", lat: 27.29, lon: 83.07 },
      { n: "Gorakhpur", div: "Gorakhpur", lat: 26.76, lon: 83.37 },
      { n: "Varanasi (Banaras)", div: "Varanasi", lat: 25.32, lon: 82.97 },
      { n: "Jaunpur", div: "Varanasi", lat: 25.75, lon: 82.68 },
      { n: "Ghazipur", div: "Varanasi", lat: 25.58, lon: 83.58 },
      { n: "Jangipur", div: "Varanasi", town: "Ghazipur", where: "town in Ghazipur district" },
      { n: "Chandauli", div: "Varanasi", lat: 25.26, lon: 83.27 },
      { n: "Azamgarh", div: "Azamgarh", lat: 26.07, lon: 83.18 },
      { n: "Mau", div: "Azamgarh", lat: 25.94, lon: 83.56 },
      { n: "Ballia", div: "Azamgarh", lat: 25.76, lon: 84.15 },
      { n: "Mirzapur", div: "Mirzapur", lat: 25.15, lon: 82.57 },
      { n: "Bhadohi", div: "Mirzapur", lat: 25.40, lon: 82.57 },
      { n: "Sonbhadra", div: "Mirzapur", lat: 24.69, lon: 83.07 },
      { n: "Prayagraj (Allahabad)", div: "Prayagraj", lat: 25.44, lon: 81.85 },
      { n: "Pratapgarh", div: "Prayagraj", lat: 25.90, lon: 81.95 },
      { n: "Banda", div: "Chitrakoot", lat: 25.48, lon: 80.33 },
      { n: "Chitrakoot", div: "Chitrakoot", lat: 25.20, lon: 80.90 },
      { n: "Hamirpur", div: "Chitrakoot", lat: 25.95, lon: 80.15 },
      { n: "Barauli", div: "Bihar", lat: 26.38, lon: 84.59, state: "Bihar", where: "town in Gopalganj district, Bihar" }
    ];

    const C = 300, K = 18;
    const R = km => K * Math.sqrt(km);
    const pos = d => {
      const dy = (d.lat - HUB.lat) * 111;
      const dx = (d.lon - HUB.lon) * 111 * Math.cos(HUB.lat * Math.PI / 180);
      const km = Math.hypot(dx, dy);
      const r = R(km);
      return { x: C + dx / km * r, y: C - dy / km * r, km: Math.round(km) };
    };

    let h = '';
    const RINGS = [];
    [[R(200), 'r3', '~200 km'], [R(100), 'r2', '~100 km'], [R(50), 'r1', '~50 km']].forEach(([r, c, l]) => {
      h += `<circle class="nm-ring ${c}" cx="${C}" cy="${C}" r="${r}"/>`;
      RINGS.push([r, l]);
    });

    const others = DIST.filter(d => !d.home && !d.town);
    const place = d => d.state ? 'Gopalganj district, Bihar' : d.town ? `town in ${d.town} district, Uttar Pradesh` : 'Uttar Pradesh';

    others.forEach((d, k) => {
      const p = pos(d);
      d.p = p;
      const mx = (C + p.x) / 2, my = (C + p.y) / 2, nx = -(p.y - C), ny = (p.x - C), L = Math.hypot(nx, ny) || 1, bend = 14;
      d.path = `M${C},${C} Q${(mx + nx / L * bend).toFixed(1)},${(my + ny / L * bend).toFixed(1)} ${p.x.toFixed(1)},${p.y.toFixed(1)}`;
      const len = Math.round(Math.hypot(p.x - C, p.y - C) * 1.08) + 6;
      h += `<path class="nm-route" data-k="${k}" d="${d.path}" style="--len:${len};--dl:${(0.15 + k * 0.05).toFixed(2)}s"/>`;
    });

    others.forEach((d, k) => {
      if (k % 3) return;
      const du = (3.4 + d.p.km / 55).toFixed(1), bg = (1.8 + k * 0.3).toFixed(2);
      h += `<circle class="nm-truck" r="2.6" opacity="0"><animateMotion dur="${du}s" begin="${bg}s" repeatCount="indefinite" path="${d.path}"/><animate attributeName="opacity" values="0;.9;.9;0" keyTimes="0;.12;.85;1" dur="${du}s" begin="${bg}s" repeatCount="indefinite"/></circle>`;
    });

    h += `<g class="nm-hub"><circle class="pulse" cx="${C}" cy="${C}" r="16"/><circle cx="${C}" cy="${C}" r="10" fill="#B3161C"/><circle cx="${C}" cy="${C}" r="4" fill="#fff"/><text x="${C}" y="${C - 22}" text-anchor="middle">Sultanpur · Factory</text></g>`;

    const boxes = [{ x1: C - 70, y1: C - 36, x2: C + 70, y2: C - 18 }, { x1: C - 12, y1: C - 12, x2: C + 12, y2: C + 12 }];
    others.forEach(d => boxes.push({ x1: d.p.x - 6, y1: d.p.y - 6, x2: d.p.x + 6, y2: d.p.y + 6 }));
    const hit = b => b.x1 < 2 || b.x2 > 598 || b.y1 < 2 || b.y2 > 598 || boxes.some(o => b.x1 < o.x2 && b.x2 > o.x1 && b.y1 < o.y2 && b.y2 > o.y1);

    RINGS.forEach(([r, l]) => {
      for (const a of [225, 315, 135, 45, 200, 250, 180, 270, 0, 90]) {
        const rad = a * Math.PI / 180, x = C + r * Math.cos(rad), y = C - r * Math.sin(rad), b = { x1: x - 24, y1: y - 8, x2: x + 24, y2: y + 6 };
        if (!hit(b)) {
          boxes.push(b);
          h += `<text class="nm-rlbl" x="${x.toFixed(1)}" y="${(y + 3).toFixed(1)}" text-anchor="middle" paint-order="stroke" stroke="#FBF7F0" stroke-width="4">${l}</text>`;
          break;
        }
      }
    });

    const MAJOR = ["Lucknow", "Varanasi (Banaras)", "Prayagraj (Allahabad)", "Gorakhpur", "Ayodhya (Faizabad)"];
    others.slice().sort((a, b) => (MAJOR.includes(b.n) - MAJOR.includes(a.n)) || (a.p.km - b.p.km)).forEach(d => {
      const p = d.p, w = d.n.replace(/ \(.*\)/, '').length * 6.1 + 2;
      const cands = [
        ['start', p.x + 9, p.y + 4, { x1: p.x + 8, y1: p.y - 7, x2: p.x + 9 + w, y2: p.y + 5 }],
        ['end', p.x - 9, p.y + 4, { x1: p.x - 9 - w, y1: p.y - 7, x2: p.x - 8, y2: p.y + 5 }],
        ['middle', p.x, p.y - 10, { x1: p.x - w / 2, y1: p.y - 21, x2: p.x + w / 2, y2: p.y - 9 }],
        ['middle', p.x, p.y + 18, { x1: p.x - w / 2, y1: p.y + 8, x2: p.x + w / 2, y2: p.y + 20 }]
      ];
      const c = cands.find(c => !hit(c[3]));
      if (c) { boxes.push(c[3]); d.lab = c; } else d.lab = null;
    });

    others.forEach((d, k) => {
      const p = d.p, c = d.lab || ['start', p.x + 9, p.y + 4];
      h += `<g class="nm-node${d.lab ? '' : ' nolab'}${d.state ? ' br' : ''}" data-k="${k}" tabindex="0" role="button" aria-label="${d.n}, ${place(d)}, about ${p.km} km from Sultanpur"><circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="5"/><text x="${c[1].toFixed(1)}" y="${c[2].toFixed(1)}" text-anchor="${c[0]}">${d.n.replace(/ \(.*\)/, '')}</text></g>`;
    });

    netsvg.innerHTML = h;

    const distCountEl = document.getElementById('distCount');
    if (distCountEl) distCountEl.textContent = DIST.filter(d => !d.town && !d.state).length;

    const read = document.getElementById('nmRead'), home = DIST.find(d => d.home);
    const kOf = d => d.home ? 'home' : String(others.indexOf(d.town ? DIST.find(x => x.n === d.town) : d));

    const hot = k => {
      k = String(k);
      document.querySelectorAll('.nm-route').forEach(e => e.classList.toggle('hot', e.dataset.k === k));
      document.querySelectorAll('.nm-node').forEach(e => e.classList.toggle('hot', e.dataset.k === k));
      document.querySelectorAll('#stPanel .dchip[data-k]').forEach(e => e.classList.toggle('hot', e.dataset.k === k));
      const d = others[+k];
      if (read) {
        read.innerHTML = k === 'home' ? '<b>Sultanpur</b> · our factory is here, in Safipur, Lambhua' : d ? `<b>${d.n}</b> · ${place(d)} · about ${d.p.km} km from Sultanpur` : 'Hover or tap a dot to see the district.';
      }
    };

    const UP = DIST.filter(d => !d.state && !d.town), towns = DIST.filter(d => d.town);
    const TOP = ["Sultanpur", "Lucknow", "Ayodhya (Faizabad)", "Varanasi (Banaras)", "Prayagraj (Allahabad)", "Gorakhpur", "Jaunpur", "Azamgarh", "Gonda", "Barabanki", "Amethi", "Pratapgarh"];
    const chip = (d, extra) => {
      const tw = towns.filter(x => x.town === d.n);
      return `<button type="button" class="dchip${d.home ? ' home' : ''}${d.state ? ' br' : ''}${extra ? ' extra' : ''}" data-k="${kOf(d)}" data-n="${d.n}">${d.n}${tw.map(x => `<span class="tw" title="Town in ${d.n} district">+ ${x.n}</span>`).join('')}</button>`;
    };

    function renderState(st) {
      document.querySelectorAll('.state').forEach(b => b.setAttribute('aria-selected', b.dataset.st === st));
      const pn = document.getElementById('stPanel');
      if (!pn) return;
      if (st === 'Bihar') {
        const b = DIST.find(d => d.state);
        pn.innerHTML = `<div class="ph"><b>Bihar · by district</b><small>1 town</small></div><div class="bihar-row"><span class="dchip br" style="pointer-events:none">Gopalganj district</span><span class="arrow">→</span>${chip(b)}</div>`;
      } else {
        const rest = UP.filter(d => !TOP.includes(d.n)).sort((a, b) => a.n.localeCompare(b.n));
        pn.innerHTML = `<div class="ph"><b>Uttar Pradesh · by district</b><small>${UP.length} districts · towns shown with +</small></div><div class="dgrid">${TOP.map(n => chip(UP.find(d => d.n === n))).join('')}<button type="button" class="dchip more" id="stMore">+ ${rest.length} more districts</button></div>`;
        const stMore = document.getElementById('stMore');
        if (stMore) {
          stMore.onclick = e => {
            e.currentTarget.insertAdjacentHTML('beforebegin', rest.map(d => chip(d, 1)).join(''));
            e.currentTarget.remove();
            bindPills();
          };
        }
      }
      bindPills();
    }

    function bindPills() {
      document.querySelectorAll('#stPanel .dchip[data-k]').forEach(e => {
        if (e._b) return;
        e._b = 1;
        e.addEventListener('mouseenter', () => hot(e.dataset.k));
        e.addEventListener('focus', () => hot(e.dataset.k));
        e.addEventListener('click', () => {
          hot(e.dataset.k);
          showAnswer(DIST.find(d => d.n === e.dataset.n) || home);
        });
      });
    }

    document.querySelectorAll('.state').forEach(b => {
      b.addEventListener('click', () => {
        renderState(b.dataset.st);
        if (b.dataset.st === 'Bihar') hot(kOf(DIST.find(d => d.state)));
      });
    });
    renderState('Uttar Pradesh');

    document.querySelectorAll('.nm-node').forEach(e => {
      e.addEventListener('mouseenter', () => hot(e.dataset.k));
      e.addEventListener('focus', () => hot(e.dataset.k));
      e.addEventListener('click', () => hot(e.dataset.k));
    });

    // Finder search
    const ALIAS = {
      "Varanasi (Banaras)": ["banaras", "benaras", "benares", "kashi"],
      "Prayagraj (Allahabad)": ["allahabad", "ilahabad"],
      "Ayodhya (Faizabad)": ["faizabad"],
      "Rae Bareli": ["raebareli", "rai bareli", "rai bareilly", "raibareilly", "raebareilly"],
      "Ballia": ["baliya", "baliа"],
      "Bhadohi": ["sant ravidas nagar", "sant ravidas"],
      "Siddharthnagar": ["siddharth nagar"],
      "Ambedkar Nagar": ["ambedkarnagar", "akbarpur"],
      "Basti": ["bastti"],
      "Barauli": ["gopalganj"],
      "Sultanpur": ["safipur", "lambhua"]
    };
    const norm = s => (s || '').toLowerCase().replace(/\(.*?\)/g, ' ').replace(/[^a-z]/g, '');
    const keys = DIST.map(d => ({ d, ks: [d.n, ...(ALIAS[d.n] || []), ...(d.n.match(/\((.*)\)/) || []).slice(1)].map(norm) }));
    const match = q => {
      q = norm(q);
      if (!q) return [];
      const ex = keys.filter(o => o.ks.includes(q));
      if (ex.length) return ex.map(o => o.d);
      return keys.filter(o => o.ks.some(k => k.startsWith(q))).concat(keys.filter(o => !o.ks.some(k => k.startsWith(q)) && o.ks.some(k => k.includes(q) && q.length > 2))).map(o => o.d);
    };

    const fq = document.getElementById('findQ'), sg = document.getElementById('sugg'), ans = document.getElementById('answer');
    let sel = -1, cur = [];

    function showAnswer(d, typed) {
      if (!ans) return;
      if (!d) {
        ans.className = 'answer no';
        ans.innerHTML = `<span class="ai">?</span><div><b>We're not listed in “${typed || ''}” yet</b><p>Madhab may still reach you through a nearby distributor. Call us at <a href="tel:+919315231914">+91 93152 31914</a>, or <a href="distributor.html" id="bringIt">bring Madhab to your area</a>.</p></div>`;
        hot(-1);
        return;
      }
      const k = kOf(d);
      hot(k);
      if (d.home) {
        ans.className = 'answer home';
        ans.innerHTML = `<span class="ai">★</span><div><b>You're right next door!</b><p>Our factory is in Safipur, Lambhua, Sultanpur. Look for Madhab at stores near you.</p></div>`;
        return;
      }
      const base = d.town ? DIST.find(x => x.n === d.town) : d, km = base.p ? base.p.km : null;
      const loc = d.state ? 'Gopalganj district, Bihar' : d.town ? `${d.town} district, Uttar Pradesh` : `${d.n.replace(/ \(.*\)/, '')} district, Uttar Pradesh`;
      ans.className = 'answer yes';
      ans.innerHTML = `<span class="ai">✓</span><div><b>Yes! Madhab reaches ${d.n.replace(/ \(.*\)/, '')}</b><p>${loc}${km ? ` · about ${km} km from our factory` : ''}. Look for Madhab at stores supplied by our distributors.</p></div>`;
      const st = d.state ? 'Bihar' : 'Uttar Pradesh';
      const activeState = document.querySelector('.state[aria-selected="true"]');
      if (activeState && activeState.dataset.st !== st) {
        renderState(st);
      }
      hot(kOf(d));
    }

    function renderSugg() {
      if (!fq || !sg) return;
      cur = match(fq.value).slice(0, 6);
      sel = -1;
      if (!cur.length || norm(fq.value).length < 1) {
        sg.hidden = true;
        fq.setAttribute('aria-expanded', 'false');
        return;
      }
      sg.innerHTML = cur.map((d, i) => `<li role="option" id="sg${i}" aria-selected="false" data-i="${i}">${d.n}<small>${d.state ? 'Gopalganj, Bihar' : d.town ? 'Town in ' + d.town + ', UP' : 'District, Uttar Pradesh'}</small></li>`).join('');
      sg.hidden = false;
      fq.setAttribute('aria-expanded', 'true');
      sg.querySelectorAll('li').forEach(li => li.addEventListener('mousedown', ev => {
        ev.preventDefault();
        pick(+li.dataset.i);
      }));
    }

    function pick(i) {
      const d = cur[i];
      if (!d || !fq || !sg) return;
      fq.value = d.n.replace(/ \(.*\)/, '');
      sg.hidden = true;
      fq.setAttribute('aria-expanded', 'false');
      showAnswer(d);
    }

    function check() {
      if (!fq || !sg) return;
      const v = fq.value.trim();
      if (!v) return;
      const m = match(v);
      sg.hidden = true;
      if (sel >= 0) return pick(sel);
      showAnswer(m.length && (m.length === 1 || norm(m[0].n).startsWith(norm(v))) ? m[0] : null, v);
    }

    if (fq && sg) {
      fq.addEventListener('input', renderSugg);
      fq.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          if (sg.hidden) return;
          e.preventDefault();
          sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + cur.length) % cur.length;
          sg.querySelectorAll('li').forEach((li, i) => li.setAttribute('aria-selected', i === sel));
          fq.setAttribute('aria-activedescendant', 'sg' + sel);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          check();
        } else if (e.key === 'Escape') {
          sg.hidden = true;
        }
      });
      fq.addEventListener('blur', () => setTimeout(() => { sg.hidden = true; }, 120));
    }

    const findGo = document.getElementById('findGo');
    if (findGo) findGo.onclick = check;

    const netmapSvg = document.querySelector('.netmap svg');
    if (netmapSvg) netmapSvg.addEventListener('mouseleave', () => hot(-1));

    const netmapEl = document.querySelector('.netmap');
    if (netmapEl && 'IntersectionObserver' in window) {
      const mio = new IntersectionObserver(es => es.forEach(en => {
        if (en.isIntersecting) {
          netmapEl.classList.add('in');
          mio.disconnect();
        }
      }), { threshold: .2 });
      mio.observe(netmapEl);
    }
  }

  /* ---------- PARTNER TABS & FORMS ---------- */
  function initPartnerTabs() {
    const seg = document.querySelector(".seg");
    const tabs = document.querySelectorAll(".seg [role=tab]");
    const pill = document.getElementById("segpill");
    const panes = document.querySelectorAll(".pane");

    function movePill() {
      const active = document.querySelector('.seg [aria-selected="true"]');
      if (!active || !pill) return;
      pill.style.left = active.offsetLeft + "px";
      pill.style.width = active.offsetWidth + "px";
    }

    function setPane(id) {
      tabs.forEach(b => b.setAttribute("aria-selected", b.dataset.seg === id ? "true" : "false"));
      panes.forEach(p => p.classList.toggle("on", p.id === "pane-" + id));
      movePill();
    }

    if (tabs.length) {
      tabs.forEach(b => b.addEventListener("click", () => setPane(b.dataset.seg)));
      window.addEventListener("resize", movePill);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(movePill);
      }
      setTimeout(movePill, 60);
    }

    // Populate states dropdown
    const stateSelect = document.getElementById("d-state");
    if (stateSelect && stateSelect.options.length <= 1) {
      const STATES = ["Uttar Pradesh","Bihar","Madhya Pradesh","Uttarakhand","Delhi","Haryana","Rajasthan","Jharkhand","Chhattisgarh","Punjab","Maharashtra","Gujarat","West Bengal","Odisha","Assam","Andhra Pradesh","Telangana","Karnataka","Tamil Nadu","Kerala","Goa","Himachal Pradesh","Jammu & Kashmir","Ladakh","Chandigarh","Arunachal Pradesh","Manipur","Meghalaya","Mizoram","Nagaland","Sikkim","Tripura","Puducherry","Andaman & Nicobar Islands","Dadra & Nagar Haveli and Daman & Diu","Lakshadweep"];
      STATES.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s;
        opt.textContent = s;
        stateSelect.appendChild(opt);
      });
    }

    // Populate B2B products checkboxes
    const b2bChecks = document.getElementById("b-products");
    if (b2bChecks && b2bChecks.children.length === 0) {
      const B2B_ITEMS = ["Ladi Pav","Burger Bun","Sumo Burger","Till Bun","Sandwich Bread","Slice Bread","Madhab Rusk","Other breads"];
      b2bChecks.innerHTML = B2B_ITEMS.map(n => `<label><input type="checkbox" name="Products" value="${n}"> ${n}</label>`).join("");
    }

    // Global listener for data-pane trigger links
    document.addEventListener("click", e => {
      const pn = e.target.closest("[data-pane]");
      if (pn) {
        setPane(pn.dataset.pane);
        if (pn.dataset.product && b2bChecks) {
          const box = b2bChecks.querySelector(`input[value="${pn.dataset.product}"]`);
          if (box) box.checked = true;
        }
      }
    });

    // Check hash for pane
    if (location.hash === "#b2b" || location.hash === "#b2b-supply") {
      setPane("b2b");
    } else if (location.hash === "#distributor" || location.hash === "#dist") {
      setPane("dist");
    }

    // Forms prefilled email submission handling
    document.querySelectorAll("form.form, form.partner-form").forEach(f => {
      f.addEventListener("submit", e => {
        e.preventDefault();
        if (!f.checkValidity()) {
          f.reportValidity();
          const bad = f.querySelector(":invalid");
          if (bad) bad.focus();
          return;
        }
        const fd = new FormData(f);
        const lines = [];
        const seen = {};
        for (const [k, v] of fd.entries()) {
          if (!v) continue;
          seen[k] = seen[k] ? seen[k] + ", " + v : v;
        }
        for (const k in seen) {
          lines.push(`${k}: ${seen[k]}`);
        }
        const subj = `${f.dataset.kind || 'Partner enquiry'} – ${seen.Name || ''}${seen.Firm || seen.Business ? ' (' + (seen.Firm || seen.Business) + ')' : ''}`;
        
        // Prefilled mailto
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(lines.join('\n') + '\n\n— Sent from the Madhab website')}`;
        f.classList.add("sent");
      });
    });
  }

  initPartnerTabs();

  // Observe any newly added reveals
  observeReveals();
})();
