<template>
  <div class="register_form_mobile">
    <h2>Become a Coach Insider</h2>
    <p>
      Join now for early access, birthday gifts,
      <br />
      personalized offers and more.
    </p>
    <input
      class="register"
      type="text"
      ref="fName_input"
      placeholder="First Name"
    /><br />
    <input
      class="register"
      type="text"
      ref="lName_input"
      placeholder="Last Name"
    /><br />
    <input
      class="register"
      type="text"
      ref="email_input"
      placeholder="Email"
    /><br />
    <input
      class="register"
      type="password"
      ref="password_input"
      placeholder="Password"
    /><br />
    <input
      class="register"
      type="text"
      ref="phone_input"
      placeholder="Phone"
    /><br />
    <input
      class="buttons"
      @click="register_user"
      type="submit"
      ref="login_submit"
      value="CREATE ACCOUNT"
    />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "register-form",
  methods: {
    register_user() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/users`,
          method: "POST",
          data: {
            firstName: this.$refs.fName_input.value,
            lastName: this.$refs.lName_input.value,
            email: this.$refs.email_input.value,
            password: this.$refs.password_input.value,
            phone: this.$refs.phone_input.value,
          },
        })
        .then((response) => {
          this.users = response.data;
          cookies.set("login_token", response.data.loginToken);
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          error;
        });
    },
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>

<style scoped>
.register_form_mobile {
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
.register {
  max-width: 400px;
  max-width: 100%;
  border-radius: 5px;
  background: white;
  border: 1px solid gray;
  outline: none;
  padding: 10px;
}
.register:focus {
  border: 1px solid gray;
  box-shadow: 0px 0px 3px 1px lightgrey;
}
</style>
