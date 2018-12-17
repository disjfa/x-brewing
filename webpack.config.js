const Encore = require('@symfony/webpack-encore');
const { GenerateSW } = require('workbox-webpack-plugin');

Encore
  .setOutputPath('site/build/')
  .setPublicPath('/build')
  .addEntry('app', './assets/js/app.js')
  .setManifestKeyPrefix('build/')
  .enableSassLoader()
  .autoProvidejQuery()
  .enableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction())
  .addPlugin(new GenerateSW({
    globDirectory: './_site',
    globPatterns: ['site/**/*.{html,js,css,jpg,png,woff2,woff,ttf}'],
    swDest: './../service-worker.js',
  }))
;

if (Encore.isProduction()) {
  Encore
    .cleanupOutputBeforeBuild()
    .enablePostCssLoader()
  ;
}

module.exports = Encore.getWebpackConfig();
