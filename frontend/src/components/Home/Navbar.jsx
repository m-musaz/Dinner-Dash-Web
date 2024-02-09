import React, { useEffect, useState } from "react";
import DD from "../../assets/DD_logo_2.png";
import styles from "./Navbar.module.css";
// import { IconButton } from "@mui/material";
// import { Badge } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function Navbar({ cart, user, setUser }) {
  const [cartSize, setCartSize] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      if (Object.keys(token).length) {
        setUser(token);
      }
    }
  }, []);

  useEffect(() => {
    setCartSize(cart.length);
  }, [cart]);

  const handleLogOut = () => {
    localStorage.setItem("user", JSON.stringify({}));
    setUser({});
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <nav className={`navbar navbar-light px-2 ${styles.navcolor}`}>
            <a
              className={`navbar-brand text-white ${styles.navtext}`}
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src={DD}
                width="30"
                height="30"
                className="d-inline-block align-top mx-2"
                alt=""
              />
              Dinner Dash
            </a>
            <div className="px-3">
              {Object.keys(user).length ? (
                <>
                  <button
                    className={`btn btn-light mx-2 px-2 ${styles.navbtn}`}
                    onClick={() => {
                      navigate("/view-history");
                    }}
                  >
                    Order History
                  </button>
                  <button
                    className={`btn btn-light mx-2 px-2 ${styles.navbtn}`}
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={`btn btn-light mx-2 px-2 ${styles.navbtn}`}
                    onClick={() => {
                      navigate("/auth");
                    }}
                  >
                    Login
                  </button>
                  <button
                    className={`btn btn-light mx-2 px-2 ${styles.navbtn}`}
                    onClick={() => {
                      navigate("/auth?signup=true");
                    }}
                  >
                    Sign Up
                  </button>
                </>
              )}

              {/* <Badge badgeContent={cartSize} className="text-black" color="error"> */}
              <div
                className="text-white"
                onClick={() => {
                  navigate("/view-cart");
                }}
              >
                View Cart
                {/* <ShoppingCartIcon className="text-white" fontSize="large" /> */}
              </div>
              {/* </Badge> */}
            </div>
          </nav>
        </div>
      </div>
      {/* <div class="row">
        <div class="col-lg-12 col-sm-12 text-center">
          <div class="main-menu-wrap">
            <div class="site-logo">
              <a href="index.html">
                <img
                  src="./src/assets/img/Group 1.png"
                  alt=""
                  style={{ maxHeight: "55px" }}
                />
              </a>
            </div>

            <nav class="main-menu">
              <ul>
                <li class="current-list-item">
                  <a href="#">Home</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="index.html">Static Home</a>
                    </li>
                    <li>
                      <a href="index_2.html">Slider Home</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="404.html">404 page</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Check Out</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="news.html">News</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="news.html">News</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="news.html">News</a>
                    </li>
                    <li>
                      <a href="single-news.html">Single News</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="shop.html">Shop</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="checkout.html">Check Out</a>
                    </li>
                    <li>
                      <a href="single-product.html">Single Product</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div class="header-icons">
                    <a class="shopping-cart" href="cart.html">
                      <i class="fas fa-shopping-cart"></i>
                    </a>
                    <a class="mobile-hide search-bar-icon" href="#">
                      <i class="fas fa-search"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            <a class="mobile-show search-bar-icon" href="#">
              <i class="fas fa-search"></i>
            </a>
            <div class="mobile-menu"></div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Navbar;
