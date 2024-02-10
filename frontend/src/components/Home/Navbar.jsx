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
      {/* <div className="row">
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
      {/* <div
                className="text-white"
                onClick={() => {
                  navigate("/view-cart");
                }}
              >
                View Cart */}
      {/* <ShoppingCartIcon className="text-white" fontSize="large" /> */}
      {/* </div> */}
      {/* </Badge> */}
      {/* //   </div> */}
      {/* // </nav>
        // </div> */}
      {/* // </div> */}
      <div id="sticker" className={`navClass row px-3  fixed-top`}>
        <div className={`col-lg-12 col-sm-12 text-center`}>
          <div class="main-menu-wrap d-flex align-items-center justify-content-between">
            <div class="site-logo">
              <a href="index.html">
                <img
                  src="./src/assets/img/Group 1.png"
                  alt=""
                  style={{ maxHeight: "55px" }}
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </a>
            </div>

            <nav class="main-menu ">
              <ul className="text-decoration-none">
                <li class="current-list-item">
                  <a href="#" className="text-decoration-none">
                    Home
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="index.html" className="text-decoration-none">
                        Static Home
                      </a>
                    </li>
                    <li>
                      <a href="index_2.html" className="text-decoration-none">
                        Slider Home
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html" className="text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Pages
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="404.html" className="text-decoration-none">
                        404 page
                      </a>
                    </li>
                    <li>
                      <a href="about.html" className="text-decoration-none">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="cart.html" className="text-decoration-none">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a href="checkout.html" className="text-decoration-none">
                        Check Out
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" className="text-decoration-none">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="news.html" className="text-decoration-none">
                        News
                      </a>
                    </li>
                    <li>
                      <a href="shop.html" className="text-decoration-none">
                        Shop
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="news.html" className="text-decoration-none">
                    {" "}
                    News
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="news.html" className="text-decoration-none">
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="single-news.html"
                        className="text-decoration-none"
                      >
                        Single News
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html" className="text-decoration-none">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="shop.html" className="text-decoration-none">
                    Shop
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="shop.html" className="text-decoration-none">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="checkout.html" className="text-decoration-none">
                        Check Out
                      </a>
                    </li>
                    <li>
                      <a
                        href="single-product.html"
                        className="text-decoration-none"
                      >
                        Single Product
                      </a>
                    </li>
                    <li>
                      <a href="cart.html" className="text-decoration-none">
                        Cart
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div class="header-icons d-flex">
              <div
                className="text-white"
                onClick={() => {
                  navigate("/view-cart");
                }}
              >
                <a class="shopping-cart">
                  <i class="fas fa-shopping-cart">
                    <span class="badge badge-light text-black ">
                      {cartSize}
                    </span>
                  </i>
                </a>
              </div>
              {Object.keys(user).length ? (
                <>
                  <button
                    className={`btn text-white btn-outline-light mx-2 px-2 ${styles.navbtn}`}
                    onClick={() => {
                      navigate("/view-history");
                    }}
                  >
                    Order History
                  </button>
                  <button
                    className={`btn text-white btn-outline-light mx-2 px-2 ${styles.navbtn}`}
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={`btn text-white btn-outline-light mx-2 px-2 ${styles.navbtn}`}
                    onClick={() => {
                      navigate("/auth");
                    }}
                  >
                    Login
                  </button>
                  <button
                    className={`btn text-white btn-outline-light mx-2 px-2 ${styles.navbtn}`}
                    onClick={() => {
                      navigate("/auth?signup=true");
                    }}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
