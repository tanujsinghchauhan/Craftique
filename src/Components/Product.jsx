import Navbar from "./Navbar";
import Footer from "./Footer";
import Imgprod1 from "../assets/img_product.png";
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
import Imgprod19 from "../assets/image 14.png";
import Imgprod20 from "../assets/image 6.png";
import Order from "../assets/order.png";
import prodbg from "../assets/henry-co--odUkx8C2gg-unsplash.jpg";
import { useState } from "react";

function Product() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full pt-4" style={{ backgroundImage: `url(${prodbg})` }}>
      <Navbar />
      <section className="mb-5">
        <p
          className="cursor-pointer text-lg font-semibold hover:text-orange-500 ml-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          Handicraft
        </p>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="my-2  w-full p-4 bg-black text-white shadow-lg">
            <p className="text-sm">
              This is a sample text inside the handicraft section. Click again
              to close.
            </p>
          </div>
        </div>
        <div className="w-[80%] mx-24 rounded-3xl grid grid-cols-3 gap-8 justify-items-center">
          {[Imgprod1, Imgprod4, Imgprod5, Imgprod6, Imgprod19, Imgprod20].map(
            (imgSrc, index) => (
              <div
                key={index}
                className="w-56 h-52 bg-white rounded-2xl shadow-lg border-4 flex flex-col justify-center items-center"
              >
                <img
                  className="h-28 w-48 object-cover"
                  src={imgSrc}
                  alt="Product"
                  loading="lazy"
                />
                <div className="flex flex-row justify-evenly gap-x-14 mt-1 items-center font-bold">
                  <p>
                    {index % 6 === 0
                      ? "Glass Animals"
                      : index % 6 === 1
                      ? "Wooden Spoon"
                      : index % 6 === 2
                      ? "Tribal Decorative"
                      : index % 6 === 3
                      ? "Steel Canon"
                      : index % 6 === 4
                      ? "Tool Box"
                      : index % 6 === 5
                      ? "Clay Pots"
                      : "Custom Painting"}
                  </p>
                  <p>23K</p>
                </div>
                <div className="flex flex-row justify-evenly gap-x-16 mt-2 items-center">
                  <button className="text-orange-500 border-orange-500 border-2 rounded-md text-xs w-20 hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-300">
                    Buy Now
                  </button>
                  <img src={Order} alt="Order Icon" />
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <section className="mb-5">
        <p
          className="cursor-pointer text-lg font-semibold hover:text-orange-500 ml-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          Furniture
        </p>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="my-2  w-full p-4 bg-black text-white shadow-lg">
            <p className="text-sm">
              This is a sample text inside the handicraft section. Click again
              to close.
            </p>
          </div>
        </div>
        <div className="w-[80%] mx-24 rounded-3xl grid grid-cols-3 gap-8 justify-items-center">
          {[Imgprod7, Imgprod8, Imgprod9, Imgprod10, Imgprod11, Imgprod12].map(
            (imgSrc, index) => (
              <div
                key={index}
                className="w-56 h-52 bg-white rounded-2xl shadow-lg border-4 flex flex-col justify-center items-center"
              >
                <img
                  className="h-28 w-48 object-cover"
                  src={imgSrc}
                  alt="Product"
                  loading="lazy"
                />
                <div className="flex flex-row justify-evenly gap-x-14 mt-1 items-center font-bold">
                  <p>
                    {index % 6 === 0
                      ? "Study Table"
                      : index % 6 === 1
                      ? "Antique Sofa"
                      : index % 6 === 2
                      ? "Mahagony Clock"
                      : index % 6 === 3
                      ? "Coffee Table"
                      : index % 6 === 4
                      ? "Mini Drawers"
                      : index % 6 === 5
                      ? "Wooden Chair"
                      : "Custom Painting"}
                  </p>
                  <p>23K</p>
                </div>
                <div className="flex flex-row justify-evenly gap-x-16 mt-2 items-center">
                  <button className="text-orange-500 border-orange-500 border-2 rounded-md text-xs w-20 hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-300">
                    Buy Now
                  </button>
                  <img src={Order} alt="Order Icon" />
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <section className="mb-5">
        <p
          className="cursor-pointer text-lg font-semibold hover:text-orange-500 ml-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          Paintings
        </p>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="my-2  w-full p-4 bg-black text-white shadow-lg">
            <p className="text-sm">
              This is a sample text inside the handicraft section. Click again
              to close.
            </p>
          </div>
        </div>
        <div className="w-[80%] mx-24 rounded-3xl grid grid-cols-3 gap-8 justify-items-center">
          {[
            Imgprod13,
            Imgprod14,
            Imgprod15,
            Imgprod16,
            Imgprod17,
            Imgprod18,
          ].map((imgSrc, index) => (
            <div
              key={index}
              className="w-56 h-52 bg-white rounded-2xl shadow-lg border-4 flex flex-col justify-center items-center"
            >
              <img
                className="h-28 w-48 object-cover"
                src={imgSrc}
                alt="Product"
                loading="lazy"
              />
              <div className="flex flex-row justify-evenly gap-x-14 mt-1 items-center font-bold">
                <p>
                  {index % 6 === 0
                    ? "Wildlife"
                    : index % 6 === 1
                    ? "Snowy Landscape"
                    : index % 6 === 2
                    ? "Bob Ross Mountain"
                    : index % 6 === 3
                    ? "Resonance Painting"
                    : index % 6 === 4
                    ? "Tool Box"
                    : index % 6 === 5
                    ? "Pirate Ship"
                    : "Custom Painting"}
                </p>
                <p>23K</p>
              </div>
              <div className="flex flex-row justify-evenly gap-x-16 mt-2 items-center">
                <button className="text-orange-500 border-orange-500 border-2 rounded-md text-xs w-20 hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-300">
                  Buy Now
                </button>
                <img src={Order} alt="Order Icon" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Product;
