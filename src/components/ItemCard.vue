<template>
  <div>
    <article class="item_card">
      <img class="item_image" :src="item[3]" :alt="item[1]" />
      <h5 class="item_name">{{ item[1] }}</h5>
      <p class="item_price">{{ item[2] }}</p>
    </article>
    <div class="buttons">
      <button @click="addToCart" class="button">ADD TO BAG</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-card",
  props: {
    item: Array,
    default() {
      return [];
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.item);
    },
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
.buttons {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.button {
  width: 120px;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-weight: 600;
  height: 30px;
  border: black solid;
}
</style>
