import * as types from "../constant/constant";

const initialState = {
  email: "",
  loggedIn: false,
  firstName: "",
};

const userReducer = (state = initialState, action) => {
  // let email;
  let loggedIn;
  let firstName;
  switch (action.type) {
    // case types.ADD_EMAIL:
    //   email = action.payload;
    //   return {
    //     ...state,
    //     email,
    //   };
    case types.LOGIN_CHECK:
      loggedIn = action.payload;
      return {
        ...state,
        loggedIn,
      };
    case types.FIRST_NAME:
      firstName = action.payload;
      return {
        ...state,
        firstName,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
