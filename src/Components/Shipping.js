import Delivery from "../img/delivery.jpg";
import Collection from "../img/collect.jpg";
import Info from "../img/info.png";
import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Shipping.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MyVerticallyCenteredModal from "./CollectOrderDisplay";
import AddressForm from "./AddressForm";

export default function Shipping() {
  const [modalShow, setModalShow] = useState(false); 
  const [deliveryInfoModalShow, setDeliveryInfoModalShow] = useState(false); // Separate state for Delivery Info modal
  const [collectionInfoModalShow, setCollectionInfoModalShow] = useState(false); // Separate state for Collection Info modal
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve the total price from localStorage
    const storedTotalPrice = localStorage.getItem("totalprice");
    if (storedTotalPrice) {
      setTotalPrice(Number(storedTotalPrice));
    }
  }, []);

  const deliveryOptions = [
    { id: 'standard', label: 'Standard Delivery' },
    { id: 'express', label: 'Express Delivery' },
    { id: 'overnight', label: 'Overnight Delivery' },
  ];

  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission logic here
  };

  return (
    <div className="delivery">
      <div>
        <div className="back-to-cart">
          <h2>Delivery</h2>
          <button className="ship-btn" onClick={() => navigate("/cart")}>
            Back to Cart
          </button>
        </div>
        <div className="delivery-container">
          <img className="delivery-img" src={Delivery} alt="Delivery" />
          <p className="label-name">Delivery</p>
          <p>Courier delivery to your door</p>
          {/* Formik form */}
          <Formik
            initialValues={{ deliveryMethod: '' }}
            onSubmit={handleSubmit}
          >
            {formik => (
              <form onSubmit={formik.handleSubmit}>
                <div className="delivery-method">
                  <label className="delivery-title">Delivery Method</label>
                  <p>Select a Method of Delivery:</p>
                  {deliveryOptions.map((option) => (
                    <div key={option.id}>
                      <input
                        type="radio"
                        id={option.id}
                        name="deliveryMethod"
                        value={option.id}
                        onChange={formik.handleChange}
                        checked={formik.values.deliveryMethod === option.id}
                      />
                      <label htmlFor={option.id}>{option.label}</label>
                    </div>
                  ))}
                </div>
                <div>
                  <button className="ship-btn" onClick={() => navigate("/address")}>
                    Deliver my Order
                  </button>
                  {/* Info button to open the Delivery Info modal */}
                  <Button className="button-info" onClick={() => setDeliveryInfoModalShow(true)}>
                    <img src={Info} alt="info" className="info-img"/>
                  </Button>
                </div>
              </form>
            )}
          </Formik>

          {/* Modal component for Delivery Info */}
          <Modal
            show={deliveryInfoModalShow}
            onHide={() => setDeliveryInfoModalShow(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Delivery Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Delivery Options and Costs</h5>
              <p>We offer a range of delivery options to suit your needs, ensuring your order reaches you in the most convenient way possible.</p>
              <ul>
                <li>
                  <strong>Standard Delivery:</strong> Delivered within 3-5 business days at a cost of R50. Perfect for planning ahead and saving on delivery fees.
                </li>
                <li>
                  <strong>Express Delivery:</strong> Get your order in 1-2 business days for R100. Ideal for when you need your items quickly.
                </li>
                <li>
                  <strong>Overnight Delivery:</strong> Place your order before 2 PM and receive it the next business day for R150. Perfect for urgent orders.
                </li>
              </ul>
              <p>All deliveries are handled with care by our trusted courier partners. Please note, delivery times may vary slightly for rural or outlying areas.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setDeliveryInfoModalShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="collect-container">
          <img className="collect-img" src={Collection} alt="Collection" />
          <p className="label-name">Collect</p>
          <p>Collect my order from your shop located in Cape Town CBD.</p>
          <Button className="ship-btn" onClick={() => setModalShow(true)}>
            Collect my Order
          </Button>

          {/* Info button to open the Collection Info modal */}
          <Button className="button-info" onClick={() => setCollectionInfoModalShow(true)}>
            <img src={Info} alt="info" className="info-img"/>
          </Button>

          {/* Modal component for Collection Info */}
          <Modal
            show={collectionInfoModalShow}
            onHide={() => setCollectionInfoModalShow(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Collection Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You can collect your order in person at <strong>BloomingBliss Events</strong>, located at 123 Creative Avenue, Cape Town, during office hours:</p>
              <p><strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM<br />
                 <strong>Saturday:</strong> 10:00 AM - 2:00 PM
              </p>
              <p>Please bring a valid ID and receive a confirmation email or SMS when your order is ready. Our staff will assist you at the reception desk, and parking is available on-site.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setCollectionInfoModalShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="summary-section">
        <p>Cart Summary:</p>
        <p>Total Price: R{totalPrice.toFixed(2)}</p>
      </div>

      {/* Modal component for collect order */}
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
