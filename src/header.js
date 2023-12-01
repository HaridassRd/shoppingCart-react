import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({selectedItem}) {
  const location = useLocation()
  console.log("location",location)
  return (
    <div className="container">
      <div className="list">
        <img src="/unnamed.png" height="50px" width="50px" alt="Logo" />
        <ul className="path">
        <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/"> <img src="/home.png" alt="Home" /></Link>
          </li>
          <li className={`cartcount ${location.pathname === '/cart' ? 'active' : ''}`}>
            <Link to="/cart">
              <img src="/cart.jpeg" alt="Cart" />
              <span>{selectedItem.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
