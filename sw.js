// Lets Android offer "Install app" so Time In opens like an app (no address bar).
// It caches nothing, so every update to the page shows at once.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request));
});
