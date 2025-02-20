import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Product } from './Product';
import '../styles/home.css'

export function Home( {cart, setCart, filter} ) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const categories = {
      men: "/category/men's clothing",
      women: "/category/women's clothing",
      electronics: "/category/electronics",
      jewelery: "/category/jewelery",
    };
    
    const path = categories[filter] || "";

    fetch(`https://fakestoreapi.com/products${path}`, {mode: "cors"})
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        setError(error);
      })
  }, [filter])

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
