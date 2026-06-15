const CACHE_NAME = "hardwood-26-v7";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./mobile.css",
  "./game.js",
  "./enhancements.js",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match("./index.html"))
        .then(async response => {
          if (!response) return response;
          let html = await response.text();
          if (!html.includes("mobile.css")) {
            html = html
              .replace("</head>", '  <link rel="stylesheet" href="mobile.css">\n</head>')
              .replace("</body>", '  <script src="enhancements.js"></script>\n</body>');
          }
          const headers = new Headers(response.headers);
          headers.set("content-type", "text/html; charset=utf-8");
          return new Response(html, { status: response.status, statusText: response.statusText, headers });
        })
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("./index.html")))
  );
});
