import React, { useEffect, useState } from "react";
import styles from "./ItemPage.module.css";
import Navbar from "../Home/Navbar";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import handleCart from "../../Util/HandleCart";

function ItemPage() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const location = useLocation();
  const [ItemID, setItemID] = useState([]);
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    handleCart(cart, setCart, ItemID, quantity, item[0]?.title, item[0]?.price);
  };

  useEffect(() => {
    // Load cart from local store if present
    const urlSearchParams = new URLSearchParams(location.search);
    const idParam = urlSearchParams.get("id");
    if (idParam) {
      setItemID([idParam]);
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

  const fetchItem = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/items/get-by-id`, {
        params: { id: ItemID },
      });
      setItem(res?.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (ItemID.length) {
      console.log(ItemID);
      fetchItem();
    }
  }, [ItemID]);

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
          <div
            class="hero-area hero-bg"
            style={{ height: "300px", textAlign: "center" }}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-9 text-center m-auto">
                  <div class="hero-text">
                    <div class="hero-text-tablecell">
                      <p class="subtitle">Freshly Made</p>
                      <h1>{item[0]?.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="single-product mt-150 mb-150">
            <div class="container">
              <div class="row">
                <div class="col-md-5">
                  <div class="single-product-img">
                    <img
                      className={styles.foodimage}
                      src={item[0]?.photoUrl}
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-md-7 text-left">
                  <div class="single-product-content">
                    <h3>{item[0]?.title}</h3>
                    <p class="single-product-pricing">
                      ${item[0]?.price.$numberDecimal}
                    </p>
                    <p>{item[0]?.description}</p>
                    <div class="single-product-form">
                      <form action="index.html">
                        <input type="number" placeholder="0" />
                      </form>
                      <a class="cart-btn" onClick={handleClick}>
                        <i
                          class="fas fa-shopping-cart text-decoration-none"
                          onClick={handleClick}
                        ></i>
                        Add to Cart
                      </a>
                      <p>
                        <strong>Categories: </strong>
                        {item[0]?.categories.map((category) => (
                          <span key={category._id}>{category.name}</span>
                        ))}
                      </p>
                    </div>
                    <h4>Share:</h4>
                    <ul class="product-share">
                      <li>
                        <a href="">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
