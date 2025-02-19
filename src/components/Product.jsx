import "../styles/home.css"

export function Product( {product, setCart} ) {
    const addToCart = (e) => {
        setCart((prevCart) => [...prevCart, e]);
    };

    return (
        <div className="product-box">
            <div className="product-img-wrapper">
                <div className="product-img-container" style={{background: `url(${product.image}) no-repeat center`, backgroundSize: `contain`}} />
            </div>
            <p>{product.title}</p>
            <p>${product.price.toFixed(2)}</p>
            <p>⭐{product.rating.rate} ({product.rating.count})</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}