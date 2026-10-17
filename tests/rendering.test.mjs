import { test } from 'node:test';
import assert from 'node:assert/strict';
const base = process.env.TEST_BASE_URL || 'http://localhost:4173/';
// Missing server-rendered content would leave crawlers and no-JS users with empty grids.
test('services and gallery arrive as complete HTML', async () => {
 const services = await (await fetch(new URL('services',base))).text();
 const gallery = await (await fetch(new URL('gallery',base))).text();
 assert.equal((services.match(/<article/g)||[]).length,13);
 assert.equal((gallery.match(/<figure/g)||[]).length,9);
});
for (const [route,title] of [['','Главная'],['services','Услуги'],['gallery','Галерея'],['contacts','Контакты']]) {
 test(`direct request to ${route || '/'} preserves the page and metadata`, async () => {
  const response=await fetch(new URL(route,base));
  assert.equal(response.status,200);
  const html=await response.text();
  assert.ok(html.includes(`<title>Сударь Барбершоп | ${title}</title>`));
  assert.match(html,/<html[^>]*lang="ru"/);
  assert.match(html,/<meta[^>]*name="description"[^>]*content="[^"]+"/);
 });
}
