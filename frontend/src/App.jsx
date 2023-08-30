import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/view-cart" element={<Checkout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
