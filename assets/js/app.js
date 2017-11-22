require('./../scss/app.scss');

window.Popper = require('popper.js');
require('bootstrap');

import Vue from 'vue';
import TheFeed from './components/TheFeed';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    TheFeed,
  }
});