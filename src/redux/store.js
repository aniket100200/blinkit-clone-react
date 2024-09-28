import { applyMiddleware, legacy_createStore as createStore } from "redux";
import productsReducer from "./reducer";
import {thunk} from 'redux-thunk'

const store = createStore(productsReducer,applyMiddleware(thunk)); //due to applymiddleware we can achieve 
export default store;