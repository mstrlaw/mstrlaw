// Cloudflare Pages Function -> served at https://<your-domain>/api/wakatime
// Proxies the public WakaTime share JSON so the browser can fetch it
// same-origin (no CORS bridge needed). Edge-cached for 1h.

const WAKATIME_URL =
  'https://wakatime.com/share/@mstrlaw/4e394a3c-8d3f-449f-b686-1b0241124e2d.json';

export async function onRequestGet() {
  const upstream = await fetch(WAKATIME_URL, {
    cf: { cacheTtl: 3600, cacheEverything: true },
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
