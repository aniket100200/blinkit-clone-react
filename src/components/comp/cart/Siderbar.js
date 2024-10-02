import { forwardRef, memo, useImperativeHandle, useState } from "react";
import "../../styles/sidebar.scss";
import { SidebarProduct } from "./SidebarProduct";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

//using forwardRef we can update the states of the child component withought rendering the parent component;
const Sidebar = memo(forwardRef((_,ref) => {
    const[show,setShow]=useState(false);
    const products= useSelector(state=>{
        const productsList= state.x.products;
        const cart=state.y.cart;
        
        const list= [];
        productsList?.forEach((product)=>{
            if(cart[product.id]){
                list.push({...product,quantity:cart[product.id]});
            }
        })

        return list;

    })
   
    
    const closeModal = ()=>{
        setShow(false);
    }


    //ref = {current: null} => {current: {setShow : f}}
    useImperativeHandle(ref,()=>{
        return { setShow};
    });

    
    

    if(!show)return null;
    return (<div className="cart-sidebar-container">
        <div className="sidebar">
            <div className="head">
                <b >My Cart</b>
                <span className="material-icons" style={{cursor:"pointer"}} onClick={closeModal}>close</span>
            </div>
            <div className="products">
               { products.map((item,indx)=>{
                return <SidebarProduct key={indx} product={item}/>
               })}
            </div>
            {products.length!=0?<button className="btn">Buy Now</button> : <EmptyCart close={closeModal}/>}

        </div>
    </div>)
}));

export default Sidebar;