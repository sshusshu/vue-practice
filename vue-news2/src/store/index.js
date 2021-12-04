import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},
    list: [],
  },
  getters: {
    fetchedAsk: (state) => state.ask,
    fetchedItem: (state) => state.item,
  },
  mutations,
  actions,
});
