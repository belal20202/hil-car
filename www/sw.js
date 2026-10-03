const C='hcri-v3',F=['./','index.html','manifest.json','icon.svg','privacy-policy.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
