import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  login: (params) => api.post(API_CONSTANTS.AUTH.LOGIN, params),

  signUp: (params) => api.post(API_CONSTANTS.AUTH.SIGN_UP, params),

  resetPassword: (params) => api.put(API_CONSTANTS.AUTH.RESET_PASSWORD, params),

  forgotPassword: (params) =>
    api.put(API_CONSTANTS.AUTH.FORGOT_PASSWORD, params),
};
