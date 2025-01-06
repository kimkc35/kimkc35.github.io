'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8633dd41306c3fac48d5dee675353e09",
"assets/AssetManifest.bin.json": "ef432e12c84dba6b18b17d97bded3b29",
"assets/AssetManifest.json": "8823194728226dda2745a484a395d51e",
"assets/assets/fonts/ONE%2520Mobile%2520Bold.ttf": "79badd71ce490387bb296d5928e298cd",
"assets/assets/fonts/Tenada.ttf": "0ba8366fb06b6b4c2fe9d6b83ac85bcf",
"assets/assets/icons/free.png": "9c520a9a558c970cfe6c3bd8286dca6d",
"assets/assets/icons/pro.png": "c7bfc5fc630df183d38106a415a420b1",
"assets/assets/internal/patch_note.json": "53a1603575d2729b254e348637e35e68",
"assets/assets/json/alisa.json": "385ca019f8595d7be2df31fe88f182a3",
"assets/assets/json/asuka.json": "e4ad23440b94feaf77c99f5674a9b606",
"assets/assets/json/azucena.json": "d476f3d4f126de7c287a93feb3575b00",
"assets/assets/json/bryan.json": "c186962fa3bfe92cafa3df6edfd9d417",
"assets/assets/json/characters.json": "da4aa5de4838edf7d5b78170f9f0bc99",
"assets/assets/json/claudio.json": "d8ad9ee556308ec9d5565ea25490b5c4",
"assets/assets/json/clive.json": "cc9fac7b5fc6938f3ab12fb8114520b7",
"assets/assets/json/devil%2520jin.json": "7855461b0ac9a857436dad37f985e5d9",
"assets/assets/json/dragunov.json": "e58713e5499c72f01eac80fdbf380fed",
"assets/assets/json/eddy.json": "a89ccd7e79fe27411475757b42f3d45a",
"assets/assets/json/feng.json": "adb4cbea449ef603489a4aee4dee9408",
"assets/assets/json/heihachi.json": "ec377a7b9e27620cce474b921736c7bc",
"assets/assets/json/hwoarang.json": "a8b0d69870cbb88ba6f535f9e4ec7bd5",
"assets/assets/json/jack-8.json": "44417893356e7aa04f8ed0e3b229e12f",
"assets/assets/json/jin.json": "ad557c52ac23cd05b6ca0875cbe3acd7",
"assets/assets/json/jun.json": "42156b4f07bfc8a5cd4233a3cfad97d1",
"assets/assets/json/kazuya.json": "38c9fc4a3f365ea47f8939f64db32b26",
"assets/assets/json/king.json": "abb5e21018f1ef964d81879f2b201550",
"assets/assets/json/kuma.json": "fb9fc21c56f99864191c04dc2e62e7e0",
"assets/assets/json/lars.json": "93f9173f2751a2d303a8e9fdc911807d",
"assets/assets/json/law.json": "155311bee16dc2e61affd15e48eded98",
"assets/assets/json/lee.json": "fd3fc657e4dc9da062ccbdc70e12a603",
"assets/assets/json/leo.json": "5b383fb3a4b63a77d8f18f04fd7020d2",
"assets/assets/json/leroy.json": "ad82579cc2f059d39fff6f86940eee2d",
"assets/assets/json/lidia.json": "44b803d638bb079e9966b0381fa6240d",
"assets/assets/json/lili.json": "e5244043afbb3621843060387f900f0d",
"assets/assets/json/nina.json": "909161dbb51341109d59f2cb6ee1da4f",
"assets/assets/json/panda.json": "d813bed044958b804ddc290bcbb8f47c",
"assets/assets/json/paul.json": "45cfa800256a2ff9cbe0910d7a2cbe73",
"assets/assets/json/raven.json": "8da9f7754c7ad43de624edde99b9531e",
"assets/assets/json/reina.json": "772abbb474afea4bc6e4523bc9dac2ed",
"assets/assets/json/shaheen.json": "4113c56b7e35704d5426ccca6428b0c9",
"assets/assets/json/steve.json": "ad35a7b7f5a6c7366326bc45d21b1810",
"assets/assets/json/victor.json": "e061728b2f09e3ece055f89afcd07bba",
"assets/assets/json/xiaoyu.json": "ca79c5a77a3ca0c8a68e689f87b8a7cd",
"assets/assets/json/yoshimitsu.json": "7b02bbff38abc4728f89d045472229d6",
"assets/assets/json/zafina.json": "73aad1eb4b85f0d264423fceb3f367fc",
"assets/assets/localizations/en.json": "b95500b8528b128cdae3d6f994da17f0",
"assets/assets/localizations/ko.json": "c0df04c0117aef0c2d8c135db34d9843",
"assets/FontManifest.json": "1f515b8460fc0c33254529b1b27f54ae",
"assets/fonts/MaterialIcons-Regular.otf": "c51932541cc88b688b39e3e412f8bf6b",
"assets/NOTICES": "fd870069b8dba20be359957f9927e25e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "131daacd79f28a2a8f34c7f0be975090",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "633d6e0645d678c52236220c69db6d9a",
"/": "633d6e0645d678c52236220c69db6d9a",
"main.dart.js": "c226b849fd40fec986892d37922b6c81",
"manifest.json": "42f6fe540936c3a2553c386687aaf37f",
"version.json": "1bcea166f42fb8db24c6355504e0a0cb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
