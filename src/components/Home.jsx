import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Product } from './Product';
import '../styles/home.css'

export function Home( {cart, setCart} ) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {mode: "cors"})
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        setError(error);
      })
  }, [])

  return (
    <>
      <Navbar cart={cart} />
      {error ? (
        <p>Error fetching API...</p>
      ) : (
        <div className='home-products-display'>
          {products.map((product, index) => (
            <Product key={index} product={product} setCart={setCart}/>
          ))}
        </div>
      )}
    </>
  )
}
