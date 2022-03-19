import axios from "axios";
import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    cart: [],
  },
  mutations: {
    list_items(state, payload) {
      state.items = payload;
    },
    set_cart(state, item) {
      if (state.cart.length) {
        let sameItem = false;
        state.cart.map(function (cart_item) {
          if (cart_item[0] === item[0]) {
            sameItem = true;
            cart_item[4]++;
          }
        });
        if (!sameItem) {
          state.cart.push(item);
        }
      } else {
        state.cart.push(item);
      }
    },
    remove_from_cart(state, index) {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    get_items(store) {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/items",
        })
        .then((response) => {
          store.commit("list_items", response.data);
        })
        .catch((error) => {
          error;
        });
    },
    add_to_cart({ commit }, item) {
      commit("set_cart", item);
    },
    remove_item({ commit }, index) {
      commit("remove_from_cart", index);
    },
  },
  getters: {
    items(state) {
      return state.items;
    },
    cart(state) {
      return state.cart;
    },
  },
  modules: {},
});
