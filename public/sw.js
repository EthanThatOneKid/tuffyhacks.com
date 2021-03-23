self.addEventListener('install', function (event) {
  console.log('Hello world from the Service Worker 🤙');
});

self.addEventListener('notificationclick', event => {
  if (event.action !== 'close') {
    event.waitUntil(self.clients.openWindow('/event/stage'));
  }
});
