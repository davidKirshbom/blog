import axios from "axios";
import serverConfig from "./config";
const login = async (username, password) => {
  const response = await axios.post(serverConfig.baseUrl + "/auth/login", {
    username,
    password,
  });
  return response.data;
};

const register = async (username, password) => {
  const response = await axios.post(serverConfig.baseUrl + "/auth/register", {
    username,
    password,
  });
  return response.data;
};
const profile = async (token) => {
  const response = await axios.get(serverConfig.baseUrl + "/user/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export { login, register, profile };
