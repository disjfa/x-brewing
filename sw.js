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
    "revision": "b1dc52de56df17a2dc5a554674eb785a"
  },
  {
    "url": "beers/bitter-sweet.html",
    "revision": "d1ed3d512e5931215a32ab30ea037ed0"
  },
  {
    "url": "beers/cherry-love.html",
    "revision": "e3369f7cfb4e3ee07dc6f14941b302d1"
  },
  {
    "url": "beers/choco-on-the-go.html",
    "revision": "e234be79e342d5f467a40a6eaaa0fa85"
  },
  {
    "url": "beers/coffee-in-the-morning.html",
    "revision": "ee9613148b107556dbf9690fae72c550"
  },
  {
    "url": "beers/fruity-madness.html",
    "revision": "8328a845ea4980c733adab178ea00715"
  },
  {
    "url": "beers/indo-gone-wild.html",
    "revision": "8e0f99590af25f666189709dd526d8bb"
  },
  {
    "url": "beers/raging-peanut.html",
    "revision": "821461304af8612808c8d288d49cfa7b"
  },
  {
    "url": "beers/time-to-bbq.html",
    "revision": "4de30159ca4864a021a09056f6269c01"
  },
  {
    "url": "build/app.css",
    "revision": "40b5ce841036d81d488e2fd10dad6b24"
  },
  {
    "url": "build/app.js",
    "revision": "a1a07e126df6e9fc401a3aa45a2760e8"
  },
  {
    "url": "build/fonts/fontawesome-webfont.af7ae505.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "build/fonts/fontawesome-webfont.b06871f2.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "build/fonts/fontawesome-webfont.fee66e71.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "icon/android-chrome-144x144.png",
    "revision": "f7190afb3c461185a8c93fa7afe5fddb"
  },
  {
    "url": "icon/android-chrome-192x192.png",
    "revision": "20b3d415f1e236a670370f55da488cba"
  },
  {
    "url": "icon/android-chrome-256x256.png",
    "revision": "0151eda437694ce75660c8baa9d0f8c8"
  },
  {
    "url": "icon/android-chrome-36x36.png",
    "revision": "28ad3d00846e064b736fd641995eac90"
  },
  {
    "url": "icon/android-chrome-384x384.png",
    "revision": "eb482f050f0f52574e5f10702eb3eaf9"
  },
  {
    "url": "icon/android-chrome-48x48.png",
    "revision": "2dde6f934158c58b4492cac6b88dba75"
  },
  {
    "url": "icon/android-chrome-512x512.png",
    "revision": "81e9b5593f0efc20feb32fd4c84c84d0"
  },
  {
    "url": "icon/android-chrome-72x72.png",
    "revision": "9d548947f1dbc99a6bb6e940ea4c33c3"
  },
  {
    "url": "icon/android-chrome-96x96.png",
    "revision": "6702473c650b396aa268349b59703a97"
  },
  {
    "url": "icon/apple-touch-icon-114x114.png",
    "revision": "8913add022cf297e1a532c99e380def2"
  },
  {
    "url": "icon/apple-touch-icon-120x120.png",
    "revision": "78d9f92f9eb6b9f6c9ec9e329e584af4"
  },
  {
    "url": "icon/apple-touch-icon-144x144.png",
    "revision": "f7190afb3c461185a8c93fa7afe5fddb"
  },
  {
    "url": "icon/apple-touch-icon-152x152.png",
    "revision": "c7271c82cef23d8e53515b65f255ae3a"
  },
  {
    "url": "icon/apple-touch-icon-167x167.png",
    "revision": "49e12293ab15a6c57081f6fe67cb77cf"
  },
  {
    "url": "icon/apple-touch-icon-180x180.png",
    "revision": "886c394838406d1cbe7e0748fba30dfd"
  },
  {
    "url": "icon/apple-touch-icon-57x57.png",
    "revision": "7a742b5101e478096a7a0d4467183209"
  },
  {
    "url": "icon/apple-touch-icon-60x60.png",
    "revision": "00b9a9104374683bc8d175ab376de28a"
  },
  {
    "url": "icon/apple-touch-icon-72x72.png",
    "revision": "9d548947f1dbc99a6bb6e940ea4c33c3"
  },
  {
    "url": "icon/apple-touch-icon-76x76.png",
    "revision": "686660e81b81dd4ce57e76bdf1d9c5c6"
  },
  {
    "url": "icon/apple-touch-icon-precomposed.png",
    "revision": "886c394838406d1cbe7e0748fba30dfd"
  },
  {
    "url": "icon/apple-touch-icon.png",
    "revision": "886c394838406d1cbe7e0748fba30dfd"
  },
  {
    "url": "icon/apple-touch-startup-image-1182x2208.png",
    "revision": "ce635a81656d4e9f84d46763359d7bf6"
  },
  {
    "url": "icon/apple-touch-startup-image-1242x2148.png",
    "revision": "ac142803d89e9eaf381be178e5fad64c"
  },
  {
    "url": "icon/apple-touch-startup-image-1496x2048.png",
    "revision": "e30703266a57160546296cfdbea34833"
  },
  {
    "url": "icon/apple-touch-startup-image-1536x2008.png",
    "revision": "1fa9baa1cd23127e4378f4fe891f42aa"
  },
  {
    "url": "icon/apple-touch-startup-image-320x460.png",
    "revision": "611b27ca79bd10d67d832733011441f3"
  },
  {
    "url": "icon/apple-touch-startup-image-640x1096.png",
    "revision": "efd34b5c00bc8fdbde239cba648a900f"
  },
  {
    "url": "icon/apple-touch-startup-image-640x920.png",
    "revision": "fecf2ec6e240bf65d19c6dcfe35eaa0f"
  },
  {
    "url": "icon/apple-touch-startup-image-748x1024.png",
    "revision": "98d3728d9ce9f2a80d807641f17598ca"
  },
  {
    "url": "icon/apple-touch-startup-image-750x1294.png",
    "revision": "8f66944747380b3e28f3432f0b98c5fa"
  },
  {
    "url": "icon/apple-touch-startup-image-768x1004.png",
    "revision": "1eb6b61bd3df5a3af43009432111b76a"
  },
  {
    "url": "icon/coast-228x228.png",
    "revision": "ed2bdadfaa1c797754e5990744817c21"
  },
  {
    "url": "icon/favicon-16x16.png",
    "revision": "b418a0909101f71580f46fdb6270767f"
  },
  {
    "url": "icon/favicon-32x32.png",
    "revision": "f726f59060c2cc2af44c96880d468af2"
  },
  {
    "url": "icon/firefox_app_128x128.png",
    "revision": "397575573656eeea71b23d0821fae912"
  },
  {
    "url": "icon/firefox_app_512x512.png",
    "revision": "5510584442b5bb7d05a7223d65fec04a"
  },
  {
    "url": "icon/firefox_app_60x60.png",
    "revision": "e48f15603c27de94e9bfb2073d9ead34"
  },
  {
    "url": "icon/index.html",
    "revision": "fe52d852e9f5072c2ebcd7327be6e5dd"
  },
  {
    "url": "icon/mstile-144x144.png",
    "revision": "f7190afb3c461185a8c93fa7afe5fddb"
  },
  {
    "url": "icon/mstile-150x150.png",
    "revision": "8e96a8243f3b4dc81a00b0c55ef49845"
  },
  {
    "url": "icon/mstile-310x150.png",
    "revision": "2458cf8eb2706c3a712e38c7a4f9cbd0"
  },
  {
    "url": "icon/mstile-310x310.png",
    "revision": "217b088e3a16e83900168eb2d2d9e1b8"
  },
  {
    "url": "icon/mstile-70x70.png",
    "revision": "41dfcfbae9b95b529eaec32fc3c55908"
  },
  {
    "url": "icon/yandex-browser-50x50.png",
    "revision": "09c8d9b46a40224fbc6e07e634754afa"
  },
  {
    "url": "img/all-brews.jpg",
    "revision": "1d4bd357cde5f72c1ee2fa7ac65d29ad"
  },
  {
    "url": "img/bitter-sweet.jpg",
    "revision": "d06972639b0fcfcfd08712b59608d7b2"
  },
  {
    "url": "img/cherry-love.jpg",
    "revision": "a0b699c51ad36b65619ad4e44c44c124"
  },
  {
    "url": "img/choco-on-the-go.jpg",
    "revision": "fae155c856764a46fba12db523714fe3"
  },
  {
    "url": "img/coffee-in-the-morning.jpg",
    "revision": "352f45fe475b94506a18d3797b1ddda6"
  },
  {
    "url": "img/fruity-madness.jpg",
    "revision": "fc2fdcb395f19dd545a7c669b1bfa689"
  },
  {
    "url": "img/indo-gone-wild.jpg",
    "revision": "533e192a2439a4343d42d30c59659bdd"
  },
  {
    "url": "img/logo.png",
    "revision": "80e8b6938046de260eb8fdf75e0127af"
  },
  {
    "url": "img/raging-peanut.jpg",
    "revision": "e62106dc03c50db0d82eb19f7166d7ad"
  },
  {
    "url": "img/time-to-bbq.jpg",
    "revision": "8f192eab06eddc56c4bc83f4441bbd6d"
  },
  {
    "url": "img/wil-stewart-24562.jpg",
    "revision": "33f6b597feeb4f892a454ecbbd6431a4"
  },
  {
    "url": "img/x-brewing.jpg",
    "revision": "73019e8d02d69c80fc8b3410bafedc29"
  },
  {
    "url": "index.html",
    "revision": "a1ed8a3b790181dd17a071974badfafb"
  },
  {
    "url": "our-beers.html",
    "revision": "10ea8e4a9a0a08abe2f17cf49bfc0fd7"
  },
  {
    "url": "sw.js",
    "revision": "82351487c262c2ddc28da8446db5a43d"
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
