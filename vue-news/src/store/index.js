import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, asks) {
      state.asks = asks;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((res) => context.commit("SET_NEWS", res.data))
        .catch((err) => console.log(err));
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((res) => context.commit("SET_JOBS", res.data))
        .catch((err) => console.log(err));
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then((res) => context.commit("SET_ASK", res.data))
        .catch((err) => console.log(err));
    },
  },
});
