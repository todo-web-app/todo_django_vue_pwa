import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoList
    }
  ]
})