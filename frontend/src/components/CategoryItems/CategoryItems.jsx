import React, { useEffect, useState } from "react";
import styles from "./CategoryItems.module.css";
import Navbar from "../Home/Navbar";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import ItemCard from "../ItemCard";

function CategoryItems() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const location = useLocation();
  const [categoryID, setCategoryID] = useState([]);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  async function fetchCategories() {
    try {
      const res = await axios.get(`http://localhost:3000/categories/get-all`);
      setCategories(res?.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchCategories();
    // Load cart from local store if present
    const urlSearchParams = new URLSearchParams(location.search);
    const idParam = urlSearchParams.get("id");
    if (idParam) {
      setCategoryID([idParam]);
    }
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

  const fetchItems = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/items/category-items`,
        { params: { catIDs: categoryID } }
      );
      console.log(res.data.data);
      setItems(res?.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (categoryID.length) {
      console.log(categoryID);
      fetchItems();
    }
  }, [categoryID]);

  // Updating LocalStorage
  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <div className={`container-fluid p-0 overflow-hidden`}>
      <div className="row ">
        <div className={`col-12`}>
          <Navbar cart={cart} user={user} setUser={setUser} />
          <div className={`row ${styles.categoriesbg}`}>
            <div className="col-12 my-5">
              <h1>Change Category</h1>
              {categories?.map((category) => (
                <button
                  className={`btn px-3 mx-4 mt-5 rounded-pill ${styles.categorybtn}`}
                  key={category._id}
                  onClick={() => {
                    navigate(`/categories?id=${category._id}`);
                    setCategoryID([category._id]);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryItems;
