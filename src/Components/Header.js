import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Logo from "../img/Logo2.png";
import Cart from "../img/cart.png";
import fullCart from "../img/full-cart.png";
import "../Components/Header.css";
import { logout } from "./Redux/userSlice";
import Login from "./Login.js";

function Header() {
  const cartProduct = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Get login state from Redux
  const username = useSelector((state) => state.user.username); // Get username from Redux
  const dispatch = useDispatch(); // Initialize dispatch

  // Logout Function
  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    localStorage.removeItem("loggedInUser"); // Remove from localStorage
  };

  // Function to amend cart display between full and empty
  const cartDisplay = () => {
    if (cartProduct.length === 0) {
      return (
        <li key="empty-cart">
          <img src={Cart} alt="Cart" className="cart-img" />
        </li>
      );
    } else {
      return (
        <li key="full-cart">
          <img src={fullCart} alt="Full Cart" className="cart-img" />
          {cartProduct.length}
        </li>
      );
    }
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="logo-img" />
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/store">
          <li>SHOP</li>
        </Link>
        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>

      <ul>
        <div className="sign-in">
          <Link to="/cart">{cartDisplay()}</Link>
          {/* If logged in remove registration btn*/}
          {!isLoggedIn && (
            <Link to="/register">
              <button>Register</button>
            </Link>
          )}

          <div className="logout">
            {!isLoggedIn ? (
              <Login /> 
            ) : (
              <div className="login">
                <p className="welcome-msg">Welcome Back, {username}!</p>
                <Button variant="secondary" onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Header;
