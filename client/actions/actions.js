import * as types from "../constant/constant.js";

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  payload: item,
});

export const deleteItem = (itemId) => ({
  type: types.DELETE_ITEM,
  payload: itemId,
});

export const isClaimed = (userObj) => ({
  type: types.IS_CLAIMED,
  payload: userObj,
});

export const editEvent = (newTitle, newDescription, newDate) => ({
  type: types.EDIT_EVENT,
  payload: { title: newTitle, description: newDescription, date: newDate },
});

export const addAttendee = (attendeeData) => ({
  type: types.ADD_ATTENDEE,
  payload: attendeeData,
});

export const deleteAttendee = (attendeeId) => ({
  type: types.DELETE_ATTENDEE,
  payload: attendeeId,
});

export const userData = (userObj) => ({
  type: types.USER_DATA,
  payload: userObj,
});

export const userLogout = () => ({
  type: types.USER_LOGOUT,
});

export const getEvents = (eventArray) => ({
  type: types.GET_EVENTS,
  payload: eventArray,
});

export const getEventIndexAndId = (eventInfo) => ({
  type: types.EVENT_INDEX_ID,
  payload: eventInfo,
});

export const getItems = (itemArray) => ({
  type: types.GET_ITEMS,
  payload: itemArray,
});