import "./styles.css";
import { bookingUrl, galleryItems, navigation, services, socials } from "./data.js";

const pageKey = document.body.dataset.page;

const svgIcons = {
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6.6 3.9 9.8 7a1.8 1.8 0 0 1 .3 2.2l-1.1 1.7a15 15 0 0 0 4.9 4.9l1.7-1.1a1.8 1.8 0 0 1 2.2.3l3.1 3.2a1.8 1.8 0 0 1-.3 2.8 8.8 8.8 0 0 1-4.8 1.1C8.8 22 2 15.2 2 7.8a8.8 8.8 0 0 1 1.1-4.8 1.8 1.8 0 0 1 2.8-.3Z"></path></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M22 2 11 13"></path><path d="m22 2-7 20-4-9-9-4 20-7Z"></path></svg>`,
};

const createNavigation = (mobile = false) =>
  navigation
    .map(
      (item) => `
        <a class="nav-link ${item.key === pageKey ? "is-active" : ""}" href="${item.href}" ${mobile ? 'data-nav-link="mobile"' : ""
        }>${item.label}</a>
      `
    )
    .join("");

const createSocialLinks = () =>
  socials
    .map(
      (item) => `
        <a class="social-link" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${item.label}">
          ${item.label}
        </a>
      `
    )
    .join("");

function mountShell() {
  const shell = document.querySelector("[data-shell]");
  if (!shell) return;

  shell.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="page-transition" data-page-transition aria-hidden="true"></div>
      <aside class="site-sidebar" aria-label="Основная навигация">
        <div class="brand-lockup">
          <a href="index.html" class="wordmark">Сударь</a>
          <span class="submark">Барбершоп</span>
        </div>
        <nav class="sidebar-nav">${createNavigation(false)}</nav>
        <div class="sidebar-bottom">
          <div class="side-divider"></div>
          <a class="booking-link" href="${bookingUrl}">Записаться <span aria-hidden="true">→</span></a>
          <div class="social-links">${createSocialLinks()}</div>
        </div>
      </aside>

      <div class="fullscreen-menu" data-fullscreen-menu aria-hidden="true">
        <div class="mobile-header">
          <div class="brand-lockup">
            <a href="index.html" class="wordmark">Сударь</a>
            <span class="submark">Барбершоп</span>
          </div>
          <button class="menu-toggle" type="button" data-menu-toggle aria-label="Закрыть меню">
            <span class="menu-toggle-bar"></span>
          </button>
        </div>
        <nav class="fullscreen-nav">${createNavigation(true)}</nav>
        <div class="sidebar-bottom">
          <a class="booking-link" href="${bookingUrl}" data-nav-link="mobile">Записаться <span aria-hidden="true">→</span></a>
          <div class="social-links">${createSocialLinks()}</div>
        </div>
      </div>

      <main class="site-main">
        <header class="mobile-header">
          <div class="brand-lockup">
            <a href="index.html" class="wordmark">Сударь</a>
            <span class="submark">Барбершоп</span>
          </div>
          <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="fullscreen-menu" aria-label="Открыть меню">
            <span class="menu-toggle-bar"></span>
          </button>
        </header>
      </main>
    `
  );

  const main = shell.querySelector(".site-main");
  const page = shell.querySelector("[data-page-root]");
  if (main && page) main.append(page);
}

function setupMenu() {
  const menu = document.querySelector("[data-fullscreen-menu]");
  const toggles = [...document.querySelectorAll("[data-menu-toggle]")];
  const mobileLinks = [...document.querySelectorAll('[data-nav-link="mobile"]')];
  if (!menu || !toggles.length) return;

  const setMenuState = (open) => {
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
    toggles.forEach((toggle) => {
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  };

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const next = !menu.classList.contains("is-open");
      setMenuState(next);
    });
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });
}

