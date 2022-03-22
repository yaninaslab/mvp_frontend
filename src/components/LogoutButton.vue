<template>
  <div>
    <button v-if="isAuth" class="link_to_logout" @click="log_out">
      LOGOUT
    </button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "logout-button",
  methods: {
    log_out() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/login`,
          method: "DELETE",
          data: {
            loginToken: this.login_token,
          },
        })
        .then(() => {
          this.$store.dispatch("log_out");
          this.$router.push({ path: "/login", query: { logout: true } });
        })
        .catch((error) => {
          error.message;
        });
    },
  },
  data() {
    return {
      login_token: cookies.get("login_token"),
    };
  },
  computed: {
    isAuth() {
      // return !!this.$store.state.user.loginToken
      return this.$store.state.user.loginToken ? true : false;
    },
  },
};
</script>

<style scoped>
.link_to_logout {
  position: absolute;
  top: 100px;
  right: 150px;
  padding: 20px;
  text-align: center;
  border: solid 1px black;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 5px;
}
</style>
