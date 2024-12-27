import UseActionTypes from "./action-types";
const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UseActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    case UseActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
