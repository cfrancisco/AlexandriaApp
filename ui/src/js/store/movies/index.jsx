import { combineReducers } from "redux";

import favorite from "./favorite";
import movies from "./movies";

export default combineReducers({
  movies, favorite,
});
