import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import switcherReducer from "./switcherReducer";

const rootReducer = combineReducers({
  switcher: switcherReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
