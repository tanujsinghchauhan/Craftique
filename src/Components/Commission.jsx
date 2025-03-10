import Homebg from "../assets/home_bg.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Commission() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Homebg})`, backgroundSize: "cover" }}
      >
        <Navbar />
        <div></div>
      </div>
      <Footer />
    </>
  );
}
export default Commission;
