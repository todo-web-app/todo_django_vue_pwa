import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: hello
    },
    {
      path: '/messages',
      name: 'messages',
      component: TodoList
    }
  ]
})