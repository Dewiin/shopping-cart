import { Link } from "react-router-dom";
import "../styles/navbar.css"

export function Navbar({cart}) {
  return (
    <div className="navbar">
      <Link to="shopping-cart">{cart.length}</Link>
    </div>
  );
}

