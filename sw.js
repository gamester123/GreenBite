const CACHE_NAME = "greenbite-cache-v1"; 
const urlsToCache = [
  // HTML
  "index.html",       
  "recipes.html",     
  "calculator.html",  
  "workout.html", 
  "mindfulness.html",
  "contact.html", 

  // CSS
  "./css/index_style.css",
  "./css/cal_style.css",
  "./css/contact_style.css",
  "./css/mind_style.css",
  "./css/recipes_style.css",
  "./css/workout_style.css",
  "./css/reset_style.css",
  "./css/footer.css",
  "./css/nav.css",
  "./css/general.css",

  //JS
  "./java_script/cal.js",
  "./java_script/common.js",
  "./java_script/contact.js",
  "./java_script/footer.js",
  "./java_script/index.js",
  "./java_script/navbar.js",
  "./java_script/Recipes.js",
  "./java_script/workout.js",
  "./java_script/mind.js",

  // Manifest + icons
  "manifest.json",
  "192_icon.png",
  "512_icon.png",
  "favicon.png",
];

// Install event (runs once when browser installs the Service Worker)
self.addEventListener("install", event => {
  console.log("Service Worker: Installing & Caching Files");
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event (clean up old caches if version changes)
self.addEventListener("activate", event => {
  console.log("Service Worker: Activated");
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

// Fetch event (intercepts requests → serves from cache first if offline)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // return cached file OR fetch from network
      return response || fetch(event.request);
    })
  );
});