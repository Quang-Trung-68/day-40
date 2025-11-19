import { SET_ITEMS } from "./consts";

const initState = {
  items: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
