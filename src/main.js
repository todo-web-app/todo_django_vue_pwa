// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

// axios global config
axios.defaults.baseURL = process.env.API_URL;
Vue.use(VueAxios, axios);


// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.headers.authorization = "JWT " + store.state.jwt;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor to redirecto to login page request error is 401 
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  if (error.response.status === 401) {
    store.dispatch('logout');
  }
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
})


