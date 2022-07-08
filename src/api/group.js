import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getAll: () => api.get(API_CONSTANTS.GROUP.GENERAL),

  get: (groupId) => api.get(API_CONSTANTS.GROUP.DETAIL(groupId)),

  create: (params) => api.post(API_CONSTANTS.GROUP.GENERAL, params),

  edit: (groupId, params) =>
    api.patch(API_CONSTANTS.GROUP.DETAIL(groupId), params),

  delete: (groupId) => api.delete(API_CONSTANTS.GROUP.DETAIL(groupId)),
};
