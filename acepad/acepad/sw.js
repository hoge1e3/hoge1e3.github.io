
// Service wa-ka-
// Service Worker のバージョンとキャッシュする App Shell を定義する

const NAME = 'acepad-os';
const VERSION = '005';
const CACHE_NAME = NAME + VERSION;
const urlsToCache = [
  //'./index.html',
  "https://www.tonyu.jp/e/js/lib/ace-noconflict/ace.js",
  "https://www.tonyu.jp/e/js/lib/ace-noconflict/ext-language_tools.js",
  "https://www.tonyu.jp/e/js/lib/jquery-1.12.1.js",
  "https://www.tonyu.jp/e/js/fs/FS.js",
  "https://www.tonyu.jp/e/js/lib/jszip.min.js",
];

// Service Worker へファイルをインストール

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// リクエストされたファイルが Service Worker にキャッシュされている場合
// キャッシュからレスポンスを返す

self.addEventListener('fetch', function (event) {
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin')
    return;
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Cache Storage にキャッシュされているサービスワーカーのkeyに変更があった場合
// 新バージョンをインストール後、旧バージョンのキャッシュを削除する
// (このファイルでは CACHE_NAME をkeyの値とみなし、変更を検知している)

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!CACHE_NAME.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log(CACHE_NAME + "activated");
    })
  );
});
