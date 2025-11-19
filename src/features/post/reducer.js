import { SET_POSTS } from "./consts";

const initState = {
  items: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
