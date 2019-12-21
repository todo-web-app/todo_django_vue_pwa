<template>
  <div>
    <b-row>
      <b-col cols="12" md="4" offset-md="4">
        <b-alert
          dismissible
          variant="danger"
          v-for="(error, index) in form.non_field_errors"
          :key="index"
          show
          fade
        >{{ error }}</b-alert>
        <b-form @submit.prevent="onSubmit" class="border" id="login-form">
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
          <b-button
            type="submit"
            variant="secondary"
            :to="{ name:'register' }"
            class="float-left"
          >Register</b-button>
          <b-button type="submit" variant="primary" class="float-right">Login</b-button>
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
        non_field_errors: [],
        username_error: "",
        password_error: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.form.non_field_errors = [];
      this.form.username_error = "";
      this.form.password_error = "";

      this.$store
        .dispatch("obtainToken", {
          username: this.form.username,
          password: this.form.password
        })
        .then(response => {
          this.$store.commit("updateToken", response.data.token);
          this.$router.push("/list");
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
            this.form.non_field_errors = response.data.non_field_errors;
          } else {
            console.log(error);
          }
        });
    }
  }
};
</script>

<style>
#login-form {
  overflow: hidden;
  padding: 15px;
}
</style>
