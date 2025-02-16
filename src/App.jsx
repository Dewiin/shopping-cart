import { useState } from 'react'
import { Navbar } from './components/Navbar';
import './App.css'

export function App() {
  const [cart, setCart] = useState([]);
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

