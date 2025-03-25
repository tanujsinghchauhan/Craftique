import Navbar from "./Navbar";
import Footer from "./Footer";
import Homebg from "../assets/home_bg.png";
import market from "../assets/image 14.png";

function AboutUs() {
  return (
    <>
      <div
        className="min-h-screen pt-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${Homebg})` }}
      >
        <Navbar />
        <p className="text-orange-300 text-2xl font-bold my-3 text-center sm:text-left sm:ml-10">
          About Us
        </p>

        <div className="flex flex-col justify-center w-[90%] max-w-5xl mx-auto">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#F8E9D2] rounded-xl p-4">
              <p className="font-bold text-xl">Mission Statement</p>
              <p className="text-sm mt-2">
                At Craftique, our mission is to connect passionate artisans and
                craftsmen with discerning customers who appreciate the beauty
                and uniqueness of handmade products. We strive to create a
                vibrant marketplace that celebrates creativity, supports small
                businesses, and fosters a community of makers and buyers who
                value quality and authenticity.
              </p>
            </div>

            <div className="bg-[#FF902B] rounded-xl p-4">
              <p className="font-bold text-xl">Vision Statement</p>
              <p className="text-sm mt-2">
                Our vision is to be the leading online destination for handmade
                products, empowering artisans from around the world to share
                their stories and talents. We envision a future where every
                purchase supports sustainable practices, nurtures creativity,
                and enriches lives through the art of craftsmanship.
              </p>
            </div>
          </div>

          {/* Target Market Summary & Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
            <div className="w-full sm:w-1/3 bg-[#FF902B] rounded-xl flex flex-col items-center justify-center p-6">
              <p className="font-bold text-lg text-center">
                Target Market Summary
              </p>
              <img
                src={market}
                className="mt-4 object-contain max-w-[180px] sm:max-w-[220px] md:max-w-[250px]"
                alt="Market Overview"
              />
            </div>

            <div className="flex flex-col w-full sm:w-2/3 gap-6">
              {/* Core Values */}
              <div className="bg-[#F8E9D2] rounded-xl p-4">
                <p className="font-bold text-xl">Core Values</p>
                <p className="text-sm mt-2">
                  At Craftique, we are committed to authenticity, community,
                  sustainability, quality, and inclusivity. We celebrate the
                  genuine craftsmanship behind each product, foster a supportive
                  environment for artisans and customers, promote eco-friendly
                  practices, curate high-quality handmade goods, and embrace
                  different cultures.
                </p>
              </div>

              {/* Company History */}
              <div className="bg-[#F8E9D2] rounded-xl p-4">
                <p className="font-bold text-xl">Brief Company History</p>
                <p className="text-sm mt-2">
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

      <Footer className="m-0 p-0" />
    </>
  );
}

export default AboutUs;
