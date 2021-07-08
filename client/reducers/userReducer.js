import * as types from "../constant/constant";

const initialState = {
  username: "",
  loggedIn: false,
  firstName: "",
  lastName: "",
};

const userReducer = (state = initialState, action) => {
  let userObj;
  switch (action.type) {
    case types.USER_DATA:
      userObj = action.payload;
      return {
        ...state,
        username: userObj.username,
        firstName: userObj.first_name,
        lastName: userObj.last_name,
        loggedIn: userObj.isLoggedIn,
      };
    default:
      return state;
  }
};

export default userReducer;
