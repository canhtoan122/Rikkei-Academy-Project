import { combineReducers, createStore } from "redux";
import { countReducer } from "./reducer/count";

const reducer=combineReducers({countReducer});
export const store1 = createStore(reducer);