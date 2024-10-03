import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thunk";
import Product from "../components/Product";
import "./styles/products.scss";
import Loader from "../../components/comp/loading/Loader";


const HomeScreen = ()=>{
    const dispatch = useDispatch();
    const count = useSelector(s => s.x.count);
    const products = useSelector(s=> s.x.products);
    const search = useSelector(s=>s.x.search);
  
    useEffect(()=>{
        dispatch(fetchProducts); //whenever component is mounted

    },[]);

   
    if(!products)return <Loader/>;
  
    
    return <div className="products-list">
        {
            products.filter(p=>{
               return p.title.toLowerCase().includes(search?.toLowerCase().trim()) || p.description.toLowerCase().includes(search?.toLowerCase());
            }).map(product=> <Product key={product?.id} data={product}/>)
        }
    </div>
}


export default HomeScreen;
