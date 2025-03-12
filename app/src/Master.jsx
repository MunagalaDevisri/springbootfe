import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Error from "./Error";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import { Laptops, Mobiles, Watches } from "./ProductList";

const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route index element={<Laptops />} />
                        <Route path="mobiles" element={<Mobiles />} /> {/* ✅ Fix here */}
                        <Route path="watches" element={<Watches />} /> {/* ✅ Fix here */}
                    </Route>
                    <Route path="/product/:type/:id" element={<ProductDetails />} />
                    <Route path="/error" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Master;
