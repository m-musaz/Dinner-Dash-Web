import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import styles from "./History.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

function History() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Load cart from local store if present
    const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromStorage) {
      setCart(cartFromStorage);
    }
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      if (Object.keys(token).length) {
        // console.log("user", user);
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
      const res = await axios.get(`http://localhost:3000/user/get-orders`, {
        headers: { secret_token: user?.token },
      });
      console.log(res);
      setOrders(res.data.orders);
    } catch (err) {
      console.log(err);
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
            <div className={`row py-3`}>
              <div className="col-12 my-5 text-white">
                <h1>Your Order History</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
