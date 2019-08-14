<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-container>
        
        <b-navbar-brand :to="{ name: 'home' }" type="dark">
          <i class="material-icons secondary float-left">accessibility</i>
          Family List
        </b-navbar-brand>
        
        <b-navbar-nav class="ml-auto" v-if="show">
          <b-nav-item href="#" @click.prevent="logout">Sign Out</b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logout');
    }
  }
};
</script>