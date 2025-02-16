import "../styles/navbar.css"

export function Navbar({cart}) {
  return (
    <div className="navbar">
      <p>{cart.length}</p>
    </div>
  );
}

