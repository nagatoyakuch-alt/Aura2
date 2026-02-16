self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("aura-cache").then(cache => {
      return cache.addAll(["/","/index.html"]);
    })
  );
});