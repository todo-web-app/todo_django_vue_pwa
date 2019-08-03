// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwt_decode from 'jwt-decode'
import Vuex from 'vuex'
import router from '@/router'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    jwt: localStorage.getItem('t'),
    endpoints: {
      obtainJWT: process.env.API_URL + '/auth/obtain_token/',
      refreshJWT: process.env.API_URL + '/auth/refresh_token/'
    }
  },
  mutations: {
    updateToken(state, newToken) {
      localStorage.setItem('t', newToken);
      state.jwt = newToken;
    },
    removeToken(state) {
      localStorage.removeItem('t');
      state.jwt = null;
    }
  },
  actions: {
    obtainToken({commit, state}, credentials) {
      const payload = {
        username: credentials.username,
        password: credentials.password
      }
 
      return axios.post(this.state.endpoints.obtainJWT, payload)
    },
    refreshToken() {
      const payload = {
        token: this.state.jwt
      }
      axios.post(this.state.endpoints.refreshJWT, payload)
        .then((response) => {
          this.commit('updateToken', response.data.token)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    inspectToken(){
      const token = this.state.jwt;
      if(token){
        const decoded = jwt_decode(token);
        const exp = decoded.exp
        const orig_iat = decoded.orig_iat
        if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
          this.dispatch('refreshToken')
        } else if (exp -(Date.now()/1000) < 1800){
          // DO NOTHING, DO NOT REFRESH          
        } else {
          // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
        }
      }
    },
    logout() {
      this.commit('removeToken');
    }
  }
})

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
  console.log(response);
  // Do something with response data
  return response;
}, function (error) {
  console.log(error);
  // Do something with response error
  if (error.response.status === 401) {
    store.dispatch('logout');
    router.push('login');
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


