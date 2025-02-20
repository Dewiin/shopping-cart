import { Navbar } from "./Navbar";
import "../styles/cart.css";

export function Cart( {cart, setCart} ) {
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
                                <p>${cart[product].price.toFixed(2)}</p>
                                <p className="remove-item" onClick={() => removeProduct(product)}>x</p>
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