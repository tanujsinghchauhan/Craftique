import Navbar from "./Navbar";
import Footer from "./Footer";
import Homebg from "../assets/home_bg.png";
import market from "../assets/image 14.png";
function AboutUs() {
  return (
    <>
      <div
        className="min-h-screen pt-4"
        style={{ backgroundImage: `url(${Homebg})` }}
      >
        <Navbar></Navbar>
        <p className="text-orange-300 text-2xl font-bold my-3 ml-10">
          About Us
        </p>
        <div className="flex flex-col h-auto w-[80%] ">
          <div className="flex flex-row justify-center items-center ml-28 space-x-10">
            <div className="h-32 w-[500px] bg-[#F8E9D2] rounded-xl">
              <p className="font-bold text-xl text-left mt-2 ml-2">
                Mission Statement
              </p>
              <p className="text-xs text-left ml-2">
                At Craftique, our mission is to connect passionate artisans and
                craftsmen with discerning customers who appreciate the beauty
                and uniqueness of handmade products we strive to create a
                vibrant marketplace that celebrates creativity, supports small
                businesses, and fosters a community of makers and buyers who
                value quality and authenticity.
              </p>
            </div>
            <div className="h-32 w-[500px] bg-[#FF902B] rounded-xl">
              <p className="font-bold text-xl text-left mt-2 ml-2">
                Vission Statement
              </p>
              <p className="text-xs text-left ml-2 mt-2">
                Our vision is to be the leading online destination for handmade
                products, empowering artisans from around the world to share
                their stories and talents. We envision a future where every
                purchase supports sustainable practices, nurtures creativity,
                and enriches lives through the art of craftsmanship.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-evenly items-center ml-28 space-x-6 mt-6 ">
            <div className="w-40 h-72 bg-[#FF902B] rounded-xl">
              <p className="font-bold text-3xl text-center">
                Target Market Summary
              </p>
              <img src={market} className="mt-5"></img>
            </div>
            <div className="flex flex-col justify-evenly items-center space-y-6">
              <div className="h-32 w-[700px] bg-[#F8E9D2] rounded-xl">
                <p className="font-bold text-xl text-left mt-2 ml-2">
                  Core Values
                </p>
                <p className="text-xs text-left ml-2 mt-2">
                  At Craftique, we are committed to authenticity, community,
                  sustainability, quality, and inclusivity. We celebrate the
                  genuine craftsmanship behind each product, foster a supportive
                  environment for artisans and customers, promote eco-friendly
                  practices, curate high-quality handmade goods, and embrace the
                  different cultures.
                </p>
              </div>
              <div className="h-32 w-[700px] bg-[#F8E9D2] rounded-xl">
                <p className="font-bold text-xl text-left mt-2 ml-2">
                  Brief Company History
                </p>
                <p className="text-xs text-left ml-2 mt-2">
                  Founded in 2025 by a passionate artisan and entrepreneur,
                  Craftique emerged from a desire to create a dedicated platform
                  for showcasing handmade products. Recognizing the need for a
                  space that connects talented small artists with appreciative
                  customers, Craftique has quickly grown into a vibrant
                  community celebrating creativity and craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer className="m-0 p-0"></Footer>
    </>
  );
}
export default AboutUs;
