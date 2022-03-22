<template>
  <div>
    <h2 class="message">Your order has been placed. Thank you!</h2>
    <router-link :to="{ name: 'Home' }">
      <button class="link_to_home">SHOP AGAIN</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "thank-page",
};
</script>

<style scoped>
.message {
  margin-top: 100px;
}
.link_to_home {
  margin-top: 50px;
  padding: 20px;
  text-align: center;
  border: solid 1px black;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 5px;
}
</style>
