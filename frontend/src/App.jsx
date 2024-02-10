import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Auth from "./components/Auth/Auth";
import History from "./components/History/History";
import CategoryItems from "./components/CategoryItems/CategoryItems";
import ItemPage from "./components/ItemPage/itemPage";
import Footer from "./components/Home/Footer";
import ContactPage from "./components/ContactUs/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/view-cart" element={<Checkout />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/view-history" element={<History />}></Route>
          <Route path="/categories" element={<CategoryItems />}></Route>
          <Route path="/item" element={<ItemPage />}></Route>
          <Route path="/contact-us" element={<ContactPage />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
