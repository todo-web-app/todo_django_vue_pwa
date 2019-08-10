<template>
  <div id="app">
    <Navbar v-bind:show="show"/>
    <b-container fluid class=py-3>
    <router-view v-on:show-sign-out="show=$event"/>
    </b-container>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';  
  export default {
    name: 'navbar',
    data() {
      return {
        show: false
      };
    },
    components: {
      Navbar,
    }
  }
</script>