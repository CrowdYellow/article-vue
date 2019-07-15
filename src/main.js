import Vue from 'vue'
import App from './App'
import router from './router'
// 引入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css'
import axios from 'axios'
import qs from 'qs'
Vue.use(Mint);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.qs = qs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
