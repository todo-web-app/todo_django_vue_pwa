// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from '@/axios'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    jwt: localStorage.getItem('t'),
    endpoints: {
      obtainJWT: '/auth/obtain_token/'
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
    logout() {
      this.commit('removeToken');
      router.push('/login');
    }
  }
})

export default store
