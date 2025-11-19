import { combineReducers } from "redux";
import { reducer as productReducer } from "@/features/product";
import { reducer as addressReducer } from "@/features/address";
import { reducer as postReducer } from "@/features/post";
import { reducer as userReducer } from "@/features/user";

const rootReducer = combineReducers({
  product: productReducer,
  address: addressReducer,
  post: postReducer,
  user: userReducer,
});

export default rootReducer;
