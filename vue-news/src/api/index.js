import axios from "axios";

//1.HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}news/1.json`);
};
const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`);
};
const fetchAskList = () => {
  return axios.get(`${config.baseUrl}ask/1.json`);
};
const fetchUserInfo = (userId) => {
  return axios.get(`${config.baseUrl}user/${userId}.json`);
};

const fetchItemInfo = (itemId) => {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
};
export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
};
