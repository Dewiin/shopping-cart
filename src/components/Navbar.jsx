import { Link } from "react-router-dom";
import "../styles/navbar.css"

export function Navbar({cart}) {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/shopping-cart">{Object.keys(cart).length}</Link>
    </div>
  );
}

