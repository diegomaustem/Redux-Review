const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  if (action.typr === "user/login") {
    return { ...state, currentUser: 10 };
  }
  return state;
};

export default userReducer;
