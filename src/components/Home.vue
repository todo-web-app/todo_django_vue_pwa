<template>
  <div>
    <b-jumbotron header="Family List" lead="Central list of things todos! :)">
      <b-button type="submit" variant="primary" :to="{ name: 'login' }">Create your list now!</b-button>
    </b-jumbotron>

    <b-row>
      <b-col cols="12" md="4">
        <div class="feature-icon">
          <i class="material-icons">trending_up</i>
          <br />
        </div>
        <h3>PWA</h3>
        <p class="feature-description">Web app and mobile app friendly.</p>
      </b-col>
      <b-col cols="12" md="4">
        <div class="feature-icon">
          <i class="material-icons">mobile_friendly</i>
          <br />
        </div>
        <h3>Responsive</h3>
        <p class="feature-description">Powered by Vue-Bootstrap.</p>
      </b-col>
      <b-col cols="12" md="4">
        <div class="feature-icon">
          <i class="material-icons">dns</i>
          <br />
        </div>
        <h3>Dynamic</h3>
        <p class="feature-description">Powered by Django REST and VUE</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  computed: {
    logged_in () {
      return this.$store.state.jwt ? true : false
    }
  },
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    next(vm => {
      // access to component instance via `vm`
      if (vm.logged_in) {
        vm.$router.push("/list");
      }
    });
  }
};
</script>

<style>
.feature-icon,
h3,
.feature-description {
  text-align: center;
}

.feature-icon > .material-icons {
  font-size: 100px;
}
</style>