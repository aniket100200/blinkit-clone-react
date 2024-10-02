import axios from "axios";
import { actions } from "./actions";

const delay = (ms)=>{
   
    return new Promise((r)=> setTimeout(r,ms)); //This return Promise after resolve..
} 


export async function fetchProducts(dispatch, getState) {
    try{
        const response = await axios('https://fakestoreapi.com/products');
        dispatch({type : actions.PRODUCT_SUCCESS,payload : response.data})
    }catch(error){
        console.log(error);
        
    }
}
