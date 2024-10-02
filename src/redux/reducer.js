import { actions } from "./actions";

//redux-thunk =>    helps us in acheiving the asynchrounous updates to the store.
const initialState= {
    products:null,
    search:"",
}
function productsReducer(state=initialState,action){
    //responsible for  maintaining products..
    if(action.type==="INC")
        return {...state,count : state.count+1 };
    if(action.type===actions.PRODUCT_SUCCESS){
        return{...state,products : action.payload}
    }
    if(action.type===actions.SEARCH)
        return {...state,search:action.payload.search};
    return state;
}

export default productsReducer;