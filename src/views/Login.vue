<template>
  <div>
    <h3>{{ success_message }}</h3>
    <div class="row no-gutters">
      <div class="col-md-6 no-gutters">
        <div class="leftside d-flex justify-content-center align-items-center">
          <login-form></login-form>
        </div>
      </div>
      <div class="col-md-6 no-gutters">
        <div class="rightside d-flex justify-content-center align-items-center">
          <register-form></register-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Sale",
  components: {
    RegisterForm,
    LoginForm,
  },
  data() {
    return {
      success_message: undefined,
    };
  },
};
</script>

<style scoped>
.leftside,
.rightside {
  height: 100vh;
  width: 100%;
}
@media screen and (min-width: 768px) {
  .leftside,
  .rightside {
    height: 100vh;
  }
}
</style>
