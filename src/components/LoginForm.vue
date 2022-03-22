<template>
  <div class="login_form_mobile">
    <h2>Sign in to Coach Insider</h2>
    <input
      class="login"
      type="text"
      ref="email_input"
      placeholder="email"
    /><br />
    <input
      class="login"
      type="password"
      ref="password_input"
      placeholder="password"
    /><br />
    <input
      class="buttons"
      @click="attempt_login"
      type="submit"
      ref="login_submit"
      value="SIGN IN"
    />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "login-form",
  methods: {
    attempt_login() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/login",
          method: "POST",
          data: {
            email: this.$refs.email_input.value,
            password: this.$refs.password_input.value,
          },
        })
        .then((response) => {
          this.$store.commit("update_user", response.data);
          cookies.set("login_token", response.data.loginToken);
          cookies.set("user_id", response.data.userId);
          this.$router.push({ path: "/cart" });
        })
        .catch((error) => {
          error.message;
        });
    },
    // attempt_login() {
    //   this.$store.dispatch("attempt_login", {
    //     email: this.$refs.email_input.value,
    //     password: this.$refs.password_input.value,
    //   });
    // },
  },
};
</script>

<style scoped>
.login_form_mobile {
  max-width: 100%;
}
input {
  max-width: 100%;
  width: 300px;
  margin: 5px;
  border: 1px solid gray;
}
.buttons {
  margin: 10px;
  width: 300px;
  max-width: 100%;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-weight: 600;
  height: 50px;
  border: black solid;
}
.login {
  max-width: 400px;
  max-width: 100%;
  border-radius: 5px;
  background: white;
  border: 1px solid gray;
  outline: none;
  padding: 10px;
}
.login:focus {
  border: 1px solid gray;
  box-shadow: 0px 0px 3px 1px lightgrey;
}
</style>
