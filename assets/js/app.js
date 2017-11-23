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

function callback(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}
function initObserver() {
  const observer = new IntersectionObserver(callback);
  const items = document.querySelectorAll('.js-observe');
  for(const i in items) {
    if(!items.hasOwnProperty(i)) {
      continue;
    }
    observer.observe(items[i]);
  }
}
if (window.IntersectionObserver) {
  initObserver();
} else {
  console.log("IntersectionObserver not supported.");
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/x-brewing/sw.js').then(registration => {
      // console.log('SW registered: ', registration);
    }).catch(registrationError => {
      // console.log('SW registration failed: ', registrationError);
    });
  });
}
