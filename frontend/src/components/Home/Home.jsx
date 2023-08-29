import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "./Home.module.css";
import DD from "../../assets/DD_bg_logo_2.png";
import axios from "axios";

const Home = () => {
  const [categories, setCategories] = useState([]);
  async function fetchCategories() {
    try {
      const res = await axios.get(`http://localhost:3000/categories/get-all`);
      console.log(res?.data.data);
      setCategories(res?.data.data);
      res !== null ? setLoading(false) : undefined;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className={`container-fluid p-0 overflow-hidden`}>
        <div className="row ">
          <div className={`col-12`}>
            <Navbar />
            <div className={`row ${styles.landingbg}`}>
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
            <div className={`row ${styles.categoriesbg}`}>
              <div className="col-12 my-5">
                <h1>Browse Categories</h1>
                {categories?.map((category) => (
                  <button
                    className={`btn px-3 mx-4 mt-5 rounded-pill ${styles.categorybtn}`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
