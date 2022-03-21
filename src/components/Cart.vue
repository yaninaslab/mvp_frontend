<template>
  <div>
    <router-link :to="{ name: 'Home' }">
      <div class="link_to_home">BACK HOME</div>
    </router-link>
    <div v-if="cart_data.length">
      <h1>Shopping Bag</h1>
    </div>
    <div class="empty_cart" v-if="!cart_data.length">
      <h2>Your Shopping Bag is empty</h2>
      <button @click="backHome" class="link_home">SEE WHAT'S NEW</button>
    </div>
    <cart-item
      v-for="(cart_item, index) in cart_data"
      :key="`${cart_item[0]}_${cart_item[4]}`"
      :cart_item_data="cart_item"
      @removeFromCart="removeFromCart(index)"
      @decreaseItem="decreaseItem(index)"
      @increaseItem="increaseItem(index)"
    ></cart-item>
    <div class="cart_total">
      <p class="total_num">TOTAL:</p>
      <p>C$ {{ cartTotal }}</p>
    </div>
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
  computed: {
    cart_data() {
      return this.$store.state.cart;
    },
    cartTotal() {
      let result = [];
      if (this.cart_data.length) {
        for (let cart_item of this.cart_data) {
          result.push(cart_item[2] * cart_item[4]);
        }
        result = result.reduce((sum, el) => sum + el, 0);
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions(["remove_item", "decrease_item", "increase_item"]),
    removeFromCart(index) {
      this.remove_item(index);
    },
    decreaseItem(index) {
      this.decrease_item(index);
    },
    increaseItem(index) {
      this.increase_item(index);
    },
    backHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.link_to_home {
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
.link_home {
  margin-top: 30px;
  padding: 20px;
  text-align: center;
  border: solid 1px black;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 5px;
}
.empty_cart {
  margin-top: 60px;
}
.cart_total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  border: solid 1px black;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 5px;
}
.total_num {
  margin-right: 30px;
}
</style>