function setupPageTransition() {
  const overlay = document.querySelector("[data-page-transition]");
  if (!overlay) return;
  requestAnimationFrame(() => {
    overlay.classList.remove("is-active");
  });

  const links = [...document.querySelectorAll('a[href$=".html"], a[href*=".html#"], a[href^="index"], a[href^="services"], a[href^="gallery"], a[href^="contacts"]')];
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#")) return;
      const target = new URL(href, window.location.href);
      if (target.pathname === window.location.pathname && target.hash) return;
      event.preventDefault();
      overlay.classList.add("is-active");
      window.setTimeout(() => {
        window.location.href = href;
      }, 380);
    });
  });
}

function mountServicesPreview() {
  const target = document.querySelector("[data-services-grid]");
  if (!target) return;

  target.innerHTML = services
    .map(
      (service) => `
        <article class="service-card stagger-item ${service.shape ? `service-card--${service.shape}` : ""}">
          <img class="service-image" src="${service.image}" alt="${service.name}" loading="lazy" />
          <div class="service-content">
            <div class="service-topline">${service.number}</div>
            <h3 class="service-name">${service.name}</h3>
            <div class="service-price">${service.price}</div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGallery(items) {
  const grid = document.querySelector("[data-gallery-grid]");
  if (!grid) return;

  grid.innerHTML = items
    .map(
      (item, index) => `
        <figure class="gallery-item stagger-item" tabindex="0" data-lightbox-index="${index}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <figcaption>
            <span class="gallery-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="gallery-meta">
              <strong>${item.title}</strong>
              <span>${item.category}</span>
            </span>
          </figcaption>
        </figure>
      `
    )
    .join("");
}

function setupGallery() {
  const grid = document.querySelector("[data-gallery-grid]");
  const filters = [...document.querySelectorAll("[data-filter]")];
  const lightbox = document.querySelector("[data-lightbox]");
  if (!grid || !filters.length || !lightbox) return;

  let activeFilter = "all";
  let activeItems = galleryItems;
  let currentIndex = 0;

  const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
  const lightboxTitle = lightbox.querySelector("[data-lightbox-title]");
  const lightboxCategory = lightbox.querySelector("[data-lightbox-category]");

  const openLightbox = (index) => {
    currentIndex = index;
    const item = activeItems[currentIndex];
    if (!item) return;
    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxCategory.textContent = item.category;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const stepLightbox = (direction) => {
    currentIndex = (currentIndex + direction + activeItems.length) % activeItems.length;
    openLightbox(currentIndex);
  };

  const applyFilter = (filterKey) => {
    activeFilter = filterKey;
    activeItems =
      filterKey === "all" ? galleryItems : galleryItems.filter((item) => item.filter === filterKey);
    filters.forEach((button) =>
      button.classList.toggle("is-active", button.dataset.filter === filterKey)
    );
    renderGallery(activeItems);
  };

  filters.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

  grid.addEventListener("click", (event) => {
    const item = event.target.closest("[data-lightbox-index]");
    if (!item) return;
    openLightbox(Number(item.dataset.lightboxIndex));
  });

  grid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const item = event.target.closest("[data-lightbox-index]");
    if (!item) return;
    event.preventDefault();
    openLightbox(Number(item.dataset.lightboxIndex));
  });

  lightbox.querySelector("[data-lightbox-close]")?.addEventListener("click", closeLightbox);
  lightbox.querySelector("[data-lightbox-prev]")?.addEventListener("click", () => stepLightbox(-1));
  lightbox.querySelector("[data-lightbox-next]")?.addEventListener("click", () => stepLightbox(1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  window.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") stepLightbox(-1);
    if (event.key === "ArrowRight") stepLightbox(1);
  });

  applyFilter(activeFilter);
}

function mountContactsIcons() {
  document.querySelectorAll("[data-contact-icon]").forEach((node) => {
    const icon = svgIcons[node.dataset.contactIcon];
    if (icon) node.innerHTML = icon;
  });
}

mountShell();
setupMenu();
setupPageTransition();
mountServicesPreview();
setupGallery();
mountContactsIcons();
