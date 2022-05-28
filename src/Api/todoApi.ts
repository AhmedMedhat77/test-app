// import AXIOS, { AxiosRequestConfig } from "axios";

// const axios = AXIOS.create({ baseURL:  });

export const TodoAPIWrapper = function (defaultConfig: any) {
  return {
    getTodo: function () {
      return new Promise((resolve)=>{
          setTimeout(()=>{
              resolve([
                {
                  id: "1",
                  text: "assasasaasdasd",
                },
              ])
          },1000);
      } )
    },
  };
};
