import * as types from "../constant/constant.js";

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: types.DELETE_ITEM,
  payload: item,
})

export const isClaimed = (claimed) => ({
  type: types.IS_CLAIMED,
  payload: claimed,
})

export const editEvent = (newTitle, newDescription, newDate) => ({
  type: types.EDIT_EVENT,
  payload: {title: newTitle, description: newDescription, date: newDate}
})

// export const editTitle = (title) => ({
//   type: types.EDIT_TITLE,
//   payload: title,
// })

// export const editDescription = (description) => ({
//   type: types.EDIT_DESCRIPTION,
//   payload: description,
// })

// export const editDate = (date) => ({
//   type: types.EDIT_DATE,
//   payload: date,
// })

export const addAttendee = (attendee) => ({
  type: types.ADD_ATTENDEE,
  payload: attendee,
})

export const deleteAttendee = (attendee) => ({
  type: types.DELETE_ATTENDEE,
  payload: attendee,
})

// wait do i even need this?
export const addEmail = (email) => ({
  type: types.ADD_EMAIL,
  payload: email,
});

export const loginCheck = (loggedIn) => ({
  type: types.LOGIN_CHECK,
  payload: loggedIn,
})

export const firstName = (name) => ({
  type: types.FIRST_NAME,
  payload: name,
})
