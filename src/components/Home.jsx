import { Navbar } from './Navbar';

export function Home( {cart, setCart} ) {
  const addToCart = (e) => {
    setCart([...cart, e]);
  }

  return (
    <>
      <Navbar cart={cart}></Navbar>
      <button onClick={e => addToCart(e)}>Add me</button>
    </>
  )
}
