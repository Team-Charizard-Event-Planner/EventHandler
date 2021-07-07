import * as types from "../constant/constant.js";

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  payload: item,
});

export const addEmail = (email) => ({
  type: types.ADD_EMAIL,
  payload: email,
});

export const isLoggedIn = (loggedIn) => ({
  type: types.LOGIN_CHECK,
  payload: loggedIn,
})