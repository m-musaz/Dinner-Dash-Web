import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "./Home.module.css";
import DD from "../../assets/DD_bg_logo_2.png";
import axios from "axios";
import ItemCard from "../ItemCard";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  async function fetchCategories() {
    try {
      const res = await axios.get(`http://localhost:3000/categories/get-all`);
      setCategories(res?.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchItems() {
    try {
      const res = await axios.get(`http://localhost:3000/items/get-latest`);
      setItems(res?.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  //
  useEffect(() => {
    fetchCategories();
    fetchItems();
    // Load cart from local store if present
    const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      setUser(token);
    } else {
      setUser({});
    }
    if (cartFromStorage) {
      setCart(cartFromStorage);
    }
  }, []);

  // Updating LocalStorage
  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <>
      <div className={`container-fluid p-0 overflow-hidden`}>
        <div className="row ">
          <div className={`col-12`}>
            <Navbar cart={cart} user={user} setUser={setUser} />
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
                    key={category._id}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div className={`row ${styles.newitemsbg}`}>
              <div className="col-12 my-5">
                <h1 className={`${styles.boldheading}`}>
                  Delightful Additions
                </h1>
                <button
                  className={`btn my-5 px-3 rounded-pill ${styles.allitmbtn}`}
                >
                  Browse All Items
                </button>
                <div className="row justify-content-evenly">
                  {items?.map((item) => (
                    <ItemCard
                      itemID={item._id}
                      title={item.title}
                      description={item.description}
                      price={item.price.$numberDecimal}
                      imgUrl={item.photoUrl}
                      key={item._id}
                      cart={cart}
                      setCart={setCart}
                    />
                  ))}
                  {/* {items?.map((item) => (
                    <ItemCard
                      title={item.title}
                      description={item.description}
                      price={item.price.$numberDecimal}
                      imgUrl={item.photoUrl}
                      key={item._id}
                    />
                  ))}
                  {items?.map((item) => (
                    <ItemCard
                      title={item.title}
                      description={item.description}
                      price={item.price.$numberDecimal}
                      imgUrl={item.photoUrl}
                      key={item._id}
                    />
                  ))}
                  {items?.map((item) => (
                    <ItemCard
                      title={item.title}
                      description={item.description}
                      price={item.price.$numberDecimal}
                      imgUrl={item.photoUrl}
                      key={item._id}
                    />
                  ))} */}
                </div>
              </div>
            </div>
            <div className={`row text-white ${styles.categoriesbg}`}>
              <p>
                Indulge in a Culinary Adventure with Dinner Dash © 2023.
                Discover our exquisite menu crafted with passion and care. Join
                us in savoring the flavors that bring people together. Bon
                appétit!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
