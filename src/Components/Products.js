import "../Components/Cards.css";
import "../Components/Products.css";

import Cards from "./Cards";
import pic1 from "../img/store/pic1.jpg";
import pic2 from "../img/store/pic2.jpg";
import pic3 from "../img/store/pic3.jpg";
import pic4 from "../img/store/pic4.jpg";
import pic5 from "../img/store/pic5.jpg";
import pic6 from "../img/store/pic6.jpg";
import pic7 from "../img/store/pic7.jpg";
import pic8 from "../img/store/pic8.jpg";
import pic9 from "../img/store/pic9.jpg";
import pic10 from "../img/store/pic10.jpg";
import pic11 from "../img/store/pic11.jpg";
import pic12 from "../img/store/pic12.jpg";
import Chair1 from "../img/pic1.jpg";
import Chair2 from "../img/pic2.jpg";
import Chair3 from "../img/pic3.jpg";
import Chair4 from "../img/pic4.jpg";
import Chair5 from "../img/pic5.jpg";
import Chair6 from "../img/pic6.jpg";

export default function Products() {
  return (
    <div className="products">
      <h2>PRODUCTS</h2>

      <div className="cards-product-row">
        <Cards
          name="Azure Comfort Sofa"
          picture={pic1}
          description="This contemporary sofa features plush cushions and a sleek, low-profile design. Its soft blue upholstery adds a calm, inviting vibe to your living roo"
          dimensions="220 cm (L) x 90 cm (W) x 80 cm (H)"
          price="R 4,000.00"
        />
        <Cards
          name="Rustic Charm Coffee Table"
          picture={pic2}
          description="Crafted from reclaimed wood, this coffee table brings warmth and character to any space. Its sturdy iron legs ensure durability while adding an industrial touch."
          dimensions="120 cm (L) x 60 cm (W) x 40 cm (H)."
          price="R 2,300.00"
        />
        <Cards
          name="Lunar Glow Nightstand"
          picture={pic3}
          description="This modern nightstand has a high-gloss finish with LED lighting for a futuristic look. Two spacious drawers provide ample storage for your bedtime essentials."
          dimensions="50 cm (L) x 40 cm (W) x 55 cm (H)"
          price="R 2,200.00"
        />
      </div>

      <div className="cards-product-row">
        <Cards
          name="Willow Breeze Bookshelf"
          picture={pic4}
          description="ith its ladder-style frame and open shelving, this piece is perfect for showcasing books and décor. The natural wood finish blends beautifully with any interior style."
          dimensions="180 cm (H) x 80 cm (W) x 35 cm (D)"
          price="R 4,200.00"
        />
        <Cards
          name="Pebble Grove Dining Table"
          picture={pic5}
          description="This round table is ideal for small gatherings, featuring a stone-like textured top and minimalist metal legs. It’s both stylish and easy to maintain."
          dimensions="10 cm (Diameter) x 75 cm (H)"
          price="R 2,800.00"
        />
        <Cards
          name="Celeste Wingback Chair"
          picture={pic6}
          description="Designed for modern living rooms, this console features a gold-accented frame and hidden cable management. The spacious cabinets provide plenty of storage for electronics."
          dimensions="180 cm (L) x 45 cm (W) x 50 cm (H)"
          price="R 2,000.00"
        />
      </div>
      <div className="cards-product-row">
        <Cards
          name="Golden Ember Media Console"
          picture={pic7}
          description="Designed for modern living rooms, this console features a gold-accented frame and hidden cable management. The spacious cabinets provide plenty of storage for electronics."
          dimensions="180 cm (L) x 45 cm (W) x 50 cm (H)"
          price="R 2,000.00"
        />

        <Cards
          name="Harbor Light Desk"
          picture={pic8}
          description="With a clean white finish and sleek lines, this desk creates a bright and airy workspace. It includes a built-in drawer for storing your essentials."
          dimensions="120 cm (L) x 60 cm (W) x 75 cm (H)"
          price="R 9,000.00"
        />

        <Cards
          name="Aurora Velvet Ottoman"
          picture={pic9}
          description="This round ottoman offers a pop of color with its vibrant emerald-green velvet. Perfect as a footrest or extra seating, it’s a versatile addition to any room."
          dimensions="50 cm (Diameter) x 40 cm (H)"
          price="R 9,700.00"
        />
      </div>

      <div className="cards-product-row">
        <Cards
          name="Seaside Drift Dining Bench"
          picture={pic10}
          description="Crafted from weathered wood, this bench pairs beautifully with rustic or farmhouse dining tables. Its simple design makes it a timeless piece."
          dimensions="140 cm (L) x 35 cm (W) x 45 cm (H)"
          price="R 8,200.00"
        />

        <Cards
          name="Eclipse Glass Console Table"
          picture={pic11}
          description="his slim console table features a tempered glass top and sleek chrome legs. Perfect for entryways or hallways, it adds a touch of elegance without taking up space."
          dimensions="120 cm (L) x 40 cm (W) x 75 cm (H)"
          price="R 9,000.00"
        />

        <Cards
          name="Frosted Pearl Bed Frame"
          picture={pic12}
          description="This queen-sized bed frame features a faux leather headboard with a pearl-like sheen. Its sturdy design ensures both comfort and durability for restful nights."
          dimensions="210 cm (L) x 160 cm (W) x 120 cm (H)"
          price="R 6,000.00"
        />
      </div>

      <div className="cards-product-row">
        <Cards
          name="Velvet Serenity"
          picture={Chair1}
          description="This plush, velvet chair offers a soft and luxurious seating experience. Its rich, deep purple hue adds a touch of elegance to any living room."
          dimensions="220 cm (L) x 90 cm (W) x 80 cm (H)"
          price="R 2,000.00"
        />
        <Cards
          name=" Oakwood Haven"
          picture={Chair2}
          description="Crafted from premium oak, this chair brings natural warmth and durability. Its simple design complements both traditional and modern spaces with ease."
          dimensions="220 cm (L) x 90 cm (W) x 80 cm (H)"
          price="R 2,400.00"
        />
        <Cards
          name="Skyline Lounge"
          picture={Chair3}
          description="With its sleek, minimalist design, the Skyline Lounge is perfect for urban interiors. The slim metal frame is paired with comfortable cushioning for long-lasting comfort."
          dimensions="220 cm (L) x 90 cm (W) x 80 cm (H)"
          price="R 6,400.00"
        />
      </div>

      <div className="cards-product-row">
        <Cards
          name="Driftwood Recliner"
          picture={Chair4}
          description="Inspired by coastal living, this recliner boasts a rustic driftwood finish. The plush seat and backrest make it ideal for kicking back and relaxing."
          dimensions="220 cm (L) x 90 cm (W) x 80 cm (H)"
          price="R 2,330.00"
        />
        <Cards
          name="Horizon Sway"
          picture={Chair5}
          description="Featuring a curved back and soft linen upholstery, the Horizon Sway embraces comfort and style. Its neutral tone makes it a versatile addition to any room."
          dimensions="220 cm (L) x 90 cm (W) x 80 cm (H)"
          price="R 1,200.00"
        />
        <Cards
          name="Emberstone Throne"
          picture={Chair6}
          description="Bold and eye-catching, the Emberstone Throne features a deep, burnt-orange fabric that contrasts beautifully with its dark wood frame. Perfect for adding a statement piece to your home decor."
          dimensions="220 cm (L) x 90 cm (W) x 80 cm (H)"
          price="R 5,700.00"
        />
      </div>
    </div>
  );
}
