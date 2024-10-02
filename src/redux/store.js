import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import productsReducer from "./reducer";

import {thunk} from 'redux-thunk';
import { cartReducer } from "../components/comp/cart/reducer";

const rootReducer= combineReducers({
    x: productsReducer,
    y: cartReducer
})

/**
 * overall state:
 * {
 *  x:{
 *      products: null,
 *  },
 * y : {
 * cart : {}
 * }
 *  
 * }
 */

const store = createStore(rootReducer,applyMiddleware(thunk)); //due to applymiddleware we can achieve 
export default store; 
