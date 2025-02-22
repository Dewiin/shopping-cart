import { Navbar } from "./Navbar";
import "../styles/cart.css";
import { useState } from "react";

export function Cart( {cart, setCart} ) {
    const [shipping, setShipping] = useState("free");

    function updateQuantity(product, newQuantity) {
        setCart((prevCart) => ({
            ...prevCart, [product]: {...prevCart[product], quantity: newQuantity}
        }));
    }   

    function removeProduct(product) {
        const newCart = {...cart};
        delete newCart[product];
        setCart(newCart);
    }

    function getTotalPrice() {
        let total = 0;

        Object.keys(cart).map((product) => (
            total += (cart[product].price * cart[product].quantity)
        ));

        return total;
    }

    const shippingOptions = {
        "free": {label: "Free Delivery (7-14 days)", price: 0},
        "standard": {label: "Standard Delivery (3-5 days) - $5.00", price: 5.00},
        "express": {label: "Express Delivery (1-2 days) - $8.50", price: 8.50},
    }

    return (
        <>
            <Navbar cart={cart} />
            <div className="shopping-cart-container">
                <div className="cart-products">
                    <div className="cart-products-title">
                        <h1>Shopping Cart</h1>
                        <p>{Object.keys(cart).length} items</p>
                    </div>
                    <div className="cart-products-items">
                        {Object.keys(cart).map((product) => (
                            <div key={product}>
                                <div className="cart-item-image"
                                    style={{
                                        backgroundImage: `url(${cart[product].image})`, 
                                        backgroundSize: `contain`, 
                                        backgroundPosition: `center`, 
                                        backgroundRepeat: `no-repeat`
                                    }} 
                                />
                                <p>{cart[product].title}</p>
                                <input type="number" min="1" value={cart[product].quantity} onChange={(e) => updateQuantity(product, e.target.value)}></input>
                                <p>${(cart[product].price * cart[product].quantity).toFixed(2)}</p>
                                <p className="remove-item" onClick={() => removeProduct(product)}>x</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cart-prices">
                    <div>
                        <h2>Summary</h2>
                        <div className="cart-total">
                            <p>Items × {Object.keys(cart).length} </p>
                            <p>$ {getTotalPrice().toFixed(2)}</p>
                        </div>
                        <div className="cart-shipping">
                            <p>SHIPPING</p>
                            <select name="shipping-type" onChange={(e) => setShipping(e.target.value)}>
                                <option value="free">{shippingOptions["free"].label}</option>
                                <option value ="standard">{shippingOptions["standard"].label}</option>
                                <option value="express">{shippingOptions["express"].label}</option>
                            </select>
                        </div>
                        <div className="cart-discount">
                            <p>DISCOUNT CODE</p>
                            <div className="input-container">
                                <input type="text"></input>
                                <span className="input-arrow">→</span>
                            </div>
                        </div>
                        <div className="cart-end-total">
                            <p>TOTAL PRICE</p>
                            <p>$ {(getTotalPrice() + shippingOptions[shipping].price).toFixed(2)}</p>
                        </div>
                        <div className="checkout-button">
                            <button>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}