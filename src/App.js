//Required imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/Normalize.css";
import "./css/App.css";
import { Home } from "./components/Home";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";
import { Item } from "./components/Item";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route path="/shop/item/:id" element={<Item />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
