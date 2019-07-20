<template>
  <div id="app">
    <p>
      {{lists}}
    </p>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
      return {
          lists: null,
      }
  },
  mounted: function() {
    this.FetchData();
  },
  methods: {
      FetchData: function() {
          var app = this;
          axios.get("/todo/list").then(response => {
              app.lists = response.data;
          });
      },
  }
}
</script>
<style>
</style>