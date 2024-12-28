import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Collection{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Collect Your Items from Our Cape Town Office</h4>
        <p>
          Thank you for choosing to collect your order in person! We’re excited
          to offer you the option to pick up your items directly from our office
          in Cape Town. Below are the details to help you with your collection:
        </p>
        <h5>Office Address:</h5>
        <p>
          BloomingBliss Events
          <br />
          123 Creative Avenue,
          <br />
          Cape Town, 8001
          <br />
          South Africa
        </p>
        <h5>Contact Information:</h5>
        <p>
          Phone: +27 21 555 1234
          <br />
          Email:{" "}
          <a href="mailto:info@bloomingbliss.com">info@bloomingbliss.com</a>
          <br />
          WhatsApp: +27 72 123 4567
        </p>
        <h5>Office Hours:</h5>
        <p>
          Monday to Friday: 9:00 AM - 5:00 PM
          <br />
          Saturday: 10:00 AM - 2:00 PM
          <br />
          Sunday: Closed
        </p>
        <h5>How to Collect Your Order:</h5>
        <ul>
          <li>
            Order Confirmation: Once your order is ready for collection, you
            will receive a confirmation email or SMS with the details.
          </li>
          <li>
            Bring Your ID: Please bring a valid form of identification (such as
            an ID card or driver's license) when you come to collect your items.
          </li>
          <li>
            Arriving at the Office: Our office is located at 123 Creative Avenue
            in Cape Town. It's easily accessible via public transport or if you
            are driving, parking is available on-site.
          </li>
          <li>
            Collect Your Items: Head to the reception desk, where our friendly
            staff will assist you with collecting your items.
          </li>
        </ul>

        <p>We look forward to seeing you at our office!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button onClick={props.onHide}>Proceed</Button>
      </Modal.Footer>
    </Modal>
  );
}
