import Vue from 'vue'
import App from './App.vue'

import router from './components/router';
import store from './components/store/';

import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
