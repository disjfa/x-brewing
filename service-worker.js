/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

importScripts(
  "/x-brewing/build/precache-manifest.5ba3414de40a019e0b95c04f0ba912de.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about-us.html",
    "revision": "d94fa2c2ef5bdfc9bcd3562d78f63144"
  },
  {
    "url": "beers/bitter-sweet.html",
    "revision": "20d079dd7a713e62005e7307057cfb97"
  },
  {
    "url": "beers/cherry-love.html",
    "revision": "5656c38f7f2c6c501a6e11982e38dfda"
  },
  {
    "url": "beers/choco-on-the-go.html",
    "revision": "93e249b862b1136188fab1edc70bcb88"
  },
  {
    "url": "beers/coffee-in-the-morning.html",
    "revision": "f7facd5146adb1fe550ddbd0be01694a"
  },
  {
    "url": "beers/fruity-madness.html",
    "revision": "8e7292fbda2bb583adfd902c4452b62f"
  },
  {
    "url": "beers/indo-gone-wild.html",
    "revision": "a9340a08f92309729fdc835bd0fb14aa"
  },
  {
    "url": "beers/raging-peanut.html",
    "revision": "2bfdd114a96c78a596d6ed58d4628b05"
  },
  {
    "url": "beers/time-to-bbq.html",
    "revision": "17c1072d34d0b5db6163ee9f517d5498"
  },
  {
    "url": "build/app.css",
    "revision": "d149d03b48bdfe30650a8310d88a5b5a"
  },
  {
    "url": "build/app.js",
    "revision": "96936b757a1b14989948105ebea883e1"
  },
  {
    "url": "build/fonts/fa-brands-400.6814d0e8.woff2",
    "revision": "6814d0e8136d34e313623eb7129d538e"
  },
  {
    "url": "build/fonts/fa-brands-400.da408238.woff",
    "revision": "da408238128b876cbda6424391f1566f"
  },
  {
    "url": "build/fonts/fa-brands-400.fdf44bc4.ttf",
    "revision": "fdf44bc43e8fa2358bbb7d9165d78455"
  },
  {
    "url": "build/fonts/fa-solid-900.132e9759.ttf",
    "revision": "132e9759d93e4eefd7cdde0d7a322991"
  },
  {
    "url": "build/fonts/fa-solid-900.2d0415fa.woff",
    "revision": "2d0415fa29ea596b7a02c78eddeede20"
  },
  {
    "url": "build/fonts/fa-solid-900.b75b4bfe.woff2",
    "revision": "b75b4bfe0d58faeced5006c785eaae23"
  },
  {
    "url": "build/precache-manifest.7e5a90a89d358bd2e11502e0b50dba2c.js",
    "revision": "7e5a90a89d358bd2e11502e0b50dba2c"
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
    "revision": "4b8ad5e59c8221e5017adfc0c619767e"
  },
  {
    "url": "our-beers.html",
    "revision": "71d05c6586c7a8b6d1ba00c27c0a9ff5"
  },
  {
    "url": "service-worker.js",
    "revision": "a4c7840fc2745020e731d911fd43ef0c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
