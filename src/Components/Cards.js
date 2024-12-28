import "../Components/Cards.css";
import { useState } from "react"; 
import { useDispatch } from "react-redux";
import { add } from "./Redux/cartSlice";

function Card(props) {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (product) => {
    dispatch(add(product)); 
  };

  const handleAddToCartClick = () => {
    // Show the pop-up
    setShowPopup(true);
    // Hide the pop-up after 3 seconds
    setTimeout(() => {
      setShowPopup(false); 
    }, 3000);
    // Add the product to the cart
    addToCart(props);
  };

  return (
    <div className="cards">
      <img className="card-img" src={props.picture} alt={props.name} />
      <p className="card-title">{props.name}</p>
      <p className="description">{props.description}</p>
      <p className="dimensions">{props.dimensions}</p>
      <p className="price">{props.price}</p>

      {/* Button with onClick */}
      <button onClick={handleAddToCartClick}>Add to Cart</button>
      {/* Conditional rendering of the pop-up message */}
      {showPopup && <div className="popup">Item added to your cart!</div>}
    </div>
  );
}

export default Card;
