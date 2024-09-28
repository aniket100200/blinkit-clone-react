import "../styles/navbar.scss";
const NavBar = () => {
    return <div className="nav-container">
        <div className="logo">
            <span className="start">blink</span><span className="end">it</span>
        </div>
        <div className="location">
            <h3>Delivery in 12 minutes</h3>
            <p>Bhandara, Maharashtra, India <span className="material-icons icon">arrow_drop_down</span></p>
        </div>
        <div className="input">
           <label htmlFor="search" className="material-icons">search</label> <input type="text" id="search" placeholder="Search for Product.."/>
        </div>
        <div className="login-btn">
            Login
        </div>
        <div className="cart">
            <span className="material-icons material-symbols-outlined">shopping_cart</span> {false ? <div className="cart-product">
            <div>1 items</div>
            <div>Rs. 500 </div>
            </div> : <span>My Cart</span>}
        </div>
    </div>
}

export default NavBar;