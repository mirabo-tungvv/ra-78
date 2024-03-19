import api from "./axiosClient";

const authService = {
  login(body) {
    return api.post("/login", body);
  },
  register(body) {
    return api.post("/register", body);
  },
};

// authService.login({username: 1, password: 2})

export default authService;
