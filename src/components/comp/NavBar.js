import { useDispatch, useSelector } from "react-redux";
import "../styles/navbar.scss";
import Sidebar from "./cart/Siderbar";
import { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from "react";
import { actions } from "../../redux/actions";


const NavBar = memo((props,ref) => {
    const openCart = ()=>{
        sidebarRef.current.setShow(true);    }
    
    const sidebarRef = useRef(null);
    const search = useSelector(state=> state.x.search);
    const totalProducts = useSelector(state => state.y.totalProducts);
    const totalPrice = useSelector(state=> state.y.totalPrice);

    const dispatch = useDispatch();
   
    return <>
        <div className="nav-container">
        <div className="logo">
            <span className="start">blink</span><span className="end">it</span>
        </div>
        <div className="location">
            <h3>Delivery in 12 minutes</h3>
            <p>Bhandara, Maharashtra, India <span className="material-icons icon">arrow_drop_down</span></p>
        </div>
        <div className="input">
           <label htmlFor="search" className="material-icons">search</label> <input type="text"  value={search} id="search" onChange={e=>{
            dispatch({type:actions.SEARCH,payload : {search : e.target.value}})
           }} placeholder="Search for Product.."/>
        </div>
        <div className="login-btn">
            Login
        </div>
        <div className="cart" onClick={openCart}>
            <span className="material-icons material-symbols-outlined">shopping_cart</span> { totalProducts ? <div className="cart-product">
            <div>{totalProducts} items</div>
            <div>$. {totalPrice} </div>
            </div> : <span>My Cart</span>}
        </div>
    </div>
    <Sidebar ref={sidebarRef}/>
    </>
});

export default NavBar;