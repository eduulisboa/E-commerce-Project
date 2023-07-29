import React,{ Route, Routes, } from "react-router-dom";

import "./App.css";
import ProductList from "./pages/ProductList";
import Nav from "./components/nav/Nav";
import FavoriteList from "./pages/FavoriteList";
import Footer from "./components/footer/Footer";
import CartList from "./pages/CartList";
import Home from "./pages/Home";
import RegisterForm from "./components/users/RegisterForm";
import LogInForm from "./components/users/LogInForm";
import UserInformation from "./components/users/UserInformation";
import ProductDetail from "./pages/ProductDetail";
import OrderList from "./components/orders/OrderList";



function App() {

  return(
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/products" element={<ProductList />} ></Route>
            <Route path="/products/:id" element={<ProductDetail />} ></Route>
            <Route path="/favorites" element={<FavoriteList />} ></Route>
            <Route path="/cart" element={<CartList />} ></Route>
            <Route path="/register" element={<RegisterForm />} ></Route>
            <Route path="/login" element={<LogInForm />} ></Route>
            <Route path="/users" element={<UserInformation />} />
            <Route path="/order" element={<OrderList />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;