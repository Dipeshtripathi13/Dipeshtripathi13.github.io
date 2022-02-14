'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "45a7afe8b8febc26f4245730b7506e32",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "81087a750947f5ec291385349c82a803",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d6c4ba9cdbe6f0533bdda94fb38017f2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5b90d45bd3c8ff6edb7d366fed1e9fd",
".git/logs/refs/heads/main": "dcdb0984edbf3a0830515d494c3412c4",
".git/logs/refs/remotes/origin/main": "d8ff11f023400e8d5eae8d3728d80b1c",
".git/logs/refs/remotes/origin/master": "daef29c79c82b0123c1c0f0e9264745b",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/0c/3e2e395465389a54e2f28685212517fb73ff63": "31b8d8c30bf331e91e980a6fd8cf002a",
".git/objects/11/042e07d4b3f79125f026c9dc66945ecbddc7b1": "ea25092ba56891b1b686db7bfd926d60",
".git/objects/11/ccbb9a64ccd33f6a255a062b297c361ac8b0ff": "fcb2eb87b139afe08a44580f5d69a76d",
".git/objects/11/fa95a46ffe19c8b50a3c081ba503cad5cc60e5": "df7a749e776bfe569f02aa556fb85858",
".git/objects/14/926d3480cac7ee746e85bec1b97971b2fd7b0b": "854217c81775913519ab9d60225bf367",
".git/objects/19/83426f3ee4a5aa389ce81c52bfcbd484312b5f": "99f7ec2f6efd4607fe719b2258104a7a",
".git/objects/1c/342cb63f2bf060465db66f0b519015a01a062d": "e492f0827829571afa480689761d2b8b",
".git/objects/25/f07128b87b360a1f2c5a012e6d184c5aa7d35e": "0558bd34516d890d628e47941bc29abe",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/0e7548e8576cc6944bbe9de0c11aff505c2ade": "4601e3fbcd7fb625e567fddb3a94a84c",
".git/objects/3a/c60e981fd9b45fc50690c734c2d1af062323e8": "1dc92624bf2c99ac77741a70420073e4",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/177df025f8b92be51e2e13a576f809bd4eb126": "470000aabb5c3ff1ce81eda243bef3c7",
".git/objects/4f/3892a242f6b4a098c74dffa706d62b4bdd14b5": "4f2f7873fe31201d7635d4ebe705d85a",
".git/objects/52/976a19da2118da5df6461bcba47e2d0bce5def": "cb1b1e1bfb0475472c3df1358da0a96a",
".git/objects/57/b1f10519d38a98c9150ebec52aebf2820fb0d3": "c7ae5d48db4713030301dc1a59d0104e",
".git/objects/5d/6bcfbe1e0a947725cd2b5c0cbd3d06b71221da": "d85bd42dde9e300073d76e419b5939a6",
".git/objects/5e/8106baf0c7e6146d3272feb84bc909ca282c81": "3bf751a6ccfb482fff09c5a7002790cf",
".git/objects/5e/fd513cc3f7140af687ec54743621e0813e45bb": "d4b6b91239d3edf4ef5ae63a2b23a878",
".git/objects/60/c06f7f6ca8822e8a0dbaa59ce5619c776e22d1": "c16265f9c1a77063b7d763e0153c760a",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/67/1965dfbc2b5dd360f6fd2139886d517f55e975": "f3a9fefd297d37ba36bdf99197317271",
".git/objects/6b/de3ca056915b3953f14198fb9a4ea5fdc1bc35": "eb05c9e350ed695e53c0589ffabc262e",
".git/objects/6c/52f327a44ec258b102a5e6ff294ebe9e0efde4": "d77f19fd09e248db0bbdf9c52fa4c8be",
".git/objects/74/8aeb94aefec2e6dc3ad66d01353ac99e8d17e6": "fdf94d1da60fdfd51f4393f4d2bebc4c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/57151c1aa4f00574c8285561fe6d6bfec4826b": "53986a5563e74cbf2d7fef176041a5b4",
".git/objects/7a/92cd60f7e7072b2b263a09d5cc5bfcd7f58e10": "e9c94f4041b5e8256b454190d17c896e",
".git/objects/7d/e20ec57a133e773c7085239f5fc6104837d0ff": "79530507eaf5e45990d58c83ba6d2afe",
".git/objects/83/bcac83130a868b5f71d8ddf43ba6e8c0507e1e": "18d7eb72cd5f0a87ea73c65ef130728f",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/50137779bfaf8853db538e29eba6e9e94f41e1": "ccc6747041704ebed6490731d2394d0e",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/96/cf1e979f14e456696c516ebce85b7b7e91cef9": "3831a44c086964d2885286e845c04332",
".git/objects/97/1d128565731aa5205598da760e7e38a2579892": "9e781830fa8b6f63aafea586c5ea1d6a",
".git/objects/97/ad684d649402d9b3c40e89a6cf2e3a88bb6fb0": "fc2330c890468d259b58dc6e4c82b0bf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/4cc27cfd2a636a1a27d21b321d9497db6311c2": "0461b90f2bc6ba5a0fdad5387123c689",
".git/objects/a4/972a88d37dc987a4329bdd6bf3ab4512e957b8": "9c8862d007df4edd099ae2aeefcd4f6b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/22597a23d357c5b262272c8f4d058882182f9a": "bcbe170498314d8f2c51a5d43fda1592",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/af/6a332ebf81f5ebd2edf2abfe13fc6fdaff92a6": "9a0016f4a3d03fa67135b88190ef71cd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/eeee2029a835f33ccc0ffe6b75f22f54a6ed49": "25a4385a3bbc5f7bd58c92501adec8ed",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/cb/fcfa1ad8797e5373ce075f3b31fc6b15ccb2ee": "c1f6bf25c8b5ac0f0908f97cc232f224",
".git/objects/cc/3d2174fc268c6e6ba633cc9247711b81d3839d": "36f3e0000db3b31c88436015cef74fb2",
".git/objects/d2/a291e2fafc7f0deceed0d9f482962827008dc0": "84f25ffa3a9f668cd1720fa93e140331",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/6e491543ca6cea2b956073bd01ddf98b030910": "68cdcd242d8c2b79c7fd9fc2f147a796",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c5a9bbf21c0edb93ff9cc8c59477f5ece476c7": "097691839bb2609a06f197ec6f26cd2f",
".git/objects/f2/7d04a8ba4b1cb4c1d70ab95515b79276dbc038": "4b431156789e9b21d1db430a4575405e",
".git/objects/f3/e4be6ebe253989b75ad5e9a7b0733822d4c0dc": "6373be4192768a55c25b3e00822f7502",
".git/refs/heads/main": "318994ebe50206859c3d6656e8b01d58",
".git/refs/remotes/origin/main": "e45ec136f05ca2d91008e54cd1e4e69f",
".git/refs/remotes/origin/master": "318994ebe50206859c3d6656e8b01d58",
"assets/AssetManifest.json": "54674a3af2eaf1807ac44aa244105126",
"assets/assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/exteriro.png": "0d7a9768420802d5125399572c4a2192",
"assets/assets/images/facebook.png": "fa65c8f1c840305b7ea30363e5e5dc58",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/hightlignt.png": "08b532eb0c110f24eb91c1b970c65763",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/instagram.png": "a11315201911a2d50acb12f211af971d",
"assets/assets/images/interior.png": "b8f36dabb3e8d57583a5091ed8b42afe",
"assets/assets/images/logo11.png": "e28c459642b83b9666fb452bd5c8f23a",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/painter.png": "8a072810972c45f8210b01239581fb89",
"assets/assets/images/painting1.png": "28e9d197f5e6d48e112bb11007e6404c",
"assets/assets/images/sign.png": "09ce9472b81f95dc3193a4ce58872bfb",
"assets/assets/images/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/assets/images/waterprofing.png": "4cacdad4f51df4b989e20854bdcbf3ce",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9fc762a71a53f7a933b7895f3a129bb9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "85381239c1f762464bd054fd6d96603e",
"/": "85381239c1f762464bd054fd6d96603e",
"main.dart.js": "def81ac83e633df3426336c6f102118e",
"manifest.json": "7643c258312a5b5d656f36cee3c6c112",
"version.json": "8058a34afa519afeb73d080f06ce4e93"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
