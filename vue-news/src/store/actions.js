import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index";

export default {
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
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => commit("SET_ASK", data))
      .catch((err) => console.log(err));
  },
  FETCH_USER({ commit }, userId) {
    fetchUserInfo(userId)
      .then(({ data }) => commit("SET_USER", data))
      .catch((err) => console.log(err));
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItemInfo(itemId)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch((err) => console.log(err));
  },
};
