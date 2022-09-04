import axios from "axios";

export const API_URL = "http://localhost:5000";
const instance = axios.create({
  baseURL: API_URL,
});

export function authHeader() {
  // return authorization header with jwt token
  let token = localStorage.getItem("token");

  if (token) {
    return { authorization: "Bearer " + token };
  } else {
    return {};
  }
}

export const post = async (url, params, config) => {
  const { data } = await instance
    .post(url, params, config)
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

  if (!data.status) {
    // alert(data.msg);
  }

  return data;
};

export const get = async (url, params) => {
  const { data } = await instance.get(url, params).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
  return data;
};
