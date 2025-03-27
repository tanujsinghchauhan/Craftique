import Homebg from "../assets/home_bg.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// image assets
import Order from "../assets/order.png";
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
        <div className="flex flex-col h-auto max-w-[90%] md:w-96 mt-10 mx-auto md:ml-10 text-center md:text-left">
          <p className="text-[#F9D9AA] text-3xl sm:text-4xl font-bold">
            "Delight in <span className="text-[#FF902B]">handmade </span>
            treasures before your next adventure."
          </p>
          <p className="text-[#FF902B] mt-6 sm:mt-8">
            Team : Third Impact Tanuj Singh Chauhan : 23BDS1156 Sahil Kumar :
            23BDS1099 Tarang Narayan : 23BDS1120
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center sm:justify-evenly space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/product">
              <button className="sm:w-36 md:w-44 h-10 bg-[#2F2105] text-sm text-white rounded-full font-bold flex flex-row justify-center items-center border-yellow-100">
                Order Now <img className="ml-2" src={Order} alt="Order Icon" />
              </button>
            </Link>
            <Link to="/faq">
              <button className="sm:w-36 md:w-44 h-10 bg-white text-sm rounded-full font-bold">
                More Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#130505] h-20"></div>
      <div className="mt-10 md:mt-5 px-3">
        {/* Heading */}
        <p className="text-lg font-bold text-center md:text-left">
          How to use delivery
          <span className="underline decoration-orange-500"> service</span>
        </p>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center mt-8 md:mt-10 gap-6 md:gap-0">
          {/* Step 1 */}
          <div className="flex flex-col justify-center items-center text-center">
            <img className="h-12 w-12" src={order} alt="Choose Product" />
            <p className="font-bold mt-2">Choose your product</p>
            <p className="text-xs max-w-[200px]">
              There are works 200+ artisans for you
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col justify-center items-center text-center">
            <img className="h-12 w-12" src={truck} alt="Delivery" />
            <p className="font-bold mt-2">We deliver it to you</p>
            <p className="text-xs max-w-[200px]">On time at your doorsteps</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col justify-center items-center text-center">
            <img className="h-12 w-12" src={artist} alt="Receive Product" />
            <p className="font-bold mt-2">You receive product</p>
            <p className="text-xs max-w-[200px]">
              The artisan directly gets paid
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F6EBDA] mt-20 md:mt-40 w-full min-h-[350px] md:h-72 flex flex-col md:flex-row justify-center md:justify-evenly items-center px-6">
        {/* Image */}
        <img
          className="h-auto max-w-[80%] sm:max-w-[200px] md:max-w-[208px] mb-6 md:mb-28 border-white border-x-4 shadow-2xl"
          src={pot}
          alt="Handmade Pot"
        />

        {/* Text Section */}
        <div className="flex flex-col w-full md:w-80 gap-y-4 text-center md:text-left">
          <h3 className="font-semibold text-2xl">
            About <span className="underline decoration-[#ff902B]">us</span>
          </h3>
          <p className="font-semibold">
            "Quality handmade goods from small artisans, ready to deliver."
          </p>
          <p className="text-xs text-gray-400 max-w-[90%] md:max-w-none mx-auto md:mx-0">
            "We are a platform that showcases and delivers unique handmade
            creations. Our featured items are crafted with care by talented
            artisans and available globally for everyone to enjoy."
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link to="/product">
              <button className="w-32 h-8 bg-[#2F2105] text-sm text-orange-300 rounded-full font-bold flex justify-center items-center border border-yellow-100">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 h-64 bg-[#F6EBDA] rounded-r-lg rounded-br-lg flex flex-col justify-center items-center px-6 py-4 text-center">
          <p className="font-bold text-2xl mb-4">What they say about us</p>
          <p className="text-xs text-gray-400 w-full max-w-sm">
            We always provide the best service and always maintain the quality
            of our products.
          </p>
        </div>

        {/* Right Section (Carousel) */}
        <div
          className="relative w-full md:w-1/2 h-64 overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-auto h-48 md:h-56 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="lg:h-60 max-w-[90%] w-full mt-20 mb-10 flex flex-col justify-center items-center bg-cover bg-no-repeat mx-auto rounded-3xl bg-black/40 bg-blend-multiply space-y-4 p-6 sm:p-4"
        style={{
          backgroundImage: `url(${embg})`,
          backgroundPosition: "center",
        }}
      >
        <p className="text-white font-bold text-lg sm:text-base text-center">
          Subscribe to get 50% discount on your first order
        </p>
        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md px-2 py-1 w-full max-w-sm">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-2 outline-none w-full max-w-[240px] text-sm bg-transparent"
          />
          <Link to="/cart">
            <button
              className="px-3 py-1 font-semibold text-sm text-white rounded-full transition sm:w-full sm:max-w-[100px]"
              style={{ backgroundColor: "#2F2105" }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4A3510")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2F2105")}
            >
              Order Now
            </button>
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
