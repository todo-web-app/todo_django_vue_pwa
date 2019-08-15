<template>
  <div>
    <b-jumbotron header="Family List" lead="Central list of your family">
      <b-button type="submit" variant="primary" :to="{ name: 'login' }">Create your list now!</b-button>
    </b-jumbotron>
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
