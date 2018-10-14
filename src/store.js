import { createStore, applyMiddleware } from "redux";
import asyncReducer from "./reducers"; //same as root reducer
import thunk from "redux-thunk";

const store = createStore(asyncReducer, applyMiddleware(thunk));

export default store;
