import axios, { AxiosResponse } from "axios";
import { API_KEY, BASE_API } from "./const";
import { join } from "lodash";

const onSuccessRequest = (response: AxiosResponse) => response.data;
const onRejectRequest = (error: any) => Promise.reject(error);

axios.interceptors.request.use(async (config) => {
//   const headers = {
//     "X-Api-Key": `e33ea347-1d63-49f7-8815-b32ff98ce0a2`,
//   };
//   config.headers = { ...config.headers, ...headers };
  config.headers.set("X-Api-Key", API_KEY);


  if (!config.url?.startsWith("http") && !config.url?.includes(BASE_API)) {
    config.url = join([BASE_API, config.url], "");
  }

  return config;
});


axios.interceptors.response.use(onSuccessRequest, onRejectRequest);

export default axios;
