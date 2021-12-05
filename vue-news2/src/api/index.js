import axios from "axios";

// 1.HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2.API함수들을 정리

const fetchNewList = async () => {
  try {
    return await axios.get(`${config.baseUrl}news/1.json`);
  } catch (err) {
    console.log(err);
  }
};

const fetchJobList = async () => {
  try {
    return await axios.get(`${config.baseUrl}jobs/1.json`);
  } catch (err) {
    console.log(err);
  }
};

const fetchAskList = async () => {
  try {
    return await axios.get(`${config.baseUrl}ask/1.json`);
  } catch (err) {
    console.log(err);
  }
};

const fetchUserInfo = async (username) => {
  try {
    return await axios.get(`${config.baseUrl}user/${username}.json`);
  } catch (err) {
    console.log(err);
  }
};
const fetchItemInfo = async (id) => {
  try {
    return await axios.get(`${config.baseUrl}item/${id}.json`);
  } catch (err) {
    console.log(err);
  }
};
const fetchList = async (pageName) => {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch (err) {
    console.log(err);
  }
};

export {
  fetchNewList,
  fetchJobList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
};
