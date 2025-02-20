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
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/shopping-cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}