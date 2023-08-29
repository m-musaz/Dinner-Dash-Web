import React from "react";
import DD from "../../assets/DD_logo_2.png";
import styles from "./Navbar.module.css";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <div className="row">
      <div className="col-12">
        <nav className={`navbar navbar-light px-2 ${styles.navcolor}`}>
          <a className={`navbar-brand text-white ${styles.navtext}`} href="#">
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
            <button className={`btn btn-light mx-2 px-2 ${styles.navbtn}`}>
              Login
            </button>
            <button className={`btn btn-light mx-2 px-2 ${styles.navbtn}`}>
              Sign Up
            </button>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartIcon className="text-white" fontSize="large" />
            </Badge>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
