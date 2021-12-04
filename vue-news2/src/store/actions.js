import {
  fetchAskList,
  fetchJobList,
  fetchNewList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../api/index.js";
export default {
  FETCH_NEWS({ commit }) {
    fetchNewList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
        return data;
      })
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
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => commit("SET_USER", data))
      .catch((err) => console.log(err));
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch((err) => console.log(err));
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit("SET_LIST", data))
      .catch((err) => console.log(err));
  },
};
