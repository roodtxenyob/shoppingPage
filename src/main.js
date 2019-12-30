import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from "./store/index";
import Tosat from "components/content/Tosat/index";
import VueLazyLoad from 'vue-lazyload'
import fastClick from 'fastclick'

Vue.use(Tosat)

Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require('./assets/img/common/placeholder.png'),
  attempt: 2,
})
Vue.config.productionTip = false
Vue.prototype.$Bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

fastClick.attach(document.body);
