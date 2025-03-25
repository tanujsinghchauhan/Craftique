import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  handicraftImages,
  furnitureImages,
  paintingImages,
  prodbg,
  Order,
} from "../assets/productImages";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

function Product() {
  return (
    <div
      className="h-full pt-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${prodbg})` }}
    >
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <Section title="Handicraft" images={handicraftImages} />
        <Section title="Furniture" images={furnitureImages} />
        <Section title="Paintings" images={paintingImages} />
      </div>
      <Footer />
    </div>
  );
}

function Section({ title, images }) {
  return (
    <section className="mb-8">
      <p className="cursor-pointer text-lg sm:text-xl font-semibold hover:text-orange-500 ml-4 sm:ml-10">
        {title}
      </p>
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
        {images.map((imgSrc, index) => (
          <ProductCard key={index} imgSrc={imgSrc} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ imgSrc, index }) {
  const { addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [cartMessage, setCartMessage] = useState("");

  const productNames = [
    "Glass Animals",
    "Wooden Spoon",
    "Tribal Decorative",
    "Steel Canon",
    "Tool Box",
    "Clay Pots",
    "Custom Painting",
  ];

  const productPrices = [7500, 15000, 23000, 5499, 18750, 32900, 9850];

  const handleBuyNowClick = () => {
    setShowModal(true);
  };

  const handleAddToCart = () => {
    addToCart({
      id: Date.now() + Math.random(),
      imgSrc,
      name: productNames[index % productNames.length],
      price: productPrices[index % productPrices.length],
    });
    setCartMessage("Added to cart!");
    setTimeout(() => setCartMessage(""), 2000); // Message disappears after 2s
    setShowModal(false);
  };

  return (
    <div className="w-full max-w-[250px] bg-white rounded-2xl shadow-lg border-4 flex flex-col justify-center items-center p-4 relative">
      <img
        className="h-28 w-full object-contain rounded-lg"
        src={imgSrc}
        alt="Product"
        loading="lazy"
      />
      <div className="flex flex-row justify-between w-full mt-2 font-bold text-sm sm:text-base">
        <p>{productNames[index % productNames.length]}</p>
        <p>₹{productPrices[index % productPrices.length].toLocaleString()}</p>
      </div>
      <div className="flex flex-row justify-between w-full mt-2 items-center">
        <button
          className="text-orange-500 border-orange-500 border-2 rounded-md text-xs sm:text-sm w-20 hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-300"
          onClick={handleBuyNowClick}
        >
          Buy Now
        </button>
        <img
          className="h-6 w-6 cursor-pointer"
          src={Order}
          alt="Order Icon"
          onClick={handleAddToCart}
        />
      </div>

      {/* Floating Message for Cart */}
      {cartMessage && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-5 bg-black text-white px-3 py-1 rounded-lg text-sm animate-fadeOut z-50">
          {cartMessage}
        </div>
      )}

      {/* Modal for Buy Now */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80">
            <h3 className="text-lg font-semibold">
              {productNames[index % productNames.length]}
            </h3>
            <img
              className="w-full h-40 object-contain mt-2"
              src={imgSrc}
              alt="Product"
            />
            <p className="mt-2 text-lg font-bold">
              ₹{productPrices[index % productPrices.length].toLocaleString()}
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
