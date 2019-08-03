<template>
  <div>
    <h1>Login</h1>
    <ul>
      <li v-for="error in non_field_errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <hr />
    <form @submit.prevent="loggedIn">
      <ul>
        <li v-for="error in username_errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <br />Username:
      <input type="text" v-model="username" />
      <br />
      <ul>
        <li v-for="error in password_errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <br />Password:
      <input type="password" v-model="password" />
      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      username_errors: "",
      password_errors: "",
      non_field_errors: ""
    };
  },
  methods: {
    loggedIn: function() {
      let response = this.$store
        .dispatch("obtainToken", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          this.$store.commit("updateToken", response.data.token);
          this.$router.push("/list");
        })
        .catch(error => {
          let response = error.response;

          if (response.status == 400) {
            this.username_errors = response.data.username;
            this.password_errors = response.data.password;
            this.non_field_errors = response.data.non_field_errors;
          } else {
            console.log(error);
          }
        });
    }
  }
};
</script>

<style>
</style>
