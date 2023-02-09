import { combineReducers } from "redux";
import signs from "./signs";
import production from "./production";
import posts from "./posts";
import reply from "./reply";
import carts from "./carts";
const rootReducer = combineReducers({
  posts,
  production,
  signs,
  reply,
  carts,
});

export default rootReducer;
