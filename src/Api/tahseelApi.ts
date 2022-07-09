import AXIOS, { AxiosRequestConfig } from "axios";

const axios = AXIOS.create({
//   baseURL: "http://192.168.40.112:8080/CanalCollection",
});

function makeFormData(obj: object) {
  const formData = new FormData();
  Object.entries(obj).forEach((item) => {
    const [key, value] = item;
    formData.append(key, value);
  });
  return formData;
}

export const ThaseelAPIWrapper = function (defaultConfig: AxiosRequestConfig) {
  return {
    login: function (
      user_name: string,
      password: string,
      _token = "EegDM4hMJIl6FJRboESRavIXE1vQyTyEdxeja1ei"
    ) {
      const formData = makeFormData({ user_name, password, _token });
    //   debugger;
      return axios.post("/login", formData, { ...defaultConfig });
    },
  };
};
