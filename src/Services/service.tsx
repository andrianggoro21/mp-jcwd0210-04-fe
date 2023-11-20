import axios from "axios";

const API_URL = "http://localhost:8080/";

const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

const register = (
  username: string,
  email: string,
  password: string,
  phoneNumber: string,
  address: string,
  avatar: string,
  roleId: number
) => {
  return axios
    .post(API_URL + "auth/register", {
      username,
      email,
      password,
      phoneNumber,
      address,
      avatar,
      roleId,
    })
    .then((response) => {
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export default {
  login,
  register,
  logout,
};
