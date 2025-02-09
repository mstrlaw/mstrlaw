import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_KYAYYqrx.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/admin.astro.mjs');
const _page1 = () => import('./pages/library/books.astro.mjs');
const _page2 = () => import('./pages/library.astro.mjs');
const _page3 = () => import('./pages/posts/2019-04-15-pixels-camp-cube.astro.mjs');
const _page4 = () => import('./pages/posts/2019-11-03-vr-newsroom.astro.mjs');
const _page5 = () => import('./pages/posts/2021-12-12-moving-from-gridsome-to-metalsmith.astro.mjs');
const _page6 = () => import('./pages/posts/2021-12-18-balancing-engineering-and-product-mindsets.astro.mjs');
const _page7 = () => import('./pages/posts/2021-12-24-facebook-aspirational-government.astro.mjs');
const _page8 = () => import('./pages/posts/2021-12-25-building-a-voice-controlled-shopping-assistant-bot-🛒.astro.mjs');
const _page9 = () => import('./pages/posts/2021-12-25-coronavirus-side-effects-may-include-erosion-of-privacy.astro.mjs');
const _page10 = () => import('./pages/posts/2021-12-25-playing-pokemongo-only-with-folks-wearing-a-levis-t-shirt.astro.mjs');
const _page11 = () => import('./pages/posts/2021-12-27-views-on-vue-podcast-—-building-micro-frontends-with-lawrence-almeida.astro.mjs');
const _page12 = () => import('./pages/posts/2021-12-31-what-does-it-means-to-be-an-adult.astro.mjs');
const _page13 = () => import('./pages/posts/2022-01-06-january-6th-and-the-urge-to-do-something.astro.mjs');
const _page14 = () => import('./pages/posts/2022-01-14-premonitions-from-infinite-detail.astro.mjs');
const _page15 = () => import('./pages/posts/2022-01-19-shipping-mindsets-between-b2c-and-b2b-products.astro.mjs');
const _page16 = () => import('./pages/posts/2022-01-23-on-fearing-a-i.astro.mjs');
const _page17 = () => import('./pages/posts/2022-03-10-from-ic-to-em-evolution-of-a-calendar.astro.mjs');
const _page18 = () => import('./pages/posts/2022-03-13-escaping-the-informational-bubble-–-on-building-thoro-news.astro.mjs');
const _page19 = () => import('./pages/posts/2022-03-15-seat-me-responsible-ai.astro.mjs');
const _page20 = () => import('./pages/posts/2022-05-02-on-systems-and-resilient-engineering-teams.astro.mjs');
const _page21 = () => import('./pages/posts/2022-06-26-too-much-communication-close-to-a-release-means-theres-a-problem.astro.mjs');
const _page22 = () => import('./pages/posts/2023-03-27-on-seniority-and-impact.astro.mjs');
const _page23 = () => import('./pages/posts/2024-05-08-how-to-cross-the-lake.astro.mjs');
const _page24 = () => import('./pages/posts.astro.mjs');
const _page25 = () => import('./pages/projects.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/admin/index.html", _page0],
    ["src/pages/library/books.js", _page1],
    ["src/pages/library/index.astro", _page2],
    ["src/pages/posts/2019-04-15-pixels-camp-cube.md", _page3],
    ["src/pages/posts/2019-11-03-vr-newsroom.md", _page4],
    ["src/pages/posts/2021-12-12-moving-from-gridsome-to-metalsmith.md", _page5],
    ["src/pages/posts/2021-12-18-balancing-engineering-and-product-mindsets.md", _page6],
    ["src/pages/posts/2021-12-24-facebook-aspirational-government.md", _page7],
    ["src/pages/posts/2021-12-25-building-a-voice-controlled-shopping-assistant-bot-🛒.md", _page8],
    ["src/pages/posts/2021-12-25-coronavirus-side-effects-may-include-erosion-of-privacy.md", _page9],
    ["src/pages/posts/2021-12-25-playing-pokemongo-only-with-folks-wearing-a-levis-t-shirt.md", _page10],
    ["src/pages/posts/2021-12-27-views-on-vue-podcast-—-building-micro-frontends-with-lawrence-almeida.md", _page11],
    ["src/pages/posts/2021-12-31-what-does-it-means-to-be-an-adult.md", _page12],
    ["src/pages/posts/2022-01-06-january-6th-and-the-urge-to-do-something.md", _page13],
    ["src/pages/posts/2022-01-14-premonitions-from-infinite-detail.md", _page14],
    ["src/pages/posts/2022-01-19-shipping-mindsets-between-b2c-and-b2b-products.md", _page15],
    ["src/pages/posts/2022-01-23-on-fearing-a-i.md", _page16],
    ["src/pages/posts/2022-03-10-from-ic-to-em-evolution-of-a-calendar.md", _page17],
    ["src/pages/posts/2022-03-13-escaping-the-informational-bubble-–-on-building-thoro-news.md", _page18],
    ["src/pages/posts/2022-03-15-seat-me-responsible-ai.md", _page19],
    ["src/pages/posts/2022-05-02-on-systems-and-resilient-engineering-teams.md", _page20],
    ["src/pages/posts/2022-06-26-too-much-communication-close-to-a-release-means-theres-a-problem.md", _page21],
    ["src/pages/posts/2023-03-27-on-seniority-and-impact.md", _page22],
    ["src/pages/posts/2024-05-08-how-to-cross-the-lake.md", _page23],
    ["src/pages/posts/index.astro", _page24],
    ["src/pages/projects/index.astro", _page25],
    ["src/pages/index.astro", _page26]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1b6ee191-c8a5-488d-ad4e-757eb1211aec"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
