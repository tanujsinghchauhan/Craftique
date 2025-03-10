import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  handicraftImages,
  furnitureImages,
  paintingImages,
  prodbg,
  Order,
} from "../assets/productImages";
import { useState } from "react";

function Product() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full pt-4" style={{ backgroundImage: `url(${prodbg})` }}>
      <Navbar />

      {/* Handicraft Section */}
      <section className="mb-5">
        <p className="cursor-pointer text-lg font-semibold hover:text-orange-500 ml-10">
          Handicraft
        </p>

        <div className="w-[80%] mx-24 rounded-3xl grid grid-cols-3 gap-8 justify-items-center">
          {handicraftImages.map((imgSrc, index) => (
            <ProductCard key={index} imgSrc={imgSrc} index={index} />
          ))}
        </div>
      </section>

      {/* Furniture Section */}
      <section className="mb-5">
        <p className="cursor-pointer text-lg font-semibold hover:text-orange-500 ml-10">
          Furniture
        </p>

        <div className="w-[80%] mx-24 rounded-3xl grid grid-cols-3 gap-8 justify-items-center">
          {furnitureImages.map((imgSrc, index) => (
            <ProductCard key={index} imgSrc={imgSrc} index={index} />
          ))}
        </div>
      </section>

      {/* Paintings Section */}
      <section className="mb-5">
        <p className="cursor-pointer text-lg font-semibold hover:text-orange-500 ml-10">
          Paintings
        </p>

        <div className="w-[80%] mx-24 rounded-3xl grid grid-cols-3 gap-8 justify-items-center">
          {paintingImages.map((imgSrc, index) => (
            <ProductCard key={index} imgSrc={imgSrc} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProductCard({ imgSrc, index }) {
  const productNames = [
    "Glass Animals",
    "Wooden Spoon",
    "Tribal Decorative",
    "Steel Canon",
    "Tool Box",
    "Clay Pots",
    "Custom Painting",
  ];

  return (
    <div className="w-56 h-52 bg-white rounded-2xl shadow-lg border-4 flex flex-col justify-center items-center">
      <img
        className="h-28 w-48 object-cover"
        src={imgSrc}
        alt="Product"
        loading="lazy"
      />
      <div className="flex flex-row justify-evenly gap-x-14 mt-1 items-center font-bold">
        <p>{productNames[index % productNames.length]}</p>
        <p>23K</p>
      </div>
      <div className="flex flex-row justify-evenly gap-x-16 mt-2 items-center">
        <button className="text-orange-500 border-orange-500 border-2 rounded-md text-xs w-20 hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-300">
          Buy Now
        </button>
        <img src={Order} alt="Order Icon" />
      </div>
    </div>
  );
}

export default Product;
