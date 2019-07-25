<template>
  <div id="app">
    <input type="text" v-model="item" placeholder="I will do..." />
    <button v-on:click="addItem">Add</button>
    <div>
      <ul>
        <li v-for="item in lists" v-bind:key="item.id">
          <span v-on:click="toggleStatus(item)">
            <span v-if="item.done">
              <strike>{{ item.title }}</strike>
            </span>
            <span v-else>{{ item.title }}</span>
          </span>
          <button v-on:click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      lists: null,
      item: ""
    };
  },
  mounted: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      var app = this;
      axios.get(process.env.API_URL + "/todo/list/").then(response => {
        app.lists = response.data.results;
      });
    },
    addItem: function() {
      var app = this;
      var newItem = { title: this.item, done: false };
      axios
        .post(process.env.API_URL + "/todo/list/", newItem)
        .then(response => {
          app.fetchData();
          app.item = "";
        });
    },
    deleteItem: function(id) {
      var app = this;
      axios.delete(process.env.API_URL + "/todo/list/" + id).then(response => {
        app.fetchData();
      });
    },
    toggleStatus: function(item) {
      var app = this;
      axios
        .patch(process.env.API_URL + "/todo/list/" + item.id + "/", {
          done: !item.done
        })
        .then(response => {
          app.fetchData();
        });
    }
  }
};
</script>
<style>
</style>