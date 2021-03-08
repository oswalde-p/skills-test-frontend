import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './assets/css/main.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render(h) { return h(App); },
}).$mount('#app');
