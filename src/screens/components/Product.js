import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../components/comp/cart/actions";

const Product =memo( ({data})=>{

    const dispatch = useDispatch();
    const count = useSelector(state => state?.y?.cart[data.id]);
    const addToCart = ()=>{
            dispatch({type:cartActions.INC_QNT, payload : {id :data.id,price : data.price}});
    }

    const removeFromCart = ()=>{
            dispatch({type : cartActions.DEC_QNT, payload : { id : data.id, price : data.price}});
    }
    return <div className="product-card">
    <img src={data.image} alt={data.title} />
        <div className="bottom-box">
        <p className="title">{data.title}</p>
        <p className="description">{data.description}</p>
        <p>$ {data.price}</p>
        {
           !count? <button className="add-btn" onClick={addToCart}>Add Item</button> :
            (
                <div className="btn-group">
                    <span className="material-icons" onClick={removeFromCart}>remove</span>
                    <p>{count}</p>
                    <span className="material-icons" onClick={addToCart}>add</span>
                </div>
            )

           
        }
        </div>
    </div>;
});

export default Product;