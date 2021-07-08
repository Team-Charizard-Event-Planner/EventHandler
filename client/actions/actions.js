import * as types from "../constant/constant.js";

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: types.DELETE_ITEM,
  payload: item,
});

export const isClaimed = (claimed) => ({
  type: types.IS_CLAIMED,
  payload: claimed,
});

export const editEvent = (newTitle, newDescription, newDate) => ({
  type: types.EDIT_EVENT,
  payload: { title: newTitle, description: newDescription, date: newDate },
});

export const addAttendee = (attendee) => ({
  type: types.ADD_ATTENDEE,
  payload: attendee,
});

export const deleteAttendee = (attendee) => ({
  type: types.DELETE_ATTENDEE,
  payload: attendee,
});

export const userData = (userObj) => ({
  type: types.USER_DATA,
  payload: userObj,
});

export const userLogout = () => ({
  type: types.USER_LOGOUT,
});
