
import { createStore } from "redux";

import reducers from "./ducks";

const store = createStore(reducers);
console.log(store.getState());
export default store;
