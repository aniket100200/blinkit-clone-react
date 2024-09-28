import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thunk";
import Product from "../components/Product";
import "./styles/products.scss";


const HomeScreen = ()=>{
    const dispatch = useDispatch();
    const count = useSelector(s => s.count);
    const products = useSelector(s=> s.products);
  
    useEffect(()=>{
        dispatch(fetchProducts); //whenever component is mounted

    },[]);

    console.log({products});
    if(!products)return <h1>Loading....</h1>
    
    return <div className="products-list">
        {
            products.map(product=> <Product key={product?.id} data={product}/>)
        }
    </div>
}


export default HomeScreen;