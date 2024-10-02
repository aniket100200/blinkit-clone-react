import { act } from "react";
import { cartActions } from "./actions";

const initialState = {
    cart : {},
    totalProducts : 0,
    totalPrice : 0
} 

export const cartReducer = (state = initialState, action)=>{
   
    switch(action.type){
        case cartActions.INC_QNT:{
                //If product is alerady present then increment count
                //else create a key value {productId: 1}
                let productId = action.payload.id;
                let currenCount= state.cart[productId];
                state.cart[productId] = 1 + (currenCount ? currenCount: 0);
                state.totalProducts +=1;
                state.totalPrice += action.payload.price;
                state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
                return {...state};
              
        }
        case cartActions.DEC_QNT :{
            // if product count is more that 1 decrement count
            //else remove the product from cart..
            let productId = action.payload.id;
            let currenCount = state.cart[productId]; //currentCount > 0

            if(currenCount === 1){
                //delte the item
                delete state.cart[productId];
            }else state.cart[productId] -= 1;

            state.totalPrice-= action.payload.price;
            state.totalProducts -=1;
            state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
            return {...state};

        }
        default : return state;
    }
   
    
}

/**
 * {
 *  1029: 3,
 * 1393: 34,
 * 123: 33,
 * }
 */