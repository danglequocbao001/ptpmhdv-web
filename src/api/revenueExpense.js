import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getAllMonths: () => api.get(API_CONSTANTS.REVENUE_EXPENSE.MONTH),

  getStatisticByGroup: (month) =>
    api.get(API_CONSTANTS.REVENUE_EXPENSE.STATISTIC_BY_GROUP(month)),

  getStatisticByDate: (month) =>
    api.get(API_CONSTANTS.REVENUE_EXPENSE.STATISTIC_BY_DATE(month)),

  get: (revenueExpenseId) =>
    api.get(API_CONSTANTS.REVENUE_EXPENSE.DETAIL(revenueExpenseId)),

  edit: (revenueExpenseId, params) =>
    api.patch(API_CONSTANTS.REVENUE_EXPENSE.DETAIL(revenueExpenseId), params),

  delele: (revenueExpenseId) =>
    api.delete(API_CONSTANTS.REVENUE_EXPENSE.DETAIL(revenueExpenseId)),

  create: (params) => api.post(API_CONSTANTS.REVENUE_EXPENSE.GENERAL, params),
};
