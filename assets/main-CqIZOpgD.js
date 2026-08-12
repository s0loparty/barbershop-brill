(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{href:`index.html`,label:`Главная`,key:`home`},{href:`services.html`,label:`Услуги`,key:`services`},{href:`gallery.html`,label:`Галерея`,key:`gallery`},{href:`contacts.html`,label:`Контакты`,key:`contacts`}],t=[{href:`https://vk.com`,label:`VK`},{href:`https://instagram.com`,label:`IG`},{href:`https://t.me`,label:`TG`}],n=`contacts.html#route`,r=[{number:`01`,name:`Мужская стрижка`,price:`1500 ₽`,image:`https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80`,shape:`wide`},{number:`02`,name:`Стрижка бороды`,price:`800 ₽`,image:`https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1000&q=80`},{number:`03`,name:`Бритьё опасной бритвой`,price:`1200 ₽`,image:`https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1100&q=80`},{number:`04`,name:`Стрижка для мальчиков`,price:`1000 ₽`,image:`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80`},{number:`05`,name:`Укладка / стайлинг`,price:`500 ₽`,image:`https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80`,shape:`tall`},{number:`06`,name:`Комплекс: стрижка + борода`,price:`2000 ₽`,image:`https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80`}],i=[{id:1,title:`Fade contour`,category:`Стрижки`,filter:`haircut`,image:`https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80`},{id:2,title:`Precision side`,category:`Стрижки`,filter:`haircut`,image:`https://images.unsplash.com/photo-1512690459411-b0fd1c86b8ec?auto=format&fit=crop&w=900&q=80`},{id:3,title:`Brill room`,category:`Интерьер`,filter:`interior`,image:`https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80`},{id:4,title:`Hot towel ritual`,category:`Процесс`,filter:`process`,image:`https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80`},{id:5,title:`Silver crop`,category:`Стрижки`,filter:`haircut`,image:`https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=900&q=80`},{id:6,title:`Chair line-up`,category:`Интерьер`,filter:`interior`,image:`https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=950&q=80`},{id:7,title:`Beard detail`,category:`Борода`,filter:`beard`,image:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80`},{id:8,title:`Clipper hands`,category:`Процесс`,filter:`process`,image:`https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=950&q=80`},{id:9,title:`Sharp outline`,category:`Борода`,filter:`beard`,image:`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80`}],a=document.body.dataset.page,o={location:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>`,clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`,phone:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6.6 3.9 9.8 7a1.8 1.8 0 0 1 .3 2.2l-1.1 1.7a15 15 0 0 0 4.9 4.9l1.7-1.1a1.8 1.8 0 0 1 2.2.3l3.1 3.2a1.8 1.8 0 0 1-.3 2.8 8.8 8.8 0 0 1-4.8 1.1C8.8 22 2 15.2 2 7.8a8.8 8.8 0 0 1 1.1-4.8 1.8 1.8 0 0 1 2.8-.3Z"></path></svg>`,send:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M22 2 11 13"></path><path d="m22 2-7 20-4-9-9-4 20-7Z"></path></svg>`},s=(t=!1)=>e.map(e=>`
        <a class="nav-link ${e.key===a?`is-active`:``}" href="${e.href}" ${t?`data-nav-link="mobile"`:``}>${e.label}</a>
      `).join(``),c=()=>t.map(e=>`
        <a class="social-link" href="${e.href}" target="_blank" rel="noreferrer" aria-label="${e.label}">
          ${e.label}
        </a>
      `).join(``);function l(){let e=document.querySelector(`[data-shell]`);if(!e)return;e.insertAdjacentHTML(`afterbegin`,`
      <div class="page-transition" data-page-transition aria-hidden="true"></div>
      <aside class="site-sidebar" aria-label="Основная навигация">
        <div class="brand-lockup">
          <a href="index.html" class="wordmark">BRILL</a>
          <span class="submark">Barbershop</span>
        </div>
        <nav class="sidebar-nav">${s(!1)}</nav>
        <div class="sidebar-bottom">
          <div class="side-divider"></div>
          <a class="booking-link" href="${n}">Записаться <span aria-hidden="true">→</span></a>
          <div class="social-links">${c()}</div>
        </div>
      </aside>

      <div class="fullscreen-menu" data-fullscreen-menu aria-hidden="true">
        <div class="mobile-header">
          <div class="brand-lockup">
            <a href="index.html" class="wordmark">BRILL</a>
            <span class="submark">Barbershop</span>
          </div>
          <button class="menu-toggle" type="button" data-menu-toggle aria-label="Закрыть меню">
            <span class="menu-toggle-bar"></span>
          </button>
        </div>
        <nav class="fullscreen-nav">${s(!0)}</nav>
        <div class="sidebar-bottom">
          <a class="booking-link" href="${n}" data-nav-link="mobile">Записаться <span aria-hidden="true">→</span></a>
          <div class="social-links">${c()}</div>
        </div>
      </div>

      <main class="site-main">
        <header class="mobile-header">
          <div class="brand-lockup">
            <a href="index.html" class="wordmark">BRILL</a>
            <span class="submark">Barbershop</span>
          </div>
          <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="fullscreen-menu" aria-label="Открыть меню">
            <span class="menu-toggle-bar"></span>
          </button>
        </header>
      </main>
    `);let t=e.querySelector(`.site-main`),r=e.querySelector(`[data-page-root]`);t&&r&&t.append(r)}function u(){let e=document.querySelector(`[data-fullscreen-menu]`),t=[...document.querySelectorAll(`[data-menu-toggle]`)],n=[...document.querySelectorAll(`[data-nav-link="mobile"]`)];if(!e||!t.length)return;let r=n=>{e.classList.toggle(`is-open`,n),e.setAttribute(`aria-hidden`,String(!n)),document.body.style.overflow=n?`hidden`:``,t.forEach(e=>{e.classList.toggle(`is-open`,n),e.setAttribute(`aria-expanded`,String(n))})};t.forEach(t=>{t.addEventListener(`click`,()=>{let t=!e.classList.contains(`is-open`);r(t)})}),n.forEach(e=>{e.addEventListener(`click`,()=>r(!1))}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&r(!1)})}function d(){let e=document.querySelector(`[data-page-transition]`);e&&(requestAnimationFrame(()=>{e.classList.remove(`is-active`)}),[...document.querySelectorAll(`a[href$=".html"], a[href*=".html#"], a[href^="index"], a[href^="services"], a[href^="gallery"], a[href^="contacts"]`)].forEach(t=>{t.addEventListener(`click`,n=>{let r=t.getAttribute(`href`);if(!r||r.startsWith(`http`)||r.startsWith(`#`))return;let i=new URL(r,window.location.href);i.pathname===window.location.pathname&&i.hash||(n.preventDefault(),e.classList.add(`is-active`),window.setTimeout(()=>{window.location.href=r},380))})}))}function f(){let e=document.querySelector(`[data-services-grid]`);e&&(e.innerHTML=r.map(e=>`
        <article class="service-card stagger-item ${e.shape?`service-card--${e.shape}`:``}">
          <img class="service-image" src="${e.image}" alt="${e.name}" loading="lazy" />
          <div class="service-content">
            <div class="service-topline">${e.number}</div>
            <h3 class="service-name">${e.name}</h3>
            <div class="service-price">${e.price}</div>
          </div>
        </article>
      `).join(``))}function p(e){let t=document.querySelector(`[data-gallery-grid]`);t&&(t.innerHTML=e.map((e,t)=>`
        <figure class="gallery-item stagger-item" tabindex="0" data-lightbox-index="${t}">
          <img src="${e.image}" alt="${e.title}" loading="lazy" />
          <figcaption>
            <span class="gallery-index">${String(t+1).padStart(2,`0`)}</span>
            <span class="gallery-meta">
              <strong>${e.title}</strong>
              <span>${e.category}</span>
            </span>
          </figcaption>
        </figure>
      `).join(``))}function m(){let e=document.querySelector(`[data-gallery-grid]`),t=[...document.querySelectorAll(`[data-filter]`)],n=document.querySelector(`[data-lightbox]`);if(!e||!t.length||!n)return;let r=`all`,a=i,o=0,s=n.querySelector(`[data-lightbox-image]`),c=n.querySelector(`[data-lightbox-title]`),l=n.querySelector(`[data-lightbox-category]`),u=e=>{o=e;let t=a[o];t&&(s.src=t.image,s.alt=t.title,c.textContent=t.title,l.textContent=t.category,n.classList.add(`is-open`),document.body.style.overflow=`hidden`)},d=()=>{n.classList.remove(`is-open`),document.body.style.overflow=``},f=e=>{o=(o+e+a.length)%a.length,u(o)},m=e=>{r=e,a=e===`all`?i:i.filter(t=>t.filter===e),t.forEach(t=>t.classList.toggle(`is-active`,t.dataset.filter===e)),p(a)};t.forEach(e=>{e.addEventListener(`click`,()=>m(e.dataset.filter))}),e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-lightbox-index]`);t&&u(Number(t.dataset.lightboxIndex))}),e.addEventListener(`keydown`,e=>{if(e.key!==`Enter`&&e.key!==` `)return;let t=e.target.closest(`[data-lightbox-index]`);t&&(e.preventDefault(),u(Number(t.dataset.lightboxIndex)))}),n.querySelector(`[data-lightbox-close]`)?.addEventListener(`click`,d),n.querySelector(`[data-lightbox-prev]`)?.addEventListener(`click`,()=>f(-1)),n.querySelector(`[data-lightbox-next]`)?.addEventListener(`click`,()=>f(1)),n.addEventListener(`click`,e=>{e.target===n&&d()}),window.addEventListener(`keydown`,e=>{n.classList.contains(`is-open`)&&(e.key===`Escape`&&d(),e.key===`ArrowLeft`&&f(-1),e.key===`ArrowRight`&&f(1))}),m(r)}function h(){document.querySelectorAll(`[data-contact-icon]`).forEach(e=>{let t=o[e.dataset.contactIcon];t&&(e.innerHTML=t)})}l(),u(),d(),f(),m(),h();