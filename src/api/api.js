import { create } from "apisauce";

const baseURL = "";

const api = create({ baseURL });

export const setNewToken = (token) => {
  if (token) {
    api.setHeader("Authorization", "Bearer " + token);
  } else {
    api.deleteHeader("Authorization");
  }
};

export default api;
