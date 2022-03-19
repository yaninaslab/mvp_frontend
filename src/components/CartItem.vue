<template>
  <div>
    <div class="cart_item_info">
      <img
        class="item_image"
        :src="cart_item_data[3]"
        :alt="cart_item_data[1]"
      />
      <p>{{ cart_item_data[1] }}</p>
      <div class="cart-item_quantity">
        <p>QTY:</p>
        {{ cart_item_data[4] }}
      </div>
      <p>{{ cart_item_data[2] }}</p>
      <div class="remove_btn">
        <button @click="removeFromCart">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    removeFromCart() {
      this.$emit("removeFromCart");
    },
  },
  //   mounted() {
  //     this.$set(this.cart_item_data, [4], 1);
  //   },
};
</script>

<style scoped>
.cart_item_info {
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  /* display: flex;
  flex-wrap: nowrap; */
  justify-content: space-between;
  align-items: center;
  padding: 0px 200px;
}
.item_image {
  max-width: 100px;
}
.remove_btn {
  display: flex;
  justify-content: center;
  margin: 10px;
  width: 100px;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-weight: 600;
  height: 30px;
  border: black solid;
}
</style>
