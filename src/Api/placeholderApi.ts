import AXIOS, { AxiosRequestConfig } from "axios";

const axios = AXIOS.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export const JsonPlaceholderAPIWrapper = function (defaultConfig: AxiosRequestConfig) {
  return {
    getUsers: function () {
      return axios.get("/users", { ...defaultConfig });
    },
  };
};
