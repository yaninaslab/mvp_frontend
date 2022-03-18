<template>
  <div id="app">
    <page-header></page-header>
    <cart></cart>
    <router-view />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import Cart from "@/components/Cart.vue";
export default {
  name: "app",
  components: {
    PageHeader,
    Cart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
