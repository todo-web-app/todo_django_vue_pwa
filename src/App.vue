<template>
  <div id="app">
    <div id="nav">
     <router-link :to="{ name: 'login' }">Login</router-link> |
     <router-link :to="{ name: 'todo' }">Todo List</router-link>
    </div>
    <router-view/>
  </div>
</template>
