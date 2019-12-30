<template>
  <div>
    <b-row>
      <b-col md="6" offset-md="3">
        <b-form @submit.prevent="addTodo">
          <b-form-group id="input-group-1">
            <b-input-group>
              <b-form-input v-model="newTodo" placeholder="Enter todo"></b-form-input>
              <b-input-group-append>
                <b-button type="submit" variant="primary" class="float-right">Add</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" offset-md="3" class="pt-3">
        <b-list-group id="todo-list">
          <b-list-group-item v-for="todo in todos" :key="todo.id" v-bind:class="{done: todo.done}">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :checked="todo.done"
                @change="toggleStatus(todo)"
                v-bind:id="todo.id"
              />
              <label class="form-check-label" v-bind:for="todo.id">
                <span v-if="todo.done">
                <strike>{{ todo.title }}</strike>
                </span>
                <span v-else>{{ todo.title }}</span>
              </label>
              <span>
                <a @click.prevent="deleteTodo(todo)">
                  <i class="material-icons float-right secondary">delete</i>
                </a>
              </span>
            </div>
          </b-list-group-item>
        </b-list-group>
        <b-pagination-nav
          :link-gen="linkGen"
          :number-of-pages="noOfPages"
          use-router
          @change="fetchData()"
          v-show="showPagination"
          align="center"
          class="pt-3"
        ></b-pagination-nav>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todos: null,
      newTodo: "",
      noOfPages: 1,
      showPagination: false
    };
  },
  mounted: function() {
    this.fetchData();
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    },
    fetchData: function() {
      var app = this;
      var page = this.$route.query.page;
      var request_url = "/todo/list/";

      if (page) {
        request_url = request_url + "?page=" + page;
      }

      app.axios.get(request_url).then(response => {
        app.todos = response.data.results;
        app.noOfPages = response.data.total_pages;
        app.showPagination = response.data.total_pages > 1;
      });
    },
    addTodo: function() {
      var app = this;
      var newItem = { title: this.newTodo, done: false };
      app.axios
        .post(process.env.API_URL + "/todo/list/", newItem)
        .then(response => {
          app.fetchData();
          app.newTodo = "";
        });
    },
    deleteTodo: function(todo) {
      var app = this;
      app.axios
        .delete(process.env.API_URL + "/todo/list/" + todo.id)
        .then(response => {
          app.fetchData();
        });
    },
    toggleStatus: function(item) {
      var app = this;
      app.axios
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
.done {
  background-color: #80808014 !important;
}
</style>