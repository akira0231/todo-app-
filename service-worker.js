// キャッシュするファイルの名前とバージョンを定義
const CACHE_NAME = 'todo-app-cache-v1';
// キャッシュするファイルのリスト
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js'
    // アイコンを自分で用意した場合は以下も追加
    // '/icons/icon-192x192.png',
    // '/icons/icon-512x512.png'
];

// 1. インストール処理
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// 2. リクエストがあった場合に、キャッシュから応答する処理
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // キャッシュにヒットすれば、それを返す
                if (response) {
                    return response;
                }
                // ヒットしなければ、ネットワークにリクエストを送る
                return fetch(event.request);
            })
    );
});
