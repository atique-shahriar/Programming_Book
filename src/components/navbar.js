import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="programming_book" onClick={() => setShow(true)}>
          Programming Book
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
