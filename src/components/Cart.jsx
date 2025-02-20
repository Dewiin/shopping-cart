import { Navbar } from "./Navbar";
import "../styles/cart.css";

export function Cart( {cart} ) {
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
                                <div className="cart-item-image" style={{background: `url(${cart[product].image}) no-repeat`, backgroundSize: `contain`}}/>
                                <p>{cart[product].title}</p>
                                <input type="number" min="1" placeholder={cart[product].quantity}></input>
                                <p>${cart[product].price.toFixed(2)}</p>
                                <p className="remove-item">x</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cart-prices">

                </div>
            </div>
        </>
    )
}