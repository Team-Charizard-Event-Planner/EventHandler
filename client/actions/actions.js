import * as types from "../constant/constant.js";

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  payload: item,
});
