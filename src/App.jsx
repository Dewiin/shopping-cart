import { useState } from "react";
import { Home } from "./components/Home"
import { Cart } from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

export function App() {
  const [cart, setCart] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} filter="none" />} />
        <Route path="/men" element={<Home cart={cart} setCart={setCart} filter="men" />} />
        <Route path="/women" element={<Home cart={cart} setCart={setCart} filter="women" />} />
        <Route path="/electronics" element={<Home cart={cart} setCart={setCart} filter="electronics" />} />
        <Route path="/jewelery" element={<Home cart={cart} setCart={setCart} filter="jewelery" />} />
        <Route path="/shopping-cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}