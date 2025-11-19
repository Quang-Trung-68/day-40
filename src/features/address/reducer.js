import { SET_PROVINCES } from "./consts";

const initState = {
  items: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PROVINCES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
