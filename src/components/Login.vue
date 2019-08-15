<template>
  <div>
    <b-row>
      <b-col cols="12" md="4" offset-md="4">
        <b-form @submit.prevent="onSubmit" class="border" id="login-form">
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
          <b-button type="submit" variant="secondary" :to="{ name:'register' }" class="float-left">Register</b-button>
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
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
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
#login-form {
  overflow: hidden;
  padding: 15px;
}
</style>
