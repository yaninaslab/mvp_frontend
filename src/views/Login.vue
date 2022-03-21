<template>
  <div>
    <h1>This is Login page</h1>
    <register-form></register-form>
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "Sale",
  components: {
    RegisterForm,
  },
};
</script>
