<template>
  <div class="register">
    <input
      class="twitter"
      type="text"
      ref="email_input"
      placeholder="email"
    /><br />
    <input
      class="twitter"
      type="text"
      ref="username_input"
      placeholder="username"
    /><br />
    <input
      class="twitter"
      type="password"
      ref="password_input"
      placeholder="password"
    /><br />
    <input
      class="twitter"
      type="text"
      ref="bio_input"
      placeholder="bio"
    /><br />
    <input
      class="twitter"
      type="text"
      ref="dob_input"
      placeholder="YYYY-MM-DD"
    /><br />
    <input
      class="buttons"
      @click="register_user"
      type="submit"
      ref="login_submit"
      value="Sign Up"
    />
  </div>
</template>

<script>
export default {
  name: "register-form",
};
</script>

<style scoped></style>
