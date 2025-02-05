import Navbar from "./Navbar";
import Footer from "./Footer";
import Imgprod1 from "../assets/img_product.png";
import Imgprod2 from "../assets/img_product2.png";
import Imgprod3 from "../assets/img_product3.png";
import Imgprod4 from "../assets/imgprod4.jpg";
import Imgprod5 from "../assets/imgprod5.jpg";
import Imgprod6 from "../assets/imgprod6.jpg";
import Imgprod7 from "../assets/imgprod7.jpg";
import Imgprod8 from "../assets/imgprod8.jpg";
import Imgprod9 from "../assets/imgprod9.jpg";
import Imgprod10 from "../assets/imgprod10.jpg";
import Imgprod11 from "../assets/imgprod11.jpg";
import Imgprod12 from "../assets/imgprod12.jpg";
import Imgprod13 from "../assets/imgprod13.jpg";
import Imgprod14 from "../assets/imgprod14.jpg";
import Imgprod15 from "../assets/imgprod15.jpg";
import Imgprod16 from "../assets/imgprod16.jpg";
import Imgprod17 from "../assets/imgprod17.jpg";
import Imgprod18 from "../assets/imgprod18.jpg";
import Order from "../assets/order.png";
import prodbg from "../assets/henry-co--odUkx8C2gg-unsplash.jpg";
import { useState } from "react";

function Product() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      name: "Handicraft",
      description:
        "Welcome to our Handicraft section, where tradition meets creativity. Discover unique handmade products crafted by skilled artisans, each piece reflecting cultural heritage and exquisite craftsmanship.",
      products: [
        { img: Imgprod1, name: "Handmade Vase", price: "25K", rating: "4.5" },
        { img: Imgprod2, name: "Woven Basket", price: "18K", rating: "4.7" },
        { img: Imgprod3, name: "Clay Pot", price: "20K", rating: "4.3" },
        { img: Imgprod4, name: "Beaded Necklace", price: "15K", rating: "4.8" },
        {
          img: Imgprod5,
          name: "Wooden Sculpture",
          price: "30K",
          rating: "4.6",
        },
        {
          img: Imgprod6,
          name: "Hand-Painted Plate",
          price: "22K",
          rating: "4.4",
        },
      ],
    },
    {
      name: "Furniture",
      description:
        "Explore our Furniture collection, designed to bring style and comfort to your living spaces. Each piece blends functionality with aesthetic appeal.",
      products: [
        { img: Imgprod7, name: "Modern Chair", price: "50K", rating: "4.9" },
        { img: Imgprod8, name: "Wooden Table", price: "45K", rating: "4.7" },
        { img: Imgprod9, name: "Bookshelf", price: "40K", rating: "4.6" },
        { img: Imgprod10, name: "Wardrobe", price: "70K", rating: "4.8" },
        { img: Imgprod11, name: "Sofa Set", price: "90K", rating: "4.9" },
        { img: Imgprod12, name: "Coffee Table", price: "35K", rating: "4.5" },
      ],
    },
    {
      name: "Paintings",
      description:
        "Dive into our Paintings section, showcasing artworks that capture emotions and stories. From contemporary designs to classic masterpieces.",
      products: [
        { img: Imgprod13, name: "Abstract Art", price: "60K", rating: "4.8" },
        {
          img: Imgprod14,
          name: "Landscape Painting",
          price: "55K",
          rating: "4.7",
        },
        { img: Imgprod15, name: "Portrait", price: "65K", rating: "4.9" },
        { img: Imgprod16, name: "Modern Art", price: "58K", rating: "4.6" },
        {
          img: Imgprod17,
          name: "Watercolor Scene",
          price: "48K",
          rating: "4.4",
        },
        {
          img: Imgprod18,
          name: "Classic Masterpiece",
          price: "75K",
          rating: "4.9",
        },
      ],
    },
  ];

  return (
    <div className="h-full pt-4" style={{ backgroundImage: `url(${prodbg})` }}>
      <Navbar />

      {sections.map((section, idx) => (
        <div key={idx} className="ml-10 mb-8">
          <p
            className="text-lg font-bold cursor-pointer"
            onClick={() => toggleSection(section.name)}
          >
            {section.name}
          </p>

          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              openSection === section.name ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 mt-2 italic">
              <p className="text-sm text-gray-700">{section.description}</p>
            </div>
          </div>

          <div className="w-full lg:w-[80%] mx-auto rounded-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mt-4">
            {section.products.map((product, index) => (
              <div
                key={index}
                className={`w-full sm:w-56 h-60 bg-white rounded-2xl shadow-lg border-4 flex flex-col justify-center items-center hover:shadow-xl transition duration-300 ${
                  index >= 3 && index % 3 === 2 ? "mb-0" : "mb-4"
                }`}
              >
                <img
                  className="h-28 w-48 object-cover"
                  src={product.img}
                  alt={product.name}
                />
                <div className="flex flex-col items-center font-bold mt-2">
                  <p className="text-sm sm:text-base">{product.name}</p>
                  <p className="text-xs sm:text-sm">{product.price}</p>
                  <p className="text-xs sm:text-sm">⭐ {product.rating}</p>
                </div>
                <div className="flex flex-row justify-evenly items-center space-x-10">
                  <button className="text-orange-500 border-orange-500 border-2 rounded-md text-xs sm:text-sm w-20 hover:bg-orange-500 hover:text-white transition mt-2">
                    Buy Now
                  </button>
                  <img src={Order} alt="Order Icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default Product;
