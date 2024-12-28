import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../Components/Cart.css";
import Shipping from "./Shipping";
import { add, remove } from "./Redux/cartSlice";

export default function Cart() {
  const productCart = useSelector((state) => state.cart); // Retrieve current state
  const dispatch = useDispatch(); // Dispatch actions to Redux store

  // Navigation function to other pages
  const navigate = useNavigate();

  // Dispatch the remove action with the item as payload
  const handleRemove = (id) => {
    dispatch(remove({ id }));
  };

  //Set up state for total price
  const [totalPrice, setTotalPrice] = useState(0);

  // Update the cart in localStorage when the productCart changes
  useEffect(() => {
    // Log the productCart to check its contents
    console.log("productCart:", productCart);

    // Calculate total price based on the current cart
    const total = productCart.reduce((total, item) => {
      // Remove the 'R ' (currency symbol) and any non-numeric characters
      const cleanedPrice = item.price.replace(/[^\d.-]/g, "");
      const price = Number(cleanedPrice) || 0; // Convert to number, default to 0 if invalid

      console.log("Item price:", item.price);
      return total + price; // Ensure price is a number
    }, 0);

    setTotalPrice(total);

    // Save updated cart and total price to localStorage
    localStorage.setItem("myLocalStore", JSON.stringify(productCart));
    localStorage.setItem("totalprice", total);
  }, [productCart]);

  return (
    <div className="cart-container">
      <div className="cart-display">
        <h2>Shopping Cart</h2>
        {productCart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          productCart.map((product, index) => (
            <div key={index} className="cart-item">
              <div className="cart">
                <div>
                  <img
                    className="cart-img"
                    src={product.picture}
                    alt={product.name}
                  />
                </div>
                <div className="cart-info">
                  <p className="cart-title">{product.name}</p>
                  <p className="price-cart">{product.price}</p>

                  <button
                    className="remove-button"
                    onClick={() => handleRemove(product.id)}>
                    Remove
                  </button>
                  {/* Passing 'product' instead of 'item' */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="summary-section">
        <p>Cart Summary:</p>
        <p>Total Price: R{Number(totalPrice).toFixed(2)}</p>
        <button
          className="check-out-button"
          onClick={() => navigate("/shipping")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
