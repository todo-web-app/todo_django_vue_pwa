<template>
  <div>
    <b-row>
      <b-col cols="12" md="4" offset-md="4">
        <b-form @submit.prevent="register" class="border" id="register-form">
          <b-form-group id="input-group-1" label="Username:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.username"
              placeholder="Enter Username"
              :state="form.username_error ? false : null"
              aria-describedby="input-1-live-feedback"
            ></b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">{{ form.username_error }}</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              placeholder="Enter password"
              type="password"
              :state="form.password_error ? false : null"
              aria-describedby="input-2-live-feedback"
            ></b-form-input>
            <b-form-invalid-feedback id="input-2-live-feedback">{{ form.password_error }}</b-form-invalid-feedback>
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
        password: "",
        username_error: "",
        password_error: ""
      }
    };
  },
  methods: {
    register: function() {
      var app = this;
      var newUser = {
        username: this.form.username,
        password: this.form.password
      };

      this.form.username_error = "";
      this.form.password_error = "";

      this.axios
        .post(process.env.API_URL + "/todo/user/add", newUser)
        .then(response => {
          this.$router.push({ name: "login" });
        })
        .catch(error => {
          let response = error.response;

          if (response.status == 400) {
            if (response.data.username) {
              this.form.username_error = response.data.username[0];
            }
            if (response.data.password) {
              this.form.password_error = response.data.password[0];
            }
          }
        });
    }
  }
};
</script>

<style>
#register-form {
  overflow: hidden;
  padding: 15px;
}
</style>
