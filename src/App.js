import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import Landing from "./Components/Landing.js";
import Footer from "./Components/Footer.js";
import Products from "./Components/Products.js";
import Cart from "./Components/Cart.js";
import Shipping from "./Components/Shipping.js";
import CourierForm from "./Components/AddressForm.js";
import SignInForm from "./Components/Login.js";
import RegisterForm from "./Components/Registration.js";
import AddressForm from "./Components/AddressForm.js";
import Contact from "./Components/Contact.js";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/store" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/form" element={<CourierForm />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/address" element={<AddressForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
