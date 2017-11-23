require('./../scss/app.scss');

window.Popper = require('popper.js');
require('bootstrap');

// import Vue from 'vue';
// import TheFeed from './components/TheFeed';
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {
//     TheFeed,
//   }
// });

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/x-brewing/sw.js').then(registration => {
      // console.log('SW registered: ', registration);
    }).catch(registrationError => {
      // console.log('SW registration failed: ', registrationError);
    });
  });
}
