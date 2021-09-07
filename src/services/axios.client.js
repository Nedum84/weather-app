import axios from "axios";
import config from "../config/config";

const axiosClient = axios.create({
  baseURL: `${config.OPEN_WEATHER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    //--> Maybe bind tokens...etc
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
