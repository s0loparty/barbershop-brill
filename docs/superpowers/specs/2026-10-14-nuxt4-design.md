# Nuxt 4 migration

Preserve all four pages, Russian copy, prices, images, fonts, spacing, colors,
responsive breakpoints and animations of the existing Sudar Barbershop website.
Use Nuxt 4 app/ pages, a shared Vue layout, original CSS and data. Replace DOM
construction with Vue state and lifecycle cleanup. Use native Nuxt file-based routes /, /services, /gallery and /contacts, with native pageTransition animation.
Keep GitHub Pages at /barbershop/, with configurable NUXT_APP_BASE_URL and
prerendered .output/public. Keep the Yandex constructor map working on client
navigation. Verify desktop/mobile visuals, gallery, menu, metadata, transitions,
direct static URLs, production build and typecheck. No content redesign.

User refinement: standard Nuxt routing and built-in pageTransition; remove .html aliases and manual prerender configuration.
