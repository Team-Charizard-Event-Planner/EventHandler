import * as types from "../constant/constant";

const initialState = {
  itemArray: [],
  isClaimed: false,
  title: '',
  description: '',
  date: '',
  attendeeArray: []
};

const eventReducer = (state = initialState, action) => {
  let item;
  let claim;
  let eventDetails;
  let attendee;
  switch (action.type) {
    case types.ADD_ITEM:
      item = action.payload;
      return {
        ...state,
        itemArray: [...state.itemArray, item],
      };
      // maybe we can remove multiple at a time? stretch feature? lol
    case types.DELETE_ITEM:
      item = action.payload;
      return {
        ...state,
        itemArray: state.itemArray.filter(element => element !== item)
      };
    case types.IS_CLAIMED:
      claim = action.payload;
      return {
        ...state,
        isClaimed: claim,
      };
    case types.EDIT_EVENT:
      eventDetails = action.payload;
      return {
        ...state,
        title: eventDetails.title,
        description: eventDetails.description,
        date: eventDetails.date,
      }
    case types.ADD_ATTENDEE:
      attendee = action.payload;
      return {
        ...state,
        attendeeArray: [...state.attendeeArray, attendee],
      }
    case types.DELETE_ATTENDEE:
      attendee = action.payload;
      return {
        ...state,
        attendeeArray: state.attendeeArray.filter(element => element !== attendee)
      }
    default: {
      return state;
    }
  }
};

export default eventReducer;