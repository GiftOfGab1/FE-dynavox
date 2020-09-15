const CACHE_NAME = "version-1";
const urlsToCache = ['index.html'];

const self = this;

// Installation SW

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('opened cache');
                return cache.addAll(urlsToCache)
            })
    )
})

// Listen For Requests

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('.html'))
            })
    )
})

// Activate the SW

self.addEventListener('activate', (event) => {
    const cacheWhiteList = []
    cacheWhiteList.push(CACHE_NAME)
    console.log(caches);
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName)
            }
        })
    ))
)
})
