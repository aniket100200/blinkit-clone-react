import { useDispatch } from "react-redux";
import { cartActions } from "./actions";
import { memo } from "react";

export const SidebarProduct =memo(({product})=>{
    const dispatch = useDispatch();

    const increment = ()=>{
            dispatch({type:cartActions.INC_QNT, payload : {id:product.id, price:product.price}})
    }

    const decrement = ()=>{
        dispatch({type:cartActions.DEC_QNT, payload : {id:product.id, price:product.price}})

    }
    return (<div className="product">
        <img src={product.image} alt="image" />
        <div className="title-box">
            <p>{product.title}</p>
            <b>${product.price}</b>
        </div>
        <div>
            <div className="btn-group">
                <button className="material-icons" onClick={decrement}>remove</button>
                <span>{product.quantity}</span>
                <button className="material-icons" onClick={increment}>add</button>
            </div>
        </div>
    </div>);
});