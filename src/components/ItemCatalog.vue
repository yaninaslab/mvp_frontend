<template>
  <div>
    <h1>Your Favorites</h1>
    <!-- <p>{{ message }}</p> -->
    <!-- <item-card></item-card> -->
    <section class="items_container">
      <article v-for="item in items" :key="item[0]">
        <item-card :item="item"></item-card>
      </article>
    </section>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
export default {
  name: "item-catalog",
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [],
      message: underfined,
    };
  },
  computed: {
    items() {
      return this.$store.state["items"];
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
</style>
