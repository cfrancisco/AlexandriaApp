import { createStore } from "redux";

import reducers from "./movies";

const store = createStore(reducers);

export default store;
