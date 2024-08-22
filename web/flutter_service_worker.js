'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "258ef57d9686275dc5b00d243ea795b6",
"assets/AssetManifest.bin.json": "46bc168b5feb07d60a254048f36d63d0",
"assets/AssetManifest.json": "f1cc3bcf599bd6b51fd0cf39c0738b1b",
"assets/assets/fonts/ONE%2520Mobile%2520Bold.ttf": "79badd71ce490387bb296d5928e298cd",
"assets/assets/fonts/Tenada.ttf": "0ba8366fb06b6b4c2fe9d6b83ac85bcf",
"assets/assets/icons/free.png": "9c520a9a558c970cfe6c3bd8286dca6d",
"assets/assets/icons/pro.png": "c7bfc5fc630df183d38106a415a420b1",
"assets/assets/internal/patch_note.json": "bbd8f0d57d7d3b28b01a7ebdac2ed40c",
"assets/assets/json/alisa.json": "7a2b62f30b1e047cb61e7ed397dd8a4f",
"assets/assets/json/asuka.json": "6103feafdf21a82d799df272aa98c3c4",
"assets/assets/json/azucena.json": "db895f09d753f87e536390f78a63b944",
"assets/assets/json/bryan.json": "dd71683d1bf52fd0160a0737f54f3746",
"assets/assets/json/claudio.json": "7784b4939a2c50d1e047e94e826382fe",
"assets/assets/json/devil%2520jin.json": "f9a589a7308bb2a136db18d9732c826c",
"assets/assets/json/dragunov.json": "919e8ded21e0bd64d3626a3f9ef1dee6",
"assets/assets/json/eddy.json": "31e4f5bed38f5d164eab0b478897b639",
"assets/assets/json/feng.json": "63b73c547b2d9cfff4bdb17d5db003ae",
"assets/assets/json/hwoarang.json": "6ecf8da5b082e9bd838e7afa736ee4e1",
"assets/assets/json/jack-8.json": "a5034a531c87414596c841997180f340",
"assets/assets/json/jin.json": "b310af316de196a6f452b08c522c097d",
"assets/assets/json/jun.json": "5080a4c3b5f247bda0ac1d4b7749ff1c",
"assets/assets/json/kazuya.json": "64c627a8bcf292a987e13cd4c44bded9",
"assets/assets/json/king.json": "ab06d0e31f2d9d396ec56bb9a8744831",
"assets/assets/json/kuma.json": "bf72e4a11378840a4e3f5fd010a047f3",
"assets/assets/json/lars.json": "e50f402168e9f4c1b8a84f29ad440868",
"assets/assets/json/law.json": "5770901d10efaab9f3a6fddd57f87d87",
"assets/assets/json/lee.json": "873d2ceef6990979dc4bec3962fd2009",
"assets/assets/json/leo.json": "09c38e47cff0c083fc12700c16932bc0",
"assets/assets/json/leroy.json": "6fe827a21c38c9822bc9ab169b653444",
"assets/assets/json/lili.json": "c4656b7b9f7662de7621238f6623cf08",
"assets/assets/json/nina.json": "ce69a128931314f188d061ac086b0723",
"assets/assets/json/panda.json": "7d51e5f0e40c18e0d5a8ab389fd58079",
"assets/assets/json/paul.json": "40085602f2900930896408e850df1c84",
"assets/assets/json/raven.json": "a225308cb0a10bec1d961f7ed9b9da85",
"assets/assets/json/reina.json": "7f5b441da4dd59102d6c794e19ed8c2c",
"assets/assets/json/shaheen.json": "c6aec0d5437e4b1fcb7bfbf99921b6c3",
"assets/assets/json/steve.json": "e3d1a76191ee1c80b3986200676c2be9",
"assets/assets/json/victor.json": "f1831744a9b8db2423c71b6400c7eb28",
"assets/assets/json/xiaoyu.json": "e53cefcabc483c47b03926ef3a598c1b",
"assets/assets/json/yoshimitsu.json": "3a076d9b78030780e887b0c139132c5b",
"assets/assets/json/zafina.json": "3027a84603ca8f528b92f2cbd644249e",
"assets/FontManifest.json": "1f515b8460fc0c33254529b1b27f54ae",
"assets/fonts/MaterialIcons-Regular.otf": "2f182011b7a4d68fa0214584ca84d47f",
"assets/NOTICES": "ac5af9268986d22ad50aaa9bc3ce0673",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "131daacd79f28a2a8f34c7f0be975090",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
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
"index.html": "6c24e79efaadb46739678770ef2a4d04",
"/": "6c24e79efaadb46739678770ef2a4d04",
"main.dart.js": "8ac92bcf023c2dc753552d948495f55f",
"manifest.json": "42f6fe540936c3a2553c386687aaf37f",
"version.json": "e182c0a68a6a4fa5f8d777002623f40f"};
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
