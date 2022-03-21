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
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i][0] === item[0]) {
            state.cart[i][4]++;
            let duplicateItem = state.cart.splice(i, 1);
            state.cart = state.cart.concat(duplicateItem);
            sameItem = true;
            break;
          }
        }
        if (!sameItem) {
          item[4] = 1;
          state.cart.push(item);
        }
      } else {
        item[4] = 1;
        state.cart.push(item);
      }
    },
    remove_from_cart(state, index) {
      state.cart.splice(index, 1);
    },
    increase_item(state, index) {
      state.cart[index][4]++;
    },
    decrease_item(state, index) {
      if (state.cart[index][4] > 1) {
        state.cart[index][4]--;
      }
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
    decrease_item({ commit }, index) {
      commit("decrease_item", index);
    },
    increase_item({ commit }, index) {
      commit("increase_item", index);
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
