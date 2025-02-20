import "../styles/home.css"

export function Product( {product, setCart} ) {
    const addToCart = (product) => {
        setCart((prevCart) => {
            const newCart = {...prevCart};

            if(newCart[product.id]) {
                newCart[product.id].quantity += 1;
            }
            else {
                newCart[product.id] = {...product, quantity: 1}; 
            }

            return newCart;
        });
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