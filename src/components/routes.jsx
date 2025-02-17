import { useState } from "react";
import { App } from "../App";
import { Cart } from "./Cart";

const [cart, setCart] = useState([]);

const routes = [
  {
    path: "/",
    element: <App cart={cart} setCart={setCart} />
  },
  {
    path: "shopping-cart",
    element: <Cart cart={cart} />
  }
];

export default routes;
