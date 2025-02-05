import Homebg from "../assets/home_bg.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
// image assets
import Order from "../assets/order.png";
import Imgprod from "../assets/img_product.png";
import Imgprod2 from "../assets/img_product2.png";
import Imgprod3 from "../assets/img_product3.png";
import order from "../assets/order-1_svgrepo.com.svg";
import truck from "../assets/truck-delivery_svgrepo.com.svg";
import artist from "../assets/Group.svg";
import pot from "../assets/image 6.png";
import embg from "../assets/hoyoun-lee-j_uyU39EoPg-unsplash.jpg";
import slider1 from "../assets/card-testi.png";
import slider2 from "../assets/card-testi2.png";
import slider3 from "../assets/card-testi3.png";
import React, { useState, useEffect } from "react";

function Home() {
  const images = [slider1, slider2, slider3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <div
        className="h-screen pt-4"
        style={{ backgroundImage: `url(${Homebg})` }}
      >
        <Navbar></Navbar>
        <div className="flex flex-col h-auto w-96 mt-10 ml-10">
          <p className="text-[#F9D9AA] text-4xl font-bold">
            "Delight in <span className="text-[#FF902B]">handmade </span>
            treasures before your next adventure."
          </p>
          <p className="text-[#ff902B] mt-8">
            "Support small artisans and brighten your day with a unique handmade
            creation."
          </p>
          <div className="mt-8 flex flex-row justify-evenly">
            <button className="w-44 h-10 bg-[#2F2105] text-sm text-white rounded-full font-bold flex flex-row justify-center items-center border-yellow-100">
              Order Now<img className="ml-2" src={Order}></img>
            </button>
            <button className="w-44 h-10 bg-white text-sm rounded-full font-bold">
              More Menu
            </button>
          </div>
        </div>
        <p className="text-yellow-200 mt-20 ml-10 text-2xl font-semibold">
          Popular <span className="underline decoration-[#ff902B]">Now</span>
        </p>
      </div>
      <div className="bg-gradient-to-b from-[#130505] h-20">
        <div className="bg-[#F9D9AA] h-40 w-[80%] mx-24 rounded-3xl flex flex-row justify-evenly items-center">
          <div className="w-56 h-52 bg-white mb-20 rounded-2xl shadow-lg border-4 flex flex-col justify-center items-center">
            <img className="h-28 w-48 " src={Imgprod}></img>
            <div className="flex flex-row justify-evenly gap-x-14 mt-1 items-center font-bold">
              <p>Glass Animals</p>
              <p>23K</p>
            </div>
            <div className="flex flex-row justify-evenly gap-x-16 mt-2 items-center">
              <button className="text-orange-500 border-orange-500 border-2 rounded-md text-xs w-20">
                Buy Now
              </button>
              <img className="" src={Order}></img>
            </div>
          </div>
          <div className="w-56 h-52 bg-white mb-20 rounded-2xl shadow-lg border-4 flex flex-col justify-center items-center">
            <img className="h-28 w-48 " src={Imgprod2}></img>
            <div className="flex flex-row justify-evenly gap-x-14 mt-1 items-center font-bold">
              <p>Surat Silk Saree</p>
              <p>23K</p>
            </div>
            <div className="flex flex-row justify-evenly gap-x-16 mt-2 items-center">
              <button className="text-orange-500 border-orange-500 border-2 rounded-md text-xs w-20">
                Buy Now
              </button>
              <img className="" src={Order}></img>
            </div>
          </div>
          <div className="w-56 h-52 bg-white mb-20 rounded-2xl shadow-lg border-4 flex flex-col justify-center items-center">
            <img className="h-28 w-48 " src={Imgprod3}></img>
            <div className="flex flex-row justify-evenly gap-x-14 mt-1 items-center font-bold">
              <p>Custom Painting</p>
              <p>23K</p>
            </div>
            <div className="flex flex-row justify-evenly gap-x-16 mt-2 items-center">
              <button className="text-orange-500 border-orange-500 border-2 rounded-md text-xs w-20">
                Buy Now
              </button>
              <img className="" src={Order}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36">
        <p className="text-lg font-bold ml-10">
          How to use delivery
          <span className="underline decoration-orange-500"> service</span>
        </p>
        <div className="flex flex-row justify-evenly items-center mt-10">
          <div className="flex flex-col justify-center items-center">
            <img className="h-12 w-12" src={order}></img>
            <p className="font-bold">choose your product</p>
            <p className="text-xs">there are works 200+ artisans for you</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="h-12 w-12" src={truck}></img>
            <p className="font-bold">we delivery it to you</p>
            <p className="text-xs">On time at your doorsteps</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="h-12 w-12" src={artist}></img>
            <p className="font-bold">You receive product</p>
            <p className="text-xs">The artisan directly gets paid</p>
          </div>
        </div>
      </div>
      <div className="bg-[#F6EBDA] mt-40 w-full h-72 flex flex-row justify-evenly items-center">
        <img
          className="h-80 mb-28 w-52 border-white border-x-4  shadow-2xl"
          src={pot}
        ></img>
        <div className="flex flex-col w-80 gap-y-4">
          <h3 className="font-semibold text-2xl">
            About <span className="underline decoration-[#ff902B]">us</span>
          </h3>
          <p className="font-semibold">
            "Quality handmade goods from small artisans, ready to deliver."
          </p>
          <p className="text-xs text-gray-400">
            "We are a platform that showcases and delivers unique handmade
            creations. Our featured items are crafted with care by talented
            artisans and available globally for everyone to enjoy."
          </p>
          <button className="w-32 h-8 bg-[#2F2105] text-sm text-orange-300 rounded-full font-bold flex justify-center items-center border border-yellow-100">
            Order Now
          </button>
        </div>
      </div>
      <div className="mt-24">
        <p className="text-lg font-bold ml-10 mb-10">
          Special
          <span className="underline decoration-orange-500 ml-4">for you</span>
        </p>
        {/* For product management */}
        <div className="w-[80%] mx-24 rounded-3xl grid grid-cols-3 gap-8 justify-items-center">
          {[Imgprod, Imgprod2, Imgprod3, Imgprod, Imgprod2, Imgprod3].map(
            (imgSrc, index) => (
              <div
                key={index}
                className="w-56 h-52 bg-white rounded-2xl shadow-lg border-4 flex flex-col justify-center items-center"
              >
                <img className="h-28 w-48" src={imgSrc} alt="Product" />
                <div className="flex flex-row justify-evenly gap-x-14 mt-1 items-center font-bold">
                  <p>
                    {index % 3 === 0
                      ? "Glass Animals"
                      : index % 3 === 1
                      ? "Surat Silk Saree"
                      : "Custom Painting"}
                  </p>
                  <p>23K</p>
                </div>
                <div className="flex flex-row justify-evenly gap-x-16 mt-2 items-center">
                  <button className="text-orange-500 border-orange-500 border-2 rounded-md text-xs w-20">
                    Buy Now
                  </button>
                  <img src={Order} alt="Order Icon" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="mt-20 flex flex-row justify-between items-center">
        <div className="w-1/2 h-64 bg-[#F6EBDA] rounded-r-lg rounded-br-lg flex flex-col justify-center items-center px-4">
          <p className="font-bold text-2xl mb-5 text-center">
            What they say about us
          </p>
          <p className="text-xs text-gray-400 w-full text-center sm:w-52">
            We always provide the best service and always maintain the quality
            of our products.
          </p>
        </div>
        <div
          className="relative w-1/2 h-64 overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="flex transition-all duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="h-60 w-4/5 mt-20 mb-10 flex flex-col justify-center items-center bg-cover bg-no-repeat ml-28 rounded-3xl bg-black/40 bg-blend-multiply space-y-4"
        style={{
          backgroundImage: `url(${embg})`,
          backgroundPosition: "center",
        }}
      >
        <p className="text-white font-bold text-xl text-center">
          Subscribe to get 50% discount on your first order
        </p>
        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md px-2 py-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 outline-none w-60 text-sm bg-transparent"
          />
          <button
            className="px-3 py-1 font-semibold text-sm text-white rounded-full transition"
            style={{ backgroundColor: "#2F2105" }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#4A3510")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2F2105")}
          >
            Order Now
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
