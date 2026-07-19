// Worker entry for the mstrlaw.com Static Assets deployment.
// Handles the /api/wakatime proxy; everything else falls through to the
// static site in ./dist via the ASSETS binding.

const WAKATIME_URL =
  'https://wakatime.com/share/@mstrlaw/4e394a3c-8d3f-449f-b686-1b0241124e2d.json';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/wakatime') {
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

    // Serve the static site for all other requests.
    return env.ASSETS.fetch(request);
  },
};
