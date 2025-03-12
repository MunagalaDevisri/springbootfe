import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Laptops.css";

const ProductList = ({ endpoint }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/${endpoint}`)
        .then(res => setProducts(res.data));
    }, [endpoint]);

    return (
        <div className="parent">
            {products.map((product) => (
                <div key={product.id} className="child" onClick={() => navigate(`/product/${endpoint}/${product.id}`)}>
                    <img src={product.pimage} alt={product.pname} />
                    <h2><i className="fa fa-rupee"></i> {product.pcost}</h2>
                    <p>Qty: {product.pqty}</p>
                </div>
            ))}
        </div>
    );
};

export const Laptops = () => <ProductList endpoint="laptops" />;
export const Mobiles = () => <ProductList endpoint="mobiles" />;
export const Watches = () => <ProductList endpoint="watches" />;
export default Laptops;