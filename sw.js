const CACHE_NAME = "greenbite-cache-v1"; 
const urlsToCache = [
  // HTML
  "Index.html",       
  "Recipes.html",     
  "Calculator.html",  
  "Workout.html", 
  "Mindfulness.html",
  "Contact.html", 

  // CSS
  "/CSS/index_style.css",
  "/CSS/cal_style.css",
  "/CSS/contact_style.css",
  "/CSS/mind_style.css",
  "/CSS/Recipes_style.css",
  "/CSS/workout_style.css",
  "/CSS/reset_style.css",
  "/CSS/footer.css",
  "/CSS/nav.css",
  "/CSS/general.css",

  //JS
  "/java_script/cal.js",
  "/java_script/common.js",
  "/java_script/contact.js",
  "/java_script/footer.js",
  "/java_script/index.js",
  "/java_script/navbar.js",
  "/java_script/Recipes.js",
  "/java_script/workout.js",
  "/java_script/mind.js",

  // Manifest + icons
  "/other/manifest.json",
  "/Images/192_icon.png",
  "/Images/512_icon.png",
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