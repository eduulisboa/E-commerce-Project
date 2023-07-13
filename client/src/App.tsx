import React from "react";
import { Route, Routes, } from "react-router-dom";

import "./App.css";
import ProductList from "./pages/ProductList";
import Nav from "./components/nav/Nav";
import FavoriteList from "./pages/FavoriteList";
import Footer from "./components/footer/Footer";
import CartList from "./pages/CartList";
import Home from "./pages/Home";

function App() {
  return <div className="App">
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/products" element={<ProductList />} ></Route>
      <Route path="/favorites" element={<FavoriteList />} ></Route>
      <Route path="/cart" element={<CartList />} ></Route>
    </Routes>
    <Footer />
  </div>;
}

export default App;