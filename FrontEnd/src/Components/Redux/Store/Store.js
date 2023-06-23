import {combineReducers, createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { getProductsReducer } from "../Reducer/productReducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
    getProducts:getProductsReducer
})
const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;