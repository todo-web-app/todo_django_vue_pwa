<template>
  <div>
    <b-jumbotron header="Family List" lead="Central list for your family to share">
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
