// sw.js
self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // tutup notifikasi dulu
    event.waitUntil(
        clients.openWindow('https://example.com') // ini yang mencoba bypass sandbox
    );
});