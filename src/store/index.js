import axios from "axios";
import Vue from "vue";
import cookies from "vue-cookies";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    cart: [],
    user: {},
    bags: [],
  },
  mutations: {
    list_items(state, payload) {
      state.items = payload;
    },
    list_bags(state, payload) {
      state.bags = payload;
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
      const updatedCart = state.cart;
      updatedCart[index][4]++;

      state.cart = [...updatedCart];
    },
    decrease_item(state, index) {
      if (state.cart[index][4] > 1) {
        const updatedCart = state.cart;
        updatedCart[index][4]--;

        state.cart = [...updatedCart];
      }
    },
    update_user(state, payload) {
      state.user = payload;
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
    get_bags(store) {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/bags",
        })
        .then((response) => {
          store.commit("list_bags", response.data);
        })
        .catch((error) => {
          error;
        });
    },
    // attempt_login({ commit }, data) {
    //   axios
    //     .request({
    //       url: "http://127.0.0.1:5000/api/login",
    //       method: "POST",
    //       data: {
    //         email: data.email,
    //         password: data.password,
    //       },
    //     })
    //     .then((response) => {
    //       commit("update_user", response.data);
    //       console.log(response.data);
    //       cookies.set("login_token", response.data.loginToken);
    //       cookies.set("user_id", response.data.userId);
    //       // this.$router.push({ path: "/" });
    //     })
    //     .catch((error) => {
    //       error.message;
    //     });
    // },

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
    log_out(store) {
      cookies.remove("login_token");
      cookies.remove("user_id");
      store.commit("update_user", {});
    },
  },
  getters: {
    items(state) {
      return state.items;
    },
    cart(state) {
      return state.cart;
    },
    bags(state) {
      return state.bags;
    },
  },
  modules: {},
});
