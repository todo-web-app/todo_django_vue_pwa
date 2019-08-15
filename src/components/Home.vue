<template>
  <div>
    <b-jumbotron header="Family List" lead="Central list of your family">
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
        <p class="feature-description">Powered with Django REST + VUE</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: "home"
    };
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
  font-size: 50px;
}
</style>