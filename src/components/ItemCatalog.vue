<template>
  <div>
    <router-link :to="{ name: 'Cart' }">
      <div class="link_to_cart">MY BAG({{ cart.length }})</div>
    </router-link>

    <h1>Your Favorites</h1>
    <p>{{ message }}</p>
    <section class="items_container">
      <article v-for="item in items" :key="item[0]">
        <item-card :item="item" @addToCart="addToCart"></item-card>
      </article>
    </section>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "item-catalog",
  components: {
    ItemCard,
  },
  data() {
    return {
      message: undefined,
      item: [],
    };
  },
  computed: {
    ...mapGetters(["items", "cart"]),
    items() {
      return this.$store.state.items;
    },
  },
  methods: {
    ...mapActions(["get_items", "add_to_cart"]),
    addToCart(item) {
      this.add_to_cart(item);
    },
  },
};
</script>

<style scoped>
.items_container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 30px;
}
.link_to_cart {
  position: absolute;
  top: 100px;
  right: 20px;
  padding: 20px;
  text-align: center;
  border: solid 1px black;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 5px;
}
</style>
