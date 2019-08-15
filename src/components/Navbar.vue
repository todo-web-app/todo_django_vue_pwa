<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-container>
        <b-navbar-brand :to="{ name: 'home' }" type="dark">
          <i class="material-icons secondary float-left">accessibility</i>
          Family List
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" v-if="logged_in"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav v-if="logged_in"> 
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'list' }">My List</b-nav-item>
            <b-nav-item href="#" @click.prevent="logout">Sign Out</b-nav-item>
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