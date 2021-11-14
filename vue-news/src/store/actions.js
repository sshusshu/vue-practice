import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index";

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
};
