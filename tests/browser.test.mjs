import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = process.env.TEST_BASE_URL || 'http://localhost:4173/';
let browser;
before(async () => {
 browser = await chromium.launch({ headless:true, executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined });
});
after(async () => { await browser?.close(); });

async function pageAt(route, viewport={width:1440,height:1000}) {
 const page=await browser.newPage({viewport});
 const errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 page.on('response',response=>{
  if (new URL(response.url()).origin === new URL(base).origin && /\.(js|css|svg|json)(\?|$)/.test(response.url()) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
 });
 page.on('console',message=>{ if (/hydration/i.test(message.text())) errors.push(message.text()); });
 await page.goto(new URL(route,base).href,{waitUntil:'networkidle'});
 return {page,errors};
}

test('navigation stays in Nuxt, updates metadata and supports back/forward', async () => {
 const {page,errors}=await pageAt('');
 try {
  await page.evaluate(()=>window.__navigationSentinel='preserved');
  const animated = page.waitForFunction(() => [...document.querySelectorAll('.page-leave-active,.page-enter-active')].some(el => el.getAnimations().some(animation => Number(animation.effect?.getTiming().duration) > 1)));
  await page.locator('.sidebar-nav').getByText('Услуги',{exact:true}).click();
  await animated;
  await page.waitForURL('**/services');
  await page.locator('.service-card').first().waitFor();
  assert.equal(await page.locator('.service-card').count(),13);
  assert.equal(await page.evaluate(()=>window.__navigationSentinel),'preserved');
  assert.equal(await page.title(),'Сударь Барбершоп | Услуги');
  assert.equal(await page.locator('.sidebar-nav .is-active').textContent(),'Услуги');
  await page.locator('.sidebar-nav').getByText('Галерея',{exact:true}).click();
  await page.waitForURL('**/gallery');
  await page.locator('.gallery-item').first().waitFor();
  assert.equal(await page.locator('.gallery-item').count(),9);
  await page.goBack();
  await page.waitForURL('**/services');
  await page.locator('.service-card').first().waitFor();
  await page.goForward();
  await page.waitForURL('**/gallery');
  await page.locator('.gallery-item').first().waitFor();
  assert.deepEqual(errors,[]);
 } finally { await page.close(); }
});

test('all filters and lightbox cycling, keyboard, backdrop and focus restoration work', async () => {
 const {page,errors}=await pageAt('gallery');
 try {
  for (const [filter,count] of [['haircut',3],['beard',2],['interior',2],['process',2],['all',9]]) {
   await page.locator(`[data-filter="${filter}"]`).click();
   assert.equal(await page.locator('.gallery-item').count(),count);
  }
  await page.locator('[data-filter="beard"]').click();
  await page.locator('.gallery-item').first().focus();
  await page.keyboard.press('Enter');
  await page.locator('.lightbox.is-open').waitFor();
  assert.equal(await page.locator('[data-lightbox-title]').textContent(),'Beard detail');
  await page.keyboard.press('ArrowLeft');
  assert.equal(await page.locator('[data-lightbox-title]').textContent(),'Sharp outline');
  await page.locator('[data-lightbox-next]').click();
  assert.equal(await page.locator('[data-lightbox-title]').textContent(),'Beard detail');
  assert.equal(await page.evaluate(()=>document.body.style.overflow),'hidden');
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('.lightbox.is-open').count(),0);
  assert.equal(await page.evaluate(()=>document.body.style.overflow),'');
  assert.equal(await page.locator('.gallery-item').first().evaluate(el=>el===document.activeElement),true);
  await page.keyboard.press('Space');
  await page.locator('.lightbox.is-open').waitFor();
  await page.locator('[data-lightbox-close]').click();
  await page.locator('.gallery-item').first().click();
  await page.locator('[data-lightbox]').click({position:{x:2,y:2}});
  assert.equal(await page.locator('.lightbox.is-open').count(),0);
  assert.deepEqual(errors,[]);
 } finally { await page.close(); }
});

test('mobile menu closes on navigation and Escape and releases scrolling', async () => {
 const {page,errors}=await pageAt('',{width:390,height:844});
 try {
  await page.getByRole('button',{name:'Открыть меню'}).click();
  await page.locator('.fullscreen-menu.is-open').waitFor();
  assert.equal(await page.evaluate(()=>document.body.style.overflow),'hidden');
  await page.locator('.fullscreen-nav').getByText('Галерея',{exact:true}).click();
  await page.waitForURL('**/gallery');
  assert.equal(await page.locator('.fullscreen-menu.is-open').count(),0);
  assert.equal(await page.evaluate(()=>document.body.style.overflow),'');
  await page.getByRole('button',{name:'Открыть меню'}).click();
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('.fullscreen-menu.is-open').count(),0);
  assert.equal(await page.evaluate(()=>document.body.style.overflow),'');
  for (const width of [320,390,720,1080,1440]) {
   await page.setViewportSize({width,height:900});
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`overflow at ${width}px`);
  }
  assert.deepEqual(errors,[]);
 } finally { await page.close(); }
});

test('contact map initializes again after client navigation; phone and social links survive', async () => {
 const {page,errors}=await pageAt('contacts');
 try {
  assert.equal(await page.locator('a[href="tel:+79892692442"]').count(),1);
  assert.equal(await page.locator('a[href="https://vk.ru/sudarkrd1"]').count(),1);
  await page.locator('#barbershop-map iframe[src*="yandex.ru/map-widget"]').waitFor();
  assert.equal(await page.locator('#barbershop-map iframe').count(),1);
  await page.locator('.sidebar-nav').getByText('Главная',{exact:true}).click();
  await page.waitForURL(new URL('', base).href);
  await page.locator('.cta-button').click();
  await page.waitForURL('**/contacts');
  await page.locator('#barbershop-map').waitFor();
  await page.locator('#barbershop-map iframe[src*="yandex.ru/map-widget"]').waitFor();
  assert.equal(await page.locator('#barbershop-map iframe').count(),1);
  assert.deepEqual(errors,[]);
 } finally { await page.close(); }
});
