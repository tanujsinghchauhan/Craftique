import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import AboutUs from "./Components/AboutUs";
import Faq from "./Components/Faq";
import Commission from "./Components/Commission";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/CartContext"; // Import CartProvider
import Error from "./Components/Error";

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Wrap everything inside CartProvider */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/commission" element={<Commission />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
