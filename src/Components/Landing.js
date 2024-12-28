import React from 'react';
import '../Components/Landing.css';
import '../Components/Cards.css';
import collectionImg from "../img/home-pic.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cards from "./Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import Chair1 from "../img/pic1.jpg";
import Chair2 from "../img/pic2.jpg";
import Chair3 from "../img/pic3.jpg";
import Chair4 from "../img/pic4.jpg";
import Chair5 from "../img/pic5.jpg";
import Chair6 from "../img/pic6.jpg";


export default function Landing() {
    return(
<div>

<section className="header-text">
  <h2>
    Stylish Durable <br/>Furniture Collection
  </h2>
  <p>
    Explore our website to discover a variety of styles and designs that bring our creative ideas to life.
    Each collection celebrates the vision and craftsmanship of our talented designers, offering you unique 
    pieces that transform your space with personality and style. Let our designs inspire you and help you 
    create the perfect atmosphere for your home.
  </p>
</section>
<div className='collection-container'>
<section className="collection-header">
  <p className="main-collection-title">THE CHAIR COLLECTION</p>
  <p className="collection-description">Add a bold, yet simplistic design to your home.</p>
</section>
</div>

<img
src={collectionImg}
alt='Chair Collection'
className='collection-img'
/>
<div className='welcome-container'>
<h2 >WELCOME</h2>
<p>We create modern, minimalist furniture crafted with care using locally sourced materials. Our designs blend simplicity and functionality to transform your space with timeless style.</p>
</div>

<div className='cards-container'>
<Cards
name="Velvet Serenity"
picture={Chair1}
description="This plush, velvet chair offers a soft and luxurious seating experience. Its rich, deep purple hue adds a touch of elegance to any living room.
"
price="R 2,000.00"
/>

<Cards
name=" Oakwood Haven"
picture={Chair2}
description="Crafted from premium oak, this chair brings natural warmth and durability. Its simple design complements both traditional and modern spaces with ease.
"
price="R 2,400.00"
/>
 
<Cards
name="Skyline Lounge"
picture={Chair3}
description="With its sleek, minimalist design, the Skyline Lounge is perfect for urban interiors. The slim metal frame is paired with comfortable cushioning for long-lasting comfort.
"
price="R 6,400.00"
/>
</div>

<div className='cards-container'>
<Cards
name="Driftwood Recliner"
picture={Chair4}
description="Inspired by coastal living, this recliner boasts a rustic driftwood finish. The plush seat and backrest make it ideal for kicking back and relaxing.

"
price="R 2,330.00"
/>

<Cards
name="Horizon Sway"
picture={Chair5}
description="Featuring a curved back and soft linen upholstery, the Horizon Sway embraces comfort and style. Its neutral tone makes it a versatile addition to any room.
"
price="R 1,200.00"
/>
 
<Cards
name="Emberstone Throne"
picture={Chair6}
description="Bold and eye-catching, the Emberstone Throne features a deep, burnt-orange fabric that contrasts beautifully with its dark wood frame. Perfect for adding a statement piece to your home decor."
price="R 5,700.00"
/>
</div>


</div>


    );
};
