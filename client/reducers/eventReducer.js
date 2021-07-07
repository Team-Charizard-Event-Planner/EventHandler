import * as types from "../constant/constant";

const initialState = {
  email: "",
};

const eventReducer = (state = initialState, action) => {
  let email;
  switch (action.type) {
    case types.ADD_EMAIL:
      email = action.payload;
      return {
        ...state,
        email,
      };
    default: {
      return state;
    }
  }
};

export default eventReducer;
