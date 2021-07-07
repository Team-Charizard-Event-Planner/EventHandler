import * as types from "../constant/constant";

const initialState = {
  email: "",
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  let email;
  let loggedIn;
  switch (action.type) {
    case types.ADD_EMAIL:
      email = action.payload;
      return {
        ...state,
        email,
      };
    case types.LOGIN_CHECK:
      loggedIn = action.payload;
      return {
        ...state,
        loggedIn,
      }
    default: {
      return state;
    }
  }
};

export default userReducer;
