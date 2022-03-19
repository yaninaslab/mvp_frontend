<template>
  <div>
    <h1>Cart</h1>
    <cart-item
      v-for="(cart_item, index) in cart_data"
      :key="cart_item[0]"
      :cart_item_data="cart_item"
      @removeFromCart="removeFromCart(index)"
    ></cart-item>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "cart",
  components: {
    CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["remove_item"]),
    removeFromCart(index) {
      this.remove_item(index);
    },
  },
};
</script>

<style scoped></style>
