/// <reference lib="webworker" />

const CACHE_NAME = 'jmt-portfolio-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/index.css',
  '/assets/index.js'
];

// Install event - cache static assets
self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      (self as unknown as ServiceWorkerGlobalScope).skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      (self as unknown as ServiceWorkerGlobalScope).clients.claim();
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event: FetchEvent) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip API calls
  if (event.request.url.includes('/api/')) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      // Return cached version if available
      if (cached) {
        // Fetch new version in background
        fetch(event.request).then((response) => {
          if (response.ok) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
            });
          }
        }).catch(() => {
          // Network error - cached version is fine
        });
        return cached;
      }

      // Otherwise fetch from network
      return fetch(event.request).then((response) => {
        if (!response.ok) return response;

        // Cache successful responses
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, clone);
        });
        return response;
      }).catch(() => {
        // Network failed - try to return fallback
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        throw new Error('Network request failed');
      });
    })
  );
});

// Push notifications (if enabled later)
self.addEventListener('push', (event: PushEvent) => {
  const options = event.data?.json() || {
    body: 'New update available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png'
  };

  event.waitUntil(
    (self as unknown as ServiceWorkerGlobalScope).registration.showNotification('JMT Portfolio', options)
  );
});

export {};
