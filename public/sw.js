
const CACHE_NAME = "bm-konxept-v2";
const APP_SHELL = ["/", "/manifest.webmanifest", "/logo.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name.startsWith("bm-konxept-") && name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Handle only same-origin GET requests.
  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  // Always check the network first for page navigation.
  // This prevents old cached HTML pages from being served.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const cachedHome = await caches.match("/");
        return cachedHome || Response.error();
      })
    );

    return;
  }

  // Fetch assets and application data from the network.
  // Use cached files only as an offline fallback.
  event.respondWith(
    fetch(request).catch(async () => {
      const cachedResponse = await caches.match(request);
      return cachedResponse || Response.error();
    })
  );
});
