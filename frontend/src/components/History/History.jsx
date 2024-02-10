import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import styles from "./History.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import HistoryCard from "./HistoryCard";

function History() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromStorage) {
      setCart(cartFromStorage);
    }
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      if (Object.keys(token).length) {
        setUser(token);
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(user).length) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        `https://dinner-dash-web-backend.vercel.app//user/get-orders`,
        {
          headers: { secret_token: user?.token },
        }
      );
      console.log(res?.data?.orders);
      setOrders(res?.data?.orders);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <>
      <div className={`container-fluid p-0 overflow-hidden `}>
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
                        <p class="subtitle">Thank You</p>
                        <h1>Your Order History</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row py-3`}>
              <div className="col-12 my-5 text-white">
                <h1 className="mb-5">Your Order History</h1>
                {orders.map((order, index) => (
                  <HistoryCard
                    index={index}
                    key={order._id}
                    total={order?.orderTotal?.$numberDecimal}
                    items={order.items}
                    status={order.status}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
