import React, { useEffect, useState } from "react";
import DD from "../../assets/DD_logo_2.png";
import styles from "./Navbar.module.css";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function Navbar({ cart, user, setUser }) {
  const [cartSize, setCartSize] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      if (Object.keys(token).length) {
        console.log(token, "this is token");
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
              <button
                className={`btn btn-light mx-2 px-2 ${styles.navbtn}`}
                onClick={handleLogOut}
              >
                Log Out
              </button>
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

            <Badge badgeContent={cartSize} className="text-black" color="error">
              <div
                onClick={() => {
                  navigate("/view-cart");
                }}
              >
                <ShoppingCartIcon className="text-white" fontSize="large" />
              </div>
            </Badge>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
