importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "about-us.html",
    "revision": "6297aaface0614d30a6fcc4fdbc79755"
  },
  {
    "url": "beers/bitter-sweet.html",
    "revision": "d2ea5d543c00618eda6147743de07b07"
  },
  {
    "url": "beers/cherry-love.html",
    "revision": "6682789d5640237bb37400aba15f3bbf"
  },
  {
    "url": "beers/choco-on-the-go.html",
    "revision": "cdf8dbb43af525425a2fbe135333b2a2"
  },
  {
    "url": "beers/coffee-in-the-morning.html",
    "revision": "ac61bb7d192c20e03f575cfc1a5cd879"
  },
  {
    "url": "beers/fruity-madness.html",
    "revision": "0c8dc36ff5a097c700d80fc7d409b6b2"
  },
  {
    "url": "beers/indo-gone-wild.html",
    "revision": "41a614815bb69d58dbeefab2d19a3879"
  },
  {
    "url": "beers/raging-peanut.html",
    "revision": "c311d5f26b66838b22007547b73fa092"
  },
  {
    "url": "beers/time-to-bbq.html",
    "revision": "38f27168e506bbfa8dbbb7063bb694c1"
  },
  {
    "url": "build/app.js",
    "revision": "e6e538dbbbd51fed4bb0241fb43f1cec"
  },
  {
    "url": "gulpfile.js",
    "revision": "d37b9107a7c1c38df93644078aa39574"
  },
  {
    "url": "icon/index.html",
    "revision": "fe52d852e9f5072c2ebcd7327be6e5dd"
  },
  {
    "url": "index.html",
    "revision": "3db2750a370778a0f2daee04d3d75970"
  },
  {
    "url": "our-beers.html",
    "revision": "87e115a1d306836de459751fedefd806"
  },
  {
    "url": "sw.js",
    "revision": "aa87b0f0d48b6f5470b7e3b9b99671a3"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
