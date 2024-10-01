'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7f34337b1b5dd84d231558e9767db406",
"assets/AssetManifest.bin.json": "5a0a7eb24977ae859341b936eb77ee4b",
"assets/AssetManifest.json": "68691bb587e8f393a95d629c3452f4f7",
"assets/assets/fonts/ONE%2520Mobile%2520Bold.ttf": "79badd71ce490387bb296d5928e298cd",
"assets/assets/fonts/Tenada.ttf": "0ba8366fb06b6b4c2fe9d6b83ac85bcf",
"assets/assets/icons/free.png": "9c520a9a558c970cfe6c3bd8286dca6d",
"assets/assets/icons/pro.png": "c7bfc5fc630df183d38106a415a420b1",
"assets/assets/internal/patch_note.json": "cb111583fe6ac08627ced7c5ed647059",
"assets/assets/json/alisa.json": "0e0d05dc0d644371947a8464880c7bb9",
"assets/assets/json/asuka.json": "2d58dc60c9f45d4ab81b2c05aac74462",
"assets/assets/json/azucena.json": "de28d8e3dd9e8651aaf6ce2c8a015685",
"assets/assets/json/bryan.json": "c0e7d05077389cd2d022a11cbc8c3525",
"assets/assets/json/characters.json": "da4aa5de4838edf7d5b78170f9f0bc99",
"assets/assets/json/claudio.json": "e6e317c923253d33bde1f872096013df",
"assets/assets/json/devil%2520jin.json": "ffa59d4dd03a5098bf168fbd6bab3c7f",
"assets/assets/json/dragunov.json": "a7ebd24890af2d3ba11fb8657e68fde2",
"assets/assets/json/eddy.json": "31e4f5bed38f5d164eab0b478897b639",
"assets/assets/json/feng.json": "00ed087c96a3ac0b9c1302193cee6448",
"assets/assets/json/hwoarang.json": "64f6270fad3c8c302426f06b58340e6c",
"assets/assets/json/jack-8.json": "0df1647f5c69e062bb0b1941349003ce",
"assets/assets/json/jin.json": "afbce0f21684575a9ce581bdcd10000e",
"assets/assets/json/jun.json": "df430cb51eb9e87a9e50ccf91f60e7c5",
"assets/assets/json/kazuya.json": "4332927bc06f22339f54ddb5608daee3",
"assets/assets/json/king.json": "eb354f91d01a7613ebb735078b193a63",
"assets/assets/json/kuma.json": "810312ae7be98ee43ecab9a69a5013c4",
"assets/assets/json/lars.json": "230c7431d35e1d0ce14035696d9cb3ab",
"assets/assets/json/law.json": "06a33a542b6afb3472c922dcf9f5fe7b",
"assets/assets/json/lee.json": "6145911e197550e94c39363e32a73e69",
"assets/assets/json/leo.json": "bcdcadda61e80d77d5a727a44b18e5ef",
"assets/assets/json/leroy.json": "c7caeb7a5db84b410a2ffb49b04170fa",
"assets/assets/json/lili.json": "4d4d61838555dd53a3bb1156d74ff385",
"assets/assets/json/nina.json": "e7e93935d05c060da8a66e31ee095c0d",
"assets/assets/json/panda.json": "07f1f4618b3001f941531ae89217cb94",
"assets/assets/json/paul.json": "4eca827e03ba0159f580213ce14f96e6",
"assets/assets/json/raven.json": "ccd308d696a9717fc6834615398a85f5",
"assets/assets/json/reina.json": "aa6e0785c9026a53d62fafedc86aa5b5",
"assets/assets/json/shaheen.json": "8921977824a77870cbde30603d8baa1a",
"assets/assets/json/steve.json": "3893000925fb74f239ac997d471b3d9b",
"assets/assets/json/victor.json": "eb8c30df25e0d15aafbfc27da6f81c94",
"assets/assets/json/xiaoyu.json": "7cdf445328842dbf3e63652530bd1025",
"assets/assets/json/yoshimitsu.json": "c3f55a3013f40a14b35ed06cb0a0d0ea",
"assets/assets/json/zafina.json": "4cffd278f33465455257c13aa1183123",
"assets/FontManifest.json": "1f515b8460fc0c33254529b1b27f54ae",
"assets/fonts/MaterialIcons-Regular.otf": "318f66a3272f0a0bfe32667a9c07fbb8",
"assets/NOTICES": "f27e046d5c04c8cacdd6a55b84076871",
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
"index.html": "0bb41663fd4833a7be313855b006dbe6",
"/": "0bb41663fd4833a7be313855b006dbe6",
"main.dart.js": "c88c7e86193d36c6b845d57396359e89",
"manifest.json": "42f6fe540936c3a2553c386687aaf37f",
"version.json": "88f06c7677e300d097780390fcb822ea"};
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
