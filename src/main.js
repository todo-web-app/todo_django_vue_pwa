// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from '@/axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import store from '@/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAnalytics from 'vue-analytics';


Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue)
// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-164595657-1',
  router
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
})
