const CACHE_NAME = 'klik-obat-v4';
const urlsToCache = [
  '/',
  '/inner-app/',
  '/inner-app/index.html',
  '/inner-app/basket/',
  '/inner-app/basket/index.html', 
  '/manifest.json',
  '/favicon_v3.ico'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Перехват запросов
self.addEventListener('fetch', (event) => {
  // Полностью исключаем видео из обработки Service Worker
  if (event.request.url.includes('.mp4') || 
      event.request.url.includes('.webm') || 
      event.request.url.includes('.avi') ||
      event.request.url.includes('video') ||
      event.request.url.includes('media') ||
      event.request.url.includes('haha.mp4')) {
    // НЕ обрабатываем видео через Service Worker вообще
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Возвращаем кэшированный ответ, если он есть
        if (response) {
          return response;
        }
        
        // Иначе делаем запрос к сети
        return fetch(event.request);
      }
    )
  );
}); 