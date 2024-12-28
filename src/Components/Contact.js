import React from "react";
import "../Components/Contact.css";
import Shop from "../img/shop.jpg";
import Team from "../img/team.jpg";

export default function Contact() {
  return (
    <div className="body-container">
      <div className="contact-container">
        <h1>About Our Furniture Shop</h1>
        <h2>Who We Are</h2>
        <p>
          Welcome to our furniture shop! We are passionate about bringing
          comfort, style, and functionality to your home. Our wide selection of
          high-quality furniture is designed to meet your unique needs and
          aesthetic preferences. Whether you're furnishing a cozy apartment or
          designing a spacious living room, we have something for everyone.
        </p>
        <img src={Shop} alt="Shop" />
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide our customers with top-quality, affordable,
          and stylish furniture that enhances their living spaces. We believe
          that furniture should be both beautiful and functional, creating an
          environment where you can relax and feel at home.
        </p>
        <h2>Meet the Team</h2>
        <img src={Team} alt="Team" />
        <p>
          Our team is made up of passionate designers, craftsmen, and customer
          service experts who are committed to making your furniture shopping
          experience as seamless and enjoyable as possible. We work together to
          create beautiful pieces that will last for years.
        </p>
      </div>
    </div>
  );
}
