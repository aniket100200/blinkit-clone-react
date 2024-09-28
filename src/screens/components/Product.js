import { useState } from "react";

const Product = ({data})=>{
    const[count,setCount]= useState(0);
    return <div className="product-card">
    <img src={data.image} alt={data.title} />
        <div className="bottom-box">
        <p className="title">{data.title}</p>
        <p className="description">{data.description}</p>
        <p>$ {data.price}</p>
        {
            count ===0 ? <button className="add-btn" onClick={()=>setCount(1)}>Add Item</button> :
            (
                <div className="btn-group">
                    <span className="material-icons" onClick={()=>setCount(p=>p-1)}>remove</span>
                    <p>{count}</p>
                    <span className="material-icons" onClick={()=>setCount(p=>p+1)}>add</span>
                </div>
            )
        }
        </div>
    </div>;
}

export default Product;