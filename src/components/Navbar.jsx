import { Link } from "react-router-dom";
import "../styles/navbar.css"

export function Navbar({cart}) {
  return (
    <>
      <div className="navbar">

        <div className="navbar-logo" />
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/jewelery">Jewelry</Link>
        </div>

        <Link className="navbar-cart" to="/shopping-cart" style={{
          backgroundImage: `url('/cart.jpg')`,
          backgroundSize: `contain`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`
        }}>{Object.keys(cart).length}</Link>
      
      </div>
    </>
  );
}

