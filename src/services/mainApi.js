import axios from "axios";
import { servers } from '../utils/config'

// const appEnv = process.env.REACT_APP_ENV;
let baseUrl =servers["development"];

const mainApi = axios.create({
  baseURL: baseUrl,
  timeout: 40000,
});

mainApi.defaults.headers.post["Content-Type"] = "application/json";

const getToken = () => {
  const token = localStorage.getItem("UserToken");
  if (token && token !== null) return token;
  return undefined;
};

mainApi.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers.Authorization = token;
    return config;
  },
  (error) => Promise.reject(error)
);

mainApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      Number(error.response.status) === 401
    ) {
      alert("Seu login expirou!");
      localStorage.clear();
      document.location.href = "/";
    }
    return Promise.reject(error);
  }
);
export default mainApi;
