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
        <span>
          <button
            :disabled="cart_item_data[4] == 1 ? true : false"
            class="quantity_btn"
            @click="decreaseItem"
          >
            -
          </button>
          {{ cart_item_data[4] }}
          <button class="quantity_btn" @click="increaseItem">+</button>
        </span>
      </div>
      <div class="cart-item_price">
        <p>C${{ cart_item_data[2] }}</p>
      </div>
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
    decreaseItem() {
      this.$emit("decreaseItem");
    },
    increaseItem() {
      this.$emit("increaseItem");
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
  place-content: center;
  grid-auto-flow: column;
  margin: 20px;
  place-items: center;
  /* display: flex;
  flex-wrap: nowrap; */
  justify-content: space-between;
  align-items: center;
  padding: 0px 200px;
  box-shadow: 0 0 8px 0 #e0e0e0;
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
.quantity_btn {
  cursor: pointer;
  background-color: black;
  color: white;
  font-size: 1.5rem;
  font-weight: 900;
  width: 40px;
  margin: 10px;
  border-radius: 5px;
}
</style>
