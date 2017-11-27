var Encore = require('@symfony/webpack-encore');
var workboxPlugin = require('workbox-webpack-plugin');

Encore
  .setOutputPath('build/')
  .setPublicPath('/x-brewing/build')
  .addEntry('app', './assets/js/app.js')
  .enableSassLoader()
  .autoProvidejQuery()
  .enableVueLoader()
  .enableSourceMaps(!Encore.isProduction())
  .addPlugin(new workboxPlugin({
      globDirectory: '_site',
      globPatterns: ['**/*.{html,js,css,jpg,png,woff2,woff,ttf}'],
      swDest: './sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }))
  .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();