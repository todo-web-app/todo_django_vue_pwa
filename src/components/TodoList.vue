<template>
  <div class="app">
    <div class="container">
      <div class="row header">
        <h1 class="col s12 center-align teal-text">To-Do List!</h1>
      </div>
      <div class="row">
        <form @submit.prevent="addTodo" class="col s12">
          <div class="input-field">
            <i class="material-icons prefix">list</i>
            <textarea v-model="newTodo" id="icon_prefix2" class="materialize-textarea"></textarea>
            <label for="icon_prefix2">What to do?</label>
          </div>
          <button class="btn waves-effect col s12">Add</button>
        </form>
      </div>
      <div class="row">
        <ul class="collection col s12">
          <li class="collection-item" v-for="todo in todos" :key="todo.id">
            <p>
              <label>
                <input type="checkbox" :checked="todo.done" @change="toggleStatus(todo)" />
                <span>{{todo.title}}</span>
                <span>
                  <a @click.prevent="deleteTodo(todo)">
                    <i class="material-icons right teal-text">delete</i>
                  </a>
                </span>
              </label>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TodoList",
  data() {
    return {
      todos: null,
      newTodo: ""
    };
  },
  mounted: function() {
    this.fetchData();
    this.$store.dispatch('inspectToken');
  },
  methods: {
    fetchData: function() {
      var app = this;
      app.axios.get("/todo/list/").then(response => {
        app.todos = response.data.results;
      });
    },
    addTodo: function() {
      var app = this;
      var newItem = { title: this.newTodo, done: false };
      axios
        .post(process.env.API_URL + "/todo/list/", newItem)
        .then(response => {
          app.fetchData();
          app.newTodo = "";
        });
    },
    deleteTodo: function(todo) {
      var app = this;
      axios
        .delete(process.env.API_URL + "/todo/list/" + todo.id)
        .then(response => {
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
