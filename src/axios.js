// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'
import store from '@/store'

// axios global config
axios.defaults.baseURL = process.env.API_URL;

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

export default axios
