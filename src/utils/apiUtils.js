// import store from "../configs/store";
// const axios = require("axios");

// const commonAxios = axios.create({
//   // baseURL: process.env.REACT_APP_BACKEND_URL,
//   baseURL: "http://localhost:8080",
// });

// function getToken() {
//   const state = store.getState().login.data.token;
//   return state;
// }

// commonAxios.interceptors.request.use(
//   (config) => {
//     const token = getToken();
//     console.log("yang ini token :", token);
//     if (token) {
//       config.header.Authorization = `Bearer ${token}`;
//     }
//     console.log("yang ini config :", config);
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// commonAxios.interceptors.response.use(
//   function (response) {
//     const { data } = response;
//     if (data.code !== 0) {
//       const error = new Error(data.message || "Unknown Error");
//       error.data = data.data;
//       throw error;
//     }
//     return data.data;
// return sleep(3000, data.data);
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// export { commonAxios };

// -------------------------------------------------------------

const axios = require("axios");

const commonAxios = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_URL,
  baseURL: "http://192.168.1.30:8080",
  // baseURL: "http://192.168.1.33:8080",
  // baseURL: "http://localhost:8080",
});

function sleep(delay, value) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay, value);
  });
}

commonAxios.interceptors.response.use(
  function (response) {
    const { data } = response;
    if (data.code !== 0) {
      const error = new Error(data.message || "Unknown Error");
      error.data = data.data;
      throw error;
    }
    return sleep(1000, data.data);
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { commonAxios };
