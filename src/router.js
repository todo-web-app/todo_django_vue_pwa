import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'
import Home from '@/components/Home'
import Register from '@/components/Register'
import PrivacyPolicy from '@/components/PrivacyPolicy'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'list',
      component: TodoList
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: PrivacyPolicy
    },
    { path: '*', component: Home }
  ]
})