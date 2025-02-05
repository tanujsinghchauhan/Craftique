import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Your other components here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
