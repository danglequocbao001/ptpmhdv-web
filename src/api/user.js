import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  get: () => api.get(API_CONSTANTS.USER.ME),

  edit: (params) => api.patch(API_CONSTANTS.USER.ME, params),

  changePassword: (params) =>
    api.patch(API_CONSTANTS.USER.CHANGE_PASSWORD, params),
};
