const moment = require('moment');

import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@/firebase/index.js';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(require('vue-moment'), {
  moment
});

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
