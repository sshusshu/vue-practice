import Vue from "vue";
import Vuex from "vuex";
import { fetchAskList, fetchJobList, fetchNewList } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    fetchedAsk: (state) => state.ask,
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
  },
  actions: {
    FETCH_NEWS({ commit }) {
      fetchNewList()
        .then(({ data }) => commit("SET_NEWS", data))
        .catch((err) => console.log(err));
    },
    FETCH_JOBS({ commit }) {
      fetchJobList()
        .then(({ data }) => commit("SET_JOBS", data))
        .catch((err) => console.log(err));
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => commit("SET_ASK", data))
        .catch((err) => console.log(err));
    },
  },
});
