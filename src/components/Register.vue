<template>
  <div>
    <b-row>
      <b-col cols="12" md="4" offset-md="4">
        <b-form @submit.prevent="register" class="border" id="register-form">
          <b-form-group id="input-group-1" label="Username:" label-for="input-1">
            <b-form-input id="input-1" v-model="form.username" placeholder="Enter Username"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              required
              placeholder="Enter password"
              type="password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" class="float-right">Register</b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
      register: function() {
        var app = this;
        var newUser = { username: this.form.username, password: this.form.password };
        app.axios.post(process.env.API_URL + "/todo/user/add", newUser)
            .then(response => {
                this.$router.push({name: "login"});
            });
      }
  }
}
</script>

<style>
#register-form {
  overflow: hidden;
  padding: 15px;
}
</style>
