import { actions } from "./actions";

//redux-thunk =>    helps us in acheiving the asynchrounous updates to the store.
const initialState= {
    products:null,
    count:0,
}
function productsReducer(state=initialState,action){
    //responsible for  maintaining products..
    if(action.type==="INC")
        return {...state,count : state.count+1 };
    if(action.type===actions.PRODUCT_SUCCESS){
        return{...state,products : action.payload}
    }
    return state;
}

export default productsReducer;