import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {
    return (
        <>
        <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="product" element={<Product />}></Route>
            </Routes>
        </>
    );
}

export default App;
