<template>
  <div>
    <article class="item_card">
      <img class="item_image" :src="item[3]" :alt="item[1]" />
      <h5 class="item_name">{{ item[1] }}</h5>
      <p class="item_price">{{ item[2] }}</p>
      <add-to-bag></add-to-bag>
    </article>
  </div>
</template>

<script>
import AddToBag from "@/components/AddToBag.vue";
export default {
  name: "item-card",
  components: {
    AddToBag,
  },
  props: {
    item: Array,
  },
};
</script>

<style scoped>
.item_card {
  display: grid;
  place-items: center;
  place-content: center;
}
.item_image {
  max-width: min(400px, 100%);
}
.item_name {
  margin-top: 10px;
  font-size: 1rem;
  color: black;
  padding: 0px 10px;
}
.item_price {
  margin-top: 8px;
  color: black;
  font-size: 1.1rem;
}
</style>
