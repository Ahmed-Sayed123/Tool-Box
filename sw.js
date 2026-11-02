const CACHE_NAME = "tool-box-v3";

const FILES = [
  "./",
  "./index.html",
  "./Tool-box.css",
  "./Tool-box.js",
  "./manifest.json",
  "./calc.html",
  "./calc.css",
  "./calc.js",
  "./date.html",
  "./date.css",
  "./date.js",
  "./password.html",
  "./password.css",
  "./password.js",
  "./percent.html",
  "./percent.css",
  "./percent.js",
  "./icon-72.png",
  "./icon-96.png",
  "./icon-128.png",
  "./icon-144.png",
  "./icon-152.png",
  "./icon-192.png",
  "./icon-384.png",
  "./icon-512.png",
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES);
    }),
  );

  self.skipWaiting();
});

// Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name)),
      );
    }),
  );

  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((response) => {
        if (response.ok) {
          const responseClone = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }

        return response;
      });
    }),
  );
});
