/* eslint-disable no-case-declarations */
import * as types from "../constant/constant";

const initialState = {
  itemArray: [],
  isClaimed: null,
  title: "",
  description: "",
  date: "",
  attendeeArray: [],
  eventArray: [],
  eventIndexAndId: [],
};

const eventReducer = (state = initialState, action) => {
  let item;
  let getItems;
  let itemId;
  let userId;
  let eventDetails;
  let newAttendee;
  let attendeeId;
  let eventArray;
  let newEventIndexAndId;
  let getAttendees;

  switch (action.type) {
    case types.ADD_ITEM:
      item = action.payload;
      return {
        ...state,
        itemArray: [...state.itemArray, item],
      };
    // maybe we can remove multiple at a time? stretch feature? lol
    case types.DELETE_ITEM:
      itemId = action.payload;
      // declare an array equal to the current state value
      const newItem = state.itemArray.filter(
        (element) => {
          return element._id.toString() !== itemId.toString()
        }
      )
      return {
        ...state,
        itemArray: newItem,
      };
    case types.IS_CLAIMED:
      return {
        ...state,
        itemArray: action.payload,
      };
    case types.EDIT_EVENT:
      eventDetails = action.payload;
      return {
        ...state,
        title: eventDetails.title,
        description: eventDetails.description,
        date: eventDetails.date,
      };
    case types.ADD_ATTENDEE:
      newAttendee = action.payload.user;
      newAttendee.is_host = action.payload.host.is_host
      newAttendee.user_id = action.payload.host.user_id
      console.log([...state.attendeeArray, newAttendee]);
      return {
        ...state,
        attendeeArray: [...state.attendeeArray, newAttendee],
      };
    case types.DELETE_ATTENDEE:
      attendeeId = action.payload;
      const newArray = state.attendeeArray.filter(
        (element) => {
          return element.user_id.toString() !== attendeeId.toString()
        }
      )
      return {
        ...state,
        // declare an array equal to the current state value
        attendeeArray: newArray,
      };
    case types.GET_EVENTS:
      eventArray = action.payload;
      if (eventArray.length > 1) {
        eventArray.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
      }
      return {
        ...state,
        eventArray: eventArray,
      };
    case types.EVENT_INDEX_ID:
      newEventIndexAndId = action.payload;
      return {
        ...state,
        eventIndexAndId: newEventIndexAndId,
      };
    case types.GET_ATTENDEES:
      getAttendees = action.payload;
      return {
        ...state,
        attendeeArray: getAttendees,
      };
    case types.GET_ITEMS:
      getItems = action.payload;
      return {
        ...state,
        itemArray: getItems,
      };
    default:
      return state;
  }
};

export default eventReducer;
