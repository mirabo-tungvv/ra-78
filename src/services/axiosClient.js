import axios from "axios";

const api = axios.create({
  // baseURL: "https://619cb1f368ebaa001753cb2b.mockapi.io/",
  baseURL: "http://localhost:2809/",
  timeout: 5000, // thời gian hết hạn request
  headers: { "Content-Type": "application/json" }, // define request API dữ liệu gửi đi dạng json
});

// Can thiệp vào quá trình request lên server
api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Can thiệp vào quán trình nhận response từ server
api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
