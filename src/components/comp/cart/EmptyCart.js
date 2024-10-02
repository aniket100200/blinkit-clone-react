const EmptyCart = ({close})=>{
    return (<div className="empty">
    <h3>Your Cart is Empty</h3>
    <button className="btn" onClick={close}>Start Shoppoing</button>
    </div>)
}

export default EmptyCart;