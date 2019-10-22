<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-container>
        <b-navbar-brand :to="{ name: 'home' }" type="dark">
          <i class="material-icons secondary float-left">accessibility</i>
          Family Lists
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav> 
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'login' }" v-show="!logged_in">Sign In</b-nav-item>
            <b-nav-item :to="{ name: 'register' }" v-show="!logged_in">Register</b-nav-item>
            <b-nav-item @click.prevent="logout" v-show="logged_in">Sign Out</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    logged_in () {
      return this.$store.state.jwt ? true : false
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logout');
    }
  }
};
</script>