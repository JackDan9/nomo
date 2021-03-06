import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import './assets/tailwind.css';

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR();
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})