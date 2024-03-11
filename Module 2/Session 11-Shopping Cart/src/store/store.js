import { combineReducers, createStore } from "redux";
import { productReducer } from "./product/products";

const reducer=combineReducers({productReducer});
export const product = createStore(reducer);