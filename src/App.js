import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Products from "./Pages/Products";
import OurTeam from "./Pages/OurTeam";
import Testimonial from "./Pages/Testimonial";
import Last404 from "./Pages/Last404";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Last404" element={<Last404 />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;