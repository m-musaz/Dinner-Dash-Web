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
      <div id="sticker" className={`navClass row px-3  fixed-top`}>
        <div className={`col-lg-12 col-sm-12 text-center`}>
          <div class="main-menu-wrap d-flex align-items-center justify-content-between">
            {/* Mobile Navbar */}
            <div className="dropdown d-flex justify-content-center d-lg-none d-md-flex">
              <button
                className="navbar-toggler btn-outline color-white d-lg-none d-md-flex pt-3 pb-3 justify-content-center"
                style={{ color: "white", fontSize: "xxx-large" }}
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown" // Use data-bs-toggle for Bootstrap 5
                aria-expanded="false"
              >
                <i className="fas fa-bars color-white"></i>
              </button>
              <ul
                className="dropdown-menu bg-dark mb-2 border border-white px-3 text-center"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <div class="py-3 pb-5">
                    <a>
                      <img
                        src="../assets/img/Group 1.png"
                        alt=""
                        style={{ maxHeight: "55px" }}
                        onClick={() => {
                          navigate("/");
                        }}
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    className="text-white py-3"
                    onClick={() => {
                      navigate("/view-cart");
                    }}
                  >
                    <a class="shopping-cart position-relative">
                      <i
                        class="fas fa-shopping-cart"
                        style={{ fontSize: "large" }}
                      >
                        <span
                          class="badge badge-light text-black position-absolute top-2 end-2 mb-3 me-0"
                          style={{
                            top: "-10px",
                            fontSize: "x-small",
                            fontWeight: "bold",
                          }}
                        >
                          {cartSize}
                        </span>
                      </i>
                    </a>
                  </div>
                </li>
                <li>
                  {Object.keys(user).length ? (
                    <>
                      <button
                        className={`btn text-white btn-outline-light mx-2 px-2 my-2 ${styles.navbtn}`}
                        onClick={() => {
                          navigate("/view-history");
                        }}
                      >
                        Order History
                      </button>
                      <button
                        className={`btn text-white btn-outline-light mx-2 px-2 my-2 ${styles.navbtn}`}
                        onClick={handleLogOut}
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className={`btn text-white btn-outline-light mx-2 px-2 my-2 ${styles.navbtn}`}
                        onClick={() => {
                          navigate("/auth");
                        }}
                      >
                        Login
                      </button>
                      <button
                        className={`btn text-white btn-outline-light mx-2 px-2 my-2 ${styles.navbtn}`}
                        onClick={() => {
                          navigate("/auth?signup=true");
                        }}
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </li>
              </ul>
            </div>
            {/* Mobile Navbar End*/}

            {/* --------------------------------------------------------------------------------------------------*/}

            {/* Desktop Navbar */}
            <div class="site-logo d-lg-flex d-sm-none d-none">
              <a>
                <img
                  src="../assets/img/Group 1.png"
                  alt=""
                  style={{ maxHeight: "55px" }}
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </a>
            </div>
            <div class="header-icons d-lg-flex d-sm-none d-none ">
              <div
                className="text-white"
                onClick={() => {
                  navigate("/view-cart");
                }}
              >
                <a class="shopping-cart position-relative">
                  <i
                    class="fas fa-shopping-cart mx-5"
                    style={{ fontSize: "x-large" }}
                  >
                    <span
                      class="badge badge-light text-black position-absolute top-2 end-2 mb-3 me-0 "
                      style={{
                        top: "0px",
                        fontSize: "small",
                        fontWeight: "bolder",
                      }}
                    >
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
            {/* Desktop Navbar */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
