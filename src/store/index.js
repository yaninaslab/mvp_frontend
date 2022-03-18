import axios from "axios";
import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    list_items(state, payload) {
      state.items = payload;
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
  },
  getters: {
    items(state) {
      return state.items;
    },
  },
  modules: {},
});
