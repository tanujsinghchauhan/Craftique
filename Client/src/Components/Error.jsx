import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homebg from "../assets/home_bg.png";
import Errorp from "../assets/error-page-404.jpg";

function Error() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Homebg})`, backgroundSize: "cover" }}
        className="min-h-screen relative"
      >
        <Navbar></Navbar>
        <p className="text-[#F9D9AA] text-3xl sm:text-4xl font-bold">
          "It seems you have reached an unknow page{" "}
          <Link to="/" className="text-[#FF902B]">
            Click Here{" "}
          </Link>
          to go back to Home Page."
        </p>
        <img src={Errorp}></img>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Error;
