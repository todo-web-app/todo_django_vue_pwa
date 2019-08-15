<template>
  <div id="app">
    <Navbar/>
    <b-container fluid class=py-3>
    <router-view />
    </b-container>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';  
  export default {
    name: 'navbar',
    components: {
      Navbar,
    }
  }
</script>