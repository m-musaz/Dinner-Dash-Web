import React from "react";
import Navbar from "./Navbar";
import styles from "./Home.module.css";
import DD from "../../assets/DD_bg_logo_2.png";

const Home = () => {
  return (
    <>
      <div className={`container-fluid p-0 overflow-hidden`}>
        <div className="row ">
          <div className={`col-12`}>
            <Navbar />
            <div className={`row ${styles.rowbg}`}>
              <div className="col-12">
                <img src={DD}></img>
                <h2 className={`${styles.boldtxt}`}>
                  Dilivering Delight,One Bite at a Time
                </h2>
                <button
                  className={`btn btn-light px-3 rounded-pill ${styles.mainbtntxt}`}
                >
                  Discover
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
