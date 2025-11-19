import { SET_USERS } from "./consts";

const initState = {
  items: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
